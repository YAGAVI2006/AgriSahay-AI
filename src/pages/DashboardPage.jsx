import React from 'react';
import { 
  Sprout, 
  Scan, 
  Bot, 
  CloudSun, 
  ShoppingBag, 
  Award, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  Activity, 
  Calendar, 
  Droplet, 
  Zap, 
  Cpu, 
  Shield 
} from 'lucide-react';
import FarmHealthGauge from '../components/FarmHealthGauge';

export default function DashboardPage({
  farmerProfile,
  activeWeather,
  matchedSchemes,
  onNavigate,
  recentScans
}) {
  const farmHealthScore = 92;

  const todayTasks = [
    { id: 1, text: 'Apply Panchagavya 3% foliar spray on coriander plot', done: false, category: 'Fertilizer' },
    { id: 2, text: 'Inspect paddy tillers for Stem Borer dead hearts', done: true, category: 'Pest Scouting' },
    { id: 3, text: 'Check Cauvery canal drip fertigation filter pressure', done: false, category: 'Irrigation' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      
      {/* Dashboard Top Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div className="badge badge-green" style={{ marginBottom: '0.35rem' }}>
            <Sparkles size={12} /> AI Precision Agriculture System
          </div>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--primary-900)' }}>
            Welcome Back, {farmerProfile.name || 'Farmer'}! 👋
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Karur District, Tamil Nadu • Land Size: {farmerProfile.landSizeAcres || 4.5} Acres ({farmerProfile.soilType || 'Red Soil'})
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button onClick={() => onNavigate('disease')} className="btn-primary">
            <Scan size={16} /> Scan Leaf Disease
          </button>
          <button onClick={() => onNavigate('digital_twin')} className="btn-outline">
            <Cpu size={16} /> View Digital Twin
          </button>
        </div>
      </div>

      {/* Top 4 Metric Telemetry Cards (Vercel Style) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
        
        {/* Weather Card */}
        <div className="card-glass" style={{ borderLeft: '4px solid var(--primary-600)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Micro-Climate Weather
            </span>
            <span style={{ fontSize: '1.5rem' }}>{activeWeather.icon || '☀️'}</span>
          </div>
          <div style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--primary-900)' }}>
            {activeWeather.temp || 33}°C
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--primary-700)', fontWeight: 600, marginTop: '2px' }}>
            {activeWeather.condition || 'Warm & Clear'} • {farmerProfile.district || 'Karur'}
          </p>
        </div>

        {/* Farm Health Meter */}
        <div className="card-glass" style={{ borderLeft: '4px solid #10B981' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Farm Health Score
            </span>
            <Activity size={20} color="#10B981" />
          </div>
          <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#047857' }}>
            {farmHealthScore} / 100
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
            Optimal Moisture & Chlorophyll
          </p>
        </div>

        {/* Mandi Price Card */}
        <div className="card-glass" style={{ borderLeft: '4px solid #F59E0B' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Paddy Mandi Price
            </span>
            <TrendingUp size={20} color="#D97706" />
          </div>
          <div style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--accent-amber-dark)' }}>
            ₹2,280 <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>/ Quintal</span>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#D97706', fontWeight: 600, marginTop: '2px' }}>
            +4.2% Karur Uzhavar Sandhai
          </p>
        </div>

        {/* Active Crop Card */}
        <div className="card-glass" style={{ borderLeft: '4px solid #8B5CF6' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Primary Crop
            </span>
            <Sprout size={20} color="#7E22CE" />
          </div>
          <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#6B21A8' }}>
            Paddy & Greens
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
            Kuruvai Season • Active Tillering
          </p>
        </div>

      </div>

      {/* Main Dashboard Layout (2 Columns) */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.75rem' }}>
        
        {/* Left Column: Farm Health Gauge & Action Tasks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Circular Farm Health Score Widget */}
          <div className="card-glass">
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Activity size={18} color="var(--primary-600)" /> AI Farm Health & Canopy Index
            </h3>
            <FarmHealthGauge score={farmHealthScore} />
          </div>

          {/* Today's Recommended Farming Action Tasks */}
          <div className="card-glass">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={18} color="var(--primary-600)" /> Today's Recommended AI Tasks
              </h3>
              <span className="badge badge-green">3 Tasks Active</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {todayTasks.map(t => (
                <div 
                  key={t.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: t.done ? 'var(--primary-50)' : 'var(--bg-slate)',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2 size={20} color={t.done ? 'var(--primary-600)' : 'var(--text-light)'} />
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, textDecoration: t.done ? 'line-through' : 'none', color: t.done ? 'var(--primary-800)' : 'var(--text-main)' }}>
                      {t.text}
                    </span>
                  </div>
                  <span className="badge badge-amber" style={{ fontSize: '0.675rem' }}>
                    {t.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Quick AI Feature Launcher Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          <div className="card-glass" style={{ borderTop: '4px solid var(--primary-600)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.85rem' }}>
              ⚡ Quick AI Module Launchers
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <button 
                onClick={() => onNavigate('disease')} 
                className="btn-outline" 
                style={{ width: '100%', justifyContent: 'space-between', textAlign: 'left' }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Scan size={18} color="var(--primary-600)" /> AI Disease Scanner
                </span>
                <ArrowRight size={16} />
              </button>

              <button 
                onClick={() => onNavigate('assistant')} 
                className="btn-outline" 
                style={{ width: '100%', justifyContent: 'space-between', textAlign: 'left' }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Bot size={18} color="var(--primary-600)" /> AgriBot AI Q&A
                </span>
                <ArrowRight size={16} />
              </button>

              <button 
                onClick={() => onNavigate('recommend')} 
                className="btn-outline" 
                style={{ width: '100%', justifyContent: 'space-between', textAlign: 'left' }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Sprout size={18} color="var(--primary-600)" /> Crop Recommendation
                </span>
                <ArrowRight size={16} />
              </button>

              <button 
                onClick={() => onNavigate('market')} 
                className="btn-outline" 
                style={{ width: '100%', justifyContent: 'space-between', textAlign: 'left' }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShoppingBag size={18} color="var(--primary-600)" /> Market Prices
                </span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Matched Schemes Summary Widget */}
          <div className="card-glass" style={{ background: 'linear-gradient(135deg, #FFFBEB 0%, #FFFFFF 100%)', border: '1px solid #FDE68A' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--accent-amber-dark)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Award size={18} color="#D97706" /> Matched Govt Subsidies
            </h4>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              You are eligible for PM-KISAN ₹6,000 + Kuruvai Package subsidy in Karur.
            </p>
            <button onClick={() => onNavigate('schemes')} className="btn-primary" style={{ width: '100%', background: '#D97706' }}>
              View Schemes & Apply
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
