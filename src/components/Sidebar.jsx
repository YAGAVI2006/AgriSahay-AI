import React from 'react';
import { 
  LayoutDashboard, 
  Cpu, 
  Satellite, 
  Bug, 
  TrendingUp, 
  Map, 
  Sprout, 
  Scan, 
  Bot, 
  Users, 
  CloudSun, 
  ShoppingBag, 
  Award, 
  Droplet, 
  Zap, 
  Leaf, 
  Calendar, 
  ShieldCheck, 
  Compass, 
  PhoneCall, 
  BarChart3, 
  UserCheck 
} from 'lucide-react';

export default function Sidebar({ currentView, setCurrentView, onLogout, activeRole = 'farmer' }) {

  const menuSections = [
    {
      title: 'CORE PLATFORM',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'digital_twin', label: 'AI Digital Twin', icon: Cpu, badge: 'AI' },
        { id: 'satellite', label: 'Satellite NDVI', icon: Satellite },
        { id: 'pest', label: 'AI Pest Risk', icon: Bug },
        { id: 'yield', label: 'Yield Forecaster', icon: TrendingUp },
        { id: 'outbreak', label: 'Outbreak Heatmap', icon: Map }
      ]
    },
    {
      title: 'FARMING DECISION MODULES',
      items: [
        { id: 'recommend', label: 'Crop Recommend', icon: Sprout },
        { id: 'disease', label: 'AI Disease Detector', icon: Scan, badge: 'VISION' },
        { id: 'assistant', label: 'AgriBot AI Q&A', icon: Bot },
        { id: 'community', label: 'Uzhavar Mandram', icon: Users },
        { id: 'weather', label: 'Weather Intelligence', icon: CloudSun },
        { id: 'market', label: 'Market Prices', icon: ShoppingBag },
        { id: 'schemes', label: 'Govt Schemes', icon: Award }
      ]
    },
    {
      title: 'MANAGEMENT & ANALYTICS',
      items: [
        { id: 'irrigation', label: 'Irrigation Planner', icon: Droplet },
        { id: 'fertilizer', label: 'Fertilizer Guide', icon: Zap },
        { id: 'sustainability', label: 'Carbon & Eco Score', icon: Leaf },
        { id: 'calendar', label: 'Crop Calendar', icon: Calendar },
        { id: 'vault', label: 'Document Vault', icon: ShieldCheck },
        { id: 'map', label: 'Farm Map GIS', icon: Compass },
        { id: 'emergency', label: 'Emergency Support', icon: PhoneCall },
        { id: 'analytics', label: 'Analytics Report', icon: BarChart3 },
        { id: 'admin', label: 'Admin & Officer Panel', icon: UserCheck }
      ]
    }
  ];

  return (
    <aside style={{
      width: '260px',
      background: 'var(--card-bg)',
      borderRight: '1px solid var(--border-light)',
      padding: '1.25rem 0.85rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      height: '100vh',
      overflowY: 'auto',
      flexShrink: 0
    }}>
      <div>
        {/* Active Role Selector Pill */}
        <div style={{
          padding: '0.65rem 0.85rem',
          borderRadius: 'var(--radius-md)',
          background: 'var(--primary-50)',
          border: '1px solid var(--primary-100)',
          marginBottom: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <span style={{ fontSize: '0.65rem', color: 'var(--primary-700)', fontWeight: 800, textTransform: 'uppercase', display: 'block' }}>
              ACTIVE ROLE
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-900)' }}>
              {activeRole.toUpperCase()} USER
            </span>
          </div>
          <span className="badge badge-amber" style={{ fontSize: '0.6rem' }}>ONLINE</span>
        </div>

        {/* Menu Sections Stream */}
        {menuSections.map((section, sIdx) => (
          <div key={sIdx} style={{ marginBottom: '1.25rem' }}>
            <p style={{
              fontSize: '0.65rem',
              fontWeight: 800,
              color: 'var(--text-light)',
              letterSpacing: '0.08em',
              padding: '0 0.65rem 0.5rem',
              textTransform: 'uppercase'
            }}>
              {section.title}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
              {section.items.map((item) => {
                const IconComp = item.icon;
                const isActive = currentView === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() => setCurrentView(item.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.55rem 0.75rem',
                      borderRadius: 'var(--radius-md)',
                      cursor: 'pointer',
                      fontSize: '0.825rem',
                      fontWeight: isActive ? 700 : 600,
                      color: isActive ? 'var(--primary-700)' : 'var(--text-main)',
                      background: isActive ? 'var(--primary-50)' : 'transparent',
                      borderLeft: isActive ? '3px solid var(--primary-600)' : '3px solid transparent',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <IconComp size={18} color={isActive ? 'var(--primary-600)' : 'var(--text-muted)'} />
                      <span>{item.label}</span>
                    </div>

                    {item.badge && (
                      <span className="badge badge-amber" style={{ fontSize: '0.575rem', padding: '1px 5px' }}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar Footer Info */}
      <div style={{
        borderTop: '1px solid var(--border-light)',
        paddingTop: '0.85rem',
        fontSize: '0.725rem',
        color: 'var(--text-muted)',
        textAlign: 'center'
      }}>
        <p style={{ fontWeight: 700 }}>AgriSahay AI v2.4 Pro</p>
        <p style={{ fontSize: '0.675rem', color: 'var(--text-light)', marginTop: '2px' }}>Karur District, Tamil Nadu</p>
      </div>
    </aside>
  );
}
