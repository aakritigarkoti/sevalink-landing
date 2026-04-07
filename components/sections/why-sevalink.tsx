"use client";
import { Check } from "lucide-react";
import Image from "next/image";
import { FloatingMedicalIcons } from "@/components/ui/medical-background";
import { useRef, useEffect, useState } from "react";

const points = [
  "Instant Emergency Response",
  "All Healthcare in One Platform",
  "Real-Time Tracking & Transparency",
  "Verified & Trusted Providers",
  "Smart & Intelligent Care",
  "Care at Your Doorstep",
  "Easy, Fast & Convenient",
  "24×7 Availability",
];

export function WhySevaLink() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-fit flex items-center landing-section-spacing bg-white overflow-hidden">

      <FloatingMedicalIcons />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20 w-full">

        {/* Left Content */}
        <div className="flex-1 z-10">
          <h2 className={`ws-heading text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6 sm:mb-10 leading-tight ${visible ? "show" : ""}`}>
            Why Choose <br />
            <span className="text-red-600">SevaLink?</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
            {points.map((point, i) => (
              <div
                key={i}
                className={`ws-card flex items-center gap-3 sm:gap-4 p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-[#FEF3E2] border border-orange-100 group hover:border-red-200 transition-colors shadow-sm ${visible ? "show" : ""}`}
                style={{ transitionDelay: visible ? `${i * 0.08}s` : "0s" }}
              >
                <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-200 group-hover:scale-110 transition-transform">
                  <Check className="text-white sm:w-4.5 sm:h-4.5" size={16} strokeWidth={4} />
                </div>
                <span className="font-black text-gray-800 text-[11px] sm:text-[13px] uppercase tracking-tight">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Doctor Image */}
        <div className="flex-1 relative w-full">
          <div className={`ws-image relative z-10 rounded-2xl sm:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-4 sm:border-[12px] border-white bg-gray-100 ${visible ? "show" : ""}`}>
            <Image
              src="/images/doctor.jpg"
              alt="Expert Doctor"
              width={1200}
              height={900}
              className="w-full h-auto object-cover scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-50 rounded-full blur-3xl -z-10 opacity-60" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-orange-100 rounded-full blur-2xl -z-10 opacity-50" />
        </div>

      </div>
    </section>
  );
}