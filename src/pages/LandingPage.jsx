import React, { useState } from 'react';
import { Sprout, ShieldCheck, Leaf, Bot, CloudSun, Landmark, CalendarDays, ArrowRight, CheckCircle2, Star, ChevronDown, ChevronUp, Mail, Phone, MapPin, Sparkles, UserCheck } from 'lucide-react';
import Footer from '../components/Footer';

export default function LandingPage({ onNavigate, onLoginDemo }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const features = [
    {
      icon: Leaf,
      title: '🌿 AI Crop Disease Detection',
      desc: 'Upload crop leaf photos to identify diseases in under 3 seconds with 96%+ accuracy. Get immediate organic & chemical treatment options.'
    },
    {
      icon: Bot,
      title: '🤖 AI Agriculture Assistant (AgriBot)',
      desc: 'Voice and text interface in regional Indian languages for fertilizer calculations, pest control, and instant agronomic advice.'
    },
    {
      icon: CloudSun,
      title: '🌦 Smart Weather Intelligence',
      desc: 'Hyperlocal 7-day weather telemetry with actionable agronomic rain & frost alerts to protect crops before severe weather hits.'
    },
    {
      icon: Landmark,
      title: '🏛 Government Scheme Matcher',
      desc: 'Smart matching engine that finds eligible central & state farmer subsidies (PM-KISAN, PMFBY, SMAM, KCC, Soil Health Card).'
    },
    {
      icon: CalendarDays,
      title: '🌾 AI Seasonal Farming Calendar',
      desc: 'Unique innovation feature generating a customized month-by-month activity timeline and interactive task checklist for your crop.'
    },
    {
      icon: ShieldCheck,
      title: '📊 Farmer Command Dashboard',
      desc: 'Unified decision-support overview combining crop health metrics, weather warnings, eligible subsidies, and saved AI advisories.'
    }
  ];

  const stats = [
    { label: 'Active Farmers Supported', value: '15,000+' },
    { label: 'AI Disease Diagnostic Accuracy', value: '96.4%' },
    { label: 'Subsidies & Schemes Matched', value: '₹4.5 Crore+' },
    { label: 'Agronomic Rain Alerts Sent', value: '45,000+' }
  ];

  const testimonials = [
    {
      name: 'Gurpreet Singh',
      location: 'Ludhiana, Punjab',
      crop: 'Paddy & Wheat (8 Acres)',
      quote: 'AgriSahay AI saved my paddy crop from Bacterial Blight! The AI scanner identified the disease early, and the organic cow dung treatment cured it completely.',
      rating: 5,
      avatar: '👨‍🌾'
    },
    {
      name: 'Ramakant Shukla',
      location: 'Varanasi, Uttar Pradesh',
      crop: 'Tomato & Vegetables (3.5 Acres)',
      quote: 'The AI Seasonal Farming Calendar is brilliant! It tells me exactly when to apply fertilizer and when rain is expected so I do not waste urea.',
      rating: 5,
      avatar: '👨‍🌾'
    },
    {
      name: 'Anand Patil',
      location: 'Nashik, Maharashtra',
      crop: 'Grapes & Cotton (6 Acres)',
      quote: 'Matched 3 government machinery subsidies through the portal. I got 50% subsidy on my solar pump installation thanks to AgriSahay AI.',
      rating: 5,
      avatar: '👨‍🌾'
    }
  ];

  const faqs = [
    {
      q: 'How does the AI Crop Disease Scanner work?',
      a: 'Simply take a photo of the infected leaf using your mobile camera or upload an existing image. Our computer vision model analyzes leaf spots, venation patterns, and discoloration to deliver diagnosis, confidence score, and treatment tips in seconds.'
    },
    {
      q: 'Is AgriSahay AI available in Indian regional languages?',
      a: 'Yes! AgriSahay AI supports English, Hindi (हिंदी), Punjabi (ਪੰਜਾਬੀ), Marathi (मराठी), and Telugu (తెలుగు) with voice-enabled audio text-to-speech reading.'
    },
    {
      q: 'How are Government Schemes recommended?',
      a: 'The system matches your profile inputs (State, Crop type, Land holding size in acres, and Farmer category) against our verified database of central and state government agricultural schemes.'
    },
    {
      q: 'What is the AI Seasonal Farming Calendar feature?',
      a: 'Unlike generic weather apps, the AI Seasonal Calendar generates a month-by-month activity roadmap tailored specifically for your crop (e.g. Sowing, Fertilizer Top Dressing, Disease Monitoring, and Harvesting) with interactive checkboxes.'
    }
  ];

  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header Bar */}
      <header style={{
        height: '75px',
        background: 'var(--card-bg)',
        borderBottom: '1px solid var(--border-light)',
        padding: '0 3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, #059669 0%, #047857 100%)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Sprout size={26} />
          </div>
          <h1 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--primary-700)' }}>
            AgriSahay <span style={{ color: 'var(--accent-amber)', fontSize: '0.9rem', background: 'var(--accent-amber-light)', padding: '2px 8px', borderRadius: '6px' }}>AI</span>
          </h1>
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem', fontSize: '0.9rem', fontWeight: 600 }}>
          <a href="#about" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>About</a>
          <a href="#features" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>Features</a>
          <a href="#benefits" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>Benefits</a>
          <a href="#testimonials" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>Testimonials</a>
          <a href="#faq" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>FAQ</a>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={() => onNavigate('login')} className="btn-outline">
            Login
          </button>
          <button onClick={() => onNavigate('register')} className="btn-primary">
            Register Free
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary-900) 0%, var(--primary-700) 100%)',
        color: '#ffffff',
        padding: '5rem 3rem 6rem',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div className="badge badge-amber" style={{ margin: '0 auto 1.25rem', display: 'inline-flex' }}>
            <Sparkles size={14} /> 🚀 Intelligent Agriculture Decision Platform
          </div>

          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
            Empowering Farmers with <span style={{ color: '#fef08a' }}>AI-Powered</span> Agriculture Intelligence
          </h1>

          <p style={{ fontSize: '1.2rem', opacity: 0.9, lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
            Solve daily farming problems instantly: AI crop disease detection, voice-assisted farming Q&A, matched government subsidies, smart weather alerts, and month-by-month seasonal calendars.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={onLoginDemo} className="btn-accent" style={{ fontSize: '1.05rem', padding: '0.85rem 2rem', borderRadius: '9999px' }}>
              Launch Farmer Dashboard <ArrowRight size={18} />
            </button>
            <button onClick={() => onNavigate('register')} className="btn-secondary" style={{ fontSize: '1.05rem', padding: '0.85rem 2rem', borderRadius: '9999px' }}>
              Create Farmer Account
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section style={{ padding: '3rem 2rem', background: 'var(--card-bg)', borderBottom: '1px solid var(--border-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', textAlign: 'center' }}>
          {stats.map((st, i) => (
            <div key={i} style={{ padding: '1rem' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--primary-700)', fontFamily: 'var(--font-heading)' }}>
                {st.value}
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 600, marginTop: '4px' }}>
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '5rem 3rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <div className="badge badge-green" style={{ marginBottom: '0.75rem' }}>About AgriSahay AI</div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '1rem', lineHeight: 1.25 }}>
              Solving the Biggest Daily Problems Indian Farmers Face
            </h2>
            <p style={{ color: 'var(--text-main)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Indian agriculture faces climate uncertainties, delayed pest diagnosis, and complex government scheme processes. AgriSahay AI bridges this gap with an intuitive, multi-lingual AI decision-support platform designed for every farmer.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.95rem', fontWeight: 600 }}>
                <CheckCircle2 size={20} color="var(--primary-600)" /> Instant Crop Disease Detection with organic & chemical cure steps.
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.95rem', fontWeight: 600 }}>
                <CheckCircle2 size={20} color="var(--primary-600)" /> Hyperlocal agronomic weather advisories & extreme rain alerts.
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.95rem', fontWeight: 600 }}>
                <CheckCircle2 size={20} color="var(--primary-600)" /> Direct state & central government scheme eligibility calculator.
              </div>
            </div>
          </div>

          <div className="card-glass" style={{ padding: '2.5rem', background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)', border: '1px solid var(--primary-400)' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🌾🤖</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '0.5rem' }}>
              AI Seasonal Farming Calendar
            </h3>
            <p style={{ color: 'var(--primary-800)', fontSize: '0.95rem', lineHeight: 1.5 }}>
              Our signature innovation generates a personalized month-by-month activity timeline (Sowing → Fertilizer → Protection → Harvest) so farmers never miss a critical agricultural window.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section id="features" style={{ padding: '5rem 3rem', background: 'var(--card-bg)', borderTop: '1px solid var(--border-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="badge badge-amber" style={{ marginBottom: '0.5rem' }}>Core Platform Modules</div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary-900)' }}>
              Integrated AI Modules for Precision Agriculture
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.75rem' }}>
            {features.map((feat, i) => (
              <div key={i} className="card-glass">
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary-800)', marginBottom: '0.5rem' }}>
                  {feat.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" style={{ padding: '5rem 3rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="badge badge-green" style={{ marginBottom: '0.5rem' }}>Farmer Stories</div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary-900)' }}>
            Trusted by Farmers Across India
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {testimonials.map((t, i) => (
            <div key={i} className="card-glass" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <p style={{ fontSize: '0.925rem', fontStyle: 'italic', lineHeight: 1.5, color: 'var(--text-main)', marginBottom: '1.5rem' }}>
                "{t.quote}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                <div style={{ fontSize: '2rem' }}>{t.avatar}</div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800 }}>{t.name}</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t.location} • {t.crop}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" style={{ padding: '5rem 3rem', background: 'var(--card-bg)', borderTop: '1px solid var(--border-light)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="badge badge-amber" style={{ marginBottom: '0.5rem' }}>Got Questions?</div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary-900)' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="card-glass"
                style={{ cursor: 'pointer', padding: '1.25rem' }}
                onClick={() => toggleFaq(i)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary-900)' }}>
                    {faq.q}
                  </h3>
                  {openFaq === i ? <ChevronUp size={20} color="var(--primary-600)" /> : <ChevronDown size={20} color="var(--primary-600)" />}
                </div>
                {openFaq === i && (
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.75rem', lineHeight: 1.5, borderTop: '1px solid var(--border-light)', paddingTop: '0.75rem' }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />

    </div>
  );
}
