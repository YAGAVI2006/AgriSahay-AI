import React from 'react';
import { Leaf, Heart, Shield, Sparkles, Globe, Mail, Phone } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer style={{
      background: 'var(--card-bg)',
      borderTop: '1px solid var(--border-light)',
      padding: '3.5rem 2rem 2rem',
      marginTop: '4rem',
      color: 'var(--text-main)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          {/* Column 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Leaf size={20} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)' }}>
                AgriSahay <span style={{ color: 'var(--primary-600)' }}>AI</span>
              </h3>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.25rem', maxWidth: '320px' }}>
              Next-Generation AI Agriculture Decision Support Platform designed for farmers in Karur District and Tamil Nadu.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.825rem' }}>
              <span>📍 Karur, Tamil Nadu</span>
              <span>•</span>
              <span>📞 Kisan Helpline 1800-180-1551</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--primary-800)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Platform Views
            </h4>
            <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
              <li style={{ cursor: 'pointer', color: 'var(--text-muted)' }} onClick={() => onNavigate && onNavigate('dashboard')}>Dashboard</li>
              <li style={{ cursor: 'pointer', color: 'var(--text-muted)' }} onClick={() => onNavigate && onNavigate('recommend')}>Crop Recommendation</li>
              <li style={{ cursor: 'pointer', color: 'var(--text-muted)' }} onClick={() => onNavigate && onNavigate('disease')}>AI Disease Detector</li>
              <li style={{ cursor: 'pointer', color: 'var(--text-muted)' }} onClick={() => onNavigate && onNavigate('weather')}>Weather Intelligence</li>
              <li style={{ cursor: 'pointer', color: 'var(--text-muted)' }} onClick={() => onNavigate && onNavigate('market')}>Market Prices</li>
            </ul>
          </div>

          {/* Column 3: AI Capabilities */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--primary-800)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              AI Intelligence
            </h4>
            <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
              <li style={{ cursor: 'pointer', color: 'var(--text-muted)' }} onClick={() => onNavigate && onNavigate('digital_twin')}>Farm Digital Twin</li>
              <li style={{ cursor: 'pointer', color: 'var(--text-muted)' }} onClick={() => onNavigate && onNavigate('satellite')}>Satellite NDVI Monitoring</li>
              <li style={{ cursor: 'pointer', color: 'var(--text-muted)' }} onClick={() => onNavigate && onNavigate('pest')}>Pest Outbreak Prediction</li>
              <li style={{ cursor: 'pointer', color: 'var(--text-muted)' }} onClick={() => onNavigate && onNavigate('yield')}>Yield Forecaster</li>
              <li style={{ cursor: 'pointer', color: 'var(--text-muted)' }} onClick={() => onNavigate && onNavigate('assistant')}>AgriBot AI Q&A</li>
            </ul>
          </div>

          {/* Column 4: Resources & Credits */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--primary-800)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              District & Support
            </h4>
            <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
              <li style={{ cursor: 'pointer', color: 'var(--text-muted)' }} onClick={() => onNavigate && onNavigate('schemes')}>Govt Subsidies & Schemes</li>
              <li style={{ cursor: 'pointer', color: 'var(--text-muted)' }} onClick={() => onNavigate && onNavigate('community')}>Uzhavar Mandram Hub</li>
              <li style={{ cursor: 'pointer', color: 'var(--text-muted)' }} onClick={() => onNavigate && onNavigate('emergency')}>Emergency Contacts</li>
              <li style={{ cursor: 'pointer', color: 'var(--text-muted)' }} onClick={() => onNavigate && onNavigate('vault')}>Farmer Document Vault</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Built By Vignesh S */}
        <div style={{
          borderTop: '1px solid var(--border-light)',
          paddingTop: '1.5rem',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.825rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © 2026 AgriSahay AI. All rights reserved. Smart Farming. Smarter Decisions.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--primary-700)' }}>
            <Sparkles size={16} color="var(--primary-600)" />
            <span>Built by <strong>Vignesh S</strong></span>
          </div>
        </div>

      </div>
    </footer>
  );
}
