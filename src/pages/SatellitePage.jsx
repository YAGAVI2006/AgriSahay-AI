import React, { useState, useEffect } from 'react';
import { Layers, Activity, CheckCircle2, Sparkles, Eye, ShieldCheck } from 'lucide-react';
import { satelliteService } from '../services/satelliteService';

export default function SatellitePage({ location }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    satelliteService.getSatelliteData(location).then(res => {
      setData(res);
      setLoading(false);
    });
  }, [location]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="badge badge-blue" style={{ marginBottom: '0.35rem' }}>
            <Layers size={12} /> Sentinel-2 Multispectral Satellite Sync
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>🛰 Satellite Crop Monitoring (NDVI Hub)</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Real-time vegetation health index (NDVI), canopy chlorophyll density & water stress monitoring.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="card-glass" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: 'var(--text-muted)' }}>Fetching Sentinel-2 satellite tiles & calculating NDVI raster...</p>
        </div>
      ) : (
        <>
          {/* NDVI Health Gauge Bar */}
          <div className="card-glass" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)', color: '#ffffff' }}>
            <div>
              <span style={{ fontSize: '0.75rem', opacity: 0.85, textTransform: 'uppercase' }}>Satellite Provider: {data.satelliteProvider}</span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: '2px' }}>
                Vegetation Health: {data.vegetationHealth}
              </h3>
              <p style={{ fontSize: '0.825rem', opacity: 0.85 }}>Last Overpass: {data.lastOverpassDate}</p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fef08a', lineHeight: 1 }}>
                NDVI {data.ndviScore}
              </div>
              <span className="badge badge-green" style={{ marginTop: '4px' }}>Optimal Canopy Chlorophyll</span>
            </div>
          </div>

          {/* Weekly Growth Timeline & Satellite Observations */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            
            <div className="card-glass">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Activity size={18} color="var(--primary-600)" /> Weekly NDVI Growth Timeline
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {data.weeklyNdviTimeline.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.65rem 0.85rem', background: 'var(--bg-main)', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>{item.week}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.status}</span>
                    <span style={{ fontWeight: 800, color: 'var(--primary-700)', fontSize: '0.9rem' }}>NDVI {item.ndvi}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-glass">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Sparkles size={18} color="var(--primary-600)" /> AI Satellite Imagery Observations
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {data.aiSatelliteObservations.map((obs, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', lineHeight: 1.4 }}>
                    <CheckCircle2 size={16} color="var(--primary-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{obs}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </>
      )}

    </div>
  );
}
