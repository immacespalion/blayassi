from pathlib import Path
from markupsafe import Markup, escape
import base64

def define_env(env):
    docs_dir = Path(env.conf["docs_dir"]).resolve()

    @env.macro
    def html_playground(key="", example=None, example_file=None):
        default_example = """<!-- Modifie-moi 🙂 -->
<h1>Hello 👋</h1>
<p>Du <strong>HTML</strong> ici.</p>"""

        if example_file:
            p = (docs_dir / example_file).resolve()
            if not str(p).startswith(str(docs_dir)):
                raise ValueError("example_file doit être un chemin sous docs/ (sans ../)")
            example = p.read_text(encoding="utf-8")

        code = example if example is not None else default_example

        # base64 utf-8 (safe en attribut)
        b64 = base64.b64encode(code.encode("utf-8")).decode("ascii")

        storage_attr = f' data-storage-key="{escape(key)}"' if key else ""

        # IMPORTANT: on renvoie une seule ligne (safe pour les admonitions)
        html = (
            f'<div class="grid" data-html-playground{storage_attr} data-example-b64="{b64}">'
              f'<div class="panel"><div class="label">Code HTML</div><div class="editor"></div>'
              f'<div class="toolbar">'
                f'<button class="btn" data-action="run"><i class="fa-solid fa-play"></i> Executer</button>'
                f'<button class="btn" data-action="clear"><i class="fa-solid fa-trash"></i> Supprimer</button>'
                f'<button class="btn" data-action="example"><i class="fa-solid fa-arrow-rotate-right"></i> Réinitialiser</button>'
              f'</div></div>'
              f'<div class="panel"><div class="label">Rendu</div><iframe class="preview" sandbox></iframe></div>'
            f'</div>'
        )
        return Markup(html)