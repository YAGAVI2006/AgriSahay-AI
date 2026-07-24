import React, { useState, useEffect } from 'react';
import { Droplets, Calendar, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';
import { irrigationService } from '../services/irrigationService';

export default function IrrigationPlannerPage({ farmerProfile }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    irrigationService.getIrrigationPlan({
      crop: farmerProfile.primaryCrop,
      soilType: farmerProfile.soilType,
      landSizeAcres: farmerProfile.landSizeAcres || 4.5
    }).then(res => {
      setData(res);
      setLoading(false);
    });
  }, [farmerProfile]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Header Title */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="badge badge-blue" style={{ marginBottom: '0.35rem' }}>
            <Droplets size={12} /> Precision Water Management
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>💧 Smart Irrigation Planner</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            AI daily water requirement calculator, Cauvery canal AWD schedules & water-saving tips.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="card-glass" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: 'var(--text-muted)' }}>Calculating daily evapotranspiration & crop water duty...</p>
        </div>
      ) : (
        <>
          {/* Main Key Metrics Summary */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            
            <div className="card-glass" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Droplets size={24} />
              </div>
              <div>
                <span style={{ fontSize: '0.785rem', color: 'var(--text-muted)' }}>Daily Water Requirement</span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0284c7' }}>
                  {data.dailyWaterRequirementLiters.toLocaleString('en-IN')} L
                </h3>
                <p style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>For {farmerProfile.landSizeAcres || 4.5} Acres</p>
              </div>
            </div>

            <div className="card-glass" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#f3e8ff', color: '#7e22ce', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Calendar size={24} />
              </div>
              <div>
                <span style={{ fontSize: '0.785rem', color: 'var(--text-muted)' }}>Irrigation Frequency</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#7e22ce' }}>
                  {data.irrigationFrequency}
                </h3>
                <p style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>Drip / Canal AWD</p>
              </div>
            </div>

            <div className="card-glass" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#d1fae5', color: '#047857', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={24} />
              </div>
              <div>
                <span style={{ fontSize: '0.785rem', color: 'var(--text-muted)' }}>Next Irrigation Date</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#047857' }}>
                  {data.nextIrrigationDate}
                </h3>
                <p style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>Optimal soil moisture</p>
              </div>
            </div>

          </div>

          {/* 7-Day Irrigation Forecast Schedule Table */}
          <div className="card-glass">
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calendar size={20} color="var(--primary-600)" /> 7-Day Smart Irrigation Schedule
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {data.schedule7Days.map((sch, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', background: i === 1 ? 'var(--primary-50)' : 'var(--bg-main)', border: i === 1 ? '1px solid var(--primary-400)' : '1px solid var(--border-light)', borderRadius: '8px' }}>
                  <span style={{ fontWeight: 800, fontSize: '0.9rem', width: '90px' }}>{sch.day}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{sch.status}</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: i === 1 ? 'var(--primary-800)' : 'var(--text-main)' }}>{sch.action}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Water Saving Suggestions */}
          <div className="card-glass">
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={20} color="var(--primary-600)" /> Water Saving & Conservation Practices
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {data.waterSavingSuggestions.map((tip, i) => (
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
