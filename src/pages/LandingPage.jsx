import React, { useState } from 'react';
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
  Cpu, 
  Satellite, 
  TrendingUp, 
  Map, 
  Play, 
  ChevronRight, 
  Leaf, 
  Users, 
  BarChart3 
} from 'lucide-react';
import Footer from '../components/Footer';

export default function LandingPage({ onNavigate, onLoginDemo }) {
  const [activeTab, setActiveTab] = useState('disease');

  const statsList = [
    { number: '10+', label: 'AI Features', desc: 'Neural Vision & Simulations' },
    { number: '50+', label: 'Supported Crops', desc: 'Paddy, Sugarcane, Keerai & Spices' },
    { number: '24/7', label: 'AI Assistant', desc: 'Uzhavar AI Q&A Engine' },
    { number: '100+', label: 'Smart Recommendations', desc: 'Location-Aware Telemetry' },
    { number: 'Karur TN', label: 'Location Aware', desc: 'District Micro-Climate' }
  ];

  const whyChooseCards = [
    {
      icon: Bot,
      title: 'AI Farming Assistant',
      desc: 'Bilingual Q&A assistant for instant crop solutions, yellow leaf remedies, and NPK dosage advice.'
    },
    {
      icon: Sprout,
      title: 'Crop Recommendation',
      desc: 'Location-aware crop suitability engine based on soil type, rainfall, season, and land size.'
    },
    {
      icon: Scan,
      title: 'Disease Detection',
      desc: 'Neural plant classifier & disease scanner with organic remedies and chemical dosages.'
    },
    {
      icon: CloudSun,
      title: 'Weather Intelligence',
      desc: 'Micro-climate Karur forecast telemetry with daily farming activity recommendations.'
    },
    {
      icon: ShoppingBag,
      title: 'Market Insights',
      desc: 'Real-time mandi price trends, custom net profit calculator, and local trader submissions.'
    },
    {
      icon: Award,
      title: 'Government Schemes',
      desc: 'Personalized eligibility match for PM-KISAN, Kuruvai package, and TNAU subsidies.'
    }
  ];

  const timelineSteps = [
    { step: '01', title: 'Register Farm', desc: 'Enter land acreage, soil type, and primary crops.' },
    { step: '02', title: 'Detect Location', desc: 'Auto-detect GPS or select Karur village & taluk.' },
    { step: '03', title: 'AI Analysis', desc: 'Digital Twin simulates soil moisture, NDVI, and weather.' },
    { step: '04', title: 'Receive Recommendations', desc: 'Get exact fertilizer schedules, pest alerts, and pricing.' },
    { step: '05', title: 'Improve Yield', desc: 'Maximize crop yield, revenue, and sustainability score.' }
  ];

  return (
    <div style={{ background: 'var(--bg-slate)', minHeight: '100vh' }}>
      
      {/* Landing Sticky Glass Nav */}
      <header className="glass-nav" style={{ padding: '1rem 3rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(5, 150, 105, 0.3)'
            }}>
              <Leaf size={22} />
            </div>
            <div>
              <h1 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)' }}>
                AgriSahay <span style={{ color: 'var(--primary-600)' }}>AI</span>
              </h1>
              <p style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>Smart Farming. Smarter Decisions.</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button onClick={() => onNavigate('login')} className="btn-outline">
              Sign In
            </button>
            <button onClick={onLoginDemo} className="btn-primary">
              Launch Demo Platform <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{
        position: 'relative',
        padding: '6rem 2rem 5rem',
        background: 'linear-gradient(180deg, #ECFDF5 0%, #F8FAFC 100%)',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          
          <div className="badge badge-green" style={{ margin: '0 auto 1.5rem', padding: '0.35rem 0.85rem', fontSize: '0.825rem' }}>
            <Sparkles size={14} /> Smart Farming Powered by Artificial Intelligence
          </div>

          <h1 style={{
            fontSize: '3.6rem',
            fontWeight: 800,
            lineHeight: 1.12,
            color: 'var(--primary-900)',
            marginBottom: '1.25rem',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.03em'
          }}>
            Make Better Farming Decisions <br />
            <span style={{
              background: 'linear-gradient(135deg, #059669 0%, #d97706 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Using AI Decision Intelligence
            </span>
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: 'var(--text-muted)',
            maxWidth: '780px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.6
          }}>
            Transform your agricultural operations with real-time AI digital twin simulation, satellite crop monitoring, plant disease neural scanning, weather intelligence, and mandi market forecasting.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <button onClick={onLoginDemo} className="btn-primary" style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}>
              Get Started Free <ArrowRight size={18} />
            </button>
            <button onClick={() => onNavigate('dashboard')} className="btn-outline" style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}>
              <Play size={16} color="var(--primary-600)" /> Watch Interactive Demo
            </button>
          </div>

          {/* Hero Banner Preview */}
          <div style={{ marginTop: '4rem', position: 'relative' }}>
            <div className="card-glass" style={{
              padding: '0.75rem',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-xl)',
              background: '#FFFFFF',
              border: '1px solid var(--border-light)'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80" 
                alt="AgriSahay Smart Farming AI Platform" 
                style={{ width: '100%', height: '480px', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} 
              />
            </div>
          </div>

        </div>
      </section>

      {/* ANIMATED STATISTICS COUNTER BAR */}
      <section style={{ padding: '3.5rem 2rem', background: '#FFFFFF', borderY: '1px solid var(--border-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {statsList.map((st, i) => (
            <div key={i} style={{ padding: '1rem' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-700)', fontFamily: 'var(--font-heading)' }}>
                {st.number}
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '2px' }}>
                {st.label}
              </div>
              <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                {st.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE AGRISAHAY AI - 6 CARD GRID */}
      <section style={{ padding: '5rem 2rem', background: 'var(--bg-slate)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="badge badge-amber" style={{ marginBottom: '0.5rem' }}>
              AI Decision Features
            </div>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary-900)' }}>
              Why Choose AgriSahay AI?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.35rem' }}>
              Integrated precision modules built specifically for Tamil Nadu regional agriculture.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.75rem' }}>
            {whyChooseCards.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div key={idx} className="card-glass card-hover-lift" style={{ display: 'flex', gap: '1.25rem' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'var(--primary-50)',
                    border: '1px solid var(--primary-100)',
                    color: 'var(--primary-700)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <IconComponent size={26} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                      {card.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* HOW IT WORKS TIMELINE */}
      <section style={{ padding: '5rem 2rem', background: '#FFFFFF', borderTop: '1px solid var(--border-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="badge badge-green" style={{ marginBottom: '0.5rem' }}>
              Simple 5-Step Workflow
            </div>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary-900)' }}>
              How AgriSahay AI Works
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', position: 'relative' }}>
            {timelineSteps.map((stp, idx) => (
              <div key={idx} className="card-glass" style={{ textAlign: 'center', borderTop: '4px solid var(--primary-600)' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'var(--primary-600)',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem'
                }}>
                  {stp.step}
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                  {stp.title}
                </h4>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                  {stp.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer onNavigate={onNavigate} />

    </div>
  );
}
