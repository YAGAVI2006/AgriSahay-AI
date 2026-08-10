import React, { useState } from 'react';
import { Search, Bell, Sun, Moon, MapPin, ChevronDown, User, Shield, LogOut, Sparkles, Cpu, Leaf } from 'lucide-react';
import GlobalSearchModal from './GlobalSearchModal';
import NotificationPanel from './NotificationPanel';

export default function Navbar({
  farmerProfile,
  onOpenProfile,
  selectedLanguage,
  setSelectedLanguage,
  theme,
  setTheme,
  activeWeather,
  onNavigate,
  onLogout,
  notifications,
  onMarkAsRead,
  onMarkAllRead,
  onUpdateLocation
}) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  const unreadCount = notifications ? notifications.filter(n => !n.read).length : 0;

  return (
    <>
      <header className="glass-nav" style={{ padding: '0.85rem 2.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1440px', margin: '0 auto' }}>
          
          {/* Brand Logo & Tagline */}
          <div 
            onClick={() => onNavigate('dashboard')} 
            style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', cursor: 'pointer' }}
          >
            {/* Redesigned Leaf + AI Circuit Logo Badge */}
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 4px 12px rgba(5, 150, 105, 0.3)',
              position: 'relative'
            }}>
              <Leaf size={20} />
              <div style={{ position: 'absolute', bottom: '-2px', right: '-2px', background: '#F59E0B', borderRadius: '50%', padding: '2px', color: '#0F172A', display: 'flex' }}>
                <Cpu size={10} />
              </div>
            </div>

            <div>
              <h1 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em', fontFamily: 'var(--font-heading)' }}>
                AgriSahay <span style={{ color: 'var(--primary-600)' }}>AI</span>
              </h1>
              <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                AI-Powered Agriculture Decision Support System
              </p>
            </div>
          </div>

          {/* Search Trigger Bar (Vercel Style Ctrl+K) */}
          <div 
            onClick={() => setIsSearchOpen(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'var(--card-bg)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              width: '320px',
              boxShadow: 'var(--shadow-xs)',
              transition: 'all 0.2s ease'
            }}
          >
            <Search size={16} color="var(--text-muted)" />
            <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)', flex: 1 }}>
              Search crops, diseases, market prices...
            </span>
            <kbd style={{ background: 'var(--bg-slate)', border: '1px solid var(--border-light)', borderRadius: '4px', padding: '1px 5px', fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 700 }}>
              ⌘K
            </kbd>
          </div>

          {/* Right Action Widgets */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            
            {/* Weather Telemetry Pill */}
            <div 
              onClick={() => onNavigate('weather')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'var(--primary-50)',
                border: '1px solid var(--primary-100)',
                padding: '0.4rem 0.85rem',
                borderRadius: '9999px',
                cursor: 'pointer'
              }}
            >
              <span style={{ fontSize: '1rem' }}>{activeWeather?.icon || '☀️'}</span>
              <div style={{ fontSize: '0.775rem', fontWeight: 700, color: 'var(--primary-800)' }}>
                {activeWeather?.district || 'Karur'}: {activeWeather?.temp || 33}°C
              </div>
            </div>

            {/* Notifications Bell Button */}
            <div style={{ position: 'relative' }}>
              <button 
                onClick={() => setIsNotifOpen(!isNotifOpen)}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  border: '1px solid var(--border-light)',
                  background: 'var(--card-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  position: 'relative'
                }}
              >
                <Bell size={18} color="var(--text-main)" />
                {unreadCount > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: '-2px',
                    right: '-2px',
                    background: '#EF4444',
                    color: '#FFFFFF',
                    borderRadius: '50%',
                    width: '18px',
                    height: '18px',
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {unreadCount}
                  </span>
                )}
              </button>

              {isNotifOpen && (
                <NotificationPanel 
                  notifications={notifications}
                  onMarkAsRead={onMarkAsRead}
                  onMarkAllRead={onMarkAllRead}
                  onClose={() => setIsNotifOpen(false)}
                />
              )}
            </div>

            {/* Language Switcher */}
            <button
              onClick={() => setSelectedLanguage(selectedLanguage === 'en' ? 'ta' : 'en')}
              className="btn-outline"
              style={{ padding: '0.4rem 0.75rem', fontSize: '0.775rem', fontWeight: 700 }}
            >
              🌐 {selectedLanguage === 'en' ? 'தமிழ்' : 'English'}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: '1px solid var(--border-light)',
                background: 'var(--card-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              {theme === 'light' ? <Moon size={18} color="var(--text-main)" /> : <Sun size={18} color="#F59E0B" />}
            </button>

            {/* Farmer Profile Avatar Dropdown */}
            <div style={{ position: 'relative' }}>
              <div 
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 0.65rem',
                  borderRadius: '9999px',
                  border: '1px solid var(--border-light)',
                  background: 'var(--card-bg)',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #10B981 0%, #047857 100%)',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {farmerProfile.name ? farmerProfile.name.charAt(0).toUpperCase() : 'V'}
                </div>
                <span style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  {farmerProfile.name || 'Farmer Profile'}
                </span>
                <ChevronDown size={14} color="var(--text-muted)" />
              </div>

              {isProfileMenuOpen && (
                <div className="card-glass" style={{
                  position: 'absolute',
                  right: 0,
                  top: '120%',
                  width: '220px',
                  padding: '0.5rem',
                  zIndex: 200,
                  boxShadow: 'var(--shadow-xl)'
                }}>
                  <div 
                    onClick={() => { onOpenProfile(); setIsProfileMenuOpen(false); }}
                    style={{ padding: '0.65rem 0.85rem', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.85rem', fontWeight: 600 }}
                  >
                    <User size={16} color="var(--primary-600)" /> Edit Profile & Land
                  </div>
                  <div 
                    onClick={() => { onNavigate('vault'); setIsProfileMenuOpen(false); }}
                    style={{ padding: '0.65rem 0.85rem', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.85rem', fontWeight: 600 }}
                  >
                    <Shield size={16} color="var(--primary-600)" /> Document Vault
                  </div>
                  <div style={{ borderTop: '1px solid var(--border-light)', margin: '0.35rem 0' }}></div>
                  <div 
                    onClick={() => { onLogout(); setIsProfileMenuOpen(false); }}
                    style={{ padding: '0.65rem 0.85rem', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.85rem', fontWeight: 700, color: '#EF4444' }}
                  >
                    <LogOut size={16} color="#EF4444" /> Sign Out
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </header>

      {/* Global Search Modal */}
      {isSearchOpen && (
        <GlobalSearchModal 
          onClose={() => setIsSearchOpen(false)}
          onNavigate={(view) => {
            onNavigate(view);
            setIsSearchOpen(false);
          }}
        />
      )}
    </>
  );
}
