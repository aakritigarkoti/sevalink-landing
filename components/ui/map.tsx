'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MapProps {
  center: [number, number]; // [latitude, longitude]
  zoom?: number;
  className?: string;
  markers?: Array<{ lat: number; lng: number; label?: string }>;
  showControls?: boolean;
  scrollZoom?: boolean;
  dragging?: boolean;
}

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
  const map = useRef<any>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Load Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
    document.head.appendChild(link);

    // Load Leaflet JS
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
    script.async = true;
    script.onload = () => {
      // Declare L globally for TypeScript
      const L = (window as any).L;

      if (mapContainer.current && !map.current) {
        // Initialize map with attribution control disabled
        map.current = L.map(mapContainer.current, {
          attributionControl: false,
          zoomControl: false,
        }).setView([center[0], center[1]], zoom);

        if (showControls) {
          L.control.zoom({ position: 'bottomleft' }).addTo(map.current);
        }

        // Add OpenStreetMap tiles without attribution
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '',
          maxZoom: 19,
        }).addTo(map.current);

        // Add main center marker
        L.circleMarker([center[0], center[1]], {
          radius: 8,
          fillColor: '#DC2626',
          color: '#991B1B',
          weight: 3,
          opacity: 1,
          fillOpacity: 0.9,
        })
          .bindPopup('Location')
          .addTo(map.current);

        // Add additional markers
        markers.forEach((marker) => {
          L.circleMarker([marker.lat, marker.lng], {
            radius: 6,
            fillColor: '#4285F4',
            color: '#1E40AF',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8,
          })
            .bindPopup(marker.label || 'Marker')
            .addTo(map.current);
        });

        // Configure zoom and interaction behavior
        if (scrollZoom) {
          map.current.scrollWheelZoom.enable();
        } else {
          map.current.scrollWheelZoom.disable();
        }
        map.current.doubleClickZoom.disable();
        
        // Configure dragging
        if (dragging) {
          map.current.dragging.enable();
        } else {
          map.current.dragging.disable();
        }

        setMapLoaded(true);
      }
    };

    document.head.appendChild(script);

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [center, zoom, markers, showControls, scrollZoom, dragging]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`relative ${className} bg-gradient-to-b from-gray-100 to-gray-50 overflow-hidden`}
      ref={mapContainer}
      style={{
        borderRadius: 'inherit',
      }}
    >
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200/50 z-10 rounded-inherit pointer-events-none">
          <div className="animate-pulse">
            <div className="w-8 h-8 bg-red-600 rounded-full"></div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
