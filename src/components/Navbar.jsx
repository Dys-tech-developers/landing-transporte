"use client"

import { useState, useEffect } from "react"
import { Menu, X, Home, Briefcase, Users, Mail } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[14vh] items-center">
          <div className="flex items-center">
            <img src="./logotr.png" alt="Logo" className="w-10 h-auto object-contain" />
            <span className={`ml-2 text-xl font-bold transition-colors duration-300 ${scrolled ? "text-[#146c2c]" : "text-white"}`}>
              RORY Transporte
            </span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#inicio"
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition ${
                scrolled ? "text-[#5a8d67] hover:text-[#146c2c]" : "text-white hover:text-[#e2e2e2]"
              }`}
            >
              <Home size={16} />
              Inicio
            </a>
            <a
              href="#servicios"
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition ${
                scrolled ? "text-[#5a8d67] hover:text-[#146c2c]" : "text-white hover:text-[#e2e2e2]"
              }`}
            >
              <Briefcase size={16} />
              Servicios
            </a>
            <a
              href="#nosotros"
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition ${
                scrolled ? "text-[#5a8d67] hover:text-[#146c2c]" : "text-white hover:text-[#e2e2e2]"
              }`}
            >
              <Users size={16} />
              Nosotros
            </a>
            <a
              href="#contacto"
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition ${
                scrolled ? "text-[#5a8d67] hover:text-[#146c2c]" : "text-white hover:text-[#e2e2e2]"
              }`}
            >
              <Mail size={16} />
              Contacto
            </a>
            <a
              href="#contacto"
              className="bg-[#27d757] hover:bg-[#146c2c] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
            >
              Solicitar Servicio
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition ${
                scrolled ? "text-[#5a8d67] hover:text-[#146c2c]" : "text-white hover:text-[#e2e2e2]"
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <a href="#inicio" className="flex items-center gap-2 text-[#5a8d67] hover:text-[#146c2c] px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
              <Home size={16} />
              Inicio
            </a>
            <a href="#servicios" className="flex items-center gap-2 text-[#5a8d67] hover:text-[#146c2c] px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
              <Briefcase size={16} />
              Servicios
            </a>
            <a href="#nosotros" className="flex items-center gap-2 text-[#5a8d67] hover:text-[#146c2c] px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
              <Users size={16} />
              Nosotros
            </a>
            <a href="#contacto" className="flex items-center gap-2 text-[#5a8d67] hover:text-[#146c2c] px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
              <Mail size={16} />
              Contacto
            </a>
            <a href="#contacto" className="block bg-[#27d757] hover:bg-[#146c2c] text-white px-4 py-2 rounded-full text-base font-medium transition-colors duration-300 mt-2" onClick={() => setIsMenuOpen(false)}>
              Solicitar Servicio
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
