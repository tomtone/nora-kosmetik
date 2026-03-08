function sitePage() {
  return {
    scrolled: false,
    navLinks: [
      { label: 'Über mich',  href: '/#ueber-mich' },
      { label: 'Leistungen', href: '/#leistungen' },
      { label: 'Studio',     href: '/#studio' },
      { label: 'Preise',     href: '/#preise' },
      { label: 'FAQ',        href: '/#faq' },
      { label: 'Kontakt',    href: '/#kontakt' },
    ],
    init() {
      window.addEventListener('scroll', () => {
        this.scrolled = window.scrollY > 50;
      });
    }
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
    faqs: [],
    init() {
      fetch('faqs.json').then(r => r.json()).then(data => { this.faqs = data; });
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