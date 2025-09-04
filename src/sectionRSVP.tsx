"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Send, Check, X, User, MessageSquare, AlertCircle } from "lucide-react"

export default function SectionRSVP() {
  const [formData, setFormData] = useState({
    name1: "",
    name2: "",
    name3: "",
    attendance: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, 500)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("rsvp-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (error) setError("")
  }

  const handleAttendanceChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      attendance: value,
    }))
    if (error) setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    if (!formData.message.trim()) {
      setError("El mensaje es obligatorio. Por favor escribe algo especial para nosotros.")
      setIsSubmitting(false)
      return
    }

    try {
      const formDataToSend = new FormData()
      const allNames = [formData.name1.trim(), formData.name2.trim(), formData.name3.trim()]
        .filter((name) => name.length > 0)
        .join(", ")

      formDataToSend.append("name", allNames)
      formDataToSend.append("attendance", formData.attendance === "yes" ? "Sí confirma" : "No confirma")
      formDataToSend.append("message", formData.message.trim())
      formDataToSend.append(
        "timestamp",
        new Date().toLocaleString("es-MX", {
          timeZone: "America/Mexico_City",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
      )

      const GOOGLE_SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbxXj0m8fJRas9fwjFeYV5-PW8PG0rLknkpbCd3kvUbj03uFFni2RT5ne6q0YYJhZ7OoHg/exec" // Reemplaza con tu nueva URL de Google Apps Script

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors", // Required for Google Apps Script
      })

      // Since we're using no-cors, we can't check response status
      // We'll assume success if no error is thrown
      setIsSubmitted(true)

      // Reset form after 4 seconds
      setTimeout(() => {
        setFormData({ name1: "", name2: "", name3: "", attendance: "", message: "" })
        setIsSubmitted(false)
      }, 4000)
    } catch (error) {
      console.error("Error al enviar:", error)
      setError("Hubo un problema al enviar tu confirmación. Por favor intenta de nuevo o contacta al 341-134-8420.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid =
    (formData.name1.trim().length >= 2 || formData.name2.trim().length >= 2 || formData.name3.trim().length >= 2) &&
    formData.attendance &&
    formData.message.trim().length > 0 // Added message validation to form validity check

  return (
    <section
      id="rsvp-section"
      className="pt-0 pb-8 sm:pb-12 md:pb-16 px-3 sm:px-4 md:px-6 lg:px-8"
      style={{ backgroundColor: "#fffaef" }}
    >
      <div className="max-w-xs sm:max-w-lg md:max-w-2xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-6 sm:mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-[#1a385f] to-transparent flex-1"></div>
            <div
              className={`mx-3 sm:mx-4 md:mx-6 p-2 sm:p-3 rounded-full transition-all duration-700 delay-300 ${isVisible ? "scale-100 rotate-0" : "scale-75 rotate-45"}`}
              style={{ backgroundColor: "#1a385f" }}
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#fffaef]" />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#1a385f] to-transparent flex-1"></div>
          </div>

          <h2
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 font-brandley px-2 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ color: "#1a385f" }}
          >
            Confirmación de Asistencia
          </h2>
          <p
            className={`text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-xs sm:max-w-sm md:max-w-lg mx-auto px-2 sm:px-4 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Por favor confirma tu asistencia a nuestra boda. Tu presencia es muy importante para nosotros.
          </p>
        </div>

        {/* Form */}
        <div
          className={`bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 border border-gray-100 transition-all duration-1000 delay-900 hover:shadow-2xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {isSubmitted ? (
            <div className="text-center py-6 sm:py-8 animate-in fade-in duration-500">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-bounce">
                <Check className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 mb-2">¡Confirmación Recibida!</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                Gracias por confirmar tu asistencia. ¡Te esperamos con mucho cariño!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 md:space-y-8">
              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4 flex items-start space-x-2 sm:space-x-3 animate-in slide-in-from-top duration-300">
                  <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700 text-xs sm:text-sm">{error}</p>
                </div>
              )}

              <div className="space-y-3 sm:space-y-4">
                <label className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3" style={{ color: "#1a385f" }}>
                  <User className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                  Nombres Completos * (mínimo uno requerido)
                </label>

                <input
                  type="text"
                  id="name1"
                  name="name1"
                  value={formData.name1}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:border-[#1a385f] focus:outline-none focus:ring-2 focus:ring-[#1a385f]/20 transition-all duration-300 text-gray-800 placeholder-gray-400 text-sm sm:text-base hover:border-gray-300 transform focus:scale-[1.02]"
                  placeholder="Nombre completo"
                />

                <input
                  type="text"
                  id="name2"
                  name="name2"
                  value={formData.name2}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:border-[#1a385f] focus:outline-none focus:ring-2 focus:ring-[#1a385f]/20 transition-all duration-300 text-gray-800 placeholder-gray-400 text-sm sm:text-base hover:border-gray-300 transform focus:scale-[1.02]"
                  placeholder="Nombre completo"
                />

                <input
                  type="text"
                  id="name3"
                  name="name3"
                  value={formData.name3}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:border-[#1a385f] focus:outline-none focus:ring-2 focus:ring-[#1a385f]/20 transition-all duration-300 text-gray-800 placeholder-gray-400 text-sm sm:text-base hover:border-gray-300 transform focus:scale-[1.02]"
                  placeholder="Nombre completo"
                />
              </div>

              {/* Attendance Buttons */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-3 sm:mb-4" style={{ color: "#1a385f" }}>
                  ¿Confirmas tu asistencia? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  <button
                    type="button"
                    onClick={() => handleAttendanceChange("yes")}
                    className={`p-3 sm:p-4 rounded-lg border-2 transition-all duration-300 flex items-center justify-center space-x-1 sm:space-x-2 text-sm sm:text-base transform hover:scale-105 active:scale-95 ${
                      formData.attendance === "yes"
                        ? "border-green-500 bg-green-50 text-green-700 shadow-lg scale-105"
                        : "border-gray-200 hover:border-green-300 text-gray-600 hover:bg-green-50 hover:shadow-md"
                    }`}
                  >
                    <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-semibold">Sí, confirmo</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleAttendanceChange("no")}
                    className={`p-3 sm:p-4 rounded-lg border-2 transition-all duration-300 flex items-center justify-center space-x-1 sm:space-x-2 text-sm sm:text-base transform hover:scale-105 active:scale-95 ${
                      formData.attendance === "no"
                        ? "border-red-500 bg-red-50 text-red-700 shadow-lg scale-105"
                        : "border-gray-200 hover:border-red-300 text-gray-600 hover:bg-red-50 hover:shadow-md"
                    }`}
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-semibold">No puedo asistir</span>
                  </button>
                </div>
              </div>

              {/* Conditional Image Display */}
              {formData.attendance === "no" && (
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-200 rounded-xl p-4 sm:p-6 text-center animate-in slide-in-from-top duration-500">
                  <div className="mb-4">
                    <img
                      src="/images/NCon.jpg"
                      alt="No digas no todavía"
                      className="mx-auto rounded-lg shadow-md max-w-full h-auto"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-pink-600 mb-2">¡Espera un momento! 💕</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    No digas &quot;no&quot; todavía... ¡Aún tienes tiempo para pensarlo! Nos encantaría tenerte con nosotros en
                    este día tan especial.
                  </p>
                </div>
              )}

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3"
                  style={{ color: "#1a385f" }}
                >
                  <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  maxLength={500}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:border-[#1a385f] focus:outline-none focus:ring-2 focus:ring-[#1a385f]/20 transition-all duration-300 text-gray-800 placeholder-gray-400 resize-none text-sm sm:text-base hover:border-gray-300 transform focus:scale-[1.02]"
                  placeholder="Déjanos un mensaje especial... (obligatorio, máximo 500 caracteres)"
                />
                <div className="text-right text-xs text-gray-500 mt-1">{formData.message.length}/500</div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-1 sm:space-x-2 text-sm sm:text-base transform ${
                  isFormValid && !isSubmitting
                    ? "bg-[#1a385f] hover:bg-[#2a4a6f] shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 active:scale-95"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Enviar Confirmación</span>
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">* Campos obligatorios</p>
            </form>
          )}
        </div>

        {/* Footer Note */}
        <div
          className={`text-center mt-4 sm:mt-6 md:mt-8 transition-all duration-1000 delay-1100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <p className="text-xs sm:text-sm text-gray-600 px-2 sm:px-4">
            Si tienes alguna pregunta o problema, contáctanos al{" "}
            <a
              href="tel:341-134-8420"
              className="font-semibold hover:underline transition-all duration-300 hover:scale-105 inline-block"
              style={{ color: "#1a385f" }}
            >
              341-134-8420
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
