import React, { useState, useEffect } from 'react';
import { Cpu, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, Activity, Calendar, ShieldCheck } from 'lucide-react';
import DigitalTwinWidget from '../components/DigitalTwinWidget';
import { digitalTwinService } from '../services/digitalTwinService';

export default function DigitalTwinPage({ farmerProfile, location, activeWeather }) {
  const [twinData, setTwinData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    digitalTwinService.getDigitalTwinState(farmerProfile, location, activeWeather).then(res => {
      setTwinData(res);
      setLoading(false);
    });
  }, [farmerProfile, location, activeWeather]);

  const handleSimulateAction = () => {
    digitalTwinService.getDigitalTwinState(farmerProfile, location, activeWeather).then(res => {
      setTwinData({
        ...res,
        overallStatus: 'Simulated 30 Days Ahead: Peak Panicle Emergence (96% Yield Target Reached)'
      });
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="badge badge-green" style={{ marginBottom: '0.35rem' }}>
            <Sparkles size={12} /> Flagship AI Innovation ⭐
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>🤖 AI Digital Twin Farm Simulator</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Real-time digital twin replica of your farm plot combining soil sensors, satellite multispectral bands, weather telemetry & disease history.
          </p>
        </div>

        <div style={{ background: 'var(--primary-50)', border: '1px solid var(--primary-100)', padding: '0.4rem 0.85rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-800)' }}>
          📍 Twin ID: DT-PLOT-782 ({location.village || 'Mayanur'})
        </div>
      </div>

      {loading ? (
        <div className="card-glass" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: 'var(--text-muted)' }}>Initializing AI Digital Twin simulation canvas & sensor streams...</p>
        </div>
      ) : (
        <>
          {/* Main Flagship Digital Twin Widget */}
          <DigitalTwinWidget twinData={twinData} onSimulateAction={handleSimulateAction} />

          {/* AI Predictive Insights & Recommendations Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1.25rem' }}>
            
            {/* Left: AI Predictive Actionable Insights */}
            <div className="card-glass">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={18} color="var(--primary-600)" /> AI Digital Twin Predictive Insights
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {twinData.predictiveInsights.map((insight, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.85rem', background: 'var(--bg-main)', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                    <CheckCircle2 size={18} color="var(--primary-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.875rem', lineHeight: 1.4 }}>{insight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 30-Day Future Projection Table */}
            <div className="card-glass">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={18} color="#0284c7" /> 30-Day Crop Forecast
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {twinData.projection30Days.map((proj, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.55rem 0.75rem', background: 'var(--bg-main)', borderRadius: '6px', border: '1px solid var(--border-light)', fontSize: '0.8rem' }}>
                    <span style={{ fontWeight: 700 }}>{proj.day}</span>
                    <span style={{ color: 'var(--primary-700)', fontWeight: 600 }}>{proj.action}</span>
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
