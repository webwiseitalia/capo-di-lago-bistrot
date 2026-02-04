import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import esternoTerrazza from '../assets/foto/esterno-bistrot-terrazza.webp'

gsap.registerPlugin(ScrollTrigger)

export default function LagoMoro() {
  const pageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim', { y: 50, opacity: 0, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.2 })
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.from(el, { y: 60, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } })
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <main ref={pageRef}>
      {/* Hero Full */}
      <section className="hero">
        <div className="hero-bg">
          <img src={esternoTerrazza} alt="Lago Moro" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="container">
            <div className="max-w-3xl">
              <p className="hero-anim label text-[var(--teal-light)] mb-4">Un gioiello alpino</p>
              <h1 className="hero-anim text-massive text-white mb-6">Lago Moro</h1>
              <p className="hero-anim text-white/60 text-xl max-w-xl">
                Uno dei laghi più limpidi e studiati d'Europa, incastonato nel cuore della Valle Camonica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meromittico */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="reveal">
              <p className="label text-teal mb-4">Un fenomeno raro</p>
              <h2 className="text-big text-navy mb-8">Lago Meromittico</h2>
              <p className="text-lg text-gray leading-relaxed mb-6">
                Il Lago Moro è uno dei pochi laghi meromittici in Italia e tra i più studiati d'Europa.
                Le sue acque profonde non si mescolano mai con quelle superficiali.
              </p>
              <p className="text-gray leading-relaxed">
                Questa caratteristica rende il lago un archivio naturale dove i sedimenti
                raccontano la storia del clima della Valle Camonica attraverso i millenni.
              </p>
            </div>
            <div className="reveal">
              <div className="img-frame">
                <div className="overflow-hidden aspect-landscape">
                  <img src={esternoTerrazza} alt="Vista del Lago Moro" className="img-cover img-zoom" />
                </div>
              </div>
            </div>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 reveal">
            {[
              { val: '380', unit: 'm', label: 's.l.m.' },
              { val: '820', unit: 'm', label: 'lunghezza' },
              { val: '42', unit: 'm', label: 'profondità' },
              { val: '320', unit: 'm', label: 'larghezza' },
            ].map((s, i) => (
              <div key={i} className="text-center p-8 border border-[var(--gray-100)]">
                <span className="text-big text-navy">{s.val}<span className="text-medium text-gray">{s.unit}</span></span>
                <span className="label text-gray block mt-2">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attività */}
      <section className="section bg-cream">
        <div className="container">
          <div className="text-center mb-16 reveal">
            <p className="label text-teal mb-4">Attività</p>
            <h2 className="text-big text-navy">Cosa Fare al Lago</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏊', title: 'Balneazione', desc: 'Acque cristalline', season: 'Estate' },
              { icon: '🚶', title: 'Giro Lago', desc: '3,5 km, ~1 ora', season: "Tutto l'anno" },
              { icon: '🚣', title: 'Kayak', desc: 'Esplora dall\'acqua', season: 'Estate' },
              { icon: '🎣', title: 'Pesca', desc: 'Diverse specie', season: "Tutto l'anno" },
              { icon: '🥾', title: 'Trekking', desc: 'Sentieri panoramici', season: 'Primavera' },
              { icon: '🐴', title: 'Equitazione', desc: 'Tra i castagneti', season: 'Estate' },
              { icon: '🔭', title: 'Astronomia', desc: 'Cieli certificati', season: "Tutto l'anno" },
              { icon: '🧺', title: 'Picnic', desc: 'Aree attrezzate', season: 'Estate' },
            ].map((a, i) => (
              <div key={i} className="reveal card p-8 group">
                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">{a.icon}</span>
                <h3 className="text-small-title text-navy mb-2">{a.title}</h3>
                <p className="text-sm text-gray mb-3">{a.desc}</p>
                <span className="label text-teal">{a.season}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cieli Stellati */}
      <section className="section bg-[var(--navy-deep)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="label text-[var(--teal-light)] mb-4">Certificazione Astronomitaly</p>
              <h2 className="text-big text-white mb-8">I Cieli Più Belli d'Italia</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Il Lago Moro ha ottenuto la certificazione <strong className="text-white">Astronomitaly SILVER</strong>,
                che lo riconosce come uno dei luoghi con i cieli più limpidi per l'osservazione astronomica.
              </p>
              <p className="text-white/50">
                L'Osservatorio Giorgio Gaioni organizza regolarmente serate di osservazione aperte al pubblico.
              </p>
            </div>
            <div className="reveal flex justify-center">
              <div className="w-48 h-48 rounded-full border border-[var(--teal)]/30 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border border-[var(--teal)]/50 flex items-center justify-center bg-[var(--teal)]/10">
                  <div className="text-center">
                    <span className="text-5xl block mb-2">⭐</span>
                    <p className="label text-[var(--teal-light)]">SILVER</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leggenda */}
      <section className="section bg-teal">
        <div className="container-sm text-center reveal">
          <p className="label text-white/60 mb-4">Tradizione popolare</p>
          <h2 className="text-big text-white mb-10">La Leggenda del Lac de Cuna</h2>
          <div className="space-y-6 text-white/80 text-lg italic max-w-2xl mx-auto">
            <p>
              "Si narra che dove oggi si trova il lago, un tempo sorgesse un paese prospero.
              Una sera d'inverno, un mendicante bussò di porta in porta chiedendo un rifugio,
              ma tutti lo cacciarono via."
            </p>
            <p>
              "Solo una povera vedova lo accolse. Il mattino seguente, il mendicante — che era un angelo —
              le disse di fuggire verso la montagna senza voltarsi.
              Un temporale si abbatté sul paese, che sprofondò formando il lago."
            </p>
          </div>
          <div className="divider divider-white mx-auto mt-10"></div>
          <p className="text-white/60 mt-6 text-sm">Una storia che ricorda l'importanza dell'ospitalità.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-cream">
        <div className="container-sm text-center reveal">
          <p className="label text-teal mb-4">Esplora</p>
          <h2 className="text-big text-navy mb-8">Scopri il lago dal nostro bistrot</h2>
          <p className="text-gray max-w-lg mx-auto mb-10">
            Goditi la vista più bella dalla nostra terrazza panoramica.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contatti" className="btn btn-primary">Vieni a Trovarci</Link>
            <Link to="/menu" className="btn btn-outline">Scopri il Menu</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
