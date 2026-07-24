import React from 'react';
import { Leaf, CloudSun, Landmark, CalendarDays, ArrowRight, ShieldAlert, Sparkles, CheckCircle2, TrendingUp, AlertTriangle, Activity, BarChart2 } from 'lucide-react';
import CropHealthChart from '../components/CropHealthChart';
import WeatherSummaryChart from '../components/WeatherSummaryChart';

export default function DashboardPage({ 
  farmerProfile, 
  activeWeather, 
  matchedSchemes, 
  onNavigate, 
  recentScans 
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      
      {/* Hero Welcome Banner */}
      <div className="card-hero">
        <div style={{ maxWidth: '780px', position: 'relative', zIndex: 2 }}>
          <div className="badge badge-amber" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={12} /> Powered by AI Decision Support Engine
          </div>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.2 }}>
            Welcome back, {farmerProfile.name || 'Farmer'}! 👋
          </h2>
          <p style={{ fontSize: '1rem', opacity: 0.9, marginBottom: '1.25rem', lineHeight: 1.5 }}>
            Managing <strong style={{ color: '#fef08a' }}>{farmerProfile.landSizeAcres || 4.5} Acres</strong> of <strong style={{ color: '#fef08a' }}>{farmerProfile.primaryCrop ? farmerProfile.primaryCrop.toUpperCase() : 'PADDY'}</strong> in <strong>{farmerProfile.village ? `${farmerProfile.village}, ` : ''}{farmerProfile.district || 'Karur'}, {farmerProfile.state || 'Tamil Nadu'}</strong>. Overall crop health status is currently <strong>Optimal (94%)</strong>.
          </p>

          {/* Quick Action Buttons Row */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button onClick={() => onNavigate('disease')} className="btn-accent" style={{ borderRadius: '9999px', fontSize: '0.85rem' }}>
              <Leaf size={16} /> Detect Disease
            </button>
            <button onClick={() => onNavigate('assistant')} className="btn-secondary" style={{ borderRadius: '9999px', fontSize: '0.85rem' }}>
              <Sparkles size={16} /> Ask AI Assistant
            </button>
            <button onClick={() => onNavigate('weather')} className="btn-secondary" style={{ borderRadius: '9999px', fontSize: '0.85rem' }}>
              <CloudSun size={16} /> Weather Advisories
            </button>
            <button onClick={() => onNavigate('schemes')} className="btn-secondary" style={{ borderRadius: '9999px', fontSize: '0.85rem' }}>
              <Landmark size={16} /> Government Schemes
            </button>
            <button onClick={() => onNavigate('calendar')} className="btn-secondary" style={{ borderRadius: '9999px', fontSize: '0.85rem' }}>
              <CalendarDays size={16} /> Seasonal Calendar
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
              94% <span style={{ fontSize: '0.75rem', color: '#059669', background: '#ecfdf5', padding: '2px 6px', borderRadius: '4px' }}>Optimal</span>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Scanned 2 days ago</p>
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
            <span className="stat-label">Current Season Phase</span>
            <div className="stat-value" style={{ fontSize: '1.15rem', color: '#7e22ce' }}>
              Kuruvai / Aadi
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Phase 2 (SRI Transplanting)</p>
          </div>
        </div>

      </div>

      {/* Weather Warning Banner */}
      {activeWeather.alerts && activeWeather.alerts.length > 0 && (
        <div style={{
          background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
          border: '1px solid #fed7aa',
          borderRadius: 'var(--radius-lg)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          gap: '1rem',
          alignItems: 'flex-start'
        }}>
          <AlertTriangle size={26} color="#ea580c" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#c2410c', marginBottom: '0.25rem' }}>
              {activeWeather.alerts[0].title}
            </h4>
            <p style={{ fontSize: '0.875rem', color: '#9a3412', lineHeight: 1.5 }}>
              {activeWeather.alerts[0].message}
            </p>
            <button 
              onClick={() => onNavigate('weather')} 
              style={{ background: 'transparent', border: 'none', color: '#c2410c', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', marginTop: '0.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
            >
              View Full 7-Day Forecast <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Analytics Charts Section */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        
        {/* Monthly Crop Health Trend Chart */}
        <div className="card-glass">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Activity size={18} color="var(--primary-600)" /> Monthly Crop Health Trend
            </h3>
            <span className="badge badge-green">Kuruvai Season</span>
          </div>
          <CropHealthChart />
        </div>

        {/* 7-Day Weather & Temp Summary Chart */}
        <div className="card-glass">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <BarChart2 size={18} color="#0284c7" /> Weather Telemetry Summary
            </h3>
            <span className="badge badge-blue">{farmerProfile.district || 'Karur'}</span>
          </div>
          <WeatherSummaryChart forecastData={activeWeather.forecast7Days} />
        </div>

      </div>

      {/* Recent AI Recommendations & Activity */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        
        {/* Left: Quick Access Modules Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          
          <div className="card-glass" style={{ cursor: 'pointer' }} onClick={() => onNavigate('disease')}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#d1fae5', color: '#047857', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Leaf size={22} />
              </div>
              <span className="badge badge-green">AI Scan</span>
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.35rem' }}>AI Disease Detector</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.4 }}>
              Scan leaf images to detect diseases with confidence score, organic cure & fungicides.
            </p>
            <div style={{ color: 'var(--primary-600)', fontWeight: 700, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              Launch Scanner <ArrowRight size={14} />
            </div>
          </div>

          <div className="card-glass" style={{ cursor: 'pointer' }} onClick={() => onNavigate('calendar')}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#f3e8ff', color: '#7e22ce', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CalendarDays size={22} />
              </div>
              <span className="badge" style={{ background: '#f3e8ff', color: '#7e22ce' }}>Innovation ⭐</span>
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.35rem' }}>Seasonal Calendar</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.4 }}>
              Month-by-month activity roadmap for {farmerProfile.primaryCrop ? farmerProfile.primaryCrop.toUpperCase() : 'PADDY'} with interactive task checklist.
            </p>
            <div style={{ color: '#7e22ce', fontWeight: 700, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              View Timeline <ArrowRight size={14} />
            </div>
          </div>

        </div>

        {/* Right: AI Today's Advisory Feed */}
        <div className="card-glass">
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={18} color="var(--primary-600)" /> Today's Karur AI Advisories
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div style={{ padding: '0.75rem', borderRadius: '8px', background: 'var(--bg-main)', border: '1px solid var(--border-light)' }}>
              <p style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--primary-700)', marginBottom: '0.2rem' }}>
                🌱 Cauvery Water Management
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-main)', lineHeight: 1.4 }}>
                Maintain 2-3cm water depth in Kuruvai Paddy fields post Mayanur canal release.
              </p>
            </div>

            <div style={{ padding: '0.75rem', borderRadius: '8px', background: 'var(--bg-main)', border: '1px solid var(--border-light)' }}>
              <p style={{ fontSize: '0.825rem', fontWeight: 700, color: '#d97706', marginBottom: '0.2rem' }}>
                🐛 Groundnut & Banana Scouting
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-main)', lineHeight: 1.4 }}>
                Inspect Banana leaves for Sigatoka leaf spot and Groundnut for Tikka disease.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
