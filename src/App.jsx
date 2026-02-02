import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'
import LagoMoro from './pages/LagoMoro'
import Menu from './pages/Menu'
import Territorio from './pages/Territorio'
import Contatti from './pages/Contatti'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-bianco-pietra">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/lago-moro" element={<LagoMoro />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/territorio" element={<Territorio />} />
            <Route path="/contatti" element={<Contatti />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
