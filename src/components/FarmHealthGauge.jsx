import React from 'react';
import { Activity, ShieldCheck, AlertCircle, TrendingUp } from 'lucide-react';

export default function FarmHealthGauge({ healthData, score: propScore }) {
  const score = typeof healthData === 'number' 
    ? healthData 
    : (healthData?.overallScore || propScore || 92);

  const riskLevel = healthData?.riskLevel || (score >= 85 ? 'Optimal (Low Risk)' : 'Moderate Monitoring');
  
  const breakdown = healthData?.breakdown || {
    cropHealth: Math.min(100, score + 2),
    weatherRisk: Math.max(70, score - 2),
    irrigationStatus: 90,
    fertilizerStatus: 88
  };

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
            <ShieldCheck size={12} /> {riskLevel}
          </span>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary-900)' }}>Overall Farm Health Score</h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
            Composite metric derived from Crop Health ({breakdown.cropHealth}%), Weather Safety ({breakdown.weatherRisk}%), and Irrigation Status ({breakdown.irrigationStatus}%).
          </p>
        </div>
      </div>

      {/* Health Breakdown Component Progress Bars */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.8rem' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px', fontWeight: 600 }}>
            <span>🌿 Crop Leaf Health</span>
            <span>{breakdown.cropHealth}%</span>
          </div>
          <div style={{ width: '100%', height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: `${breakdown.cropHealth}%`, height: '100%', background: '#10b981' }}></div>
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px', fontWeight: 600 }}>
            <span>🌦 Weather Safety</span>
            <span>{breakdown.weatherRisk}%</span>
          </div>
          <div style={{ width: '100%', height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: `${breakdown.weatherRisk}%`, height: '100%', background: '#0284c7' }}></div>
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px', fontWeight: 600 }}>
            <span>💧 Irrigation Sufficiency</span>
            <span>{breakdown.irrigationStatus}%</span>
          </div>
          <div style={{ width: '100%', height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: `${breakdown.irrigationStatus}%`, height: '100%', background: '#7e22ce' }}></div>
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px', fontWeight: 600 }}>
            <span>🌱 Fertilizer Timing</span>
            <span>{breakdown.fertilizerStatus}%</span>
          </div>
          <div style={{ width: '100%', height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: `${breakdown.fertilizerStatus}%`, height: '100%', background: '#d97706' }}></div>
          </div>
        </div>
      </div>

    </div>
  );
}
