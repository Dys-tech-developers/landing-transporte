import { Truck, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative bg-[url('/1.png')] flex justify-start items-end bg-cover min-h-[95vh] bg-center bg-no-repeat py-20 md:py-22"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2  items-center">
          
          {/* Columna Izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white space-y-10 flex flex-col justify-between  min-h-[60vh]  "
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Transporte especializado de animales en pie y carga de cereales
              <span className="block text-[#27d757]">con el máximo cuidado</span>
            </h1>

           

            <div className="flex flex-wrap gap-4">
            <p className="italic text-[#b4dcbc] text-lg md:text-xl font-medium">
              “Un largo camino, siempre con el mismo cuidado”
            </p>
              <motion.a
                href="#contacto"
                className="bg-[#27d757] hover:bg-[#146c2c] text-white px-6 py-3 rounded-full text-base md:text-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Solicitar Servicio
              </motion.a>

              <motion.a
                href="#nosotros"
                className="border border-[#fff] text-[#fff] hover:bg-[#b4dcbc] hover:text-black px-6 py-3 rounded-full text-base md:text-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Conocer Nuestra Historia
              </motion.a>
            </div>
          </motion.div>

          
        </div>
      </div>
    </section>
  );
};

export default Hero;
