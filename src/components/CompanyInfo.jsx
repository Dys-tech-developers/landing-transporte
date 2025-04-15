import { MapPin, Phone, Mail, Clock } from "lucide-react";

const CompanyInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#146c2c]">Nuestra Ubicación</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-6xl mx-auto">
            Estamos estratégicamente ubicados para brindarte el mejor servicio. ¡Visítanos o contáctanos!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6 bg-[#b4d5c4]/10 p-6 rounded-2xl">
            <div>
              <h3 className="text-xl font-bold text-[#146c2c] flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-[#27d757]" />
                Dirección
              </h3>
              <p className="mt-2 text-gray-600">
                Elsa Diez N°185
                <br />
                Villa Moquehua, Chivilcoy
                <br />
                Buenos Aires, Argentina
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#146c2c] flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#27d757]" />
                Teléfono
              </h3>
              <p className="mt-2 text-gray-600">
                2227 627929
                <br />
                2227 623925
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#146c2c] flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#27d757]" />
                Correo Electrónico
              </h3>
              <p className="mt-2 text-gray-600">
                <a href="mailto:transporterory@gmail.com" className="text-blue-600 hover:underline">
                  transporterory@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#146c2c] flex items-center">
                <Clock className="h-5 w-5 mr-2 text-[#27d757]" />
                Horario de Atención
              </h3>
              <p className="mt-2 text-gray-600">
                Presencial: 08:00 a 12:30 y de 16:00 a 19:30
                <br />
                Telefónica: Disponible las 24hs
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.1145938323983!2d-60.07584192482826!3d-34.705496472906834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95be128088474ad9%3A0xf60d5c3b5186ea6f!2sElsa%20Diez%20185%2C%20Moquehu%C3%A1%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1713120650405!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Transporte Rory"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
