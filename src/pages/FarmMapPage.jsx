import React, { useState, useEffect } from 'react';
import { MapPin, Building2, TrendingUp, Store, Warehouse, RefreshCw } from 'lucide-react';
import LeafletFarmMap from '../components/LeafletFarmMap';
import { mapService } from '../services/mapService';

export default function FarmMapPage({ location }) {
  const [markers, setMarkers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    mapService.getNearbyAgriMarkers(location).then(res => {
      setMarkers(res);
      setLoading(false);
    });
  }, [location]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Header Title */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="badge badge-green" style={{ marginBottom: '0.35rem' }}>
            <MapPin size={12} /> Leaflet OpenStreetMap GIS Hub
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>🗺 Interactive Farm Map & GIS Services</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Locate nearby Agricultural Offices, Regulated Mandi Yards, Fertilizer Depots & Storage Warehouses around Karur.
          </p>
        </div>

        <div style={{ background: 'var(--primary-50)', border: '1px solid var(--primary-100)', padding: '0.4rem 0.85rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-800)' }}>
          📍 Plot: {location.village || 'Mayanur'}, {location.district || 'Karur'}
        </div>
      </div>

      {/* Main Interactive Leaflet Map */}
      <div className="card-glass" style={{ padding: '0.75rem' }}>
        {loading ? (
          <div style={{ height: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
            <p>Loading Leaflet GIS map tiles & agricultural markers...</p>
          </div>
        ) : (
          <LeafletFarmMap location={location} markers={markers} />
        )}
      </div>

      {/* Marker Key & Nearby Facility Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
        {markers.map((m) => (
          <div key={m.id} className="card-glass" style={{ padding: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.4rem' }}>
              <span style={{ fontSize: '1.5rem' }}>{m.icon}</span>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--primary-900)' }}>{m.name}</h4>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{m.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
