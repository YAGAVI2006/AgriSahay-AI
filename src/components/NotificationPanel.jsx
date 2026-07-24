import React from 'react';
import { Bell, CloudRain, Landmark, AlertTriangle, CalendarDays, CheckCheck, X } from 'lucide-react';

export default function NotificationPanel({ isOpen, onClose, notifications, onMarkAsRead, onMarkAllRead }) {
  if (!isOpen) return null;

  const unreadCount = notifications.filter(n => !n.read).length;

  const getIcon = (type) => {
    switch (type) {
      case 'weather': return <CloudRain size={18} color="#0284c7" />;
      case 'scheme': return <Landmark size={18} color="#d97706" />;
      case 'disease': return <AlertTriangle size={18} color="#dc2626" />;
      case 'calendar': return <CalendarDays size={18} color="#7e22ce" />;
      default: return <Bell size={18} color="var(--primary-600)" />;
    }
  };

  return (
    <div style={{
      position: 'absolute',
      top: '65px',
      right: '20px',
      width: '380px',
      maxHeight: '480px',
      background: 'var(--card-bg)',
      border: '1px solid var(--border-light)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xl)',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      animation: 'fadeIn 0.2s ease-out'
    }}>
      {/* Panel Header */}
      <div style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-main)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Bell size={18} color="var(--primary-600)" />
          <h4 style={{ fontSize: '1rem', fontWeight: 800 }}>Notifications</h4>
          {unreadCount > 0 && (
            <span className="badge badge-amber" style={{ fontSize: '0.7rem' }}>
              {unreadCount} New
            </span>
          )}
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          {unreadCount > 0 && (
            <button 
              onClick={onMarkAllRead} 
              style={{ background: 'transparent', border: 'none', color: 'var(--primary-700)', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '2px' }}
            >
              <CheckCheck size={14} /> Mark all read
            </button>
          )}
          <button onClick={onClose} className="btn-outline" style={{ padding: '2px 6px', borderRadius: '50%' }}>
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
        {notifications.length === 0 ? (
          <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            No new notifications right now.
          </div>
        ) : (
          notifications.map((n) => (
            <div 
              key={n.id}
              onClick={() => onMarkAsRead(n.id)}
              style={{
                padding: '0.9rem 1rem',
                borderBottom: '1px solid var(--border-light)',
                background: n.read ? 'transparent' : 'var(--primary-50)',
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'flex-start',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--card-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: 'var(--shadow-sm)' }}>
                {getIcon(n.type)}
              </div>
              
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2px' }}>
                  <h5 style={{ fontSize: '0.875rem', fontWeight: n.read ? 600 : 800, color: 'var(--text-main)' }}>{n.title}</h5>
                  {!n.read && <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-600)' }}></span>}
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.3, marginBottom: '4px' }}>{n.message}</p>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', opacity: 0.8 }}>{n.timestamp}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
