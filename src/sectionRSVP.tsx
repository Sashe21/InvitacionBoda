"use client"

import type React from "react"
import { useState } from "react"
import { Send, Check, X, User, MessageSquare, AlertCircle } from "lucide-react"

export default function SectionRSVP() {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

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

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.name.trim())
      formDataToSend.append("attendance", formData.attendance === "yes" ? "Sí confirma" : "No confirma")
      formDataToSend.append("message", formData.message.trim() || "Sin mensaje")
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

      // Replace this URL with your Google Apps Script web app URL
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyT_I9RRrA15rz7Wm-mLrLUpZPmTnRksHOpX3_Y0DX9CLcho1AKSnuqhjcB_G8mxyWE/exec"

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
        setFormData({ name: "", attendance: "", message: "" })
        setIsSubmitted(false)
      }, 4000)
    } catch (error) {
      console.error("Error al enviar:", error)
      setError("Hubo un problema al enviar tu confirmación. Por favor intenta de nuevo o contacta al 341-134-8420.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name.trim().length >= 2 && formData.attendance

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#fffaef" }}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-[#1a385f] to-transparent flex-1"></div>
            <div className="mx-4 sm:mx-6 p-3 rounded-full" style={{ backgroundColor: "#1a385f" }}>
              <Send className="w-5 h-5 sm:w-6 sm:h-6 text-[#fffaef]" />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#1a385f] to-transparent flex-1"></div>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 font-serif" style={{ color: "#1a385f" }}>
            Confirmación de Asistencia
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg mx-auto">
            Por favor confirma tu asistencia a nuestra boda. Tu presencia es muy importante para nosotros.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-100">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-green-600 mb-2">¡Confirmación Recibida!</h3>
              <p className="text-gray-600">Gracias por confirmar tu asistencia. ¡Te esperamos con mucho cariño!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-3" style={{ color: "#1a385f" }}>
                  <User className="w-4 h-4 inline mr-2" />
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  minLength={2}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1a385f] focus:outline-none transition-colors text-gray-800 placeholder-gray-400"
                  placeholder="Escribe tu nombre completo"
                />
              </div>

              {/* Attendance Buttons */}
              <div>
                <label className="block text-sm font-semibold mb-4" style={{ color: "#1a385f" }}>
                  ¿Confirmas tu asistencia? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <button
                    type="button"
                    onClick={() => handleAttendanceChange("yes")}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 flex items-center justify-center space-x-2 ${
                      formData.attendance === "yes"
                        ? "border-green-500 bg-green-50 text-green-700 shadow-md"
                        : "border-gray-200 hover:border-green-300 text-gray-600 hover:bg-green-50"
                    }`}
                  >
                    <Check className="w-5 h-5" />
                    <span className="font-semibold">Sí, confirmo</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleAttendanceChange("no")}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 flex items-center justify-center space-x-2 ${
                      formData.attendance === "no"
                        ? "border-red-500 bg-red-50 text-red-700 shadow-md"
                        : "border-gray-200 hover:border-red-300 text-gray-600 hover:bg-red-50"
                    }`}
                  >
                    <X className="w-5 h-5" />
                    <span className="font-semibold">No puedo asistir</span>
                  </button>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-3" style={{ color: "#1a385f" }}>
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Mensaje (Opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1a385f] focus:outline-none transition-colors text-gray-800 placeholder-gray-400 resize-none"
                  placeholder="Déjanos un mensaje especial... (máximo 500 caracteres)"
                />
                <div className="text-right text-xs text-gray-500 mt-1">{formData.message.length}/500</div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center space-x-2 ${
                  isFormValid && !isSubmitting
                    ? "bg-[#1a385f] hover:bg-[#2a4a6f] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Confirmación</span>
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">* Campos obligatorios</p>
            </form>
          )}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-sm text-gray-600">
            Si tienes alguna pregunta o problema, contáctanos al{" "}
            <a
              href="tel:341-134-8420"
              className="font-semibold hover:underline transition-colors"
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
