# Nora Gerstenberg — Website

Einzelseiten-Website für **Nora Gerstenberg**, Kosmetikerin in Berlin.

## Tech-Stack

- [Alpine.js 3.x](https://alpinejs.dev/) — reaktives UI (kein Build-Schritt)
- [Tailwind CSS (CDN)](https://tailwindcss.com/) — Utility-CSS
- Vanilla JS — keinerlei weitere Abhängigkeiten

Alles lebt in einer einzigen Datei: **`index.html`**.

## Dateistruktur

```
index.html              ← gesamte Website (HTML, CSS, JS inline)
logo.svg                ← Logo mit Schutzzone (Whitespace)
logo.original.svg       ← Logo-Original ohne Schutzzone
images/                 ← Fotos (Behandlungsplatz, Portrait, Studio)
.claude/
  CLAUDE.md             ← KI-Arbeitsanweisungen & Projektkonventionen
  CONTENT.md            ← Alle Inhalte, Texte, Preise, Kontaktdaten
  STYLEGUIDE.md         ← Brand Identity, Farben, Typografie, Bildsprache
  material/             ← Quelldokumente (Preisliste, Behandlungsvereinbarung PDF)
```

## Dokumentation

| Datei | Inhalt |
|---|---|
| [`.claude/CLAUDE.md`](.claude/CLAUDE.md) | Architektur, Komponenten, Konventionen für KI-gestützte Bearbeitung |
| [`.claude/CONTENT.md`](.claude/CONTENT.md) | Leistungen, Preise, Kontakt, „Über mich"-Texte |
| [`.claude/STYLEGUIDE.md`](.claude/STYLEGUIDE.md) | Farbpalette, Typografie, Bildsprache, Logo-Regeln |

## Features

- Responsive (Mobile first)
- Scroll-Animationen via `x-intersect`
- Interaktives FAQ-Accordion
- Behandlungsvereinbarung Fruchtsäure als Modal (inkl. Druckansicht, A4-optimiert)
- WhatsApp-Direktlink für Terminbuchung
- Logo und Footer integriert

## Lokale Entwicklung

Keine Installation nötig. Datei direkt im Browser öffnen:

```bash
open index.html
```

Oder mit einem lokalen Dev-Server (z. B. für korrekte Pfade bei `/logo.svg`):

```bash
npx serve .
# oder
python3 -m http.server
```