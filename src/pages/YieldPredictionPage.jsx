import React, { useState, useEffect } from 'react';
import { Sprout, TrendingUp, DollarSign, CheckCircle2, Sparkles } from 'lucide-react';
import { yieldService } from '../services/yieldService';

export default function YieldPredictionPage({ farmerProfile }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    yieldService.predictYield({
      crop: farmerProfile.primaryCrop,
      landSizeAcres: farmerProfile.landSizeAcres || 4.5,
      soilType: farmerProfile.soilType,
      irrigationType: farmerProfile.irrigationType
    }).then(res => {
      setData(res);
      setLoading(false);
    });
  }, [farmerProfile]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="badge badge-green" style={{ marginBottom: '0.35rem' }}>
            <Sparkles size={12} /> Biomass Accumulation AI Engine
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>🌾 AI Crop Yield & Production Forecaster</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Predicts expected crop yield in Tonnes/acre and total market revenue for {farmerProfile.primaryCrop ? farmerProfile.primaryCrop.toUpperCase() : 'PADDY'}.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="card-glass" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: 'var(--text-muted)' }}>Calculating photosynthetic rate & harvest index prediction...</p>
        </div>
      ) : (
        <>
          {/* Main Key Yield Summary Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            
            <div className="card-glass" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#d1fae5', color: '#047857', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                🌾
              </div>
              <div>
                <span style={{ fontSize: '0.785rem', color: 'var(--text-muted)' }}>Expected Yield Rate</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#047857' }}>
                  {data.expectedYieldPerAcre}
                </h3>
              </div>
            </div>

            <div className="card-glass" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                📦
              </div>
              <div>
                <span style={{ fontSize: '0.785rem', color: 'var(--text-muted)' }}>Total Estimated Harvest</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0284c7' }}>
                  {data.totalEstimatedProduction}
                </h3>
              </div>
            </div>

            <div className="card-glass" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                💰
              </div>
              <div>
                <span style={{ fontSize: '0.785rem', color: 'var(--text-muted)' }}>Market Revenue Estimate</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#d97706' }}>
                  {data.marketRevenueEstimate}
                </h3>
              </div>
            </div>

          </div>

          {/* AI Optimization Suggestions */}
          <div className="card-glass">
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={18} color="var(--primary-600)" /> AI Yield Maximization Recommendations
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {data.aiOptimizationSuggestions.map((sug, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.875rem', lineHeight: 1.4 }}>
                  <CheckCircle2 size={18} color="var(--primary-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{sug}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

    </div>
  );
}
