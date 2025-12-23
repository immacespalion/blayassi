(() => {
  // --- Résolution robuste des URLs ---
  const me =
    document.currentScript ||
    document.querySelector('script[src$="javascripts/editor-module.js"]') ||
    document.querySelector('script[src$="editor-module.js"]');

  const MODULE_URL =
    me?.src || new URL("javascripts/editor-module.js", document.baseURI).href;

  const BUNDLE_URL = new URL("./codemirror-bundle.js", MODULE_URL).href;

  // --- Helpers ---
  const DEFAULT_HTML = `<!-- Modifie-moi 🙂 -->
<h1>Hello 👋</h1>
<p>Du <strong>HTML</strong> ici.</p>`;

  const DEFAULT_CSS = `/* Modifie-moi 🙂 */
body{font-family:Arial; padding:16px;}
h1{color:teal;}`;

  function decodeB64Utf8(b64) {
    if (!b64) return "";
    if (typeof TextDecoder === "undefined") {
      return decodeURIComponent(escape(atob(b64)));
    }
    const bytes = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
    return new TextDecoder("utf-8").decode(bytes);
  }

  function wrapSrcdoc(htmlCode, cssCode, block) {
    const s = (htmlCode ?? "").trim();
    const css = (cssCode ?? "").trim();

    const rawBase = (block?.dataset?.baseHref ?? "").trim();
    const baseHref = rawBase ? new URL(rawBase, document.baseURI).href : "about:srcdoc";
    const baseTag = `<base href="${baseHref}">`;

    const cssTag = css ? `<style>\n${css}\n</style>` : "";

    const looksLikeFullPage = /<html[\s>]|<body[\s>]|<!doctype/i.test(s);

    if (looksLikeFullPage) {
      // Injecte <base> + <style> dans <head> si possible
      if (/<head[\s>]/i.test(s)) {
        return s.replace(/<head[\s>]*>/i, (m) => `${m}\n${baseTag}\n${cssTag}\n`);
      }
      // Sinon on préfixe (moins parfait mais fonctionne)
      return `${baseTag}\n${cssTag}\n${s}`;
    }

    return `<!doctype html>
<html>
<head>
<meta charset="utf-8">
${baseTag}
${cssTag}
</head>
<body>
${s}
</body>
</html>`;
  }

  // --- Chargement CodeMirror (bundle) ---
  let CM_PROMISE = null;
  async function loadCM() {
    if (!CM_PROMISE) {
      CM_PROMISE = import(BUNDLE_URL);
    }
    return CM_PROMISE;
  }

  // --- Init: HTML seul (compat avec ton macro actuel) ---
  async function initHtmlOnly(block, index, cm) {
    if (block.dataset.initialized === "1") return;
    block.dataset.initialized = "1";

    const editorHost = block.querySelector(".editor");
    const frame = block.querySelector("iframe.preview");
    if (!editorHost || !frame) return;

    const { EditorView, basicSetup, EditorState, html: htmlLang } = cm;

    const storageKey =
      block.dataset.storageKey || `html_editor:${location.pathname}:${index}`;

    // Exemple HTML (base64 en attribut)
    let exampleText = DEFAULT_HTML;
    if (block.dataset.exampleB64) {
      exampleText = decodeB64Utf8(block.dataset.exampleB64) || DEFAULT_HTML;
    }

    // startDoc: exemple (tu peux remettre localStorage si tu veux, mais je reste simple/stable)
    let startDoc = exampleText;

    // vieux bug éventuel
    if (startDoc.includes("&#10;")) startDoc = startDoc.replaceAll("&#10;", "\n");

    const render = (view) => {
      const code = view.state.doc.toString();
      frame.srcdoc = wrapSrcdoc(code, "", block);
      try { localStorage.setItem(storageKey, code); } catch {}
    };

    let debounce = null;

    const view = new EditorView({
      parent: editorHost,
      state: EditorState.create({
        doc: startDoc,
        extensions: [
          basicSetup,
          htmlLang(),
          EditorView.updateListener.of((u) => {
            if (!u.docChanged) return;
            clearTimeout(debounce);
            debounce = setTimeout(() => render(view), 120);
          }),
        ],
      }),
    });

    block.querySelector('[data-action="run"]')?.addEventListener("click", () => render(view));
    block.querySelector('[data-action="clear"]')?.addEventListener("click", () => {
      view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: "" } });
      render(view);
    });
    block.querySelector('[data-action="example"]')?.addEventListener("click", () => {
      view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: exampleText } });
      render(view);
    });

    render(view);
  }

  // --- Init: HTML + CSS (nouvelle macro) ---
  async function initHtmlCss(block, index, cm) {
    if (block.dataset.initialized === "1") return;
    block.dataset.initialized = "1";

    // Attendus dans le HTML de la macro :
    // - .editor-html
    // - .editor-css
    // - iframe.preview
    const hostHtml = block.querySelector(".editor-html");
    const hostCss = block.querySelector(".editor-css");
    const frame = block.querySelector("iframe.preview");
    if (!hostHtml || !hostCss || !frame) return;

    const { EditorView, basicSetup, EditorState, html: htmlLang, css: cssLang } = cm;

    const baseKey =
      block.dataset.storageKey || `htmlcss_editor:${location.pathname}:${index}`;
    const storageHtml = `${baseKey}:html`;
    const storageCss = `${baseKey}:css`;

    // Exemples
    let exampleHtml = DEFAULT_HTML;
    let exampleCss = DEFAULT_CSS;

    if (block.dataset.htmlB64) exampleHtml = decodeB64Utf8(block.dataset.htmlB64) || DEFAULT_HTML;
    if (block.dataset.cssB64) exampleCss = decodeB64Utf8(block.dataset.cssB64) || DEFAULT_CSS;

    // start
    let startHtml = exampleHtml;
    let startCss = exampleCss;

    if (startHtml.includes("&#10;")) startHtml = startHtml.replaceAll("&#10;", "\n");
    if (startCss.includes("&#10;")) startCss = startCss.replaceAll("&#10;", "\n");

    const render = (viewHtml, viewCss) => {
      const htmlCode = viewHtml.state.doc.toString();
      const cssCode = viewCss.state.doc.toString();
      frame.srcdoc = wrapSrcdoc(htmlCode, cssCode, block);
      try {
        localStorage.setItem(storageHtml, htmlCode);
        localStorage.setItem(storageCss, cssCode);
      } catch {}
    };

    let debounce = null;

    const viewHtml = new EditorView({
      parent: hostHtml,
      state: EditorState.create({
        doc: startHtml,
        extensions: [
          basicSetup,
          htmlLang(),
          EditorView.updateListener.of((u) => {
            if (!u.docChanged) return;
            clearTimeout(debounce);
            debounce = setTimeout(() => render(viewHtml, viewCss), 120);
          }),
        ],
      }),
    });

    const viewCss = new EditorView({
      parent: hostCss,
      state: EditorState.create({
        doc: startCss,
        extensions: [
          basicSetup,
          cssLang(),
          EditorView.updateListener.of((u) => {
            if (!u.docChanged) return;
            clearTimeout(debounce);
            debounce = setTimeout(() => render(viewHtml, viewCss), 120);
          }),
        ],
      }),
    });

    block.querySelector('[data-action="run"]')?.addEventListener("click", () => render(viewHtml, viewCss));
    block.querySelector('[data-action="clear"]')?.addEventListener("click", () => {
      viewHtml.dispatch({ changes: { from: 0, to: viewHtml.state.doc.length, insert: "" } });
      viewCss.dispatch({ changes: { from: 0, to: viewCss.state.doc.length, insert: "" } });
      render(viewHtml, viewCss);
    });
    block.querySelector('[data-action="example"]')?.addEventListener("click", () => {
      viewHtml.dispatch({ changes: { from: 0, to: viewHtml.state.doc.length, insert: exampleHtml } });
      viewCss.dispatch({ changes: { from: 0, to: viewCss.state.doc.length, insert: exampleCss } });
      render(viewHtml, viewCss);
    });

    render(viewHtml, viewCss);
  }

  // --- Boot global ---
  async function boot() {
    const cm = await loadCM();

    // HTML seul
    const htmlBlocks = document.querySelectorAll("[data-html-playground]");
    let i = 0;
    for (const b of htmlBlocks) await initHtmlOnly(b, i++, cm);

    // HTML + CSS
    const htmlCssBlocks = document.querySelectorAll("[data-htmlcss-playground]");
    let j = 0;
    for (const b of htmlCssBlocks) await initHtmlCss(b, j++, cm);
  }

  // Material instant loading + fallback
  if (window.document$?.subscribe) window.document$.subscribe(boot);
  else window.addEventListener("DOMContentLoaded", boot);

  boot();

  // (optionnel) debug
  window.bootEditors = boot;
})();