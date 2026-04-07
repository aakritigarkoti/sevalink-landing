"use client";

import { motion } from "framer-motion";
import { Building2, Truck, User, ArrowRight } from "lucide-react";
import Link from "next/link";

const partnerTypes = [
  {
    icon: Building2,
    title: "Hospitals & Clinics",
    description:
      "Partner with SevaLink to receive pre-informed patient arrivals, reduce ER wait times, and coordinate with incoming ambulances in real time.",
    color: "bg-red-50",
    iconColor: "text-red-600",
    border: "border-red-100",
  },
  {
    icon: Truck,
    title: "Fleet Companies",
    description:
      "Register your ambulance fleet on SevaLink. Get consistent booking demand, driver management tools, and a transparent earnings dashboard.",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
    border: "border-orange-100",
  },
  {
    icon: User,
    title: "Independent Drivers",
    description:
      "Own an ambulance? Join as an independent driver. Receive dispatch offers in your area, manage your availability, and earn on your schedule.",
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    border: "border-amber-100",
  },
];

export function PartnersSection() {
  return (
    <section className="min-h-fit flex items-center landing-section-spacing bg-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-[10px] sm:text-[11px] font-black tracking-widest uppercase mb-3 sm:mb-4">
            Partner Network
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Building India&apos;s{" "}
            <span className="text-red-600">Emergency Network</span>
          </h2>
          <p className="text-gray-500 mt-3 sm:mt-4 text-xs sm:text-base lg:text-lg max-w-2xl mx-auto">
            SevaLink connects hospitals, fleet operators, and independent
            drivers into a single coordinated response system. Join us as we
            expand across India.
          </p>
        </motion.div>

        {/* Partner Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {partnerTypes.map((partner, i) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={partner.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl border ${partner.border} bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300`}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${partner.color} mb-5`}
                >
                  <Icon className={`w-6 h-6 ${partner.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {partner.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {partner.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/provider"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-full font-bold text-sm hover:bg-red-700 transition-colors duration-200 shadow-lg shadow-red-100"
          >
            Become a SevaLink Partner
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="mt-4 text-xs text-gray-400">
            No fees to join. Approval required. Currently onboarding partners in
            Rajkot, Gujarat.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
