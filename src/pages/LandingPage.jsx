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
  Play, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Activity, 
  Star, 
  Quote, 
  Globe, 
  Mail, 
  Phone, 
  X
} from 'lucide-react';
import { translations } from '../data/translations';

export default function LandingPage({ onNavigate, onLoginDemo, selectedLanguage = 'en', setSelectedLanguage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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
      icon: Sprout,
      title: t.cropRecTitle,
      desc: t.cropRecDesc
    },
    {
      icon: CloudSun,
      title: t.weatherTitle,
      desc: t.weatherDesc
    },
    {
      icon: Scan,
      title: t.diseaseTitle,
      desc: t.diseaseDesc
    },
    {
      icon: ShoppingBag,
      title: t.marketTitle,
      desc: t.marketDesc
    },
    {
      icon: Award,
      title: t.schemesTitle,
      desc: t.schemesDesc
    },
    {
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

  const testimonials = [
    {
      name: 'R. Murugesan',
      location: 'Mayanur, Karur District',
      crop: 'Paddy & Banana Farmer',
      quote: 'AgriSahay AI accurately identified Bacterial Leaf Blight in my paddy crop within seconds. The organic treatment saved my yield.',
      rating: 5
    },
    {
      name: 'S. Kavitha',
      location: 'Kulithalai, Tamil Nadu',
      crop: 'Leafy Greens & Coriander',
      quote: 'The market price predictor helped me get ₹38/kg for coriander by timing the sale at Karur Uzhavar Sandhai.',
      rating: 5
    },
    {
      name: 'K. Palanisamy',
      location: 'Aravakurichi, Karur',
      crop: 'Sugarcane & Groundnut',
      quote: 'The drip fertigation schedule and PM-KISAN subsidy guidance made farming decisions so effortless and profitable.',
      rating: 5
    }
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
          background: 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid #E5E7EB',
          padding: isScrolled ? '0.65rem 3rem' : '1.1rem 3rem',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none'
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer' }}
          >
            <span style={{ fontSize: '1.6rem' }}>🌾</span>
            <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#14532D', letterSpacing: '-0.02em', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              AgriSahay <span style={{ color: '#16A34A' }}>AI</span>
            </span>
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
              onClick={onLoginDemo}
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
      {/* 2. HERO SECTION */}
      {/* ==================================================== */}
      <section 
        style={{
          position: 'relative',
          minHeight: '100vh',
          paddingTop: '6.5rem',
          display: 'flex',
          alignItems: 'center',
          background: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.82)), url("https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1920&q=80")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF'
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', width: '100%', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3.5rem', alignItems: 'center' }}>
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Small Badge */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(22, 163, 74, 0.25)',
                border: '1px solid rgba(34, 197, 94, 0.4)',
                color: '#4ADE80',
                padding: '0.4rem 0.9rem',
                borderRadius: '9999px',
                fontSize: '0.825rem',
                fontWeight: 700,
                marginBottom: '1.5rem',
                backdropFilter: 'blur(8px)'
              }}
            >
              <Sparkles size={14} color="#F59E0B" /> {t.heroBadge}
            </div>

            {/* Decision Support Headline */}
            <h1 
              style={{
                fontSize: '3.2rem',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                marginBottom: '1.25rem',
                fontFamily: 'Plus Jakarta Sans, sans-serif'
              }}
            >
              {t.heroTitle}
            </h1>

            {/* Decision Support Subheading */}
            <p style={{ fontSize: '1.1rem', color: '#D1D5DB', lineHeight: 1.6, marginBottom: '2.25rem', maxWidth: '580px' }}>
              {t.heroSub}
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <button 
                onClick={onLoginDemo}
                style={{
                  background: '#16A34A',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '1rem',
                  padding: '0.85rem 1.85rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(22, 163, 74, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                {t.getStarted} <ArrowRight size={18} />
              </button>

              <button 
                onClick={() => setIsVideoModalOpen(true)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '1rem',
                  padding: '0.85rem 1.85rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Play size={16} color="#F59E0B" /> {t.watchDemo}
              </button>
            </div>
          </motion.div>

          {/* Right Column: Floating Device Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{ 
              opacity: { duration: 0.6 },
              scale: { duration: 0.6 },
              y: { duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }
            }}
            style={{ position: 'relative' }}
          >
            <div 
              style={{
                background: '#1E293B',
                borderRadius: '16px',
                padding: '12px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <div style={{ display: 'flex', gap: '6px', marginBottom: '8px', paddingLeft: '4px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }}></span>
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1000&q=80" 
                alt="AgriSahay AI Decision Dashboard Mockup" 
                style={{ width: '100%', height: '360px', objectFit: 'cover', borderRadius: '10px' }} 
              />
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
                  <p style={{ fontSize: '0.9rem', color: '#4B5563', lineHeight: 1.5 }}>
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
      {/* 5. DASHBOARD PREVIEW */}
      {/* ==================================================== */}
      <section id="dashboard-preview" style={{ padding: '5.5rem 2rem', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.825rem', fontWeight: 800, color: '#16A34A', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Real-Time Decision Intelligence
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#111827', marginTop: '0.35rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Powerful Dashboard
            </h2>
          </div>

          <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '16px', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.1)', border: '1px solid #E5E7EB' }}>
              <img 
                src="https://images.unsplash.com/photo-1595838729984-24b5840d0505?auto=format&fit=crop&w=1200&q=80" 
                alt="Powerful Dashboard" 
                style={{ width: '100%', height: '440px', objectFit: 'cover', borderRadius: '12px' }} 
              />
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================== */}
      {/* 6. CALL TO ACTION */}
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
              onClick={onLoginDemo}
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
              {t.getStarted}
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 7. FOOTER */}
      {/* ==================================================== */}
      <footer id="contact" style={{ background: '#1E293B', color: '#94A3B8', padding: '4rem 2rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ borderTop: '1px solid #334155', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem' }}>
            <div>© 2026 AgriSahay AI. All rights reserved.</div>
            <div style={{ color: '#F59E0B', fontWeight: 700 }}>{t.builtBy}</div>
          </div>
        </div>
      </footer>

      {/* ==================================================== */}
      {/* WATCH DEMO MODAL */}
      {/* ==================================================== */}
      {isVideoModalOpen && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            background: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
        >
          <div 
            style={{
              background: '#0F172A',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              maxWidth: '850px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
              color: '#FFFFFF'
            }}
          >
            {/* Modal Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <span style={{ fontSize: '1.4rem' }}>🎬</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  AgriSahay AI System Demonstration
                </h3>
              </div>
              <button 
                onClick={() => setIsVideoModalOpen(false)}
                style={{ background: 'transparent', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: '4px' }}
              >
                <X size={22} />
              </button>
            </div>

            {/* Video Preview Container */}
            <div style={{ position: 'relative', width: '100%', height: '420px', background: '#000000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(22, 163, 74, 0.3)', border: '2px solid #22C55E', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4ADE80', marginBottom: '1.5rem' }}>
                <Play size={32} style={{ marginLeft: '4px' }} />
              </div>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem', color: '#FFFFFF' }}>
                Interactive Platform Walkthrough
              </h4>
              <p style={{ fontSize: '0.95rem', color: '#94A3B8', maxWidth: '550px', lineHeight: 1.5, marginBottom: '1.75rem' }}>
                Explore smart crop recommendation algorithms, neural leaf disease diagnosis, Karur mandi price tracking, and Gemini AI Q&A in action.
              </p>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button 
                  onClick={() => {
                    setIsVideoModalOpen(false);
                    onLoginDemo();
                  }}
                  style={{
                    background: '#16A34A',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Launch Live Demo Dashboard
                </button>
                <button 
                  onClick={() => {
                    setIsVideoModalOpen(false);
                    scrollToSection('dashboard-preview');
                  }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  View Dashboard Preview
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
