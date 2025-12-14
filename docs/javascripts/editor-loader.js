(() => {
  if (window.__htmlPlaygroundModuleLoaded) return;
  window.__htmlPlaygroundModuleLoaded = true;

  const base = new URL(document.currentScript.src);
  const moduleUrl = new URL("editor-module.js", base);

  const s = document.createElement("script");
  s.type = "module";
  s.src = moduleUrl.href;
  document.head.appendChild(s);
})();