import {
  Truck,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin
} from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#146c2c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Truck className="h-8 w-8 text-[#27d757]" />
              <span className="ml-2 text-xl font-bold">Transporte Rory</span>
            </div>
            <p className="text-gray-300 mb-4">
              Más de 10 años cuidando lo que más importa: cada trayecto, cada animal, cada cliente.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#27d757] transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#27d757] transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-[#27d757] transition-colors duration-300">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-[#27d757] transition-colors duration-300">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-300 hover:text-[#27d757] transition-colors duration-300">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-[#27d757] transition-colors duration-300">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-[#27d757] transition-colors duration-300">
                  Seguro de Carga
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-[#27d757] transition-colors duration-300">
                  Monitoreo Satelital
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-[#27d757] transition-colors duration-300">
                  Sistema de Riego
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-[#27d757] transition-colors duration-300">
                  Registro de Cargas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#27d757] mr-2 mt-0.5" />
                <span className="text-gray-300">
                  Elsa Diez 185
                  <br />
                  Villa Moquehua, Chivilcoy
                  <br />
                  Buenos Aires, Argentina
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#27d757] mr-2" />
                <span className="text-gray-300">2227 627929 / 2227 623925</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#27d757] mr-2" />
                <span className="text-gray-300">transporterory@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Transporte Rory. Todos los derechos reservados.
          </p>
          <p className="text-gray-300 text-sm mt-2 md:mt-0">
            Desarrollado por Dys-Tech <span className="text-[#27d757]">♥</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
