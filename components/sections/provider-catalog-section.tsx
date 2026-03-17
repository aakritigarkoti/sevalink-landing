"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Ambulance, Users, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ProviderCard = {
  title: string;
  href: string;
  description: string;
  buttonText: string;
  icon: LucideIcon;
  iconBg: string;
};

const providers: ProviderCard[] = [
  {
    title: "Hospital",
    href: "/provider/hospital",
    description:
      "Register your hospital to receive emergency patient requests, manage incoming ambulances, and allocate resources efficiently.",
    buttonText: "Join Now",
    icon: Building2,
    iconBg: "from-red-500 to-orange-500",
  },
  {
    title: "Individual Driver",
    href: "/provider/driver",
    description:
      "Join as an independent ambulance driver, accept nearby emergency requests, and earn by providing fast response services.",
    buttonText: "Join Now",
    icon: Ambulance,
    iconBg: "from-rose-500 to-red-500",
  },
  {
    title: "Fleet Owner",
    href: "/provider/fleet",
    description:
      "Manage multiple ambulances and drivers, accept fallback emergency requests, and grow your ambulance network.",
    buttonText: "Join Now",
    icon: Users,
    iconBg: "from-orange-500 to-amber-500",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function ProviderCatalogSection() {
  return (
    <section className="relative overflow-hidden landing-section-spacing">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_18%,rgba(255,165,120,0.16),transparent_45%),radial-gradient(circle_at_86%_16%,rgba(255,110,110,0.13),transparent_42%),linear-gradient(180deg,#fff8ef_0%,#ffeedc_58%,#ffe7d2_100%)]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-14"
        >
          <p className="mb-3 inline-block rounded-full bg-red-100 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-red-600">
            Provider Network
          </p>
          <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl">Join as a Provider</h1>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            Partner with us to provide emergency healthcare services and grow your network.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch">
          {providers.map((provider, index) => {
            const Icon = provider.icon;

            return (
              <motion.div
                key={provider.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="h-full"
              >
                <Link
                  href={provider.href}
                  className="group block h-full rounded-3xl border border-orange-200/80 bg-gradient-to-br from-white via-[#fff7ee] to-[#ffe8d0] p-6 shadow-[0_8px_24px_rgba(192,110,60,0.11)] transition-all duration-350 ease-out will-change-transform hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(192,110,60,0.22)]"
                >
                  <div className="flex h-full flex-col">
                    <div
                      className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${provider.iconBg} text-white shadow-lg`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>

                    <h2 className="text-2xl font-black tracking-tight text-gray-900">{provider.title}</h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                      {provider.description}
                    </p>

                    <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white transition-colors duration-300 group-hover:bg-red-600">
                      {provider.buttonText}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
