import React from 'react';
import { Leaf, CloudSun, Landmark, CalendarDays, ArrowRight, ShieldAlert, Sparkles, CheckCircle, TrendingUp, AlertTriangle } from 'lucide-react';

export default function DashboardView({ 
  farmerProfile, 
  activeWeather, 
  matchedSchemes, 
  onNavigate, 
  onOpenProfile,
  recentScans 
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      
      {/* Hero Welcome Banner */}
      <div className="card-hero">
        <div style={{ maxWidth: '750px', position: 'relative', zIndex: 2 }}>
          <div className="badge badge-amber" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={12} /> Powered by AI Decision Support Engine
          </div>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.2 }}>
            Welcome back, {farmerProfile.name || 'Farmer'}! 👋
          </h2>
          <p style={{ fontSize: '1rem', opacity: 0.9, marginBottom: '1.25rem', lineHeight: 1.5 }}>
            Managing <strong style={{ color: '#fef08a' }}>{farmerProfile.landSizeAcres || 4.5} Acres</strong> of <strong style={{ color: '#fef08a' }}>{farmerProfile.primaryCrop ? farmerProfile.primaryCrop.toUpperCase() : 'PADDY'}</strong> in <strong>{farmerProfile.district || 'Ludhiana'}, {farmerProfile.state || 'Punjab'}</strong>. Your crop health status is currently <strong>Optimal</strong>.
          </p>

          {/* Quick Action Badges inside Hero */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button onClick={() => onNavigate('disease')} className="btn-accent" style={{ borderRadius: '9999px', fontSize: '0.85rem' }}>
              <Leaf size={16} /> Scan Leaf for Disease
            </button>
            <button onClick={() => onNavigate('calendar')} className="btn-secondary" style={{ borderRadius: '9999px', fontSize: '0.85rem' }}>
              <CalendarDays size={16} /> View AI Seasonal Calendar
            </button>
          </div>
        </div>
      </div>

      {/* Key Metric Cards Row */}
      <div className="stats-grid">
        
        {/* Crop Health Card */}
        <div className="stat-card card-glass">
          <div className="stat-icon" style={{ background: '#d1fae5', color: '#047857' }}>
            <Leaf size={26} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Crop Health Index</span>
            <div className="stat-value" style={{ color: '#047857', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              94% <span style={{ fontSize: '0.75rem', color: '#059669', background: '#ecfdf5', padding: '2px 6px', borderRadius: '4px' }}>Good</span>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Last scanned: 2 days ago</p>
          </div>
        </div>

        {/* Active Weather Status */}
        <div className="stat-card card-glass">
          <div className="stat-icon" style={{ background: '#e0f2fe', color: '#0284c7' }}>
            <CloudSun size={26} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Local Weather</span>
            <div className="stat-value" style={{ color: '#0284c7' }}>
              {activeWeather.temp}°C
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{activeWeather.condition}</p>
          </div>
        </div>

        {/* Eligible Government Schemes */}
        <div className="stat-card card-glass">
          <div className="stat-icon" style={{ background: '#fef3c7', color: '#d97706' }}>
            <Landmark size={26} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Eligible Govt Schemes</span>
            <div className="stat-value" style={{ color: '#d97706' }}>
              {matchedSchemes.length} Active
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Up to ₹60,000+ support</p>
          </div>
        </div>

        {/* AI Seasonal Phase */}
        <div className="stat-card card-glass">
          <div className="stat-icon" style={{ background: '#f3e8ff', color: '#7e22ce' }}>
            <CalendarDays size={26} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Current Farming Phase</span>
            <div className="stat-value" style={{ fontSize: '1.15rem', color: '#7e22ce' }}>
              Tillering & Fert.
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Active Stage (Month: August)</p>
          </div>
        </div>

      </div>

      {/* Main Grid: Weather Alert & Quick Modules */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        
        {/* Left Column: Smart Advisories & Recent AI Diagnosis */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Active Weather Warning Banner */}
          {activeWeather.alerts && activeWeather.alerts.length > 0 && (
            <div style={{
              background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
              border: '1px solid #fed7aa',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem',
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start'
            }}>
              <AlertTriangle size={24} color="#ea580c" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#c2410c', marginBottom: '0.25rem' }}>
                  {activeWeather.alerts[0].title}
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#9a3412', lineHeight: 1.5 }}>
                  {activeWeather.alerts[0].message}
                </p>
                <button 
                  onClick={() => onNavigate('weather')} 
                  style={{ background: 'transparent', border: 'none', color: '#c2410c', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', marginTop: '0.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                >
                  View Full 7-Day Agronomic Forecast <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* Quick Access Modules Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            
            {/* AI Crop Disease Card */}
            <div className="card-glass" style={{ cursor: 'pointer' }} onClick={() => onNavigate('disease')}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#d1fae5', color: '#047857', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Leaf size={22} />
                </div>
                <span className="badge badge-green">AI Disease AI</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.35rem' }}>AI Crop Disease Scanner</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.4 }}>
                Upload photo of infected leaves to get immediate diagnosis, confidence %, organic & chemical treatments.
              </p>
              <div style={{ color: 'var(--primary-600)', fontWeight: 700, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                Scan Now <ArrowRight size={14} />
              </div>
            </div>

            {/* AI Agriculture Assistant Card */}
            <div className="card-glass" style={{ cursor: 'pointer' }} onClick={() => onNavigate('assistant')}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Sparkles size={22} />
                </div>
                <span className="badge badge-blue">Voice Enabled</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.35rem' }}>AI Farming Assistant</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.4 }}>
                Ask farming questions in your regional language. Calculate fertilizer dosages and pest treatments.
              </p>
              <div style={{ color: '#0284c7', fontWeight: 700, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                Ask AgriBot <ArrowRight size={14} />
              </div>
            </div>

            {/* Government Scheme Recommendation Card */}
            <div className="card-glass" style={{ cursor: 'pointer' }} onClick={() => onNavigate('schemes')}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Landmark size={22} />
                </div>
                <span className="badge badge-amber">{matchedSchemes.length} Schemes</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.35rem' }}>Govt Scheme Matching</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.4 }}>
                Explore subsidized fertilizers, solar pump subsidies, PM-KISAN & crop insurance eligibility.
              </p>
              <div style={{ color: '#d97706', fontWeight: 700, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                View Schemes <ArrowRight size={14} />
              </div>
            </div>

            {/* AI Seasonal Calendar Innovation Card */}
            <div className="card-glass" style={{ cursor: 'pointer' }} onClick={() => onNavigate('calendar')}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#f3e8ff', color: '#7e22ce', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CalendarDays size={22} />
                </div>
                <span className="badge" style={{ background: '#f3e8ff', color: '#7e22ce' }}>Extra Innovation</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.35rem' }}>AI Seasonal Calendar</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.4 }}>
                Month-by-month activity timeline for {farmerProfile.primaryCrop ? farmerProfile.primaryCrop.toUpperCase() : 'PADDY'} with interactive task checklist.
              </p>
              <div style={{ color: '#7e22ce', fontWeight: 700, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                View Timeline <ArrowRight size={14} />
              </div>
            </div>

          </div>

        </div>

        {/* Right Column: Profile Overview & Recent Activity Feed */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Active Profile Snapshot Card */}
          <div className="card-glass">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Farmer Profile</h3>
              <button onClick={onOpenProfile} className="btn-outline" style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem' }}>
                Edit
              </button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Location</span>
                <span style={{ fontWeight: 600 }}>{farmerProfile.village}, {farmerProfile.district}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Land Size</span>
                <span style={{ fontWeight: 600 }}>{farmerProfile.landSizeAcres} Acres</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Primary Crop</span>
                <span style={{ fontWeight: 600, textTransform: 'capitalize' }}>{farmerProfile.primaryCrop}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Soil Type</span>
                <span style={{ fontWeight: 600, textTransform: 'capitalize' }}>{farmerProfile.soilType}</span>
              </div>
            </div>
          </div>

          {/* Recent AI Recommendations Feed */}
          <div className="card-glass">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={18} color="var(--primary-600)" /> Today's AI Advisories
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ padding: '0.75rem', borderRadius: '8px', background: 'var(--bg-main)', border: '1px solid var(--border-light)' }}>
                <p style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--primary-700)', marginBottom: '0.2rem' }}>
                  🌱 Fertilizer Schedule
                </p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-main)', lineHeight: 1.4 }}>
                  Apply Urea (35kg/acre) post 1st irrigation. Mix 10kg Zinc Sulphate to avoid yellowing.
                </p>
              </div>

              <div style={{ padding: '0.75rem', borderRadius: '8px', background: 'var(--bg-main)', border: '1px solid var(--border-light)' }}>
                <p style={{ fontSize: '0.825rem', fontWeight: 700, color: '#d97706', marginBottom: '0.2rem' }}>
                  🐛 Pest Alert
                </p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-main)', lineHeight: 1.4 }}>
                  Inspect lower stem base for BPH (Brown Plant Hopper) due to high humidity.
                </p>
              </div>

              <div style={{ padding: '0.75rem', borderRadius: '8px', background: 'var(--bg-main)', border: '1px solid var(--border-light)' }}>
                <p style={{ fontSize: '0.825rem', fontWeight: 700, color: '#0284c7', marginBottom: '0.2rem' }}>
                  🏛 PM-KISAN Installment
                </p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-main)', lineHeight: 1.4 }}>
                  Your e-KYC status is active. Next ₹2,000 credit expected by month-end.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
