"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Ambulance,
  Brain,
  MapPin,
  Hospital,
  Users,
  CreditCard,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: Ambulance,
    title: "Emergency Ambulance",
    description: "Nearest BLS/ALS ambulance dispatched within minutes, 24/7.",
    tag: "Most Used",
  },
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description: "Live GPS tracking from dispatch to hospital arrival.",
    tag: null,
  },
  {
    icon: Hospital,
    title: "Hospital Selection",
    description: "AI-powered hospital matching based on emergency type.",
    tag: "AI Powered",
  },
  {
    icon: Users,
    title: "Family Tracking",
    description: "Share live location and updates with family in real time.",
    tag: null,
  },
  {
    icon: Brain,
    title: "BLS/ALS & ICU/Neo",
    description: "Specialized ambulances with trained paramedics for critical care.",
    tag: "Specialized",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "No hidden charges. Know the cost before ambulance arrives.",
    tag: null,
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock helpline for all emergency queries.",
    tag: "Always On",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="w-full py-20 px-4"
      style={{ backgroundColor: "#FFF3E0" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{ color: "#DC2626", backgroundColor: "#DC262610" }}
          >
            Our Services
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4 leading-tight"
            style={{ color: "#111827" }}
          >
            Everything You Need{" "}
            <span style={{ color: "#DC2626" }}>in a Crisis</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#6B7280" }}>
            From dispatch to recovery — SevaLink covers every step of your emergency journey.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.slice(0, 4).map((service, i) => (
              <ServiceCard key={i} service={service} index={i} inView={inView} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:px-24">
            {services.slice(4).map((service, i) => (
              <ServiceCard key={i + 4} service={service} index={i + 4} inView={inView} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .seva-card {
          position: relative;
          min-height: 220px;
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          background: #1f1f1f;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: box-shadow 0.4s ease, transform 0.3s ease;
        }

        .seva-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 0 40px 12px rgba(220, 38, 38, 0.2), 0 0 80px 25px rgba(220, 38, 38, 0.08);
        }

        .seva-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: linear-gradient(315deg, #DC2626, #FF6B6B);
          z-index: 0;
        }

        .seva-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: linear-gradient(315deg, #DC2626, #FF6B6B);
          filter: blur(40px);
          opacity: 1.2;
          z-index: 0;
        }

        .seva-card-inner {
          position: absolute;
          inset: 5px;
          background: linear-gradient(135deg, #FFF3E0 0%, #FECACA 100%);
          border-radius: 10px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          padding: 20px;
        }

        .seva-card-icon {
          position: absolute;
          z-index: 3;
          transition: 0.5s ease;
          transform: scale(0.9);
          opacity: 0.5;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .seva-card:hover .seva-card-icon {
          transform: scale(0.7) translateY(-55px);
          opacity: 1;
        }

        .seva-card-content {
          position: absolute;
          z-index: 3;
          bottom: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 16px 0px;
          transform: scale(0);
          transition: 0.5s ease;
        }

        .seva-card:hover .seva-card-content {
          transform: scale(1);
          bottom: 20px;
        }

        .seva-card-tag {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 10;
          font-size: 10px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 20px;
          background: rgba(220, 38, 38, 0.15);
          color: #DC2626;
          letter-spacing: 0.05em;
        }
      `}</style>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  inView,
}: {
  service: (typeof services)[0];
  index: number;
  inView: boolean;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <div className="seva-card">
        {service.tag && (
          <span className="seva-card-tag">{service.tag}</span>
        )}

        <div className="seva-card-inner">
          {/* Icon — visible by default, moves up on hover */}
          <div className="seva-card-icon">
            <Icon size={44} color="#DC2626" />
            <span style={{ color: "#111827", fontSize: "13px", fontWeight: 600, opacity: 0.7 }}>
              {service.title}
            </span>
          </div>

          {/* Content — hidden, reveals on hover */}
          <div className="seva-card-content">
            <h3
              style={{
                color: "#111827",
                fontWeight: 700,
                fontSize: "15px",
                lineHeight: "1.3",
                marginBottom: "8px",
                letterSpacing: "0.03em",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              {service.title}
            </h3>
            <p style={{ color: "#7f1d1d", fontSize: "12px", lineHeight: "1.6", textAlign: "center" }}>
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}