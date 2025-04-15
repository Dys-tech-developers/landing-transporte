"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

const images = [
  {
    url: "/1.png",
    alt: "Camión en ruta",
    title: "Transporte Seguro",
    description: "Cada unidad cuenta con seguro de carga activo durante todo el trayecto.",
  },
  {
    url: "/2.png",
    alt: "Monitoreo GPS",
    title: "Monitoreo Satelital",
    description: "Seguimiento en tiempo real de nuestras unidades para tu tranquilidad.",
  },

  
  {
    url: "/9.png",
    alt: "Registro digital",
    title: "Registro de Cargas",
    description: "Toda la información del viaje disponible, organizada y documentada.",
  },
  {
    url: "/5.png",
    alt: "Vehículo refrigerado",
    title: "Condiciones adaptadas",
    description: "Adaptamos el transporte según el tipo de animal o carga específica.",
  },
  {
    url: "/4.png",
    alt: "Ruta abierta",
    title: "Trayectos largos o cortos",
    description: "Viajes locales y de larga distancia con la misma calidad y compromiso.",
  },
  {
    url: "/3.png",
    alt: "Cuidado animal",
    title: "Bienestar Animal",
    description: "Cuidamos cada detalle para garantizar la seguridad y comodidad del animal.",
  },
  
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    let interval
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying, currentIndex])

  return (
    <section
      id="servicios"
      className="py-16 bg-white"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#146c2c]">Nuestros Servicios</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-6xl mx-auto">
            Conocé las soluciones que ofrecemos para asegurar un traslado responsable, monitoreado y eficiente.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div className="relative h-[300px] md:h-[500px]">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentIndex ? 1 : 0 }}
                  exit={{ opacity: 0 }}
                >
                  <img src={image.url || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 md:p-8 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold">{image.title}</h3>
                    <p className="mt-2 text-sm md:text-base max-w-2xl">{image.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-[#146c2c] p-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Anterior"
            role="button"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-[#146c2c] p-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Siguiente"
            role="button"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-4 w-4 mx-1 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  index === currentIndex ? "bg-[#27d757]" : "bg-[#b4dcbc]"
                }`}
                aria-label={`Ir a la diapositiva ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carousel

