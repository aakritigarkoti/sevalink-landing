"use client";
import { Check } from "lucide-react";
import { FloatingMedicalIcons } from "@/components/ui/medical-background";
import { useRef, useEffect, useState } from "react";

const points = [
  "10 Min Response Time",
  "Real-Time GPS Tracking",
  "Family Tracking Link",
  "BLS ALS ICU Neonatal Types",
  "Transparent Pricing",
  "Call Masking Privacy",
  "OTP Verified Drivers",
  "Available 24/7",
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
    <section ref={sectionRef} className="relative py-20 px-4 bg-white overflow-hidden">
      <style>{`
        .ws-heading {
          opacity: 0;
          transform: translateX(-40px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .ws-heading.show {
          opacity: 1;
          transform: translateX(0);
        }
        .ws-image {
          opacity: 0;
          transform: scale(0.85) rotate(2deg);
          transition: opacity 0.7s ease, transform 0.7s ease;
          transition-delay: 0.2s;
        }
        .ws-image.show {
          opacity: 1;
          transform: scale(1) rotate(0deg);
        }
        .ws-card {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .ws-card.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <FloatingMedicalIcons />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Left Content */}
        <div className="flex-1 z-10">
          <h2 className={`ws-heading text-5xl md:text-7xl font-black text-gray-900 mb-10 leading-[0.9] ${visible ? "show" : ""}`}>
            Why Choose <br />
            <span className="text-red-600">SevaLink</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((point, i) => (
              <div
                key={i}
                className={`ws-card flex items-center gap-4 p-5 rounded-2xl bg-[#FEF3E2] border border-orange-100 group hover:border-red-200 transition-colors shadow-sm ${visible ? "show" : ""}`}
                style={{ transitionDelay: visible ? `${i * 0.08}s` : "0s" }}
              >
                <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-200 group-hover:scale-110 transition-transform">
                  <Check className="text-white" size={18} strokeWidth={4} />
                </div>
                <span className="font-black text-gray-800 text-[13px] uppercase tracking-tight">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Doctor Image */}
        <div className="flex-1 relative">
          <div className={`ws-image relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-[12px] border-white bg-gray-100 ${visible ? "show" : ""}`}>
            <img
              src="/images/doctor.jpg"
              alt="Expert Doctor"
              className="w-full h-auto object-cover scale-105"
            />
          </div>

          <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-50 rounded-full blur-3xl -z-10 opacity-60" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-orange-100 rounded-full blur-2xl -z-10 opacity-50" />
        </div>

      </div>
    </section>
  );
}