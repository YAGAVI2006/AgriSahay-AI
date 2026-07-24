import React from 'react';
import { Activity, ShieldCheck, AlertCircle, TrendingUp } from 'lucide-react';

export default function FarmHealthGauge({ healthData }) {
  if (!healthData) return null;

  const score = healthData.overallScore || 92;

  const getScoreColor = (val) => {
    if (val >= 85) return '#10b981'; // Green
    if (val >= 70) return '#f59e0b'; // Amber
    return '#ef4444'; // Red
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      
      {/* Gauge Circular Score Container */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'var(--bg-main)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
        
        {/* Score Ring */}
        <div style={{
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          background: `conic-gradient(${getScoreColor(score)} 0% ${score}%, #e2e8f0 ${score}% 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          flexShrink: 0,
          boxShadow: 'var(--shadow-md)'
        }}>
          <div style={{
            width: '74px',
            height: '74px',
            borderRadius: '50%',
            background: 'var(--card-bg)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ fontSize: '1.6rem', fontWeight: 800, color: getScoreColor(score), lineHeight: 1 }}>{score}</span>
            <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 700 }}>/ 100</span>
          </div>
        </div>

        <div>
          <span className="badge badge-green" style={{ marginBottom: '0.35rem' }}>
            <ShieldCheck size={12} /> {healthData.riskLevel}
          </span>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary-900)' }}>Overall Farm Health Score</h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
            Composite metric derived from Crop Health (94%), Weather Safety (90%), and Irrigation Status (90%).
          </p>
        </div>
      </div>

      {/* Health Breakdown Component Progress Bars */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.8rem' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px', fontWeight: 600 }}>
            <span>🌿 Crop Leaf Health</span>
            <span>{healthData.breakdown?.cropHealth || 94}%</span>
          </div>
          <div style={{ width: '100%', height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: `${healthData.breakdown?.cropHealth || 94}%`, height: '100%', background: '#10b981' }}></div>
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px', fontWeight: 600 }}>
            <span>🌦 Weather Safety</span>
            <span>{healthData.breakdown?.weatherRisk || 90}%</span>
          </div>
          <div style={{ width: '100%', height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: `${healthData.breakdown?.weatherRisk || 90}%`, height: '100%', background: '#0284c7' }}></div>
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px', fontWeight: 600 }}>
            <span>💧 Irrigation Sufficiency</span>
            <span>{healthData.breakdown?.irrigationStatus || 90}%</span>
          </div>
          <div style={{ width: '100%', height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: `${healthData.breakdown?.irrigationStatus || 90}%`, height: '100%', background: '#7e22ce' }}></div>
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px', fontWeight: 600 }}>
            <span>🌱 Fertilizer Timing</span>
            <span>{healthData.breakdown?.fertilizerStatus || 88}%</span>
          </div>
          <div style={{ width: '100%', height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: `${healthData.breakdown?.fertilizerStatus || 88}%`, height: '100%', background: '#d97706' }}></div>
          </div>
        </div>
      </div>

    </div>
  );
}
