import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contatti() {
  const pageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.2,
      })

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
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="max-w-3xl">
            <p className="hero-anim label text-[var(--teal-light)] mb-4">Vieni a Trovarci</p>
            <h1 className="hero-anim text-huge text-white mb-6">Contatti</h1>
            <p className="hero-anim text-white/60 text-xl max-w-xl">
              Siamo qui per accoglierti. Prenota un tavolo, chiedi informazioni
              o semplicemente passa a trovarci.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Info */}
            <div className="reveal">
              <p className="label text-teal mb-4">Informazioni</p>
              <h2 className="text-big text-navy mb-10">Come Raggiungerci</h2>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-cream text-teal flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-dark mb-2">Indirizzo</h3>
                    <p className="text-gray">
                      Via Capo di Lago<br />
                      25047 Darfo Boario Terme (BS)
                    </p>
                    <a
                      href="https://maps.google.com/?q=Capo+di+Lago+Darfo+Boario+Terme"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-teal text-sm hover:underline"
                    >
                      Apri in Google Maps →
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-cream text-teal flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-dark mb-2">Telefono</h3>
                    <a
                      href="tel:+390364123456"
                      className="text-gray hover:text-teal transition-colors"
                    >
                      +39 0364 123 456
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-cream text-teal flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-dark mb-2">Email</h3>
                    <a
                      href="mailto:info@capodilago.it"
                      className="text-gray hover:text-teal transition-colors"
                    >
                      info@capodilago.it
                    </a>
                  </div>
                </div>
              </div>

              {/* Orari */}
              <div className="mt-12 pt-10 border-t border-[var(--gray-100)]">
                <h3 className="font-display text-lg text-dark mb-6">Orari di Apertura</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray">Lunedì - Venerdì</span>
                    <span className="text-dark font-medium">7:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray">Sabato - Domenica</span>
                    <span className="text-dark font-medium">8:00 - 23:00</span>
                  </div>
                </div>
                <p className="mt-6 text-teal label">
                  Aperto 365 giorni l'anno
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="reveal">
              <p className="label text-teal mb-4">Scrivici</p>
              <h2 className="text-big text-navy mb-10">Prenota o Contattaci</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="label text-dark block mb-2">Nome</label>
                    <input
                      type="text"
                      placeholder="Il tuo nome"
                      className="w-full px-4 py-4 bg-cream border-0 text-dark placeholder:text-gray/50 focus:outline-none focus:ring-2 focus:ring-teal transition-all"
                    />
                  </div>
                  <div>
                    <label className="label text-dark block mb-2">Cognome</label>
                    <input
                      type="text"
                      placeholder="Il tuo cognome"
                      className="w-full px-4 py-4 bg-cream border-0 text-dark placeholder:text-gray/50 focus:outline-none focus:ring-2 focus:ring-teal transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="label text-dark block mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="La tua email"
                    className="w-full px-4 py-4 bg-cream border-0 text-dark placeholder:text-gray/50 focus:outline-none focus:ring-2 focus:ring-teal transition-all"
                  />
                </div>

                <div>
                  <label className="label text-dark block mb-2">Telefono</label>
                  <input
                    type="tel"
                    placeholder="Il tuo numero"
                    className="w-full px-4 py-4 bg-cream border-0 text-dark placeholder:text-gray/50 focus:outline-none focus:ring-2 focus:ring-teal transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="label text-dark block mb-2">Data</label>
                    <input
                      type="date"
                      className="w-full px-4 py-4 bg-cream border-0 text-dark focus:outline-none focus:ring-2 focus:ring-teal transition-all"
                    />
                  </div>
                  <div>
                    <label className="label text-dark block mb-2">Persone</label>
                    <select className="w-full px-4 py-4 bg-cream border-0 text-dark focus:outline-none focus:ring-2 focus:ring-teal transition-all cursor-pointer">
                      <option value="">Seleziona</option>
                      <option value="1">1 persona</option>
                      <option value="2">2 persone</option>
                      <option value="3">3 persone</option>
                      <option value="4">4 persone</option>
                      <option value="5">5 persone</option>
                      <option value="6+">6+ persone</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="label text-dark block mb-2">Messaggio</label>
                  <textarea
                    placeholder="Scrivi qui il tuo messaggio o richieste particolari..."
                    rows="5"
                    className="w-full px-4 py-4 bg-cream border-0 text-dark placeholder:text-gray/50 focus:outline-none focus:ring-2 focus:ring-teal transition-all resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full sm:w-auto">
                  Invia Richiesta
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[500px] bg-cream reveal">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.0899999999997!2d10.1789!3d45.8789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDUyJzQ0LjAiTiAxMMKwMTAnNDQuMCJF!5e0!3m2!1sit!2sit!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mappa Capo di Lago Bistrot"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </section>

      {/* Social CTA */}
      <section className="section-sm bg-navy">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-small-title text-white mb-2">Seguici sui social</h3>
              <p className="text-white/50 text-sm">Resta aggiornato su eventi e novità</p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center border border-white/20 hover:border-teal hover:bg-teal text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center border border-white/20 hover:border-teal hover:bg-teal text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
