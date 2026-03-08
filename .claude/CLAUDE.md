# CLAUDE.md – Projekt: Nora Gerstenberg · Kosmetikerin

## Projektübersicht

Einzelseiten-Website (HTML/CSS/JS) für Nora Gerstenberg, Kosmetikerin in Berlin.
Technologie-Stack: **Alpine.js 3.x · Tailwind CSS (CDN) · Vanilla JS**
Keine Build-Pipeline, keine Frameworks – alles in einer einzigen `index.html`.

---
## Über Nora

Nora lebt in Berlin und möchte Menschen zu einem besseren Wohlbefinden verhelfen.


## Brand Identity

Ist in der `STYLEGUIDE.md` umfassend dokumentiert.

### Persönlichkeit
Ruhig · sanft · gepflegt · feminin · hochwertig · vertrauensvoll · natürlich · zeitlos.
Die Marke soll nicht laut wirken, sondern souverän, warm und einladend.

### Farbpalette (immer diese Werte verwenden)
| Variable        | HEX       | Einsatz                              |
|-----------------|-----------|--------------------------------------|
| ivory           | `#FEF9F5` | Haupt-Hintergründe                   |
| fog             | `#F7F1EC` | Karten, Sektionen                    |
| creme           | `#EAE1D8` | Flächen, Abstufungen, Trennlinien    |
| sand            | `#B7AAA0` | Akzente, Rahmen, Subheadlines        |
| taupe           | `#84776E` | Hauptschrift, Logo, primäre UI-Farbe |
| stone           | `#6F645D` | Headlines, starker Kontrast, Footer  |

### Typografie
- **Headline:** Cormorant Garamond (Google Fonts) – Serif, elegant, leicht
- **Fließtext / UI:** Montserrat (Google Fonts) – Sans-Serif, klar, dezent
- Zeilenabstand großzügig, niemals zu fett, Großbuchstaben nur sparsam

### Designregeln
- Viel Weißraum – wenn es laut wirkt, ist es zu viel
- Keine harten Schatten, keine bunten Akzente, keine grellen Farben
- Borders immer `1px solid #EAE1D8` oder `#B7AAA0`
- Button-Stil: Ghost (border + transparent BG) oder Filled (taupe BG + ivory Text)
- Icons: nur schlanke Stroke-SVGs, `stroke-width="1"` bis `1.5`, Farbe sand/taupe

---

## Datei-Struktur
```
index.html          ← einzige Datei, alles inline (CSS, JS, Base64-Logo)
CLAUDE.md           ← diese Datei
images/             ← hier liegen die Bilder der Webseite
logo.png            ← das Logo der Webseite
```

Das Logo ist als Base64-JPEG in den `<script>`-Block eingebettet und wird per JS
in alle `<img id="heroLogo">` und `<img id="footerLogo">` Elemente injiziert.

---

## Inhalt & Daten

Inhalte und Daten sind in der `CONTENT.md` niedergeschrieben.

---

## Alpine.js Architektur

Alle Daten und State leben in `function site()` (x-data auf `<html>`).

### State-Variablen
```js
scrolled: false        // Nav-Styling beim Scrollen
mobileOpen: false      // Mobiles Menü
modalOpen: false       // Behandlungsvereinbarung Modal
activeTab: null        // FAQ Accordion (Index oder null)
navLinks: [...]        // Navigationspunkte
faqs: [...]            // FAQ-Einträge { q, a }
```

### Wichtige Alpine-Direktiven im Projekt
- `x-intersect` (Plugin) → `.fade-up.visible` für Scroll-Animationen
- `x-show` + `x-transition` → Modal und mobiles Menü
- `x-cloak` → verhindert FOUC bei `x-show`-Elementen
- `@keydown.escape.window` → Modal per ESC schließen

---

## CSS-Konventionen

Eigene Klassen (im `<style>`-Block, kein Tailwind-Plugin nötig):
- `.fade-up` / `.fade-up.visible` – Scroll-Einblend-Animation
- `.hero-title`, `.hero-sub`, `.hero-cta`, `.hero-logo` – Hero-Keyframe-Animationen
- `.btn-primary` – Ghost-Button
- `.btn-filled` – Gefüllter Button
- `.service-card` – Hover: translateY(-6px) + Box-Shadow
- `.price-row` – Hover: dezenter Creme-Hintergrund
- `.accordion-body` / `.accordion-body.open` – FAQ Expand/Collapse
- `.heading-line` – Heading mit kurzer Linie darunter
- `.ornament` – Text mit Linien links/rechts
- `.nav-link` – Underline-Hover-Effekt
- `.ring-rotate` / `.ring-rotate-rev` – rotierende Dekorationsringe im Hero
- `.logo-crop` – object-fit: cover + object-position für Logo-Beschnitt

---

## Änderungen vornehmen

### Neue Leistung hinzufügen
1. Neue `.service-card` in `#leistungen` ergänzen
2. Entsprechende Zeile in `#preise` (Preisliste) hinzufügen
3. Evtl. FAQ-Eintrag in `faqs: [...]` ergänzen

### Farbe/Stil anpassen
- Tailwind-Farben sind in `tailwind.config` am Anfang definiert
- Eigene Farben immer dort und nicht inline als Hex-Wert verwenden
- Ausnahme: `style="..."` für komplexere Werte (Verläufe, Borders)

### Logo austauschen
```js
// In init() – src durch neue Base64-Daten ersetzen
const logo = "/logo.png"
document.getElementById('heroLogo').src = logo;
document.getElementById('footerLogo').src = logo;
```

### FAQ erweitern
```js
faqs: [
  { q: 'Frage?', a: 'Antwort.' },
  // ...
]
```

---

## Qualitätsprinzipien

- **Mobile first:** Alle Layouts beginnen single-column, ab `md:` zweispaltig
- **Keine externen Abhängigkeiten** außer Google Fonts + Alpine.js + Tailwind CDN
- **Kein localStorage / sessionStorage** – kein persistenter State nötig
- **Print-freundlich:** Das Modal hat einen Drucken-Button (window.print())
- **Accessibility:** `aria-label` auf Icons und Buttons, semantisches HTML, `alt`-Attribute
- **Performance:** Logo Base64 eingebettet, keine externen Bilder, CSS-only Animationen wo möglich

---

## Tone of Voice (für Text-Ergänzungen)

- Ruhig, einladend, nahbar – niemals marktschreierisch
- Kurze Sätze, großzügige Abstände
- Bevorzugte Begriffe: Ruhe · Pflege · Ausstrahlung · Natürlichkeit · Entspannung · Balance
- Vermeiden: aggressive Werbesprache, leere Luxusphrasen, kühle Distanz