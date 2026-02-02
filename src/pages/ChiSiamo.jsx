import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import esternoLocale from '../assets/foto/esterno-bistrot-pietra.webp'
import esternoTerrazza from '../assets/foto/esterno-bistrot-terrazza.webp'

gsap.registerPlugin(ScrollTrigger)

export default function ChiSiamo() {
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
            <p className="hero-anim label text-[var(--teal-light)] mb-4">La Nostra Storia</p>
            <h1 className="hero-anim text-huge text-white mb-6">Chi Siamo</h1>
            <p className="hero-anim text-white/60 text-xl max-w-xl">
              Un progetto nato dalla volontà di valorizzare il Lago Moro,
              trasformandolo in un punto di riferimento per la comunità.
            </p>
          </div>
        </div>
      </section>

      {/* Il Progetto */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="reveal">
              <div className="img-frame">
                <div className="overflow-hidden aspect-portrait">
                  <img src={esternoLocale} alt="Esterno del bistrot" className="img-cover img-zoom" />
                </div>
              </div>
            </div>
            <div className="reveal">
              <p className="label text-teal mb-4">Il Progetto</p>
              <h2 className="text-big text-navy mb-8">Un nuovo cuore per il Lago Moro</h2>
              <p className="text-lg text-gray leading-relaxed mb-6">
                Il Capo di Lago Bistrot nasce da un progetto voluto dall'Amministrazione
                Comunale di Darfo Boario Terme, con la visione del Sindaco Dario Colossi
                di valorizzare questo angolo prezioso della Valle Camonica.
              </p>
              <p className="text-gray leading-relaxed mb-10">
                L'edificio, completamente ristrutturato con un investimento di €500.000,
                sostituisce i vecchi chioschi. Oggi, una struttura moderna e rispettosa
                del paesaggio accoglie visitatori e residenti tutto l'anno.
              </p>
              <div className="flex gap-12 pt-8 border-t border-[var(--gray-100)]">
                <div>
                  <span className="text-huge text-navy block">500k</span>
                  <span className="label text-gray">Investimento €</span>
                </div>
                <div>
                  <span className="text-huge text-navy block">10</span>
                  <span className="label text-gray">Anni gestione</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Il Gestore */}
      <section className="section bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="reveal order-2 lg:order-1">
              <p className="label text-teal mb-4">Il Gestore</p>
              <h2 className="text-big text-navy mb-8">MadHops e Paolo Gheza</h2>
              <p className="text-lg text-gray leading-relaxed mb-6">
                La gestione del bistrot è affidata a <strong className="text-dark">Paolo Gheza</strong> e
                alla società <strong className="text-dark">MadHops S.r.l.</strong>, già attivi
                sul territorio della Valle Camonica con altri locali di successo.
              </p>
              <p className="text-gray leading-relaxed mb-8">
                Un impegno contrattuale prevede che almeno il 30% dei prodotti
                provenga dalla filiera locale, garantendo autenticità e supporto
                all'economia del territorio.
              </p>
              <blockquote className="pl-6 border-l-2 border-[var(--teal)]">
                <p className="text-gray italic">
                  "Dalla manutenzione del verde pubblico alla cura dei bagni,
                  dall'organizzazione di eventi alla promozione del territorio —
                  il nostro impegno va oltre la ristorazione."
                </p>
              </blockquote>
            </div>
            <div className="reveal order-1 lg:order-2">
              <div className="img-frame">
                <div className="overflow-hidden aspect-portrait">
                  <img src={esternoTerrazza} alt="Terrazza del bistrot" className="img-cover img-zoom" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16 reveal">
            <p className="label text-teal mb-4">La Nostra Filosofia</p>
            <h2 className="text-big text-navy">I Nostri Valori</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { num: '01', title: 'Territorio', desc: 'Radici profonde nella cultura camuna, collaborazione con produttori locali, valorizzazione delle tradizioni.' },
              { num: '02', title: 'Sostenibilità', desc: "Cura dell'ambiente lacustre, prodotti a km0, rispetto per il paesaggio naturale che ci circonda." },
              { num: '03', title: 'Accoglienza', desc: 'Un punto di riferimento per residenti e turisti, un luogo dove tutti si sentono i benvenuti.' },
              { num: '04', title: 'Qualità', desc: 'Ingredienti selezionati, preparazioni accurate, servizio attento alle esigenze di ogni ospite.' },
            ].map((v) => (
              <div key={v.num} className="reveal card p-10 group">
                <div className="flex gap-6">
                  <span className="label text-teal">{v.num}</span>
                  <div>
                    <h3 className="text-small-title text-navy mb-3 group-hover:text-[var(--teal)] transition-colors">{v.title}</h3>
                    <p className="text-gray">{v.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Struttura */}
      <section className="section bg-navy">
        <div className="container">
          <div className="text-center mb-16 reveal">
            <p className="label text-[var(--teal-light)] mb-4">Gli Spazi</p>
            <h2 className="text-big text-white">La Struttura</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto reveal">
            <div className="p-10 border border-white/10 hover:border-[var(--teal)]/50 transition-colors">
              <h3 className="text-small-title text-[var(--teal-light)] mb-6">Piano Terra</h3>
              <ul className="space-y-3 text-white/60">
                {['Bar con bancone', 'Info Point turistico', 'Cucina professionale', 'Magazzino e spogliatoi'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[var(--teal)] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 border border-white/10 hover:border-[var(--teal)]/50 transition-colors">
              <h3 className="text-small-title text-[var(--teal-light)] mb-6">Piano Superiore</h3>
              <ul className="space-y-3 text-white/60">
                {['Saletta ristorante', 'Servizi igienici', 'Terrazza panoramica', 'Spazio prodotti locali'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[var(--teal)] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-cream">
        <div className="container-sm text-center reveal">
          <p className="label text-teal mb-4">Incontraci</p>
          <h2 className="text-big text-navy mb-8">Vieni a conoscerci</h2>
          <p className="text-gray max-w-lg mx-auto mb-10">
            Saremo felici di accoglierti e raccontarti di persona la nostra passione per questo territorio.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contatti" className="btn btn-primary">Contattaci</Link>
            <Link to="/menu" className="btn btn-outline">Scopri il Menu</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
