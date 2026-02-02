import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import lagoMoroPanorama from '../assets/foto/lago-moro-panorama.jpg'
import esternoTerrazza from '../assets/foto/esterno-bistrot-terrazza.webp'
import esternoLocale from '../assets/foto/esterno-bistrot-pietra.webp'
import piattoZuppa from '../assets/foto/piatto-zuppa-pesce.webp'
import piattoPasta from '../assets/foto/piatto-pasta-gamberi.webp'
import piattoCarne from '../assets/foto/piatto-carne-castagne.webp'
import piattoVino from '../assets/foto/piatto-costine-vino.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const pageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.hero-anim', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.3,
      })

      // Hero parallax
      gsap.to('.hero-bg img', {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Reveal animations
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        })
      })


    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={pageRef}>
      {/* ============================================
          HERO - FULL SCREEN
      ============================================ */}
      <section className="hero">
        <div className="hero-bg">
          <img src={lagoMoroPanorama} alt="Lago Moro" />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="container">
            <div className="max-w-4xl">
              <p className="hero-anim label text-[var(--teal-light)] mb-6">
                Bistrot · Lago Moro · Valle Camonica
              </p>
              <h1 className="hero-anim text-white mb-8">
                <span className="block text-massive">Capo di</span>
                <span className="block text-massive text-italic">Lago</span>
              </h1>
              <p className="hero-anim text-white/70 text-xl max-w-lg mb-10">
                Cucina del territorio con vista lago.<br />
                Aperti 365 giorni l'anno.
              </p>
              <div className="hero-anim flex flex-wrap gap-4">
                <Link to="/menu" className="btn btn-white">
                  Scopri il Menu
                </Link>
                <Link to="/contatti" className="btn btn-outline text-white border-white/30 hover:bg-white hover:text-[var(--navy)]">
                  Prenota
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-anim absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-3">
            <span className="label text-white/50 text-[10px]">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* ============================================
          MARQUEE
      ============================================ */}
      <section className="py-6 bg-cream overflow-hidden">
        <div className="marquee">
          <div className="marquee-track">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="marquee-content">
                <span>Bistrot</span>
                <span className="stroke">Vista Lago</span>
                <span>Km Zero</span>
                <span className="stroke">Valle Camonica</span>
                <span>365 Giorni</span>
                <span className="stroke">Tradizione</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          INTRO - ASYMMETRIC
      ============================================ */}
      <section className="section-lg bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left - Big image */}
            <div className="lg:col-span-7 reveal">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={esternoLocale} alt="Bistrot" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-5 flex flex-col justify-center reveal">
              <span className="label text-teal mb-4">Benvenuti</span>
              <h2 className="text-huge text-navy mb-6">
                Dove il lago<br />
                <span className="text-italic text-[var(--teal)]">incontra</span><br />
                la tavola
              </h2>
              <p className="text-gray text-lg leading-relaxed mb-8">
                Affacciato sulle acque cristalline del Lago Moro,
                il Capo di Lago Bistrot unisce gastronomia,
                natura e accoglienza in un'esperienza unica.
              </p>
              <div className="h-px w-20 bg-[var(--teal)] mb-8"></div>
              <Link to="/chi-siamo" className="group inline-flex items-center gap-4 text-navy font-medium">
                <span className="h-px w-12 bg-navy group-hover:w-20 transition-all"></span>
                Scopri la nostra storia
              </Link>
            </div>
          </div>

          {/* Bottom - Small image + quote */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-32">
            <div className="lg:col-span-4 lg:col-start-2 reveal">
              <div className="aspect-square overflow-hidden">
                <img src={esternoTerrazza} alt="Terrazza" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-7 flex items-center reveal">
              <blockquote className="relative pl-8 border-l-2 border-[var(--teal)]">
                <p className="text-big text-navy text-italic leading-tight">
                  "Un angolo prezioso della Valle Camonica"
                </p>
                <cite className="block mt-6 label text-gray not-italic">
                  Amministrazione Comunale
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SERVICES - DARK SECTION
      ============================================ */}
      <section className="section bg-navy relative overflow-hidden">
        {/* Background decorative text */}
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 text-[20vw] font-display text-white/[0.02] whitespace-nowrap pointer-events-none">
          Servizi
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Heading */}
            <div className="reveal">
              <span className="label text-[var(--teal-light)] mb-4 block">I Nostri Servizi</span>
              <h2 className="text-huge text-white mb-6">
                Un luogo,<br />
                <span className="text-italic text-[var(--teal-light)]">mille esperienze</span>
              </h2>
              <p className="text-white/60 text-lg max-w-md">
                Dal caffè mattutino alla cena con vista,
                siamo qui per accompagnarti in ogni momento della giornata.
              </p>
            </div>

            {/* Right - Services list */}
            <div className="space-y-8">
              {[
                { time: '07:00 — 11:00', title: 'Colazione & Brunch', desc: 'Caffè aromatici, brioche artigianali e dolci fatti in casa con vista lago.' },
                { time: '12:00 — 22:00', title: 'Pranzo & Cena', desc: 'Cucina del territorio con ingredienti locali. Taglieri, primi della tradizione, pesce di lago.' },
                { time: 'Sempre attivo', title: 'Info Point Turistico', desc: 'Scopri i sentieri, le incisioni rupestri UNESCO e i segreti della Valle Camonica.' },
              ].map((service, i) => (
                <div key={i} className="reveal group border-b border-white/10 pb-8 last:border-0">
                  <span className="label text-[var(--teal-light)] mb-2 block">{service.time}</span>
                  <h3 className="text-medium text-white mb-2 group-hover:text-[var(--teal-light)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/50">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FOOD GALLERY
      ============================================ */}
      <section className="section-lg bg-cream">
        <div className="container">
          <div className="text-center mb-16 reveal">
            <span className="label text-teal mb-4 block">Gastronomia</span>
            <h2 className="text-huge text-navy">
              I sapori <span className="text-italic">della Valle</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { img: piattoZuppa, title: 'Zuppa di Pesce' },
              { img: piattoPasta, title: 'Pasta ai Gamberi' },
              { img: piattoCarne, title: 'Carne e Castagne' },
              { img: piattoVino, title: 'Costine al Vino' },
            ].map((item, i) => (
              <div key={i} className="reveal group">
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <p className="text-center text-navy font-display">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link to="/menu" className="btn btn-primary">
              Scopri il Menu Completo
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          LAGO MORO - SPLIT LAYOUT
      ============================================ */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left - Image */}
        <div className="relative h-[50vh] lg:h-auto">
          <img src={lagoMoroPanorama} alt="Lago Moro" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Right - Content */}
        <div className="bg-navy flex items-center">
          <div className="p-8 lg:p-16 xl:p-24">
            <span className="reveal label text-[var(--teal-light)] mb-4 block">Il Territorio</span>
            <h2 className="reveal text-huge text-white mb-6">
              Lago <span className="text-italic text-[var(--teal-light)]">Moro</span>
            </h2>
            <p className="reveal text-white/70 text-lg leading-relaxed mb-8">
              Uno dei laghi più limpidi d'Italia. Acque cristalline,
              cieli stellati certificati Astronomitaly,
              e la storia millenaria delle incisioni rupestri UNESCO.
            </p>

            <ul className="reveal space-y-3 mb-10">
              {[
                'Lago meromittico unico in Europa',
                'Certificazione Astronomitaly Silver',
                'Sentiero panoramico di 3,5 km',
                'Patrimonio UNESCO nelle vicinanze',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white/80">
                  <span className="w-6 h-px bg-[var(--teal)]"></span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="reveal">
              <Link to="/lago-moro" className="btn btn-teal">
                Scopri il Lago
              </Link>
            </div>

            {/* Stats */}
            <div className="reveal grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/10">
              {[
                { value: '380m', label: 'Altitudine' },
                { value: '42m', label: 'Profondità' },
                { value: '3.5km', label: 'Giro lago' },
              ].map((stat, i) => (
                <div key={i}>
                  <span className="block text-2xl lg:text-3xl font-display text-white">{stat.value}</span>
                  <span className="label text-white/40 text-[10px]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA - FINAL WITH MAP
      ============================================ */}
      <section className="section-lg bg-teal relative overflow-hidden">
        {/* Pattern di sfondo */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="waves" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10 Q 25 0, 50 10 T 100 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#waves)"/>
          </svg>
        </div>

        <div className="container relative z-10">
          {/* Header */}
          <div className="text-center mb-16 reveal">
            <h2 className="text-huge text-white mb-6">
              Ti aspettiamo
            </h2>
            <p className="text-white/80 text-xl max-w-xl mx-auto">
              Prenota il tuo tavolo o passa a trovarci per un caffè
              con la vista più bella della Valle Camonica.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Info e indicazioni */}
            <div className="reveal">
              <div className="bg-white/10 backdrop-blur-sm p-8 lg:p-10">
                <h3 className="text-medium text-white mb-8">Come raggiungerci</h3>

                <div className="space-y-6">
                  {/* Indirizzo */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">Indirizzo</p>
                      <p className="text-white/70">Via Capo di Lago<br />25047 Darfo Boario Terme (BS)</p>
                    </div>
                  </div>

                  {/* Telefono */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">Telefono</p>
                      <a href="tel:+390364123456" className="text-white/70 hover:text-white transition-colors">
                        +39 0364 123 456
                      </a>
                    </div>
                  </div>

                  {/* Orari */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">Orari</p>
                      <p className="text-white/70">Lun - Dom: 7:00 - 22:00<br />Aperto 365 giorni</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-10">
                  <Link to="/contatti" className="btn btn-white">
                    Prenota Ora
                  </Link>
                  <a
                    href="https://maps.google.com/?q=Lago+Moro+Darfo+Boario+Terme"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline text-white border-white/40 hover:bg-white hover:text-[var(--teal)]"
                  >
                    Apri in Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Mappa */}
            <div className="reveal">
              <div className="aspect-square lg:aspect-[4/3] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.5!2d10.178!3d45.878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47818e7d5a6a9c3d%3A0x1234567890abcdef!2sLago%20Moro!5e0!3m2!1sit!2sit!4v1699999999999!5m2!1sit!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa Capo di Lago Bistrot"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
