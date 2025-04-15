"use client"

import { useState } from "react"
import { Send } from "lucide-react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido"
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono es requerido"
    }

    if (!formData.service) {
      newErrors.service = "Seleccione un servicio"
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validate()) {
      setIsSubmitting(true)

      // Simulación de envío de formulario
      setTimeout(() => {
        setIsSubmitting(false)
        setSubmitSuccess(true)

        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false)
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          })
        }, 3000)
      }, 1500)
    }
  }

  return (
    <section id="contacto" className="py-16 md:py-24 bg-[#b4dcbc]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#146c2c]">Contáctanos</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-6xl mx-auto">
            ¿Tienes alguna pregunta o necesitas un servicio de transporte? Completa el formulario y nos pondremos en
            contacto contigo lo antes posible.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 sm:p-10">
              {submitSuccess ? (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#27d757]/20 text-[#27d757] mb-4">
                    <Send className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#146c2c]">¡Mensaje Enviado!</h3>
                  <p className="mt-2 text-gray-600">
                    Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? "border-red-500" : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-[#27d757] focus:border-transparent`}
                        placeholder="Tu nombre"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-500" : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-[#27d757] focus:border-transparent`}
                        placeholder="tu@email.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? "border-red-500" : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-[#27d757] focus:border-transparent`}
                        placeholder="Tu número de teléfono"
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Servicio requerido *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.service ? "border-red-500" : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-[#27d757] focus:border-transparent`}
                      >
                        <option value="">Selecciona un servicio</option>
                        <option value="seguro_carga">Seguro de carga durante el trayecto</option>
                        <option value="monitoreo_satelital">Monitoreo satelital de la unidad</option>
                        <option value="sistema_riego">Sistema de riego</option>
                        <option value="registro_cargas">Registro e informes de carga</option>
                      </select>
                      {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service}</p>}
                    </div>

                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-[#27d757] focus:border-transparent`}
                      placeholder="Cuéntanos sobre tus necesidades de transporte"
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#27d757] hover:bg-[#146c2c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#27d757] transition-colors duration-300 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar Mensaje
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
