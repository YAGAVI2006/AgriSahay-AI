import React, { useState, useEffect } from 'react';
import { Leaf, Droplets, ShieldCheck, CheckCircle2, Sparkles, Activity } from 'lucide-react';
import { sustainabilityService } from '../services/sustainabilityService';

export default function SustainabilityPage({ farmerProfile }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    sustainabilityService.getSustainabilityMetrics({ landSizeAcres: farmerProfile.landSizeAcres || 4.5 }).then(res => {
      setData(res);
      setLoading(false);
    });
  }, [farmerProfile]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="badge badge-green" style={{ marginBottom: '0.35rem' }}>
            <Leaf size={12} /> ESG & Climate Smart Agriculture
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>🌍 Sustainability & Carbon Footprint Dashboard</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Track water savings, greenhouse gas carbon footprint (CO₂e) & bio-fertilizer eco-efficiency scores.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="card-glass" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: 'var(--text-muted)' }}>Calculating methane reduction & carbon sequestration metrics...</p>
        </div>
      ) : (
        <>
          {/* Main Key Metrics Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            
            <div className="card-glass" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#d1fae5', color: '#047857', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                🌱
              </div>
              <div>
                <span style={{ fontSize: '0.785rem', color: 'var(--text-muted)' }}>Sustainability Score</span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#047857' }}>
                  {data.sustainableScore} / 100
                </h3>
              </div>
            </div>

            <div className="card-glass" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                💧
              </div>
              <div>
                <span style={{ fontSize: '0.785rem', color: 'var(--text-muted)' }}>Water Conserved</span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0284c7' }}>
                  {data.waterSavedLiters.toLocaleString('en-IN')} L
                </h3>
              </div>
            </div>

            <div className="card-glass" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                ☁️
              </div>
              <div>
                <span style={{ fontSize: '0.785rem', color: 'var(--text-muted)' }}>Carbon Footprint</span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#d97706' }}>
                  {data.carbonFootprintKg} kg CO₂e / Acre
                </h3>
              </div>
            </div>

          </div>

          {/* Green Farming Tips */}
          <div className="card-glass">
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={18} color="var(--primary-600)" /> Green & Regenerative Farming Practices
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {data.greenFarmingTips.map((tip, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.875rem', lineHeight: 1.4 }}>
                  <CheckCircle2 size={18} color="var(--primary-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

    </div>
  );
}
