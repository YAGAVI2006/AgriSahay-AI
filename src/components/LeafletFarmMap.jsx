import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function LeafletFarmMap({ location, markers = [] }) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  const lat = location?.latitude || 10.9601;
  const lng = location?.longitude || 78.0766;

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Destroy existing map instance if any
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // Create OpenStreetMap Leaflet Map
    const map = L.map(mapContainerRef.current).setView([lat, lng], 13);
    mapInstanceRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Custom Icon helper
    const createCustomIcon = (emojiSymbol) => {
      return L.divIcon({
        html: `<div style="font-size: 24px; text-shadow: 0 2px 5px rgba(0,0,0,0.3); background: #ffffff; padding: 4px; border-radius: 50%; border: 2px solid #059669; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;">${emojiSymbol}</div>`,
        className: 'custom-leaflet-icon',
        iconSize: [36, 36],
        iconAnchor: [18, 18]
      });
    };

    // Add Markers
    if (markers && markers.length > 0) {
      markers.forEach(m => {
        const marker = L.marker([m.lat, m.lng], { icon: createCustomIcon(m.icon || '📍') }).addTo(map);
        marker.bindPopup(`
          <div style="font-family: sans-serif; padding: 4px;">
            <strong style="font-size: 14px; color: #047857;">${m.name}</strong>
            <p style="font-size: 12px; margin: 4px 0 0 0; color: #475569;">${m.desc}</p>
          </div>
        `);
      });
    } else {
      // Default Farm Marker
      const mainMarker = L.marker([lat, lng], { icon: createCustomIcon('👨‍🌾') }).addTo(map);
      mainMarker.bindPopup(`<b>Your Farm Plot</b><br/>${location.village || 'Mayanur'}, ${location.district || 'Karur'}`).openPopup();
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [lat, lng, markers]);

  return (
    <div 
      ref={mapContainerRef} 
      style={{ 
        width: '100%', 
        height: '420px', 
        borderRadius: 'var(--radius-lg)', 
        overflow: 'hidden', 
        border: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-md)',
        zIndex: 1
      }} 
    />
  );
}
