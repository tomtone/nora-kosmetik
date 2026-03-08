# Fonts — Nora Gerstenberg Website

---

## Externe Fonts (Google Fonts CDN)

Eingebunden via `<link>` im `<head>`:

```
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap
```

---

### Cormorant Garamond

| Stil      | Gewicht | Klasse / Einsatz |
|-----------|---------|------------------|
| Regular   | 300     | – (geladen, Reserve) |
| Regular   | 400     | Basisschrift Serif |
| Regular   | 500     | – (geladen, Reserve) |
| Regular   | 600     | – (geladen, Reserve) |
| Italic    | 300     | `<em>` in Hero-Titel |
| Italic    | 400     | Blockquotes, Zitate |

**Tailwind-Klasse:** `font-serif`
**Tailwind-Config:** `serif: ['Cormorant Garamond', 'Georgia', 'serif']`

**Einsatzorte:**
- Hero-Headline (`h1`) — `font-serif text-5xl … text-8xl`
- Sektions-Headlines (`h2`) — `font-serif text-4xl … text-5xl`
- Service-Card-Titel (`h3`) — `font-serif text-2xl`
- Preise — `font-serif text-2xl … text-3xl`
- Blockquote / Intro-Zitat — `font-serif text-2xl … text-4xl`
- „Über mich" Einstiegszitat — `font-serif text-2xl … text-3xl italic`
- Signature-Quote Footer — `font-serif text-base italic`
- Modal: Sektionsüberschriften — `font-serif text-lg`
- Modal: Behandlungstitel — `font-serif text-2xl`

---

### Montserrat

| Stil    | Gewicht | Tailwind-Klasse       | Einsatz |
|---------|---------|-----------------------|---------|
| Regular | 300     | – (geladen, Reserve)  | – |
| Regular | 400     | `font-normal` (default) | Fließtext, Labels |
| Regular | 500     | `font-medium`         | Buttons, starke Labels |
| Regular | 600     | – (geladen, Reserve)  | – |

**Tailwind-Klasse:** `font-sans`
**Tailwind-Config:** `sans: ['Montserrat', 'sans-serif']`
**Body-Default:** `font-family: 'Montserrat', sans-serif` (gesetzt auf `<body>`)

**Einsatzorte:**
- Navigation (Links, Burger-Menü) — `font-sans text-xs tracking-widest uppercase`
- Subheadlines / Eyebrow-Labels — `font-sans text-xs tracking-widest uppercase text-sand`
- Fließtext / Beschreibungen — `font-sans text-sm text-taupe/80`
- Buttons `.btn-primary` / `.btn-filled` — `font-sans font-medium` (weight 500, via CSS)
- Preisliste — `font-sans text-sm`
- FAQ-Accordion — `font-sans text-sm / text-xs`
- Kontakt-Labels — `font-sans text-xs tracking-widest uppercase`
- Footer — `font-sans text-xs / text-[10px]`
- Modal: Eingabefelder, Body-Text — `font-sans text-sm`

---

## Interne / Fallback-Fonts (Print-Ansicht)

Nur im `@media print`-Block und im Print-Header des Modals aktiv.
Keine Einbindung nötig — Systemschriften.

### Arial / Helvetica (System)

| Gewicht | Einsatz |
|---------|---------|
| 400 (normal) | Fließtext, Sektionsüberschriften, Tabellenlabels im Druckbild |
| 700 (bold) | `NORA GERSTENBERG`-Zeile im Druckkopf, Dokumententitel, Sektionsüberschriften (`.print-section-title`) |

**Deklaration:** `font-family: Arial, Helvetica, sans-serif`

**Einsatzorte (nur `@media print`):**
- Druckkopf: Name, Titel, Telefonnummer
- Alle `.print-section-title`-Elemente
- `.modal-body *` — genereller Print-Override
- Buttons `.btn-primary` / `.btn-filled` (CSS-Definition)

---

## Übersicht

| Font               | Typ      | Gewichte        | Kontext        |
|--------------------|----------|-----------------|----------------|
| Cormorant Garamond | Extern   | 300–600, Italic | Headlines, Zitate, Preise |
| Montserrat         | Extern   | 300–600         | UI, Fließtext, Navigation |
| Arial / Helvetica  | System   | 400, 700        | Print-Ansicht (Modal) |
| Georgia            | System   | Fallback        | Fallback für Cormorant Garamond |