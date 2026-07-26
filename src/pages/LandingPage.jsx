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
  Github, 
  Linkedin, 
  Twitter 
} from 'lucide-react';

export default function LandingPage({ onNavigate, onLoginDemo }) {
  const [isScrolled, setIsScrolled] = useState(false);

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
      title: 'Smart Crop Recommendation',
      desc: 'Receive crop suggestions based on season, soil, and local weather conditions.'
    },
    {
      icon: CloudSun,
      title: 'Weather Intelligence',
      desc: 'Access real-time weather forecasts and farming advice tailored to your village.'
    },
    {
      icon: Scan,
      title: 'Disease Detection',
      desc: 'Upload crop images to identify diseases and receive treatment recommendations.'
    },
    {
      icon: ShoppingBag,
      title: 'Market Insights',
      desc: 'Track crop prices and market trends across local mandis to maximize profits.'
    },
    {
      icon: Award,
      title: 'Government Schemes',
      desc: 'Discover agriculture schemes and subsidies you may be eligible for.'
    },
    {
      icon: Bot,
      title: 'AI Farming Assistant',
      desc: 'Ask farming questions anytime and receive AI-powered bilingual guidance.'
    }
  ];

  const stepsList = [
    { number: '1️⃣', title: 'Register Your Farm', desc: 'Enter land size, soil type, and location details.' },
    { number: '2️⃣', title: 'Select Crop or Upload Image', desc: 'Choose a crop or upload a leaf photo for diagnosis.' },
    { number: '3️⃣', title: 'AI Analyzes Weather & Farm Data', desc: 'Digital Twin simulates sensors, NDVI, and climate data.' },
    { number: '4️⃣', title: 'Receive Smart Recommendations', desc: 'Get exact fertilizer dosing, market insights & guidance.' }
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
            <span onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#16A34A'} onMouseOut={e=>e.target.style.color='#374151'}>Home</span>
            <span onClick={() => scrollToSection('features')} style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#16A34A'} onMouseOut={e=>e.target.style.color='#374151'}>Features</span>
            <span onClick={() => scrollToSection('about')} style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#16A34A'} onMouseOut={e=>e.target.style.color='#374151'}>About</span>
            <span onClick={() => scrollToSection('contact')} style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#16A34A'} onMouseOut={e=>e.target.style.color='#374151'}>Contact</span>
          </nav>

          {/* Right Side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
              Login
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
              Get Started <ArrowRight size={16} />
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
              <Sparkles size={14} color="#F59E0B" /> ✨ AI-Powered Agriculture Platform
            </div>

            {/* Decision Support Headline */}
            <h1 
              style={{
                fontSize: '3.4rem',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                marginBottom: '1.25rem',
                fontFamily: 'Plus Jakarta Sans, sans-serif'
              }}
            >
              AI-Powered Agriculture <br />
              <span style={{ color: '#4ADE80' }}>Decision Support System</span>
            </h1>

            {/* Decision Support Subheading */}
            <p style={{ fontSize: '1.15rem', color: '#D1D5DB', lineHeight: 1.6, marginBottom: '2.25rem', maxWidth: '580px' }}>
              Make smarter farming decisions with intelligent crop recommendations, disease detection, weather insights, market analysis, and personalized AI guidance—all in one platform.
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
                Get Started <ArrowRight size={18} />
              </button>

              <button 
                onClick={() => onNavigate('dashboard')}
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
                <Play size={16} color="#F59E0B" /> Watch Demo
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
              Why Choose AgriSahay AI?
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#111827', marginTop: '0.35rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Intelligent Decision Support Features
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
              Simple 4-Step Process
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#111827', marginTop: '0.35rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              How AgriSahay AI Works
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
      <section style={{ padding: '5.5rem 2rem', background: '#F8FAFC' }}>
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

            {/* Floating Info Cards */}
            <div style={{ position: 'absolute', top: '15%', left: '-25px', background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '0.85rem 1.25rem', boxShadow: '0 10px 25px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <CloudSun size={20} color="#F59E0B" />
              <div>
                <span style={{ fontSize: '0.7rem', color: '#6B7280', display: 'block' }}>Weather</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 800 }}>33°C Sunny (Karur)</span>
              </div>
            </div>

            <div style={{ position: 'absolute', bottom: '15%', right: '-25px', background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '0.85rem 1.25rem', boxShadow: '0 10px 25px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Activity size={20} color="#16A34A" />
              <div>
                <span style={{ fontSize: '0.7rem', color: '#6B7280', display: 'block' }}>Farm Health</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#16A34A' }}>92 / 100 Optimal</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================== */}
      {/* 6. TESTIMONIALS */}
      {/* ==================================================== */}
      <section style={{ padding: '5.5rem 2rem', background: '#FFFFFF', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.825rem', fontWeight: 800, color: '#16A34A', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Farmer Experiences
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#111827', marginTop: '0.35rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Trusted by Local Farmers
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E5E7EB',
                  borderRadius: '16px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem', color: '#F59E0B' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#F59E0B" />
                    ))}
                  </div>
                  <p style={{ fontSize: '0.925rem', color: '#374151', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                    "{t.quote}"
                  </p>
                </div>

                <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '1rem' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#111827' }}>{t.name}</h4>
                  <p style={{ fontSize: '0.8rem', color: '#16A34A', fontWeight: 700 }}>{t.crop}</p>
                  <p style={{ fontSize: '0.75rem', color: '#6B7280' }}>{t.location}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================== */}
      {/* 7. CALL TO ACTION */}
      {/* ==================================================== */}
      <section style={{ padding: '6rem 2rem', background: 'linear-gradient(135deg, #14532D 0%, #16A34A 100%)', color: '#FFFFFF', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '1rem', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '-0.02em' }}>
            Start Your Smart Farming Journey Today
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#DCFCE7', marginBottom: '2.5rem', opacity: 0.9 }}>
            Experience AI-powered farming with AgriSahay AI and make informed agricultural decisions.
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
              Get Started
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              style={{
                background: 'transparent',
                border: '2px solid rgba(255, 255, 255, 0.4)',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '1rem',
                padding: '0.9rem 2.25rem',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 8. FOOTER */}
      {/* ==================================================== */}
      <footer id="contact" style={{ background: '#1E293B', color: '#94A3B8', padding: '4rem 2rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '3rem', marginBottom: '3.5rem' }}>
            
            {/* Column 1: Brand */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#FFFFFF', fontSize: '1.3rem', fontWeight: 800, marginBottom: '1rem' }}>
                <span>🌾</span> AgriSahay AI
              </div>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.6, maxWidth: '300px' }}>
                AI-Powered Agriculture Decision Support System for farmers in Karur District, Tamil Nadu.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', marginBottom: '1rem' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem' }}>
                <li style={{ cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</li>
                <li style={{ cursor: 'pointer' }} onClick={() => scrollToSection('features')}>Features</li>
                <li style={{ cursor: 'pointer' }} onClick={() => scrollToSection('about')}>About</li>
                <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('login')}>Login</li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', marginBottom: '1rem' }}>Resources</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem' }}>
                <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('recommend')}>Crop Suitability</li>
                <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('disease')}>Disease Diagnosis</li>
                <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('schemes')}>Govt Subsidies</li>
                <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('weather')}>Weather Alerts</li>
              </ul>
            </div>

            {/* Column 4: Contact & Social */}
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', marginBottom: '1rem' }}>Contact & Support</h4>
              <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>📍 Karur District, Tamil Nadu</p>
              <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>📞 Kisan Call Center: 1800-180-1551</p>
              <p style={{ fontSize: '0.875rem' }}>✉️ support@agrisahay.in</p>
            </div>

          </div>

          {/* Bottom Bar */}
          <div style={{ borderTop: '1px solid #334155', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem' }}>
            <div>© 2026 AgriSahay AI. All rights reserved.</div>
            <div style={{ color: '#F59E0B', fontWeight: 700 }}>Built by Yagavi S</div>
          </div>

        </div>
      </footer>

    </div>
  );
}
