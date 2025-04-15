import { Truck, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative py-24 md:py-32  bg-[url('/1.png')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* CONTENIDO IZQUIERDO */}
          <motion.div
            className="space-y-6 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Transporte especializado de animales y carga, con el máximo cuidado
            </h1>
            <p className="text-lg text-gray-100">
              Desde 2015, recorremos rutas nacionales e internacionales cuidando cada detalle. Somos expertos en el traslado de animales (bovinos, porcinos, equinos) y cereales, garantizando seguridad, puntualidad y bienestar en cada kilómetro.
            </p>
            <p className="italic text-[#b4dcbc] text-xl font-semibold">
              “Un largo camino, siempre con el mismo cuidado”
            </p>
            <div className="flex flex-wrap gap-6 justify-start">
              <motion.a
                href="#contacto"
                className="bg-[#27d757] hover:bg-[#146c2c] text-white px-8 py-4 rounded-full text-lg font-medium transition-colors duration-300 inline-flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                Solicitar Servicio
              </motion.a>
              <motion.a
                href="#nosotros"
                className="bg-white border-2 border-[#5a8d67] text-[#5a8d67] hover:bg-[#5a8d67] hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-colors duration-300 inline-flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                Conocer Nuestra Historia
              </motion.a>
            </div>
          </motion.div>

          {/* Espacio derecho reservado (imagen o decorativo futuro) */}
          <div></div>
        </div>

       
      </div>
    </section>
  );
};

export default Hero;


