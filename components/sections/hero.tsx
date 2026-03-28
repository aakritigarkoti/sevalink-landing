'use client';

import Image from "next/image";
import Link from "next/link";
import { Ambulance, CheckCircle2, HousePlus } from "lucide-react";
import { FloatingMedicalIcons } from "../ui/medical-background";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-4 sm:pt-8 md:pt-10">
      <FloatingMedicalIcons />
      <div className="absolute inset-0 z-0 bg-white/45" />
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-8 relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight">
              Book <span className="text-red-600">Ambulance</span> &amp; <span className="text-emerald-600">Homecare</span> Services in Minutes
            </h1>
            <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Fast, reliable healthcare at your doorstep - anytime, anywhere.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="h-full rounded-3xl border border-red-100 bg-white/95 shadow-[0_16px_40px_rgba(15,23,42,0.08)] p-6 sm:p-7 flex flex-col">
              <div className="relative h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden border border-red-100/80">
                <span className="absolute top-3 left-3 z-10 inline-flex w-fit items-center rounded-full bg-red-100/95 text-red-700 px-3 py-1 text-[11px] font-bold uppercase tracking-wide shadow-sm">
                  Emergency
                </span>
                <Image
                  src="/images/ambulance.png"
                  alt="Ambulance service"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed flex-1">
                Nearest verified ambulance at your location in minutes. Real-time GPS tracking and 24/7 availability.
              </p>
              <Link
                href="/#services"
                className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-red-600 px-6 text-sm font-bold !text-white visited:!text-white hover:!text-white active:!text-white shadow-md transition-colors hover:bg-red-700"
              >
                <Ambulance className="h-4 w-4" />
                Book Ambulance
              </Link>
            </article>

            <article className="h-full rounded-3xl border border-emerald-100 bg-white/95 shadow-[0_16px_40px_rgba(15,23,42,0.08)] p-6 sm:p-7 flex flex-col">
              <div className="relative h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden border border-emerald-100/80">
                <span className="absolute top-3 left-3 z-10 inline-flex w-fit items-center rounded-full bg-emerald-100/95 text-emerald-700 px-3 py-1 text-[11px] font-bold uppercase tracking-wide shadow-sm">
                  Home Care
                </span>
                <Image
                  src="/images/homecare.avif"
                  alt="Homecare service"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed flex-1">
                Nursing care, elderly support, and doctor home visits. Quality healthcare by verified professionals.
              </p>
              <Link
                href="/services#homecare"
                className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 text-sm font-bold !text-white visited:!text-white hover:!text-white active:!text-white shadow-md transition-colors hover:bg-emerald-700"
              >
                <HousePlus className="h-4 w-4" />
                Book Home Care
              </Link>
            </article>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {[
              "24/7 Available",
              "Verified Providers",
              "Quick Response",
            ].map((item) => (
              <div key={item} className="inline-flex items-center gap-2 rounded-full bg-white/85 border border-gray-200 px-3 py-1.5 text-sm font-semibold text-gray-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
