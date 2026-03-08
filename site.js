function sitePage() {
  return {
    navLinks: [
      { label: 'Über mich',  href: '/#ueber-mich' },
      { label: 'Leistungen', href: '/#leistungen' },
      { label: 'Studio',     href: '/#studio' },
      { label: 'Preise',     href: '/#preise' },
      { label: 'FAQ',        href: '/#faq' },
      { label: 'Kontakt',    href: '/#kontakt' },
    ]
  }
}

function site() {
  return {
    scrolled: false,
    mobileOpen: false,
    modalOpen: false,
    activeTab: null,
    date: null,
    navLinks: [
      { label: 'Über mich',  href: '#ueber-mich' },
      { label: 'Leistungen', href: '#leistungen' },
      { label: 'Studio',     href: '#studio' },
      { label: 'Preise',     href: '#preise' },
      { label: 'FAQ',        href: '#faq' },
      { label: 'Kontakt',    href: '#kontakt' },
    ],
    faqs: [
      {
        q: 'Wie bereite ich mich auf die Fruchtsäurebehandlung vor?',
        a: 'Bitte verwenden Sie 5–7 Tage vor der Behandlung keine Fruchtsäuren, Retinol oder Peelings. Kommen Sie mit gereinigter, ungeschminkter Haut. Informieren Sie mich bitte über aktuelle Medikamente, insbesondere Isotretinoin.'
      },
      {
        q: 'Wie läuft ein Termin bei mir ab?',
        a: 'Jede Behandlung beginnt mit einem kurzen Hautgespräch, in dem wir Ihren aktuellen Hautzustand und Ihre Ziele besprechen. Danach folgt die individuelle Behandlung in ruhiger Atmosphäre. Am Ende erhalten Sie eine Pflege- und Nachsorgeempfehlung.'
      },
      {
        q: 'Wie lange halten die Ergebnisse?',
        a: 'Das hängt von der Behandlung und Ihrem Hauttyp ab. Für langfristige Ergebnisse empfehle ich regelmäßige Behandlungsintervalle. Microneedling zeigt oft nach 2–4 Wochen optimale Ergebnisse. Fruchtsäurepeelings wirken am besten in einer Kursbehandlung.'
      },
      {
        q: 'Kann ich direkt nach der Behandlung arbeiten oder ausgehen?',
        a: 'Nach einer klassischen Kosmetikbehandlung ja. Nach Fruchtsäurepeeling oder Microneedling können leichte Rötungen auftreten, die meistens nach einigen Stunden abklingen. Für 24 Stunden sollte kein Make-up aufgetragen werden.'
      },
      {
        q: 'Wie buche ich einen Termin?',
        a: 'Am einfachsten per WhatsApp an 01515 3636 898 oder per E-Mail an gerstenberg.nora@gmx.de. Ich antworte schnellstmöglich und finde gemeinsam mit Ihnen den passenden Termin.'
      },
      {
        q: 'Ist Microneedling für jeden geeignet?',
        a: 'Microneedling ist für die meisten Hauttypen geeignet, jedoch nicht bei aktiven Entzündungen, bestimmten Hauterkrankungen oder während der Schwangerschaft. Im Beratungsgespräch klären wir, welche Behandlung für Sie am besten geeignet ist.'
      },
    ],
    init() {
      this.setDate();
      window.addEventListener('scroll', () => {
        this.scrolled = window.scrollY > 50;
      });
    },
    setDate() {
      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1; // Months start at 0!
      let dd = today.getDate();
      this.date = [dd,mm,yyyy].join('.');
    }
  }
}