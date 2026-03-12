"use client";

import { useRef } from "react";
import { Smartphone, Ambulance, MapPin, CheckCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";

const steps = [
  { id: "01", icon: Smartphone, title: "Book Ambulance", description: "Open SevaLink app and tap 'Book Now'. Share your location in one click." },
  { id: "02", icon: Ambulance, title: "Instant Dispatch", description: "Nearest BLS/ALS ambulance is dispatched within 60 seconds automatically." },
  { id: "03", icon: MapPin, title: "Live Tracking", description: "Track ambulance in real-time on map. Share live status with family." },
  { id: "04", icon: CheckCircle, title: "Safe Arrival", description: "Reach verified hospital. Full trip summary and invoice sent instantly." },
];

// Smooth, consistent animation config
const EASE = "easeOut" as const;
const DURATION = 0.45;

function MapScreen() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", backgroundColor: "#e8e0d8" }}>
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 200 380" preserveAspectRatio="xMidYMid slice">
        <rect x="0" y="0" width="200" height="380" fill="#e8e0d8" />
        <rect x="10" y="20" width="40" height="30" rx="4" fill="#c8e6c9" opacity="0.8" />
        <rect x="140" y="180" width="50" height="40" rx="4" fill="#c8e6c9" opacity="0.8" />
        <rect x="10" y="70" width="25" height="20" rx="2" fill="#d4c9bc" />
        <rect x="40" y="65" width="18" height="25" rx="2" fill="#ccc0b3" />
        <rect x="150" y="60" width="22" height="28" rx="2" fill="#d4c9bc" />
        <rect x="10" y="200" width="28" height="22" rx="2" fill="#ccc0b3" />
        <rect x="150" y="240" width="30" height="20" rx="2" fill="#d4c9bc" />
        <ellipse cx="100" cy="190" rx="18" ry="12" fill="#b3d4f5" opacity="0.6" />
        <line x1="100" y1="0" x2="100" y2="380" stroke="#f5d86e" strokeWidth="8" />
        <line x1="0" y1="190" x2="200" y2="190" stroke="#f5d86e" strokeWidth="8" />
        <line x1="60" y1="0" x2="60" y2="380" stroke="#f0f0e8" strokeWidth="4" />
        <line x1="140" y1="0" x2="140" y2="380" stroke="#f0f0e8" strokeWidth="4" />
        <line x1="0" y1="120" x2="200" y2="120" stroke="#f0f0e8" strokeWidth="4" />
        <line x1="0" y1="280" x2="200" y2="280" stroke="#f0f0e8" strokeWidth="4" />
        <motion.path
          d="M 60 280 L 60 190 L 100 190 L 100 120"
          fill="none" stroke="#4285f4" strokeWidth="5"
          strokeLinecap="round" strokeDasharray="250" strokeDashoffset={250}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.5 }}
        />
        <motion.circle cx="60" cy="280" r="6" fill="#DC2626" fillOpacity="0.2"
          animate={{ r: [6, 18], opacity: [0.5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
        />
        <circle cx="60" cy="280" r="7" fill="#DC2626" />
        <circle cx="60" cy="280" r="3.5" fill="white" />
        <motion.circle cx="100" cy="112" r="6" fill="#4285f4" fillOpacity="0.2"
          animate={{ r: [6, 16], opacity: [0.5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
        />
        <path d="M100 126 C100 126 88 114 88 107 C88 100.4 93.4 95 100 95 C106.6 95 112 100.4 112 107 C112 114 100 126 100 126Z" fill="#4285f4" />
        <rect x="97.5" y="102" width="5" height="10" rx="1" fill="white" />
        <rect x="95" y="104.5" width="10" height="5" rx="1" fill="white" />
        <motion.circle cx="60" cy="280" r="5" fill="white" stroke="#DC2626" strokeWidth="2"
          animate={{ cx: [60, 60, 100, 100], cy: [280, 190, 190, 120] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.5 }}
        />
      </svg>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, padding: "8px 12px", backgroundColor: "rgba(255,255,255,0.95)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <motion.div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#DC2626" } as any}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          <span style={{ fontSize: 11, fontWeight: 600, color: "#1f2937" }}>SevaLink — Live Tracking</span>
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 2 }}>
          {["4 min", "1.2 km", "Arriving"].map((t, i) => (
            <span key={i} style={{ fontSize: 10, color: "#6b7280" }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "10px 12px", backgroundColor: "rgba(255,255,255,0.97)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "#fee2e2", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Ambulance size={13} color="#DC2626" />
            </div>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: "#111827", margin: 0 }}>Ambulance En Route</p>
              <p style={{ fontSize: 10, color: "#6b7280", margin: 0 }}>City Hospital • 1.2 km</p>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: 13, fontWeight: 900, color: "#DC2626", margin: 0 }}>4 min</p>
            <p style={{ fontSize: 10, color: "#9ca3af", margin: 0 }}>ETA</p>
          </div>
        </div>
        <div style={{ marginTop: 6, height: 4, borderRadius: 4, backgroundColor: "#e5e7eb", overflow: "hidden" }}>
          <motion.div
            style={{ height: "100%", borderRadius: 4, backgroundColor: "#DC2626" } as any}
            initial={{ width: "10%" }}
            animate={{ width: ["10%", "85%", "10%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
          {["Call", "Share", "Cancel"].map((btn, i) => (
            <div key={i} style={{ flex: 1, padding: "4px 0", borderRadius: 6, textAlign: "center", fontSize: 10, fontWeight: 600, backgroundColor: i === 0 ? "#DC2626" : "#f3f4f6", color: i === 0 ? "white" : "#4b5563" }}>
              {btn}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StepCard({ step, align }: { step: typeof steps[0]; align: "left" | "right" }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const Icon = step.icon;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: align === "right" ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: DURATION, ease: EASE }}
      style={{ display: "flex", flexDirection: align === "right" ? "row-reverse" : "row", alignItems: "flex-start", gap: 16, textAlign: align === "right" ? "right" : "left" } as any}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.15, type: "spring", stiffness: 300, damping: 18 }}
        style={{ flexShrink: 0, width: 48, height: 48, borderRadius: 16, backgroundColor: "#DC2626", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(220,38,38,0.3)" } as any}
      >
        <Icon size={22} color="white" />
      </motion.div>
      <div>
        <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.1em", color: "#DC262699" }}>STEP {step.id}</span>
        <h3 style={{ fontSize: 15, fontWeight: 700, margin: "4px 0", color: "#111827" }}>{step.title}</h3>
        <p style={{ fontSize: 13, lineHeight: 1.6, color: "#6B7280", margin: 0 }}>{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function HowItWorksSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.4 });

  const phoneRef = useRef<HTMLDivElement>(null);
  const phoneInView = useInView(phoneRef, { once: true, amount: 0.3 });

  const stepsRef = useRef<HTMLDivElement>(null);
  const stepsInView = useInView(stepsRef, { once: true, amount: 0.5 });

  return (
    <section style={{ width: "100%", padding: "80px 16px", backgroundColor: "#FEF3E2" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>

        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: DURATION, ease: EASE }}
          style={{ textAlign: "center", marginBottom: 64 } as any}
        >
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 16, padding: "6px 16px", borderRadius: 9999, color: "#DC2626", backgroundColor: "#DC262615" }}>
            How It Works
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, marginBottom: 16, color: "#111827", lineHeight: 1.2 }}>
            Emergency Help in <span style={{ color: "#DC2626" }}>4 Simple Steps</span>
          </h2>
          <p style={{ fontSize: 16, maxWidth: 480, margin: "0 auto", color: "#6B7280" }}>
            From booking to safe arrival — SevaLink handles everything in minutes.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 32, alignItems: "center" }}>

          {/* Left steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {steps.slice(0, 2).map((step) => (
              <StepCard key={step.id} step={step} align="right" />
            ))}
          </div>

          {/* Phone */}
          <motion.div
            ref={phoneRef}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={phoneInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: DURATION, ease: EASE }}
            style={{ position: "relative", width: 220, height: 440 } as any}
          >
            <div style={{ position: "absolute", inset: 0, borderRadius: "2.5rem", backgroundColor: "#DC2626", filter: "blur(24px)", opacity: 0.25, transform: "scale(0.95) translateY(10px)" }} />
            <div style={{ position: "absolute", inset: 0, borderRadius: "2.5rem", border: "6px solid #1a1a2e", overflow: "hidden", boxShadow: "0 25px 60px rgba(0,0,0,0.4)", backgroundColor: "#1a1a2e" }}>
              <MapScreen />
            </div>
            <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", width: 80, height: 20, borderRadius: 10, backgroundColor: "#1a1a2e", zIndex: 20 }} />
            <div style={{ position: "absolute", right: -8, top: 96, width: 6, height: 48, borderRadius: "0 4px 4px 0", backgroundColor: "#1a1a2e" }} />
            <div style={{ position: "absolute", left: -8, top: 80, width: 6, height: 32, borderRadius: "4px 0 0 4px", backgroundColor: "#1a1a2e" }} />
            <div style={{ position: "absolute", left: -8, top: 128, width: 6, height: 32, borderRadius: "4px 0 0 4px", backgroundColor: "#1a1a2e" }} />
          </motion.div>

          {/* Right steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {steps.slice(2, 4).map((step) => (
              <StepCard key={step.id} step={step} align="left" />
            ))}
          </div>
        </div>

        {/* Step numbers */}
        <div ref={stepsRef} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12, marginTop: 64 }}>
          {steps.map((step, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={stepsInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: i * 0.1, duration: 0.3, type: "spring", stiffness: 300, damping: 18 }}
                style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "#DC2626", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 900, boxShadow: "0 4px 12px rgba(220,38,38,0.3)" } as any}
              >
                {step.id}
              </motion.div>
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={stepsInView ? { scaleX: 1 } : {}}
                  transition={{ delay: i * 0.1 + 0.15, duration: 0.3, ease: EASE }}
                  style={{ width: 40, height: 2, borderRadius: 2, backgroundColor: "#DC262640", transformOrigin: "left" } as any}
                />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}