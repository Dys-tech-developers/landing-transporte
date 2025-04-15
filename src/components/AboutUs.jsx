import { Users, Award, Clock, ThumbsUp } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-[#fff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl p-2">
                <img
                  src="/logotr.png"
                  alt="Nuestro equipo"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 md:-right-6 bg-[#27d757] text-white p-4 rounded-xl shadow-lg">
                <p className="text-2xl font-bold">+10</p>
                <p className="text-sm">Años de experiencia</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-block bg-[#b4dcbc] text-[#146c2c] px-4 py-1 rounded-full text-sm font-medium">
              Sobre Nosotros
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#146c2c]">
              Transportamos con respeto, compromiso y trayectoria
            </h2>
            <p className="text-gray-600">
              Con más de una década en el camino, Transporte Rory nació del compromiso con el bienestar animal y la necesidad de ofrecer un servicio especializado, seguro y responsable. Desde 2015, hemos recorrido miles de kilómetros transportando no solo animales, sino también la confianza de quienes nos eligen día a día.
            </p>
            <p className="text-gray-600">
              Trabajamos junto a veterinarios, criadores, productores rurales y asesores, adaptando cada traslado a las necesidades de cada especie. Nuestra flota está equipada y nuestro equipo capacitado para garantizar viajes eficientes, monitoreados y con el máximo respeto por cada ser vivo que transportamos.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="bg-[#27d757]/10 p-2 rounded-full">
                  <Users className="h-6 w-6 text-[#27d757]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#146c2c]">Equipo humano</h4>
                  <p className="text-sm text-gray-600">Profesionales comprometidos</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-[#27d757]/10 p-2 rounded-full">
                  <Award className="h-6 w-6 text-[#27d757]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#146c2c]">Bienestar animal</h4>
                  <p className="text-sm text-gray-600">Transporte con respeto</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-[#27d757]/10 p-2 rounded-full">
                  <Clock className="h-6 w-6 text-[#27d757]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#146c2c]">Puntualidad</h4>
                  <p className="text-sm text-gray-600">Entregas en tiempo y forma</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-[#27d757]/10 p-2 rounded-full">
                  <ThumbsUp className="h-6 w-6 text-[#27d757]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#146c2c]">Confianza</h4>
                  <p className="text-sm text-gray-600">Clientes que vuelven</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
