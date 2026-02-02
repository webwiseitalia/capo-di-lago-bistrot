import { Link } from 'react-router-dom'
import logo from '../assets/logobistrotlagomoro.webp'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--navy-deep)] text-white">
      {/* Main Footer */}
      <div className="section-sm border-b border-white/10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/">
                <img
                  src={logo}
                  alt="Capo di Lago Bistrot"
                  className="h-16 brightness-0 invert opacity-80 mb-6"
                />
              </Link>
              <p className="text-white/50 text-sm leading-relaxed">
                Bar, ristorante e punto di ritrovo sulle rive del Lago Moro.
                Aperto 365 giorni l'anno.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="label text-white/40 mb-6">Esplora</h4>
              <nav className="flex flex-col gap-3">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/chi-siamo', label: 'Chi Siamo' },
                  { to: '/lago-moro', label: 'Lago Moro' },
                  { to: '/menu', label: 'Menu' },
                  { to: '/territorio', label: 'Territorio' },
                  { to: '/contatti', label: 'Contatti' },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-white/60 hover:text-[var(--teal)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="label text-white/40 mb-6">Contatti</h4>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Indirizzo</p>
                  <p className="text-white/70">
                    Via Capo di Lago<br />
                    25047 Darfo Boario Terme (BS)
                  </p>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Telefono</p>
                  <a href="tel:+390364123456" className="text-white/70 hover:text-[var(--teal)] transition-colors">
                    +39 0364 123 456
                  </a>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:info@capodilago.it" className="text-white/70 hover:text-[var(--teal)] transition-colors">
                    info@capodilago.it
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h4 className="label text-white/40 mb-6">Orari</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-white/70">
                  <span>Lun - Ven</span>
                  <span>7:00 - 22:00</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Sab - Dom</span>
                  <span>8:00 - 23:00</span>
                </div>
                <div className="pt-4 mt-4 border-t border-white/10">
                  <p className="text-[var(--teal)] text-xs uppercase tracking-wider">
                    Aperto 365 giorni l'anno
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-xs">
              © {year} Capo di Lago Bistrot. Tutti i diritti riservati.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[var(--teal)] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[var(--teal)] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>

            <p className="text-white/20 text-xs">
              Gestito da MadHops S.r.l.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
