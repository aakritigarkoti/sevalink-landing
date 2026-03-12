'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Send, Heart } from 'lucide-react';
import * as THREE from 'three';

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/sevalinkcare', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/sevalinkcare', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/sevalinkcare/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/sevalinkcare/', label: 'LinkedIn' },
];

const footerLinks = {
  "Services": [
    { name: "Emergency Ambulance", href: "/services/emergency-ambulance" },
    { name: "Real-Time Tracking", href: "/services/tracking" },
    { name: "Hospital Selection", href: "/services/hospital" },
    { name: "Family Tracking", href: "/services/family-tracking" },
    { name: "BLS/ALS & ICU/Neo", href: "/services/bls-als" },
    { name: "Transparent Pricing", href: "/services/pricing" },
    { name: "24/7 Support", href: "/services/support" },
  ],
  "For Users": [
    { name: "Patient Portal", href: "#patient" },
    { name: "Hospital Network", href: "#hospital" },
    { name: "Admin Panel", href: "#admin" },
  ],
  "Support": [
    { name: "Help Center", href: "#help" },
    { name: "Contact Us", href: "#contact" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
  ],
};

const MAX_COLORS = 8;

const frag = `
#define MAX_COLORS ${MAX_COLORS}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform int uTransparent;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer;
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  q += 0.2 * cos(t) - 7.56;
  vec2 toward = (uPointer - rp);
  q += toward * uMouseInfluence * 0.2;

  vec3 col = vec3(0.0);
  float a = 1.0;

  if (uColorCount > 0) {
    vec2 s = q;
    vec3 sumCol = vec3(0.0);
    float cover = 0.0;
    for (int i = 0; i < MAX_COLORS; ++i) {
      if (i >= uColorCount) break;
      s -= 0.01;
      vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
      float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
      float kBelow = clamp(uWarpStrength, 0.0, 1.0);
      float kMix = pow(kBelow, 0.3);
      float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
      vec2 disp = (r - s) * kBelow;
      vec2 warped = s + disp * gain;
      float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
      float m = mix(m0, m1, kMix);
      float w = 1.0 - exp(-6.0 / exp(6.0 * m));
      sumCol += uColors[i] * w;
      cover = max(cover, w);
    }
    col = clamp(sumCol, 0.0, 1.0);
    a = uTransparent > 0 ? cover : 1.0;
  } else {
    vec2 s = q;
    for (int k = 0; k < 3; ++k) {
      s -= 0.01;
      vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
      float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
      float kBelow = clamp(uWarpStrength, 0.0, 1.0);
      float kMix = pow(kBelow, 0.3);
      float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
      vec2 disp = (r - s) * kBelow;
      vec2 warped = s + disp * gain;
      float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
      float m = mix(m0, m1, kMix);
      col[k] = 1.0 - exp(-6.0 / exp(6.0 * m));
    }
    a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
  }

  if (uNoise > 0.0001) {
    float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
    col += (n - 0.5) * uNoise;
    col = clamp(col, 0.0, 1.0);
  }

  vec3 rgb = (uTransparent > 0) ? col * a : col;
  gl_FragColor = vec4(rgb, a);
}
`;

const vert = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

function ColorBends() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const rafRef = useRef<number | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const pointerTargetRef = useRef(new THREE.Vector2(0, 0));
  const pointerCurrentRef = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geometry = new THREE.PlaneGeometry(2, 2);
    const uColorsArray = Array.from({ length: MAX_COLORS }, () => new THREE.Vector3(0, 0, 0));

    const material = new THREE.ShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: {
        uCanvas: { value: new THREE.Vector2(1, 1) },
        uTime: { value: 0 },
        uSpeed: { value: 0.2 },
        uRot: { value: new THREE.Vector2(1, 0) },
        uColorCount: { value: 0 },
        uColors: { value: uColorsArray },
        uTransparent: { value: 1 },
        uScale: { value: 1 },
        uFrequency: { value: 1 },
        uWarpStrength: { value: 1 },
        uPointer: { value: new THREE.Vector2(0, 0) },
        uMouseInfluence: { value: 1 },
        uParallax: { value: 0.5 },
        uNoise: { value: 0.1 },
      },
      premultipliedAlpha: true,
      transparent: true,
    });
    materialRef.current = material;

    // Red tones only — will blend over cream bg
    const colors = ["#7f0000", "#980b0b", "#b91c1c", "#DC2626", "#9f1239"];

    const toVec3 = (hex: string) => {
      const h = hex.replace('#', '');
      return new THREE.Vector3(
        parseInt(h.slice(0, 2), 16) / 255,
        parseInt(h.slice(2, 4), 16) / 255,
        parseInt(h.slice(4, 6), 16) / 255
      );
    };
    const arr = colors.slice(0, MAX_COLORS).map(toVec3);
    arr.forEach((v, i) => uColorsArray[i].copy(v));
    material.uniforms.uColorCount.value = arr.length;

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      powerPreference: 'high-performance',
      alpha: true,
    });
    rendererRef.current = renderer;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.inset = '0';
    renderer.domElement.style.opacity = '0.6';
    container.appendChild(renderer.domElement);

    const handleResize = () => {
      const w = container.clientWidth || 1;
      const h = container.clientHeight || 1;
      renderer.setSize(w, h, false);
      material.uniforms.uCanvas.value.set(w, h);
    };
    handleResize();

    if ('ResizeObserver' in window) {
      const ro = new ResizeObserver(handleResize);
      ro.observe(container);
      resizeObserverRef.current = ro;
    } else {
      (window as typeof globalThis).addEventListener('resize', handleResize);
    }

    const clock = new THREE.Clock();
    const loop = () => {
      const dt = clock.getDelta();
      const elapsed = clock.elapsedTime;
      material.uniforms.uTime.value = elapsed;

      const rad = (0 * Math.PI) / 180;
      material.uniforms.uRot.value.set(Math.cos(rad), Math.sin(rad));

      const cur = pointerCurrentRef.current;
      const tgt = pointerTargetRef.current;
      cur.lerp(tgt, Math.min(1, dt * 8));
      material.uniforms.uPointer.value.copy(cur);

      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / (rect.width || 1)) * 2 - 1;
      const y = -(((e.clientY - rect.top) / (rect.height || 1)) * 2 - 1);
      pointerTargetRef.current.set(x, y);
    };
    container.addEventListener('pointermove', handlePointerMove);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
      else window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointermove', handlePointerMove);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    />
  );
}

