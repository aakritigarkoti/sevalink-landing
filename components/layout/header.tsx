'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Provider", href: "/provider" },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActivePath = (href: string) => {
    if (!pathname) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/assets/brand/sevalink.png"
              alt="SevaLink"
              width={64}
              height={64}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`px-4 py-2 text-sm font-semibold transition-colors relative group ${
                  isActivePath(link.href) ? "text-red-600" : "text-gray-700 hover:text-red-600"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-600 rounded-full transition-all duration-300 group-hover:w-3/4" />
              </Link>
            ))}
          </nav>

          {/* CTA - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:109" className="flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors">
              <Phone className="w-4 h-4" />
              109
            </a>
            <Link href="/book?service=ambulance" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl">
              Book Ambulance
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-900"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide from right */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 top-16 md:hidden bg-black/30 z-40"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-16 right-0 bottom-0 w-[70%] max-w-sm md:hidden bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <nav className="p-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-4 py-3 text-base font-semibold rounded-lg transition-all ${
                      isActivePath(link.href)
                        ? "text-red-600 bg-red-50"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col gap-3">
                  <a 
                    href="tel:109" 
                    className="flex items-center gap-2 px-4 py-3 text-base font-semibold text-red-600 rounded-lg hover:bg-red-50 transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    Call 109
                  </a>
                  <Link 
                    href="/book?service=ambulance" 
                    className="px-4 py-3 rounded-lg bg-gradient-to-r from-red-600 to-orange-500 text-white text-base font-semibold hover:shadow-lg transition-all text-center"
                    onClick={() => setMobileOpen(false)}
                  >
                    Book Ambulance
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;