# Anweisung zur Integration eines Störers mit externem Partner-Shop-Link

## Ziel

Auf der Website `https://nora-kosmetik-production.up.railway.app/` soll ein sichtbarer, aber stilistisch passender Störer integriert werden, der Besucher zu folgendem externen Registrierungslink weiterleitet:

`https://cnc-direct.de/account/login/?registerCode=1178246`

Über diesen Link können sich Besucher registrieren und anschließend Kosmetikartikel kaufen.  
Wichtig ist dabei: Es handelt sich **nicht** um den Shop der Website-Betreiberin, sondern um einen **externen Partner-Shop / Affiliate-Link**.

---

## Zweck des Störers

Der Störer soll:

- Besucher dezent auf die Möglichkeit hinweisen, Pflegeprodukte online zu bestellen
- auf den externen Registrierungslink weiterleiten
- transparent kommunizieren, dass es sich um einen Partner-Shop handelt
- optisch zur bestehenden Website passen und nicht wie Werbung von außen wirken

---

## Wichtige inhaltliche Vorgaben

Bitte **keine irreführende Shop-Kommunikation** verwenden.

Es darf **nicht** so wirken, als wäre der verlinkte Shop direkt Teil der Website.  
Die Formulierungen müssen klar machen, dass es sich um einen **externen Partner-Shop** handelt.

Geeignete Begriffe sind zum Beispiel:

- Partner-Shop
- externer Shop
- empfohlene Pflegeprodukte
- Produkte für zuhause
- online nachbestellen

Ungeeignet wären Formulierungen wie:

- „Unser Shop“
- „Jetzt im Shop kaufen“
- „Direkt bei uns bestellen“

---

## Empfohlene Platzierung

Der Störer soll als **Floating-Element unten rechts** auf der Website eingebunden werden.

### Warum diese Position?
- dauerhaft sichtbar
- mobil und desktop gut nutzbar
- stört die Ästhetik der Seite weniger als ein Banner im Header
- passt besser zu einem eleganten, ruhigen Gesamtauftritt

---

## Empfohlener Textinhalt

### Variante, die bevorzugt umgesetzt werden soll

**Eyebrow / Hinweis:**  
`Partner-Shop`

**Headline:**  
`Pflegeprodukte für zuhause`

**Text:**  
`Registrieren und empfohlene Kosmetikprodukte bequem online bestellen.`

**Button:**  
`Jetzt registrieren`

Optional klein darunter oder im Textkontext:  
`Externer Partner-Shop`

---

## Technische Anforderungen

### Linkziel
Der Störer muss auf folgenden Link verweisen:

`https://cnc-direct.de/account/login/?registerCode=1178246`

### Verhalten
- Link soll in einem **neuen Tab** geöffnet werden
- `rel="noopener noreferrer sponsored"` verwenden
- klickbarer Bereich soll sauber auf den gesamten Störer oder mindestens klar auf den Button gelegt werden

### Responsiveness
- muss auf Desktop und Mobilgeräten sauber funktionieren
- auf kleinen Screens darf der Störer nicht zu dominant wirken
- Abstände und Schriftgrößen mobil anpassen

### Schließen-Funktion
Es soll ein **Schließen-Button** integriert werden.

Wenn ein Nutzer den Störer schließt:
- Störer ausblenden
- Status in `localStorage` speichern
- Störer für **7 Tage** nicht erneut anzeigen

---

## Designvorgaben

Der Störer soll:

- hochwertig
- ruhig
- feminin / elegant
- modern
- nicht aufdringlich

wirken.

### Gestalterische Richtung
- helle Fläche
- sanfte Schatten
- abgerundete Ecken
- dezente Typografie
- warmer Button-Farbton, passend zur bestehenden Seite
- keine schrillen Farben
- keine Rabattoptik
- keine blinkenden oder aggressiven Animationen

### Was vermieden werden soll
- kein greller Werbebanner-Look
- keine Pop-up-Anmutung wie auf Billigshops
- keine Formulierungen mit zu viel Verkaufsdruck
- keine heroische Platzierung ganz oben auf der Startseite

---

## Umsetzungslogik

Bitte wie folgt umsetzen:

1. Floating-Container unten rechts einbauen
2. Close-Button ergänzen
3. Inhalt mit Hinweis auf Partner-Shop versehen
4. CTA auf externen Registrierungslink setzen
5. neuen Tab verwenden
6. Anzeige per `localStorage` nach dem Schließen für 7 Tage unterdrücken
7. mobil optimieren

---

## Beispiel-Markup

