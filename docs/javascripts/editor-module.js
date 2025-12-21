import { EditorView, basicSetup } from "https://esm.sh/codemirror@6.0.2";
import { EditorState } from "https://esm.sh/@codemirror/state@6.5.2";
import { html } from "https://esm.sh/@codemirror/lang-html@6.4.11";

const DEFAULT_EXAMPLE = `<!-- Modifie-moi 🙂 -->
<h1>Hello 👋</h1>
<p>Du <strong>HTML</strong> ici.</p>
<style>
  body{font-family:Arial; padding:16px;}
  h1{color:teal;}
</style>`;

function wrapIfNeeded(input, block) {
  const s = input.trim();

  const rawBase = (block.dataset.baseHref ?? "").trim();

  // ✅ Si on a un base_href explicite => on l'utilise (pour images, etc.)
  // ✅ Sinon => base neutre pour que les ancres #... restent intra-iframe
  const baseHref = rawBase
    ? new URL(rawBase, document.baseURI).href
    : "about:srcdoc";

  const baseTag = `<base href="${baseHref}">`;

  const looksLikeFullPage = /<html[\s>]|<body[\s>]|<!doctype/i.test(s);
  if (looksLikeFullPage) {
    if (/<head[\s>]/i.test(s)) {
      return s.replace(/<head[\s>]*>/i, (m) => `${m}\n${baseTag}\n`);
    }
    return `${baseTag}\n${s}`;
  }

  return `<!doctype html><html><head><meta charset="utf-8">\n${baseTag}\n</head><body>${s}</body></html>`;
}

function decodeB64Utf8(b64) {
  // fallback si TextDecoder pas dispo (rare)
  if (typeof TextDecoder === "undefined") {
    return decodeURIComponent(escape(atob(b64)));
  }
  const bytes = Uint8Array.from(atob(b64), c => c.charCodeAt(0));
  return new TextDecoder("utf-8").decode(bytes);
}

function initPlayground(block, index) {
  if (block.dataset.initialized === "1") return;
  block.dataset.initialized = "1";

  const editorHost = block.querySelector(".editor");
  const frame = block.querySelector("iframe.preview");

  if (!editorHost || !frame) return;

  const storageKey =
    block.dataset.storageKey || `html_editor:${location.pathname}:${index}`;

  // 1) Exemple : priorité au data-example-b64 (nouvelle méthode)
  let exampleText = DEFAULT_EXAMPLE;
  if (block.dataset.exampleB64) {
    exampleText = decodeB64Utf8(block.dataset.exampleB64);
  } else {
    // 2) fallback ancien système textarea
    const source = block.querySelector("textarea.source");
    if (source) exampleText = source.value;
  }

  // 3) StartDoc : localStorage prioritaire
  let startDoc = exampleText;

  // 4) Répare d'anciennes valeurs stockées contenant &#10;
  if (startDoc.includes("&#10;")) {
    startDoc = startDoc.replaceAll("&#10;", "\n");
    localStorage.setItem(storageKey, startDoc);
  }

  const render = (view) => {
    const code = view.state.doc.toString();
    frame.srcdoc = wrapIfNeeded(code, block);
    localStorage.setItem(storageKey, code);
  };

  let debounce = null;

  const view = new EditorView({
    parent: editorHost,
    state: EditorState.create({
      doc: startDoc,
      extensions: [
        basicSetup,
        html(),
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

function boot() {
  document
    .querySelectorAll("[data-html-playground]")
    .forEach((block, i) => initPlayground(block, i));
}

// Matériel : important avec l’instant loading  [oai_citation:8‡squidfunk.github.io](https://squidfunk.github.io/mkdocs-material/customization/?utm_source=chatgpt.com)
if (window.document$?.subscribe) {
  window.document$.subscribe(boot);
} else {
  window.addEventListener("DOMContentLoaded", boot);
  boot();
}