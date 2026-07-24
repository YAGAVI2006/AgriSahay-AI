import React, { useState, useEffect } from 'react';
import { Phone, AlertTriangle, Building2, Stethoscope, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { emergencyService } from '../services/emergencyService';

export default function EmergencyPage({ location }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    emergencyService.getEmergencyData(location).then(res => {
      setData(res);
      setLoading(false);
    });
  }, [location]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="badge badge-amber" style={{ marginBottom: '0.35rem' }}>
            <Phone size={12} /> 24/7 Farmer Emergency Assistance
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>🚨 Emergency Assistance & Helplines</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Instant call access to Block Agriculture Officers, Kisan Call Center, Veterinary Clinics & Extreme Weather Banners.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="card-glass" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: 'var(--text-muted)' }}>Fetching emergency hotline contacts for Karur region...</p>
        </div>
      ) : (
        <>
          {/* Extreme Weather Alert Banner */}
          {data.emergencyWeatherAlerts && data.emergencyWeatherAlerts.length > 0 && (
            <div className="card-glass" style={{ background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)', border: '1px solid #fed7aa', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <AlertTriangle size={28} color="#ea580c" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#c2410c', marginBottom: '0.25rem' }}>
                  {data.emergencyWeatherAlerts[0].title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#9a3412', lineHeight: 1.5 }}>
                  {data.emergencyWeatherAlerts[0].message}
                </p>
              </div>
            </div>
          )}

          {/* Quick Call Helplines Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
            
            <div className="card-glass" style={{ borderLeft: '4px solid var(--primary-600)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#d1fae5', color: '#047857', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--primary-900)' }}>Kisan Call Center (Toll-Free)</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>24/7 Free Ag Advisory</p>
                </div>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '1rem' }}>
                Direct government line for seed, fertilizer & pest control support.
              </p>
              <a href="tel:18001801551" className="btn-primary" style={{ textDecoration: 'none', textAlign: 'center', width: '100%', display: 'inline-block' }}>
                Call 1800-180-1551 Now
              </a>
            </div>

            <div className="card-glass" style={{ borderLeft: '4px solid #0284c7' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Building2 size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--primary-900)' }}>Block Agriculture Officer</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{data.agriOfficerContact.name}</p>
                </div>
              </div>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-main)', marginBottom: '1rem' }}>
                {data.agriOfficerContact.office}
              </p>
              <a href={`tel:${data.agriOfficerContact.phone}`} className="btn-secondary" style={{ textDecoration: 'none', textAlign: 'center', width: '100%', display: 'inline-block' }}>
                Call Officer ({data.agriOfficerContact.phone})
              </a>
            </div>

            <div className="card-glass" style={{ borderLeft: '4px solid #d97706' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Stethoscope size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--primary-900)' }}>Nearby Veterinary Care</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{data.nearbyVeterinaryHospital.name}</p>
                </div>
              </div>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-main)', marginBottom: '1rem' }}>
                {data.nearbyVeterinaryHospital.location}
              </p>
              <a href={`tel:${data.nearbyVeterinaryHospital.phone}`} className="btn-outline" style={{ textDecoration: 'none', textAlign: 'center', width: '100%', display: 'inline-block' }}>
                Call Vet Clinic ({data.nearbyVeterinaryHospital.phone})
              </a>
            </div>

          </div>
        </>
      )}

    </div>
  );
}
