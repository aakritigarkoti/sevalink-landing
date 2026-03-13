"use client";
import { motion } from "framer-motion";
import { HeartPulse, Building2, LayoutGrid, Check } from "lucide-react";

const audiences = [
  {
    title: "Individual & Family",
    icon: HeartPulse,
    image: "/images/Individuals&Family.jpg", 
    features: ["Book ambulance in 60 seconds", "Family Tracking", "24/7 Support"],
    color: "bg-red-600",
  },
  {
    title: "Hospital Partner",
    icon: Building2,
    image: "/images/Hospital_Partners.jpg",
    features: ["Integrated dispatch system", "Patient Dashboard", "Real-time Records"],
    color: "bg-red-600",
  },
  {
    title: "Network Provider",
    icon: LayoutGrid,
    image: "/images/Network_providers.jpg",
    features: ["Multi-vehicle management", "Driver App", "Instant Settlements"],
    color: "bg-red-600",
  },
];

export function ForWhomSection() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#FFF3E0" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-orange-100/50 flex flex-col h-full"
            >
              {/* Image Header with Overlay */}
              <div className="relative h-72 w-full">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 flex items-center gap-4">
                  <div className={`${item.color} p-3 rounded-2xl text-white shadow-lg`}>
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tight leading-none">{item.title}</h3>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  {item.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <Check className="text-red-600" size={14} strokeWidth={3} />
                      </div>
                      <p className="text-gray-700 font-bold text-sm">{f}</p>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-8 py-4 rounded-2xl bg-gray-900 text-white font-black text-sm uppercase tracking-widest hover:bg-red-600 transition-all duration-300 transform active:scale-95">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}