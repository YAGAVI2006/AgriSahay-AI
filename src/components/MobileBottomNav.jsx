import React from 'react';
import { LayoutDashboard, Leaf, Bot, CloudSun, Landmark, CalendarDays, Plus } from 'lucide-react';

export default function MobileBottomNav({ currentView, setCurrentView }) {
  const items = [
    { id: 'dashboard', label: 'Home', icon: LayoutDashboard },
    { id: 'disease', label: 'Scan', icon: Leaf },
    { id: 'assistant', label: 'AgriBot', icon: Bot },
    { id: 'weather', label: 'Weather', icon: CloudSun },
    { id: 'schemes', label: 'Schemes', icon: Landmark }
  ];

  return (
    <>
      {/* Floating Action Button (FAB) for Mobile Quick Leaf Scan */}
      <button
        onClick={() => setCurrentView('disease')}
        style={{
          position: 'fixed',
          bottom: '80px',
          right: '20px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--primary-600) 0%, var(--primary-800) 100%)',
          color: '#ffffff',
          border: 'none',
          boxShadow: '0 8px 20px rgba(5, 150, 105, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99,
          cursor: 'pointer'
        }}
        title="Quick AI Scan"
      >
        <Plus size={26} />
      </button>

      {/* Touch-Friendly Bottom Bar */}
      <nav style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '65px',
        background: 'var(--card-bg)',
        borderTop: '1px solid var(--border-light)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        zIndex: 100,
        boxShadow: '0 -4px 12px rgba(0,0,0,0.05)'
      }}>
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              style={{
                background: 'transparent',
                border: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2px',
                color: isActive ? 'var(--primary-600)' : 'var(--text-muted)',
                fontWeight: isActive ? 700 : 500,
                fontSize: '0.7rem',
                cursor: 'pointer'
              }}
            >
              <Icon size={20} color={isActive ? 'var(--primary-600)' : 'var(--text-muted)'} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