```html
<div class="affiliate-stoerer-wrap" id="affiliateStoerer">
  <button class="affiliate-stoerer__close" id="affiliateStoererClose" aria-label="Hinweis schließen">
    ×
  </button>

  <a
    href="https://cnc-direct.de/account/login/?registerCode=1178246"
    class="affiliate-stoerer"
    target="_blank"
    rel="noopener noreferrer sponsored"
    aria-label="Zum Partner-Shop für Pflegeprodukte"
  >
    <div class="affiliate-stoerer__content">
      <div class="affiliate-stoerer__eyebrow">Partner-Shop</div>
      <div class="affiliate-stoerer__title">Pflegeprodukte für zuhause</div>
      <div class="affiliate-stoerer__text">
        Registrieren und empfohlene Kosmetikprodukte bequem online bestellen.
      </div>
      <span class="affiliate-stoerer__button">Jetzt registrieren</span>
    </div>
  </a>
</div>
```

---

## Beispiel-CSS

```css
.affiliate-stoerer-wrap {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: min(360px, calc(100vw - 32px));
  z-index: 9999;
}

.affiliate-stoerer {
  display: block;
  width: 100%;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 18px;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.12);
  padding: 18px;
  text-decoration: none;
  color: #1f1f1f;
  backdrop-filter: blur(10px);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.affiliate-stoerer:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.16);
}

.affiliate-stoerer__eyebrow {
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #8a7a6a;
  margin-bottom: 8px;
}

.affiliate-stoerer__title {
  font-size: 20px;
  line-height: 1.2;
  font-weight: 600;
  margin-bottom: 8px;
}

.affiliate-stoerer__text {
  font-size: 14px;
  line-height: 1.5;
  color: #4d4d4d;
  margin-bottom: 14px;
}

.affiliate-stoerer__button {
  display: inline-block;
  padding: 10px 14px;
  border-radius: 999px;
  background: #b7936a;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
}

.affiliate-stoerer__close {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 28px;
  height: 28px;
  border: 0;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.14);
  cursor: pointer;
  z-index: 10000;
  font-size: 18px;
  line-height: 1;
}

@media (max-width: 640px) {
  .affiliate-stoerer-wrap {
    right: 12px;
    bottom: 12px;
    width: calc(100vw - 24px);
  }

  .affiliate-stoerer {
    padding: 16px;
    border-radius: 16px;
  }

  .affiliate-stoerer__title {
    font-size: 18px;
  }

  .affiliate-stoerer__text {
    font-size: 13px;
  }
}
```

---

## Beispiel-JavaScript

```html
<script>
  (function () {
    const stoerer = document.getElementById("affiliateStoerer");
    const closeBtn = document.getElementById("affiliateStoererClose");

    if (!stoerer || !closeBtn) return;

    const hiddenUntil = localStorage.getItem("affiliateStoererHiddenUntil");
    const now = Date.now();

    if (hiddenUntil && now < Number(hiddenUntil)) {
      stoerer.style.display = "none";
      return;
    }

    closeBtn.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      const sevenDays = 7 * 24 * 60 * 60 * 1000;
      localStorage.setItem("affiliateStoererHiddenUntil", String(Date.now() + sevenDays));
      stoerer.style.display = "none";
    });
  })();
</script>
```

---

## Abnahme-Kriterien

Die Umsetzung ist korrekt, wenn folgende Punkte erfüllt sind:

- der Störer ist sichtbar unten rechts platziert
- er wirkt optisch passend zur Website
- der Text kommuniziert klar, dass es ein Partner-Shop ist
- der Link führt korrekt auf den Registrierungslink
- der Link öffnet sich in einem neuen Tab
- der Störer lässt sich schließen
- nach dem Schließen bleibt er für 7 Tage verborgen
- mobil ist die Darstellung sauber und nicht störend
- der Störer wirkt nicht wie aggressive Fremdwerbung

---

## Optionaler Hinweis für die umsetzende Person

Falls die Website mit einem Framework wie React, Next.js oder einem Builder umgesetzt wurde, soll die technische Integration entsprechend im vorhandenen Komponentenstil erfolgen.  
Die Funktion und Gestaltung bleiben gleich, auch wenn das Markup strukturell angepasst werden muss.

---

## Kurzfassung für das Briefing

Bitte auf der Website einen dezenten Floating-Störer unten rechts integrieren, der auf einen externen Partner-Shop verweist. Der Störer soll Besucher zur Registrierung unter folgendem Link führen:

`https://cnc-direct.de/account/login/?registerCode=1178246`

Wichtig: Es ist nicht der Shop der Website-Betreiberin, sondern ein externer Partner-Shop / Affiliate-Link. Das muss sprachlich klar sein. Der Störer soll elegant und unaufdringlich gestaltet sein, einen Schließen-Button haben und sich nach dem Schließen für 7 Tage per `localStorage` ausblenden.
