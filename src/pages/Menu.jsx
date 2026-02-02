import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'
import piattoZuppa from '../assets/foto/piatto-zuppa-pesce.webp'
import piattoPasta from '../assets/foto/piatto-pasta-gamberi.webp'
import piattoCarne from '../assets/foto/piatto-carne-castagne.webp'
import piattoVino from '../assets/foto/piatto-costine-vino.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Menu() {
  const [activeTab, setActiveTab] = useState('pranzo')
  const pageRef = useRef(null)

  const tabs = [
    { id: 'colazione', label: 'Colazione' },
    { id: 'pranzo', label: 'Pranzo' },
    { id: 'aperitivo', label: 'Aperitivo' },
    { id: 'prodotti', label: 'Prodotti' },
  ]

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

      gsap.from('.gallery-img', {
        scale: 1.1,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.menu-gallery',
          start: 'top 80%',
        },
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

  const menuData = {
    colazione: {
      sections: [
        {
          title: 'Caffetteria',
          items: [
            { name: 'Espresso', desc: 'Caffè 100% arabica', price: '1,20' },
            { name: 'Cappuccino', desc: 'Con latte fresco', price: '1,60' },
            { name: 'Caffè Americano', desc: 'Lungo e aromatico', price: '1,80' },
            { name: 'Latte Macchiato', desc: 'Latte montato con caffè', price: '2,00' },
          ],
        },
        {
          title: 'Dolci',
          items: [
            { name: 'Brioche Vuota', desc: 'Brioche artigianale', price: '1,30' },
            { name: 'Brioche Farcita', desc: 'Crema, cioccolato o marmellata', price: '1,50' },
            { name: 'Spongada', desc: 'Dolce tradizionale camuno', price: '3,50', km0: true },
          ],
        },
      ],
    },
    pranzo: {
      sections: [
        {
          title: 'Antipasti',
          items: [
            { name: 'Tagliere Camuno', desc: 'Selezione di salumi e formaggi locali', price: '14,00', km0: true },
            { name: 'Carpaccio di Salmerino', desc: 'Pesce di lago con agrumi', price: '12,00', km0: true },
            { name: 'Bruschette della Valle', desc: 'Pane casereccio con condimenti stagionali', price: '8,00' },
          ],
        },
        {
          title: 'Primi',
          items: [
            { name: 'Casoncelli della Valle', desc: 'Pasta ripiena con burro fuso e salvia', price: '14,00', km0: true },
            { name: 'Polenta Taragna', desc: 'Con formaggio Silter fuso', price: '12,00', km0: true },
            { name: 'Risotto al Fatulì', desc: 'Riso carnaroli con formaggio affumicato', price: '15,00', km0: true },
          ],
        },
        {
          title: 'Secondi',
          items: [
            { name: 'Costine di Maiale', desc: 'Con polenta e castagne', price: '16,00', km0: true },
            { name: 'Trota del Lago Moro', desc: 'Alla griglia con erbe aromatiche', price: '18,00', km0: true },
            { name: 'Brasato al Vino Rosso', desc: 'Carne cotta lentamente con verdure', price: '18,00' },
          ],
        },
      ],
    },
    aperitivo: {
      sections: [
        {
          title: 'Cocktail',
          items: [
            { name: 'Spritz Aperol', desc: 'Il classico con prosecco', price: '5,00' },
            { name: 'Negroni', desc: 'Gin, Campari, Vermouth rosso', price: '7,00' },
            { name: 'Hugo', desc: 'Prosecco, fiori di sambuco, menta', price: '5,50' },
          ],
        },
        {
          title: 'Vini al Calice',
          items: [
            { name: 'Franciacorta Brut', desc: 'Bollicine bresciane', price: '8,00', km0: true },
            { name: 'Curtefranca Bianco', desc: 'Valle Camonica DOC', price: '5,00', km0: true },
            { name: 'Valcamonica Rosso', desc: 'IGT locale', price: '5,00', km0: true },
          ],
        },
        {
          title: 'Stuzzicheria',
          items: [
            { name: 'Tagliere Aperitivo', desc: 'Salumi e formaggi della valle', price: '12,00', km0: true },
            { name: 'Chips di Polenta', desc: 'Con salsa tartufata', price: '5,00' },
          ],
        },
      ],
    },
    prodotti: {
      sections: [
        {
          title: 'Formaggi',
          items: [
            { name: 'Silter DOP', desc: "Formaggio d'alpeggio", km0: true },
            { name: 'Fatulì', desc: 'Formaggio affumicato di capra', km0: true },
            { name: 'Rosa Camuna', desc: 'Formaggio tipico locale', km0: true },
          ],
        },
        {
          title: 'Salumi',
          items: [
            { name: 'Slinziga', desc: 'Carne secca tradizionale', km0: true },
            { name: 'Violino di Capra', desc: 'Stagionato in cantina', km0: true },
            { name: 'Salamina', desc: 'Salame nostrano', km0: true },
          ],
        },
        {
          title: 'Vini & Altro',
          items: [
            { name: 'Vini IGT Valcamonica', desc: 'Selezione locale', km0: true },
            { name: 'Miele di Castagno', desc: 'Produzione locale', km0: true },
            { name: 'Grappa di Vinaccia', desc: 'Distillato artigianale', km0: true },
          ],
        },
      ],
    },
  }

  return (
    <main ref={pageRef}>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="max-w-3xl">
            <p className="hero-anim label text-[var(--teal-light)] mb-4">Cucina del Territorio</p>
            <h1 className="hero-anim text-huge text-white mb-6">Il Menu</h1>
            <p className="hero-anim text-white/60 text-xl max-w-xl">
              Sapori autentici della Valle Camonica, con almeno il 30%
              di ingredienti a km0.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="menu-gallery py-4 bg-cream overflow-hidden">
        <div className="flex gap-4">
          {[piattoZuppa, piattoPasta, piattoCarne, piattoVino].map((img, i) => (
            <div key={i} className="gallery-img flex-shrink-0 w-64 md:w-80 aspect-[4/3] overflow-hidden">
              <img src={img} alt="Piatto" className="img-cover img-zoom" />
            </div>
          ))}
        </div>
      </section>

      {/* Menu Content */}
      <section className="section bg-white">
        <div className="container">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-16 reveal">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-8 py-4 label transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-navy bg-cream'
                    : 'text-gray hover:text-navy'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="menu-tab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Menu Sections */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              <div className="lg:col-span-8">
                {menuData[activeTab].sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="mb-12 last:mb-0">
                    <h3 className="text-medium text-navy mb-8 pb-4 border-b border-[var(--gray-100)]">
                      {section.title}
                    </h3>
                    <div className="space-y-6">
                      {section.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="group flex justify-between items-start py-4 border-b border-[var(--gray-100)]/50 last:border-0"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <h4 className="font-display text-lg text-dark group-hover:text-teal transition-colors">
                                {item.name}
                              </h4>
                              {item.km0 && (
                                <span className="px-2 py-0.5 text-[10px] font-medium tracking-wider uppercase bg-teal/10 text-teal">
                                  Km0
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray mt-1">{item.desc}</p>
                          </div>
                          {item.price && (
                            <span className="font-display text-lg text-navy ml-4">
                              €{item.price}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-3 lg:col-start-10">
                <div className="sticky top-32 p-8 bg-navy text-white">
                  <h4 className="text-small-title text-white mb-4">Filosofia Km0</h4>
                  <p className="text-sm text-white/60 leading-relaxed mb-6">
                    Almeno il 30% dei nostri ingredienti proviene dalla Valle Camonica.
                    Una scelta di cuore per sostenere il territorio.
                  </p>
                  <div className="flex items-center gap-3 text-[var(--teal-light)]">
                    <span className="w-2 h-2 bg-teal rounded-full"></span>
                    <span className="label">Prodotto locale</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-cream">
        <div className="container-sm text-center reveal">
          <p className="label text-teal mb-4">Prenota</p>
          <h2 className="text-big text-navy mb-8">Vieni a gustare i nostri piatti</h2>
          <p className="text-gray max-w-lg mx-auto mb-10">
            Ti aspettiamo con la nostra cucina territoriale
            e la vista più bella del Lago Moro.
          </p>
          <Link to="/contatti" className="btn btn-primary">
            Prenota un Tavolo
          </Link>
        </div>
      </section>
    </main>
  )
}
