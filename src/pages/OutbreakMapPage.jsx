import React, { useState, useEffect } from 'react';
import { AlertTriangle, MapPin, ShieldAlert, CheckCircle2 } from 'lucide-react';
import LeafletFarmMap from '../components/LeafletFarmMap';
import { outbreakMapService } from '../services/outbreakMapService';

export default function OutbreakMapPage({ location }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    outbreakMapService.getOutbreakReports(location).then(res => {
      setData(res);
      setLoading(false);
    });
  }, [location]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="badge badge-amber" style={{ marginBottom: '0.35rem' }}>
            <ShieldAlert size={12} /> Regional Epidemic Surveillance
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>🗺 Disease Outbreak Heatmap & Alert Map</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Tracks reported crop leaf diseases & fungal outbreaks in Karur & neighboring Tamil Nadu districts.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="card-glass" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: 'var(--text-muted)' }}>Loading regional disease outbreak GIS heatmap markers...</p>
        </div>
      ) : (
        <>
          {/* Outbreak Level Alert Banner */}
          <div className="card-glass" style={{ background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)', border: '1px solid #fed7aa', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <AlertTriangle size={26} color="#ea580c" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#c2410c', marginBottom: '0.25rem' }}>
                {data.alertLevel}
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#9a3412', lineHeight: 1.5 }}>
                Outbreak reports submitted by neighboring farmers within 15km radius of {location.village || 'Mayanur'}. Inspect lower foliage and follow preventive sprays.
              </p>
            </div>
          </div>

          {/* Interactive GIS Outbreak Map */}
          <div className="card-glass" style={{ padding: '0.75rem' }}>
            <LeafletFarmMap location={location} markers={data.reports.map(r => ({
              id: r.id,
              name: `${r.crop} - ${r.disease}`,
              lat: r.lat,
              lng: r.lng,
              icon: r.icon,
              desc: `${r.severity} Severity (${r.distance})`
            }))} />
          </div>

          {/* Outbreak Reports Table / Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.25rem' }}>
            {data.reports.map((rep) => (
              <div key={rep.id} className="card-glass">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="badge badge-amber">{rep.crop}</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#dc2626' }}>{rep.distance}</span>
                </div>

                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#dc2626', marginBottom: '0.35rem' }}>
                  🦠 {rep.disease}
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.85rem' }}>
                  Severity Level: <strong>{rep.severity}</strong>
                </p>

                <div style={{ background: 'var(--bg-main)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-light)', fontSize: '0.825rem', color: 'var(--primary-800)' }}>
                  <strong>🛡️ Prevention Advice:</strong> {rep.prevention}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

    </div>
  );
}
