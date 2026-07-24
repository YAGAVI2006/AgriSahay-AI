import React from 'react';
import { LayoutDashboard, Leaf, Bot, CloudSun, Landmark, CalendarDays, User, LogOut, Sprout, TrendingUp, Droplets, MapPin, FileText, Sparkles, Cpu, Layers, Bug, Activity, Users, ShieldAlert, Phone, BarChart2, Building2 } from 'lucide-react';

export default function Sidebar({ currentView, setCurrentView, onLogout, activeRole }) {
  const navItems = [
    { id: 'dashboard', label: 'Farmer Dashboard', icon: LayoutDashboard, badge: 'Overview' },
    { id: 'digital_twin', label: 'AI Digital Twin', icon: Cpu, badge: 'Flagship ⭐' },
    { id: 'satellite', label: 'Satellite NDVI Hub', icon: Layers, badge: 'Sentinel' },
    { id: 'pest', label: 'AI Pest Risk Predictor', icon: Bug, badge: 'Predict' },
    { id: 'yield', label: 'AI Yield Forecaster', icon: Activity, badge: 'Forecast' },
    { id: 'outbreak', label: 'Disease Outbreak Map', icon: ShieldAlert, badge: 'GIS Heat' },
    { id: 'recommend', label: 'Crop Recommender', icon: Sprout, badge: 'AI Match' },
    { id: 'disease', label: 'AI Disease Detector', icon: Leaf, badge: 'AI Scan' },
    { id: 'assistant', label: 'AI Agri Assistant', icon: Bot, badge: 'Voice/Q&A' },
    { id: 'community', label: 'Farmer Community', icon: Users, badge: 'Forum' },
    { id: 'weather', label: 'Smart Weather', icon: CloudSun, badge: '7-Day' },
    { id: 'market', label: 'Market Prices (Mandi)', icon: TrendingUp, badge: 'Live Board' },
    { id: 'schemes', label: 'Government Schemes', icon: Landmark, badge: 'Matched' },
    { id: 'irrigation', label: 'Irrigation Planner', icon: Droplets, badge: 'Water' },
    { id: 'fertilizer', label: 'AI Fertilizer Guide', icon: Sparkles, badge: 'NPK' },
    { id: 'sustainability', label: 'Carbon & Sustainability', icon: Leaf, badge: 'ESG' },
    { id: 'calendar', label: 'AI Seasonal Calendar', icon: CalendarDays, badge: 'Timeline' },
    { id: 'vault', label: 'Document Vault', icon: FileText, badge: 'Secure' },
    { id: 'map', label: 'Interactive GIS Map', icon: MapPin, badge: 'Map' },
    { id: 'emergency', label: 'Emergency Support', icon: Phone, badge: '24/7' },
    { id: 'analytics', label: 'Advanced Analytics', icon: BarChart2, badge: 'Reports' },
    { id: 'admin', label: 'Admin & Officer Panel', icon: Building2, badge: 'RBAC' },
    { id: 'profile', label: 'Farmer Profile', icon: User, badge: 'Settings' }
  ];

  return (
    <aside style={{
      width: '265px',
      background: 'var(--card-bg)',
      borderRight: '1px solid var(--border-light)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '1.25rem 0.85rem',
      flexShrink: 0,
      maxHeight: '100vh',
      overflowY: 'auto'
    }}>
      <div>
        <div style={{ padding: '0 0.5rem 0.75rem 0.5rem', borderBottom: '1px solid var(--border-light)', marginBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary-700)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Phase 3 AI Platform
          </p>
          <span className="badge badge-amber" style={{ fontSize: '0.6rem' }}>
            Role: {activeRole.toUpperCase()}
          </span>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '0.6rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: 'none',
                  background: isActive ? 'linear-gradient(135deg, var(--primary-600) 0%, var(--primary-700) 100%)' : 'transparent',
                  color: isActive ? '#ffffff' : 'var(--text-main)',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.825rem',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Icon size={17} color={isActive ? '#ffffff' : 'var(--primary-600)'} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span style={{
                    fontSize: '0.625rem',
                    padding: '2px 5px',
                    borderRadius: '4px',
                    background: isActive ? 'rgba(255,255,255,0.2)' : 'var(--primary-50)',
                    color: isActive ? '#ffffff' : 'var(--primary-700)',
                    fontWeight: 700
                  }}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Logout & Session Info */}
      <div style={{
        background: 'var(--bg-main)',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-md)',
        padding: '0.85rem',
        marginTop: '1rem'
      }}>
        <button 
          onClick={onLogout}
          className="btn-outline"
          style={{ width: '100%', fontSize: '0.8rem', padding: '0.4rem', color: '#dc2626', borderColor: '#fca5a5' }}
        >
          <LogOut size={14} /> Logout Session
        </button>
      </div>
    </aside>
  );
}
