# CV snapshot — Obystech ended October 2025

Saved before updating Obystech to **Present** and reframing the role as AI consulting (enterprise / Odoo / ML / DL / NLP).

## What this folder contains

- All `hamza_bouktitiya_cv_*.tex` sources as they were
- `index.html.bak` — portfolio page with the previous Obystech block

## How to restore

From the project root (`MYWEBSITE`):

```powershell
Copy-Item cv-source\versions\v2025-10-obystech-ended\hamza_bouktitiya_cv_*.tex cv-source\ -Force
Copy-Item cv-source\versions\v2025-10-obystech-ended\index.html.bak index.html -Force
```

Then recompile the LaTeX CVs if you need PDFs again (see `docs/CV-COMPILATION-GUIDE.md`).
