import React, { useState } from 'react';
import { Sprout, User, Bell, Sun, Moon, Globe, MapPin, LogOut, Home, Search, Navigation } from 'lucide-react';
import NotificationPanel from './NotificationPanel';
import GlobalSearchModal from './GlobalSearchModal';
import { locationService } from '../services/locationService';

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
  notifications = [],
  onMarkAsRead,
  onMarkAllRead,
  onUpdateLocation
}) {
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isGpsLoading, setIsGpsLoading] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ta', name: 'தமிழ் (Tamil)' }
  ];

  const handleGpsDetect = async () => {
    setIsGpsLoading(true);
    try {
      const loc = await locationService.detectGpsLocation();
      if (onUpdateLocation) onUpdateLocation(loc);
      setIsGpsLoading(false);
    } catch (err) {
      setIsGpsLoading(false);
      alert("GPS Permission denied or unavailable. Falling back to Karur, Tamil Nadu.");
    }
  };

  return (
    <header style={{
      height: '70px',
      borderBottom: '1px solid var(--border-light)',
      background: 'var(--card-bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 1.5rem',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(8px)'
    }}>
      {/* Brand Logo & Name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }} onClick={() => onNavigate('dashboard')}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          boxShadow: '0 4px 10px rgba(5, 150, 105, 0.3)'
        }}>
          <Sprout size={24} />
        </div>
        <div>
          <h1 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-700)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            AgriSahay <span style={{ color: 'var(--accent-amber)', fontSize: '0.75rem', background: 'var(--accent-amber-light)', padding: '2px 6px', borderRadius: '6px' }}>AI Phase 2</span>
          </h1>
          <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Location-Aware Smart Decision System</p>
        </div>
      </div>

      {/* Top Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
        
        {/* GPS Auto-Location Detect Button */}
        <button
          onClick={handleGpsDetect}
          className="btn-secondary"
          style={{ fontSize: '0.8rem', padding: '0.4rem 0.75rem', borderRadius: '9999px' }}
          title="Detect Current GPS Location"
        >
          <Navigation size={14} className={isGpsLoading ? 'animate-spin' : ''} />
          <span>{isGpsLoading ? 'Detecting GPS...' : 'GPS Auto-Detect'}</span>
        </button>

        {/* Location Weather Quick Pill */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          background: 'var(--primary-50)',
          border: '1px solid var(--primary-100)',
          padding: '0.4rem 0.75rem',
          borderRadius: '9999px',
          fontSize: '0.825rem',
          fontWeight: 600,
          color: 'var(--primary-800)',
          cursor: 'pointer'
        }} onClick={() => onNavigate('weather')}>
          <MapPin size={14} color="var(--primary-600)" />
          <span>{farmerProfile.village || 'Mayanur'}, {farmerProfile.district || 'Karur'}</span>
          <span style={{ opacity: 0.4 }}>|</span>
          <span>{activeWeather.icon} {activeWeather.temp}°C</span>
        </div>

        {/* Global Search Button */}
        <button
          onClick={() => setIsSearchOpen(true)}
          className="btn-outline"
          style={{ padding: '0.45rem 0.75rem', borderRadius: '8px', fontSize: '0.825rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
          title="Global Search"
        >
          <Search size={15} color="var(--primary-600)" />
          <span style={{ opacity: 0.7 }}>Search...</span>
        </button>

        {/* Language Dropdown */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', background: 'var(--bg-main)', border: '1px solid var(--border-light)', padding: '0.35rem 0.55rem', borderRadius: '8px' }}>
          <Globe size={15} color="var(--primary-600)" />
          <select 
            value={selectedLanguage} 
            onChange={(e) => setSelectedLanguage(e.target.value)}
            style={{ border: 'none', background: 'transparent', color: 'var(--text-main)', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', outline: 'none' }}
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>{lang.name}</option>
            ))}
          </select>
        </div>

        {/* Notification Bell Button */}
        <div style={{ position: 'relative' }}>
          <button 
            onClick={() => setIsNotifOpen(!isNotifOpen)}
            className="btn-outline" 
            style={{ padding: '0.45rem', borderRadius: '50%', position: 'relative' }}
            title="Notifications"
          >
            <Bell size={17} />
            {unreadCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-2px',
                right: '-2px',
                width: '17px',
                height: '17px',
                borderRadius: '50%',
                background: '#dc2626',
                color: '#ffffff',
                fontSize: '0.625rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid var(--card-bg)'
              }}>
                {unreadCount}
              </span>
            )}
          </button>

          <NotificationPanel 
            isOpen={isNotifOpen}
            onClose={() => setIsNotifOpen(false)}
            notifications={notifications}
            onMarkAsRead={onMarkAsRead}
            onMarkAllRead={onMarkAllRead}
          />
        </div>

        {/* Dark/Light Mode Toggle */}
        <button 
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} 
          className="btn-outline" 
          style={{ padding: '0.45rem', borderRadius: '50%' }}
          title="Toggle Dark/Light Theme"
        >
          {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
        </button>

        {/* Farmer Profile Button */}
        <button 
          onClick={() => onNavigate('profile')}
          className="btn-primary"
          style={{ padding: '0.4rem 0.85rem', borderRadius: '9999px', fontSize: '0.825rem' }}
        >
          <User size={15} />
          <span>{farmerProfile.name ? farmerProfile.name : 'Profile'}</span>
        </button>

      </div>

      {/* Global Search Modal */}
      <GlobalSearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={onNavigate}
      />
    </header>
  );
}
