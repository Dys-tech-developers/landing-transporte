"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    url: "/1.png",
    alt: "Camión en ruta",
    title: "Transporte Seguro",
    description: "Cada unidad cuenta con seguro de carga activo durante todo el trayecto.",
  },
  {
    url: "/3.png",
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
    url: "/tolvalateral.jpeg",
    alt: "Vehículo refrigerado",
    title: "Condiciones adaptadas",
    description: "Adaptamos el transporte según el tipo de animal o carga específica.",
  },
  {
    url: "/rojooo.jpeg",
    alt: "Ruta abierta",
    title: "Distancias",
    description: "Viajes locales y de larga distancia con la misma calidad y compromiso.",
  },
  {
    url: "/4.png",
    alt: "Cuidado animal",
    title: "Bienestar Animal",
    description: "Cuidamos cada detalle para garantizar la seguridad y comodidad del animal.",
  },
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const isTransitioning = useRef(false)
  const sliderRef = useRef(null)

  const goToSlide = (index) => {
    if (isTransitioning.current || index === currentIndex) return
    setIsAutoPlaying(false)
    isTransitioning.current = true
    setCurrentIndex(index)
    setTimeout(() => {
      isTransitioning.current = false
      setIsAutoPlaying(true)
    }, 600)
  }

  const nextSlide = () => {
    goToSlide((currentIndex + 1) % images.length)
  }

  const prevSlide = () => {
    goToSlide((currentIndex - 1 + images.length) % images.length)
  }

  useEffect(() => {
    let interval
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  return (
    <section
      id="servicios"
      className="py-16 bg-white"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl shadow-xl p-2 md:p-6">
          <div className="w-full overflow-hidden">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-[300px] md:h-[500px] object-cover object-center rounded-2xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white bg-gradient-to-t from-black via-black/80 to-transparent">
                    <h3 className="text-2xl md:text-3xl font-bold">{image.title}</h3>
                    <p className="mt-2 text-sm md:text-base max-w-2xl">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-[#146c2c] p-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-[#146c2c] p-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

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