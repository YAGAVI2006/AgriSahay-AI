import React from 'react';
import { Sprout, Heart, Github, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer style={{
      background: 'var(--card-bg)',
      borderTop: '1px solid var(--border-light)',
      padding: '3rem 2rem 1.5rem',
      marginTop: 'auto'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--primary-600)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sprout size={20} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-700)' }}>AgriSahay AI</h3>
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5, maxWidth: '320px' }}>
            An Intelligent Agriculture Decision Support System powered by AI. Empowering farmers with precision crop care, weather intelligence, government scheme recommendations, and seasonal activity calendars.
          </p>
        </div>

        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main)' }}>Platform Modules</h4>
          <ul style={{ listStyleType: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <li style={{ cursor: 'pointer' }} onClick={() => onNavigate && onNavigate('disease')}>🌿 AI Disease Scanner</li>
            <li style={{ cursor: 'pointer' }} onClick={() => onNavigate && onNavigate('assistant')}>🤖 AI Agri Assistant</li>
            <li style={{ cursor: 'pointer' }} onClick={() => onNavigate && onNavigate('weather')}>🌦 Smart Weather</li>
            <li style={{ cursor: 'pointer' }} onClick={() => onNavigate && onNavigate('schemes')}>🏛 Government Schemes</li>
            <li style={{ cursor: 'pointer' }} onClick={() => onNavigate && onNavigate('calendar')}>🌾 AI Seasonal Calendar</li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main)' }}>Government Portals</h4>
          <ul style={{ listStyleType: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <li><a href="https://pmkisan.gov.in" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>PM-KISAN Portal</a></li>
            <li><a href="https://pmfby.gov.in" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>PM Fasal Bima Yojana</a></li>
            <li><a href="https://soilhealth.dac.gov.in" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Soil Health Card</a></li>
            <li><a href="https://agrimachinery.nic.in" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>SMAM Machinery Subsidy</a></li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main)' }}>Support & Helpline</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={14} color="var(--primary-600)" /> 1800-180-1551 (Kisan Call Center)
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={14} color="var(--primary-600)" /> support@agrisahay.in
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={14} color="var(--primary-600)" /> New Delhi, India
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem', textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', flexWrap: 'wrap', gap: '0.5rem' }}>
        <p>© 2026 AgriSahay AI. All rights reserved. Empowering Farmers with AI Precision.</p>
        <p style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          Crafted with <Heart size={14} color="#dc2626" fill="#dc2626" /> for Indian Farmers
        </p>
      </div>
    </footer>
  );
}
