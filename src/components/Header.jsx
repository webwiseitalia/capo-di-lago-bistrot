import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logobistrotlagomoro.webp'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/chi-siamo', label: 'Chi Siamo' },
    { to: '/lago-moro', label: 'Lago Moro' },
    { to: '/menu', label: 'Menu' },
    { to: '/territorio', label: 'Territorio' },
    { to: '/contatti', label: 'Contatti' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm'
            : 'bg-gradient-to-b from-black/50 to-transparent py-6'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative z-50">
              <img
                src={logo}
                alt="Capo di Lago Bistrot"
                className={`transition-all duration-500 ${
                  isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-14'
                } ${isMobileMenuOpen ? 'brightness-0 invert' : ''}`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm tracking-wide transition-colors ${
                      isScrolled
                        ? isActive ? 'text-[var(--teal)]' : 'text-[var(--navy)] hover:text-[var(--teal)]'
                        : isActive ? 'text-[var(--teal-light)]' : 'text-white hover:text-[var(--teal-light)]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA - Desktop */}
            <Link
              to="/contatti"
              className={`hidden lg:block btn btn-primary text-xs py-3 px-6 ${
                isScrolled ? '' : 'bg-white/10 border-white/30 text-white hover:bg-white hover:text-[var(--navy)]'
              }`}
            >
              Prenota
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
              aria-label="Menu"
            >
              <div className="flex flex-col items-end gap-1.5">
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 6, width: 24 } : { rotate: 0, y: 0, width: 24 }}
                  className={`block h-[2px] rounded-full transition-colors ${
                    isMobileMenuOpen ? 'bg-white' : isScrolled ? 'bg-[var(--navy)]' : 'bg-white'
                  }`}
                  style={{ width: 24 }}
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: 16 }}
                  className={`block h-[2px] rounded-full transition-colors ${
                    isMobileMenuOpen ? 'bg-white' : isScrolled ? 'bg-[var(--navy)]' : 'bg-white'
                  }`}
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -6, width: 24 } : { rotate: 0, y: 0, width: 20 }}
                  className={`block h-[2px] rounded-full transition-colors ${
                    isMobileMenuOpen ? 'bg-white' : isScrolled ? 'bg-[var(--navy)]' : 'bg-white'
                  }`}
                  style={{ width: 20 }}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--navy)]"
          >
            <div className="h-full flex flex-col items-center justify-center px-6">
              <nav className="flex flex-col items-center gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                  >
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `font-display text-3xl md:text-4xl transition-colors ${
                          isActive ? 'text-[var(--teal)]' : 'text-white hover:text-[var(--teal)]'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-12 text-center"
              >
                <Link to="/contatti" className="btn btn-teal">
                  Prenota un Tavolo
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="mt-12 text-center text-white/40"
              >
                <p className="text-sm">+39 0364 123 456</p>
                <p className="text-sm">info@capodilago.it</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