export const Footer = () => {
  const [email, setEmail] = useState('');

  return (
    <footer
      className="relative border-t overflow-hidden"
      style={{ backgroundColor: "#FFF3E0" }}
    >
      {/* ColorBends — transparent red blended over cream */}
      <ColorBends />

      {/* Newsletter */}
      <div className="relative z-10 border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Stay Updated with SevaLink
              </h3>
              <p className="text-gray-600">
                Get health tips, updates, and emergency preparedness guides.
              </p>
            </div>
            <form
              className="flex w-full max-w-md gap-3"
              onSubmit={(e) => { e.preventDefault(); setEmail(''); }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg border border-red-200 bg-white/80 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center gap-2 transition-colors"
              >
                Subscribe <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/assets/brand/image.png" alt="SevaLink Logo" width={40} height={40} className="object-contain" />
              <span className="text-xl font-bold text-red-500">SevaLink</span>
            </Link>
            <p className="mb-6 max-w-sm text-gray-700">
              Your trusted healthcare partner for emergencies and everyday wellness.
            </p>
            <div className="space-y-3">
              <a href="tel:108" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/70 group-hover:bg-red-100 transition-colors">
                  <Phone className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Emergency Helpline</div>
                  <div className="text-sm text-gray-600">108 (24/7)</div>
                </div>
              </a>
              <a href="mailto:help@sevalinkcare.com" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/70 group-hover:bg-red-100 transition-colors">
                  <Mail className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Email Support</div>
                  <div className="text-sm text-gray-600">help@sevalinkcare.com</div>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/70">
                  <MapPin className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Headquarters</div>
                  <div className="text-sm text-gray-600">Ahmedabad, Gujarat, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 text-gray-900">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-600 transition-colors inline-flex items-center group hover:text-red-500">
                      {link.name}
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-red-100">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} SevaLinkCare Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-white/60 hover:bg-red-50 text-gray-500 hover:text-red-500"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
          <p className="flex items-center gap-1 text-sm text-gray-600">
            Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> for better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;