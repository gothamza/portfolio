# CV LaTeX Compilation Guide

## Files Created
- `hamza_bouktitiya_cv_fr.tex` - French version
- `hamza_bouktitiya_cv_en.tex` - English version

## Prerequisites

You need a LaTeX distribution installed:
- **Windows**: [MiKTeX](https://miktex.org/download) or [TeX Live](https://www.tug.org/texlive/)
- **Mac**: [MacTeX](https://www.tug.org/mactex/)
- **Linux**: `sudo apt-get install texlive-full` (or equivalent)

## Required LaTeX Packages

The CVs use these packages (usually included in full LaTeX distributions):
- `article` (standard)
- `inputenc`, `fontenc` (encoding)
- `babel` (language support)
- `geometry` (margins)
- `enumitem` (list formatting)
- `titlesec` (section formatting)
- `xcolor` (colors)
- `fontawesome5` (icons)
- `hyperref` (hyperlinks)

If you get package errors, install them:
- **MiKTeX**: Will prompt to install missing packages automatically
- **TeX Live**: `sudo tlmgr install <package-name>`

## Compilation Instructions

### Method 1: Using pdflatex (Recommended)

1. Open terminal/command prompt in the project directory
2. Compile the French version:
   ```bash
   pdflatex hamza_bouktitiya_cv_fr.tex
   ```
3. Compile the English version:
   ```bash
   pdflatex hamza_bouktitiya_cv_en.tex
   ```

**Note**: You may need to run `pdflatex` twice to resolve all references and hyperlinks.

### Method 2: Using LaTeX IDE

1. Open the `.tex` file in:
   - **TeXstudio** (Windows/Mac/Linux)
   - **Overleaf** (online - https://www.overleaf.com)
   - **TeXworks** (Windows/Mac/Linux)
   - **VS Code** with LaTeX Workshop extension

2. Click "Compile" or press the build shortcut (usually F5 or Ctrl+Alt+B)

### Method 3: Online (Easiest - No Installation)

1. Go to [Overleaf](https://www.overleaf.com)
2. Create a new project
3. Upload the `.tex` file
4. Click "Recompile"

## Output

After compilation, you'll get:
- `hamza_bouktitiya_cv_fr.pdf`
- `hamza_bouktitiya_cv_en.pdf`

## Customization

### Adjusting to Fit One Page

If the CV doesn't fit on one page, you can:

1. **Reduce margins** (in the `.tex` file):
   ```latex
   \usepackage[margin=0.6in]{geometry}  % Change 0.7in to 0.6in or smaller
   ```

2. **Reduce font size**:
   ```latex
   \documentclass[9pt,a4paper]{article}  % Change 10pt to 9pt
   ```

3. **Reduce spacing**:
   ```latex
   \setlist[itemize]{leftmargin=*,topsep=1pt,itemsep=0.5pt,parsep=0pt}
   ```

4. **Shorten descriptions** in the experience/projects sections

### Changing Colors

Edit the color definitions:
```latex
\definecolor{primary}{RGB}{99, 102, 241}  % Change RGB values
\definecolor{secondary}{RGB}{139, 92, 246}
```

## Troubleshooting

### "fontawesome5.sty not found"
- Install: `sudo tlmgr install fontawesome5` (TeX Live)
- Or use `fontawesome` package instead (older version)

### "File ended while scanning use of \@xverbatim"
- Usually means a missing closing brace `}` or bracket `]`
- Check the `.tex` file for syntax errors

### "Overfull \hbox" warnings
- These are usually harmless (text slightly extends margins)
- To fix: shorten some text or reduce font size

### PDF not generating
- Make sure you have write permissions in the directory
- Check that LaTeX distribution is properly installed
- Try compiling with `-interaction=nonstopmode` flag:
  ```bash
  pdflatex -interaction=nonstopmode hamza_bouktitiya_cv_fr.tex
  ```

## Notes

- The CVs are formatted in **Canadian style** (reverse chronological order, compact layout)
- Both versions are designed to fit on **one page**
- Icons use Font Awesome 5 (phone, email, location, LinkedIn, GitHub)
- Hyperlinks are clickable in the PDF
- The layout is optimized for A4 paper size

