import React from 'react';
import { 
  LayoutDashboard, 
  Sprout, 
  Scan, 
  CloudSun, 
  TrendingUp, 
  Award, 
  Bot, 
  Users, 
  User, 
  LogOut, 
  Sparkles,
  ChevronRight,
  Droplet,
  Compass,
  FileText
} from 'lucide-react';

export default function Sidebar({ currentView, setCurrentView, onLogout, activeRole = 'farmer', selectedLanguage = 'en' }) {
  const isTa = selectedLanguage === 'ta';

  const primaryNavItems = [
    { id: 'dashboard', label: isTa ? 'டாஷ்போர்டு' : 'Dashboard', icon: LayoutDashboard },
    { id: 'recommend', label: isTa ? 'பயிர் பொருத்தம் (30/25/20/15/10)' : 'Crop Scoring Engine', icon: Sprout },
    { id: 'disease', label: isTa ? 'CNN நோய் கண்டறிதல்' : 'CNN Disease Detection', icon: Scan, badge: 'CNN' },
    { id: 'weather', label: isTa ? 'வானிலை விதிமுறைகள்' : 'Weather Rule Engine', icon: CloudSun },
    { id: 'evaluation', label: isTa ? 'பரிசோதனை மதிப்பீடு' : 'Experimental Evaluation', icon: Activity, badge: 'Research' },
    { id: 'schemes', label: isTa ? 'அரசு திட்டங்கள்' : 'Government Schemes', icon: Award },
    { id: 'assistant', label: isTa ? 'அக்ரிபாட் AI' : 'Bilingual AgriBot', icon: Bot, badge: '24/7' },
    { id: 'profile', label: isTa ? 'பண்ணை விவரம்' : 'Farmer Profile', icon: User }
  ];

  const secondaryNavItems = [
    { id: 'irrigation', label: isTa ? 'நீர்ப்பாசன திட்டம்' : 'Irrigation Planner', icon: Droplet },
    { id: 'map', label: isTa ? 'பண்ணை வரைபடம்' : 'Farm Map GIS', icon: Compass },
    { id: 'vault', label: isTa ? 'ஆவண பெட்டகம்' : 'Document Vault', icon: FileText }
  ];

  return (
    <aside className="app-sidebar">
      <div>
        {/* Brand Header */}
        <div 
          onClick={() => setCurrentView('landing')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            padding: '0.5rem 0.5rem 1.25rem',
            cursor: 'pointer',
            borderBottom: '1px solid var(--border-subtle)',
            marginBottom: '1rem'
          }}
        >
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            boxShadow: '0 2px 4px rgba(5, 150, 105, 0.2)'
          }}>
            <Sprout size={20} />
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-main)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              AgriSahay <span style={{ color: 'var(--primary-600)' }}>AI</span>
            </div>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Decision Support
            </div>
          </div>
        </div>

        {/* Primary Navigation Menu */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <div style={{ fontSize: '0.675rem', fontWeight: 700, color: 'var(--text-light)', padding: '0.25rem 0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {isTa ? 'முதன்மை மெனு' : 'Main Navigation'}
          </div>

          {primaryNavItems.map((item) => {
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
                  borderRadius: 'var(--radius-sm)',
                  border: 'none',
                  background: isActive ? 'var(--primary-50)' : 'transparent',
                  color: isActive ? 'var(--primary-800)' : 'var(--text-body)',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Icon size={18} color={isActive ? 'var(--primary-600)' : 'var(--text-muted)'} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="badge badge-green" style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem' }}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Secondary Modules */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
          <div style={{ fontSize: '0.675rem', fontWeight: 700, color: 'var(--text-light)', padding: '0.25rem 0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {isTa ? 'கூடுதல் கருவிகள்' : 'Farm Tools'}
          </div>

          {secondaryNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  width: '100%',
                  padding: '0.55rem 0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  border: 'none',
                  background: isActive ? 'var(--primary-50)' : 'transparent',
                  color: isActive ? 'var(--primary-800)' : 'var(--text-muted)',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.825rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.15s ease'
                }}
              >
                <Icon size={16} color={isActive ? 'var(--primary-600)' : 'var(--text-light)'} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer Profile Pill & Logout */}
      <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.85rem' }}>
        <button
          onClick={onLogout}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            width: '100%',
            padding: '0.55rem 0.75rem',
            borderRadius: 'var(--radius-sm)',
            border: 'none',
            background: 'transparent',
            color: '#DC2626',
            fontWeight: 600,
            fontSize: '0.825rem',
            cursor: 'pointer'
          }}
        >
          <LogOut size={16} color="#DC2626" />
          <span>{isTa ? 'வெளியேறு' : 'Sign Out'}</span>
        </button>
      </div>
    </aside>
  );
}
