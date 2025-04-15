"use client"

import { motion } from "framer-motion"

const brands = [
  { logo: "/fumisem.PNG", alt: "Fumisem" },
  { logo: "/biofarma.jpg", alt: "Biofarma" },
  { logo: "/danbred.jpg", alt: "DanBred" },
]

const BrandShowcase = () => {
  return (
    <section id="marcas" className="py-16 bg-[#fff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#146c2c]">Confían en nosotros</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-6xl mx-auto">
            Trabajamos junto a marcas líderes del sector para garantizar calidad, seguridad y cumplimiento en cada traslado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center h-40"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={brand.logo}
                alt={brand.alt}
                className="max-h-24 max-w-full object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandShowcase

