'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MapProps {
  center: [number, number];
  zoom?: number;
  className?: string;
  markers?: Array<{ lat: number; lng: number; label?: string }>;
  showControls?: boolean;
  scrollZoom?: boolean;
  dragging?: boolean;
}

// Leaflet 1.9.4 SRI hashes — verify at https://cdnjs.cloudflare.com if upgrading version
const LEAFLET_CSS_INTEGRITY =
  'sha512-h9FcoyWjHcOcmEVkxOfTLnmZFWIH0iZhZT1H2TbOq55xssQGEJHEaIm+PgoUaZbRvQTNTLSeB68ARYJipY1SQ==';
const LEAFLET_JS_INTEGRITY =
  'sha512-BwHfrr4c9kmRkLw6iXFdzcdWV/PGkVgiIyIWLLlTSXzWQzxuSg4DiQUCpauz/EWjgk5TYQqX/kvn9pG1NpYfqg==';

export function Map({
  center,
  zoom = 14,
  className = 'h-full w-full',
  markers = [],
  showControls = true,
  scrollZoom = true,
  dragging = true,
}: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const map = useRef<any>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const existingLink = document.getElementById('leaflet-css');
    if (!existingLink) {
      const link = document.createElement('link');
      link.id = 'leaflet-css';
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
      link.integrity = LEAFLET_CSS_INTEGRITY;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }

    const existingScript = document.getElementById('leaflet-js');
    if (existingScript) {
      initMap();
      return;
    }

    const script = document.createElement('script');
    script.id = 'leaflet-js';
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
    script.integrity = LEAFLET_JS_INTEGRITY;
    script.crossOrigin = 'anonymous';
    script.async = true;
    script.onload = initMap;
    document.head.appendChild(script);

    function initMap() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const L = (window as any).L;
      if (!L || !mapContainer.current || map.current) return;

      map.current = L.map(mapContainer.current, {
        // OpenStreetMap attribution is legally required by the ODbL license — do NOT disable
        attributionControl: true,
        zoomControl: false,
      }).setView([center[0], center[1]], zoom);

      if (showControls) {
        L.control.zoom({ position: 'bottomleft' }).addTo(map.current);
      }

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map.current);

      L.circleMarker([center[0], center[1]], {
        radius: 8, fillColor: '#DC2626', color: '#991B1B',
        weight: 3, opacity: 1, fillOpacity: 0.9,
      }).bindPopup('Location').addTo(map.current);

      markers.forEach((marker) => {
        L.circleMarker([marker.lat, marker.lng], {
          radius: 6, fillColor: '#4285F4', color: '#1E40AF',
          weight: 2, opacity: 1, fillOpacity: 0.8,
        }).bindPopup(marker.label ?? 'Marker').addTo(map.current);
      });

      if (scrollZoom) { map.current.scrollWheelZoom.enable(); }
      else { map.current.scrollWheelZoom.disable(); }
      map.current.doubleClickZoom.disable();
      if (dragging) { map.current.dragging.enable(); }
      else { map.current.dragging.disable(); }

      setMapLoaded(true);
    }

    return () => {
      if (map.current) { map.current.remove(); map.current = null; }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`relative ${className} bg-gradient-to-b from-gray-100 to-gray-50 overflow-hidden`}
      ref={mapContainer}
      style={{ borderRadius: 'inherit' }}
    >
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200/50 z-10 pointer-events-none">
          <div className="animate-pulse">
            <div className="w-8 h-8 bg-red-600 rounded-full" />
          </div>
        </div>
      )}
    </motion.div>
  );
}
