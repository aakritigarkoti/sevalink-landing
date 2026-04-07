"use client";

import { motion } from "framer-motion";
import { Check, Clock } from "lucide-react";

const cities = [
  { name: "Rajkot", status: "active" },
  { name: "Ahmedabad", status: "coming" },
  { name: "Vadodara", status: "coming" },
  { name: "Surat", status: "coming" },
];

export function ServiceAvailabilitySection() {
  return (
    <section className="w-full min-h-fit flex items-center landing-section-spacing bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4">
            Trusted in Rajkot.<br />
            <span className="text-red-600">Expanding Across Gujarat.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            SevaLink is currently live in Rajkot, delivering fast ambulance and homecare services. We are expanding soon to Ahmedabad, Vadodara, and other major cities across Gujarat.
          </p>
        </motion.div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cities.map((city, i) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center transition-all duration-300 ${
                city.status === "active"
                  ? "bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 shadow-lg shadow-green-100"
                  : "bg-gray-50 border border-gray-200 shadow-sm"
              }`}
            >
              {/* Badge */}
              <div className="mb-4 flex justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold ${
                    city.status === "active"
                      ? "bg-green-600 text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {city.status === "active" ? (
                    <>
                      <Check size={14} strokeWidth={3} />
                      Active
                    </>
                  ) : (
                    <>
                      <Clock size={14} />
                      Coming Soon
                    </>
                  )}
                </motion.div>
              </div>

              {/* City Name */}
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
                {city.name}
              </h3>

              {/* Descriptive Text */}
              <p className="text-xs sm:text-sm text-gray-600">
                {city.status === "active"
                  ? "Available now"
                  : "Launching soon"}
              </p>

              {/* Background Accent */}
              {city.status === "active" && (
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-200 rounded-full blur-2xl opacity-20 -z-10" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Service not available in your city yet?{" "}
            <span className="font-bold text-red-600">Get notified</span> when we launch near you.
          </p>
          <form
            name="notify-me"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input type="hidden" name="form-name" value="notify-me" />
            <p className="hidden"><label>Do not fill: <input name="bot-field" /></label></p>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 rounded-full border border-gray-300 bg-white px-5 py-3 text-sm text-gray-900 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            />
            <button
              type="submit"
              className="rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white hover:bg-red-700 transition-colors whitespace-nowrap"
            >
              Notify Me
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
