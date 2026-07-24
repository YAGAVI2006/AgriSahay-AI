import React, { useState, useEffect } from 'react';
import { Bug, AlertTriangle, ShieldCheck, CheckCircle2, Info, Sparkles } from 'lucide-react';
import { pestService } from '../services/pestService';

export default function PestPredictionPage({ farmerProfile, activeWeather, location }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    pestService.getPestRiskPrediction({
      crop: farmerProfile.primaryCrop,
      weather: activeWeather,
      location
    }).then(res => {
      setData(res);
      setLoading(false);
    });
  }, [farmerProfile, activeWeather, location]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="badge badge-amber" style={{ marginBottom: '0.35rem' }}>
            <Bug size={12} /> Humidity & Temperature Vector Forecaster
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>🐛 AI Pest Risk Prediction Engine</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Predicts insect pest infestations based on micro-climate humidity, temperature & crop growth stage.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="card-glass" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: 'var(--text-muted)' }}>Analyzing humidity matrices & moth vector emergence models...</p>
        </div>
      ) : (
        <>
          {/* Risk Level Hero Bar */}
          <div className="card-glass" style={{ background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)', border: '1px solid #fed7aa', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#c2410c', fontWeight: 700, textTransform: 'uppercase' }}>Overall Pest Risk Forecast</span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#c2410c', marginTop: '2px' }}>
                {data.riskLevel}
              </h3>
              <p style={{ fontSize: '0.825rem', color: '#9a3412' }}>Scouted for {farmerProfile.primaryCrop ? farmerProfile.primaryCrop.toUpperCase() : 'PADDY'}</p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#c2410c' }}>
                {data.confidenceScore}%
              </div>
              <span className="badge badge-amber">AI Confidence</span>
            </div>
          </div>

          {/* Pest Breakdown Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.25rem' }}>
            {data.likelyPests.map((pest, idx) => (
              <div key={idx} className="card-glass">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary-900)' }}>{pest.name}</h4>
                    <p style={{ fontSize: '0.775rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>{pest.scientific}</p>
                  </div>
                  <span className="badge badge-amber">Risk: {pest.riskScore}%</span>
                </div>

                <div style={{ background: 'var(--bg-main)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-light)', marginBottom: '0.85rem', fontSize: '0.825rem' }}>
                  <strong>Symptoms:</strong> {pest.symptoms}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.825rem' }}>
                  <div style={{ color: 'var(--primary-700)', fontWeight: 600 }}>
                    🌱 <strong>Organic Control:</strong> {pest.organicControl}
                  </div>
                  <div style={{ color: '#c2410c', fontWeight: 600 }}>
                    🧪 <strong>Chemical Control:</strong> {pest.chemicalControl}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

    </div>
  );
}
