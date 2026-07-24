import React, { useState, useEffect } from 'react';
import { BarChart2, Activity, TrendingUp, CheckCircle2 } from 'lucide-react';
import { analyticsService } from '../services/analyticsService';

export default function AnalyticsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    analyticsService.getAnalyticsOverview().then(res => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="badge badge-blue" style={{ marginBottom: '0.35rem' }}>
            <BarChart2 size={12} /> Big Data Agronomic Insights
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>📊 Advanced Analytics & Performance Reports</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Multi-season yield trends, disease resolution metrics, and government scheme disbursement reports.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="card-glass" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: 'var(--text-muted)' }}>Aggregating multi-seasonal analytics datasets...</p>
        </div>
      ) : (
        <>
          {/* Crop Performance Summary Table */}
          <div className="card-glass">
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <TrendingUp size={18} color="var(--primary-600)" /> Multi-Crop Yield & Revenue Breakdown
            </h3>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-main)', borderBottom: '2px solid var(--border-light)', textAlign: 'left' }}>
                    <th style={{ padding: '0.75rem 1rem' }}>Crop Name</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Yield (Tonnes/Acre)</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Total Revenue (₹)</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Farmer Satisfaction</th>
                  </tr>
                </thead>
                <tbody>
                  {data.cropPerformance.map((item, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '0.75rem 1rem', fontWeight: 700 }}>{item.crop}</td>
                      <td style={{ padding: '0.75rem 1rem' }}>{item.yieldTonnes} T/Acre</td>
                      <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: 'var(--primary-800)' }}>₹{item.revenue.toLocaleString('en-IN')}</td>
                      <td style={{ padding: '0.75rem 1rem' }}><span className="badge badge-green">{item.satisfaction}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Disease Scans & Scheme Applications Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            
            <div className="card-glass">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1rem' }}>🔬 AI Disease Scans Diagnostics</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {data.diseaseScansSummary.detectedDiseases.map((d, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0.85rem', background: 'var(--bg-main)', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{d.name}</span>
                    <span style={{ fontWeight: 800, color: '#dc2626' }}>{d.count} Scans</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-glass">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1rem' }}>🏛 Government Scheme Disbursal</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', background: 'var(--bg-main)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Sanctioned Subsidy Amount</span>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary-800)' }}>
                    {data.schemeApplications.sanctionedAmount}
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', borderTop: '1px solid var(--border-light)', paddingTop: '0.75rem' }}>
                  <span>Approved Applications: <strong>{data.schemeApplications.approved} / {data.schemeApplications.totalSubmitted}</strong></span>
                  <span className="badge badge-green">90.4% Success Rate</span>
                </div>
              </div>
            </div>

          </div>
        </>
      )}

    </div>
  );
}
