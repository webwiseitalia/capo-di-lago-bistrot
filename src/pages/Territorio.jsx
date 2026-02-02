import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import esternoTerrazza from '../assets/foto/esterno-bistrot-terrazza.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Territorio() {
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

      gsap.from('.trail-card', {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.trails-grid',
          start: 'top 80%',
        },
      })

      gsap.from('.attraction-card', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.attractions-grid',
          start: 'top 80%',
        },
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  const trails = [
    { name: 'Giro del Lago Moro', difficulty: 'Facile', length: '3,5 km', time: '~1 ora', level: 'easy' },
    { name: 'Sentiero di Poslago', difficulty: 'Facile', length: '4 km', time: '~1,5 ore', level: 'easy' },
    { name: 'Anello di Angolo Terme', difficulty: 'Medio', length: '8 km', time: '~3 ore', level: 'medium' },
    { name: 'Monte Pora', difficulty: 'Impegnativo', length: '12 km', time: '~5 ore', level: 'hard' },
    { name: 'Sentiero delle Incisioni', difficulty: 'Facile', length: '6 km', time: '~2 ore', level: 'easy' },
    { name: 'Castello di Gorzone', difficulty: 'Medio', length: '5 km', time: '~2 ore', level: 'medium' },
  ]

  const attractions = [
    { icon: '🦕', name: 'Archeopark', distance: '10 km' },
    { icon: '🏰', name: 'Castello di Gorzone', distance: '3 km' },
    { icon: '🏊', name: "Lago d'Iseo", distance: '15 km' },
    { icon: '🎿', name: 'Monte Campione', distance: '25 km' },
    { icon: '🍷', name: 'Franciacorta', distance: '30 km' },
    { icon: '⛪', name: 'Via Crucis Cerveno', distance: '20 km' },
    { icon: '🔭', name: 'Osservatorio Gaioni', distance: '5 km' },
    { icon: '🌊', name: 'Cascata del Corno', distance: '15 km' },
  ]

  return (
    <main ref={pageRef}>
      {/* Hero Full */}
      <section className="hero">
        <div className="hero-bg">
          <img src={esternoTerrazza} alt="Valle Camonica" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="container">
            <div className="max-w-3xl">
              <p className="hero-anim label text-[var(--teal-light)] mb-4">Info Point Turistico</p>
              <h1 className="hero-anim text-massive text-white mb-6">Scopri la Valle</h1>
              <p className="hero-anim text-white/60 text-xl max-w-xl">
                Un territorio ricco di storia, cultura e natura.
                La Valle Camonica ti aspetta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UNESCO */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="reveal">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-teal/10 mb-6">
                <span className="text-xl">🏛️</span>
                <span className="label text-teal">Patrimonio UNESCO</span>
              </div>
              <h2 className="text-big text-navy mb-8">
                Arte Rupestre della Valle Camonica
              </h2>
              <p className="text-lg text-gray leading-relaxed mb-6">
                Il primo sito italiano riconosciuto UNESCO nel 1979. Con oltre
                <strong className="text-dark"> 140.000 incisioni rupestri</strong>,
                è uno dei più grandi complessi di arte rupestre al mondo.
              </p>
              <p className="text-gray leading-relaxed mb-8">
                La celebre Rosa Camuna, simbolo della Regione Lombardia,
                proviene proprio da questi siti.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Sito n.94', '8 parchi archeologici', '10.000+ anni'].map((tag, i) => (
                  <span key={i} className="px-4 py-2 label bg-cream text-dark">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="reveal">
              <div className="p-12 bg-gradient-to-br from-teal to-navy text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-6xl">🌹</span>
                </div>
                <h3 className="text-small-title text-white mb-2">La Rosa Camuna</h3>
                <p className="text-white/70 text-sm">
                  Simbolo della Lombardia, incisa oltre 5.000 anni fa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terme */}
      <section className="section bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="reveal order-2 lg:order-1">
              <div className="p-12 bg-gradient-to-br from-navy to-[var(--navy-deep)] text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-6xl">♨️</span>
                </div>
                <h3 className="text-small-title text-white mb-2">4 Fonti Termali</h3>
                <p className="text-white/70 text-sm">
                  Igea, Silia, Fausta e Antica Fonte
                </p>
              </div>
            </div>

            <div className="reveal order-1 lg:order-2">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-navy/10 mb-6">
                <span className="text-xl">♨️</span>
                <span className="label text-navy">Benessere</span>
              </div>
              <h2 className="text-big text-navy mb-8">
                Terme di Boario
              </h2>
              <p className="text-lg text-gray leading-relaxed mb-6">
                A soli <strong className="text-dark">2 km dal Lago Moro</strong>,
                le Terme offrono oltre 150 anni di tradizione nel benessere.
              </p>
              <ul className="space-y-3">
                {['Centro Spa e benessere', 'Cure idropiniche', 'Parco di 130.000 mq', 'Piscine termali'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray">
                    <span className="w-2 h-2 bg-teal rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sentieri */}
      <section className="section bg-white">
        <div className="container">
          <div className="mb-16 reveal">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-teal/10 mb-6">
              <span className="text-xl">🥾</span>
              <span className="label text-teal">Outdoor</span>
            </div>
            <h2 className="text-big text-navy">Sentieri e Trekking</h2>
          </div>

          <div className="trails-grid space-y-4">
            {trails.map((trail, i) => (
              <div
                key={i}
                className={`trail-card group grid grid-cols-12 gap-4 p-6 bg-white border border-[var(--gray-100)] hover:border-teal transition-colors duration-300 ${
                  trail.level === 'easy' ? 'border-l-4 border-l-teal' :
                  trail.level === 'medium' ? 'border-l-4 border-l-[var(--gold)]' :
                  'border-l-4 border-l-navy'
                }`}
              >
                <div className="col-span-12 md:col-span-5">
                  <h3 className="font-display text-lg text-dark group-hover:text-teal transition-colors">
                    {trail.name}
                  </h3>
                </div>
                <div className="col-span-4 md:col-span-2">
                  <span
                    className={`px-3 py-1 text-xs tracking-wider uppercase text-white ${
                      trail.level === 'easy' ? 'bg-teal' :
                      trail.level === 'medium' ? 'bg-[var(--gold)]' :
                      'bg-navy'
                    }`}
                  >
                    {trail.difficulty}
                  </span>
                </div>
                <div className="col-span-4 md:col-span-2 text-gray text-sm">
                  {trail.length}
                </div>
                <div className="col-span-4 md:col-span-2 text-gray text-sm">
                  {trail.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Altre Attrazioni */}
      <section className="section bg-cream">
        <div className="container">
          <div className="text-center mb-16 reveal">
            <p className="label text-teal mb-4">Da non perdere</p>
            <h2 className="text-big text-navy">Altre Attrazioni</h2>
          </div>

          <div className="attractions-grid grid grid-cols-2 md:grid-cols-4 gap-6">
            {attractions.map((attraction, i) => (
              <div key={i} className="attraction-card card p-8 text-center group">
                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                  {attraction.icon}
                </span>
                <h3 className="font-display text-sm text-dark mb-1">{attraction.name}</h3>
                <p className="text-xs text-gray">{attraction.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-navy">
        <div className="container-sm text-center reveal">
          <p className="label text-[var(--teal-light)] mb-4">Info Point</p>
          <h2 className="text-big text-white mb-8">Passa dal nostro Info Point</h2>
          <p className="text-white/60 max-w-lg mx-auto mb-10">
            Vieni a trovarci per informazioni dettagliate, mappe dei sentieri
            e consigli personalizzati.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contatti" className="btn btn-teal">Vieni a Trovarci</Link>
            <a
              href="https://maps.google.com/?q=Capo+di+Lago+Darfo+Boario+Terme"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white"
            >
              Indicazioni
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
