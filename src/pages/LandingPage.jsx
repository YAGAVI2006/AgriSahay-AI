import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sprout, 
  Scan, 
  Bot, 
  CloudSun, 
  ShoppingBag, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Activity, 
  Star, 
  Quote, 
  Globe, 
  Mail, 
  Phone, 
  Droplet,
  Compass,
  Check
} from 'lucide-react';
import { translations } from '../data/translations';

export default function LandingPage({ onNavigate, onLoginDemo, selectedLanguage = 'en', setSelectedLanguage }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const t = translations[selectedLanguage] || translations.en;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whyChooseCards = [
    {
      id: 'recommend',
      icon: Sprout,
      title: t.cropRecTitle,
      desc: t.cropRecDesc
    },
    {
      id: 'weather',
      icon: CloudSun,
      title: t.weatherTitle,
      desc: t.weatherDesc
    },
    {
      id: 'disease',
      icon: Scan,
      title: t.diseaseTitle,
      desc: t.diseaseDesc
    },
    {
      id: 'market',
      icon: ShoppingBag,
      title: t.marketTitle,
      desc: t.marketDesc
    },
    {
      id: 'schemes',
      icon: Award,
      title: t.schemesTitle,
      desc: t.schemesDesc
    },
    {
      id: 'assistant',
      icon: Bot,
      title: t.aiAssistantTitle,
      desc: t.aiAssistantDesc
    }
  ];

  const stepsList = [
    { number: '1️⃣', title: t.step1Title, desc: t.step1Desc },
    { number: '2️⃣', title: t.step2Title, desc: t.step2Desc },
    { number: '3️⃣', title: t.step3Title, desc: t.step3Desc },
    { number: '4️⃣', title: t.step4Title, desc: t.step4Desc }
  ];

  return (
    <div style={{ background: '#F8FAFC', color: '#111827', fontFamily: 'Inter, sans-serif', overflowX: 'hidden' }}>
      
      {/* ==================================================== */}
      {/* 1. NAVBAR */}
      {/* ==================================================== */}
      <header 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid #E5E7EB',
          padding: isScrolled ? '0.65rem 3rem' : '0.9rem 3rem',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.06)' : 'none'
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo & Platform Tagline */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
          >
            <span style={{ fontSize: '1.75rem' }}>🌾</span>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#14532D', letterSpacing: '-0.02em', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  AgriSahay <span style={{ color: '#16A34A' }}>AI</span>
                </span>
                <span className="badge badge-green" style={{ fontSize: '0.65rem', padding: '1px 6px' }}>
                  RESEARCH
                </span>
              </div>
              <div style={{ fontSize: '0.675rem', color: '#6B7280', fontWeight: 600, letterSpacing: '0.01em' }}>
                AI-Powered Agriculture Decision Support System
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav style={{ display: 'flex', gap: '2.25rem', fontSize: '0.9rem', fontWeight: 600, color: '#374151' }}>
            <span onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#16A34A'} onMouseOut={e=>e.target.style.color='#374151'}>{t.home}</span>
            <span onClick={() => scrollToSection('features')} style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#16A34A'} onMouseOut={e=>e.target.style.color='#374151'}>{t.features}</span>
            <span onClick={() => scrollToSection('about')} style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#16A34A'} onMouseOut={e=>e.target.style.color='#374151'}>{t.about}</span>
            <span onClick={() => scrollToSection('contact')} style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#16A34A'} onMouseOut={e=>e.target.style.color='#374151'}>{t.contact}</span>
          </nav>

          {/* Right Side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            
            {/* Language Switcher */}
            {setSelectedLanguage && (
              <button
                onClick={() => setSelectedLanguage(selectedLanguage === 'en' ? 'ta' : 'en')}
                style={{
                  background: 'rgba(22, 163, 74, 0.1)',
                  border: '1px solid rgba(22, 163, 74, 0.3)',
                  color: '#16A34A',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.825rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                <Globe size={14} /> {selectedLanguage === 'en' ? 'தமிழ்' : 'English'}
              </button>
            )}

            <button 
              onClick={() => onNavigate('login')}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#374151',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                padding: '0.5rem 0.85rem'
              }}
            >
              {t.login}
            </button>

            <button 
              onClick={() => onLoginDemo('dashboard')}
              style={{
                background: 'linear-gradient(135deg, #16A34A 0%, #14532D 100%)',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '0.9rem',
                padding: '0.65rem 1.4rem',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(22, 163, 74, 0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s ease'
              }}
            >
              {t.getStarted} <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </header>

      {/* ==================================================== */}
      {/* 2. HERO SECTION (High-Contrast, Ultra-Visible Title) */}
      {/* ==================================================== */}
      <section 
        style={{
          position: 'relative',
          minHeight: '84vh',
          paddingTop: '8.5rem',
          paddingBottom: '5.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(rgba(15, 23, 42, 0.84), rgba(15, 23, 42, 0.90)), url("https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1920&q=80")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Prominent Badge */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(22, 163, 74, 0.3)',
                border: '1px solid rgba(74, 222, 128, 0.5)',
                color: '#4ADE80',
                padding: '0.45rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.825rem',
                fontWeight: 800,
                marginBottom: '1.5rem',
                letterSpacing: '0.02em',
                backdropFilter: 'blur(8px)'
              }}
            >
              <Sparkles size={16} color="#F59E0B" /> AGRICULTURAL RESEARCH PROJECT • LOCALIZED DECISION SUPPORT
            </div>

            {/* Decision Support Headline */}
            <h1 
              style={{
                fontSize: '2.85rem',
                fontWeight: 900,
                lineHeight: 1.2,
                letterSpacing: '-0.03em',
                marginBottom: '1.25rem',
                color: '#FFFFFF',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
                fontFamily: 'Plus Jakarta Sans, sans-serif'
              }}
            >
              AI-Based Localized Agricultural Decision Support System for Crop Selection, Disease Detection and Weather-Aware Farm Management
            </h1>

            {/* Decision Support Subheading */}
            <p style={{ fontSize: '1.1rem', color: '#F1F5F9', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '820px', margin: '0 auto 2.5rem', textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
              {selectedLanguage === 'ta' 
                ? 'அறிவியல் பூர்வ பல-காரணி பயிர் பொருத்தம் (30/25/20/15/10), CNN இலை நோய் கண்டறிதல் மற்றும் ICAR/TNAU சரிபார்க்கப்பட்ட வேளாண் வழிகாட்டுதல்கள்.'
                : 'Driven by multi-criteria explainable crop scoring algorithms, CNN transfer learning pathology classification, actionable weather rule engines, and verified ICAR/TNAU agricultural knowledge bases.'}
            </p>

            {/* Main Action Button */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <button 
                onClick={() => onLoginDemo('dashboard')}
                style={{
                  background: '#16A34A',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  padding: '0.95rem 2.75rem',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(22, 163, 74, 0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s ease'
                }}
              >
                {t.getStarted} <ArrowRight size={20} />
              </button>
            </div>

            {/* Value Proposition Pills */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '3.25rem', flexWrap: 'wrap', fontSize: '0.9rem', color: '#E2E8F0', fontWeight: 600 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.1)', padding: '0.35rem 0.85rem', borderRadius: '9999px' }}>
                <Check size={16} color="#4ADE80" /> 15 Crops & Greens
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.1)', padding: '0.35rem 0.85rem', borderRadius: '9999px' }}>
                <Check size={16} color="#4ADE80" /> Neural Disease Scanner
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.1)', padding: '0.35rem 0.85rem', borderRadius: '9999px' }}>
                <Check size={16} color="#4ADE80" /> 7-Day Micro-Climate
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.1)', padding: '0.35rem 0.85rem', borderRadius: '9999px' }}>
                <Check size={16} color="#4ADE80" /> Central & TN Subsidies
              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* ==================================================== */}
      {/* 3. WHY CHOOSE AGRISAHAY AI */}
      {/* ==================================================== */}
      <section id="features" style={{ padding: '5.5rem 2rem', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.825rem', fontWeight: 800, color: '#16A34A', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {t.whyHeading}
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#111827', marginTop: '0.35rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              {t.whySub}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.75rem' }}>
            {whyChooseCards.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div 
                  key={idx}
                  onClick={() => {
                    onLoginDemo();
                    if (card.id) {
                      setTimeout(() => onNavigate(card.id), 50);
                    }
                  }}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E5E7EB',
                    borderRadius: '16px',
                    padding: '2rem',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                    transition: 'all 0.25s ease',
                    cursor: 'pointer'
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(22, 163, 74, 0.15)';
                    e.currentTarget.style.borderColor = '#16A34A';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                    e.currentTarget.style.borderColor = '#E5E7EB';
                  }}
                >
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: '#DCFCE7', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                    <IconComponent size={26} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#111827', marginBottom: '0.5rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#6B7280', lineHeight: 1.5 }}>
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==================================================== */}
      {/* 4. HOW IT WORKS */}
      {/* ==================================================== */}
      <section id="about" style={{ padding: '5.5rem 2rem', background: '#FFFFFF', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.825rem', fontWeight: 800, color: '#16A34A', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {t.howSub}
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#111827', marginTop: '0.35rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              {t.howHeading}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {stepsList.map((step, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E5E7EB',
                  borderRadius: '16px',
                  padding: '2rem 1.5rem',
                  textAlign: 'center',
                  position: 'relative'
                }}
              >
                <div style={{ fontSize: '1.8rem', marginBottom: '0.85rem' }}>
                  {step.number}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#111827', marginBottom: '0.5rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#6B7280', lineHeight: 1.5 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================== */}
      {/* 5. CALL TO ACTION */}
      {/* ==================================================== */}
      <section style={{ padding: '6rem 2rem', background: 'linear-gradient(135deg, #14532D 0%, #16A34A 100%)', color: '#FFFFFF', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '1rem', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '-0.02em' }}>
            {t.ctaTitle}
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#DCFCE7', marginBottom: '2.5rem', opacity: 0.9 }}>
            {t.ctaSub}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <button 
              onClick={() => onLoginDemo('dashboard')}
              style={{
                background: '#FFFFFF',
                color: '#14532D',
                fontWeight: 800,
                fontSize: '1rem',
                padding: '0.9rem 2.25rem',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(0,0,0,0.15)'
              }}
            >
              {t.getStarted} <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 6. FOOTER */}
      {/* ==================================================== */}
      <footer id="contact" style={{ background: '#0F172A', color: '#94A3B8', padding: '4.5rem 2rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3rem', marginBottom: '3.5rem' }}>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '1.6rem' }}>🌾</span>
              <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                AgriSahay <span style={{ color: '#22C55E' }}>AI</span>
              </span>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#4ADE80', fontWeight: 700, marginBottom: '0.85rem' }}>
              AI-Powered Agriculture Decision Support System
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94A3B8' }}>
              {t.footerDesc}
            </p>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>
              {t.quickLinks}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem' }}>
              <span onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>{t.home}</span>
              <span onClick={() => scrollToSection('features')} style={{ cursor: 'pointer' }}>{t.features}</span>
              <span onClick={() => scrollToSection('about')} style={{ cursor: 'pointer' }}>{t.about}</span>
              <span onClick={onLoginDemo} style={{ cursor: 'pointer' }}>{t.dashboard}</span>
            </div>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>
              {t.contact}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} color="#22C55E" />
                <span>support@agrisahay.in</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} color="#22C55E" />
                <span>+91 94432 18920</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Globe size={16} color="#22C55E" />
                <span>Karur District, Tamil Nadu</span>
              </div>
            </div>
          </div>

        </div>

        <div style={{ borderTop: '1px solid #1E293B', paddingTop: '2rem', textAlign: 'center', fontSize: '0.85rem' }}>
          <p>© {new Date().getFullYear()} AgriSahay AI. {t.footerRights} | <span style={{ color: '#22C55E', fontWeight: 700 }}>Built by Yagavi S</span></p>
        </div>
      </footer>

    </div>
  );
}
