import React, { useState, useEffect } from 'react';
import { 
  Sprout, 
  Scan, 
  CloudSun, 
  Bot, 
  Award, 
  TrendingUp, 
  Droplet, 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  AlertCircle, 
  CheckCircle2,
  Calendar,
  Activity,
  Wind
} from 'lucide-react';
import FarmHealthGauge from '../components/FarmHealthGauge';
import CropHealthChart from '../components/CropHealthChart';
import WeatherSummaryChart from '../components/WeatherSummaryChart';
import MarketPriceChart from '../components/MarketPriceChart';
import apiClient from '../services/apiClient';

export default function DashboardPage({
  farmerProfile = {},
  activeWeather = {},
  matchedSchemes = [],
  onNavigate,
  recentScans = [],
  selectedLanguage = 'en'
}) {
  const isTa = selectedLanguage === 'ta';
  const farmerName = farmerProfile?.name || 'Yagavi S';
  const districtName = farmerProfile?.district || 'Karur';
  const stateName = farmerProfile?.state || 'Tamil Nadu';

  const [dashboardData, setDashboardData] = useState({
    currentCrop: farmerProfile?.primaryCrop ? farmerProfile.primaryCrop.toUpperCase() : 'PADDY (KURUVAI)',
    temperature: activeWeather?.temp || 33,
    soilMoisture: '64% - Adequate',
    expectedYield: '28.5 Qtl/Acre',
    farmHealthScore: 92
  });

  useEffect(() => {
    // Attempt REST fetch from Spring Boot API with fallback
    apiClient.get('/dashboard/summary', {
      currentCrop: 'Paddy (Kuruvai)',
      temperature: 33,
      soilMoisture: '64% - Adequate',
      expectedYield: '28.5 Qtl/Acre',
      farmHealthScore: 92
    }).then(data => {
      if (data) setDashboardData(prev => ({ ...prev, ...data }));
    });
  }, [districtName]);

  const quickActions = [
    {
      id: 'disease',
      title: isTa ? 'நோய் கண்டறிதல்' : 'Diagnose Disease',
      desc: isTa ? 'இலை நோய்களைக் கண்டறிய AI ஸ்கேன்' : 'Neural scan to identify pathogens & treatments',
      icon: Scan,
      color: '#059669',
      bg: '#ECFDF5'
    },
    {
      id: 'assistant',
      title: isTa ? 'அக்ரிபாட் AI' : 'Ask AgriBot',
      desc: isTa ? 'இருமொழி உடனடி விவசாய உதவி' : '24/7 bilingual agricultural intelligence',
      icon: Bot,
      color: '#7C3AED',
      bg: '#F5F3FF'
    },
    {
      id: 'recommend',
      title: isTa ? 'பயிர் பரிந்துரை' : 'Crop Recommendation',
      desc: isTa ? 'மண் மற்றும் பருவத்திற்கான சிறந்த பயிர்' : 'Soil & seasonal suitability algorithms',
      icon: Sprout,
      color: '#047857',
      bg: '#ECFDF5'
    },
    {
      id: 'schemes',
      title: isTa ? 'அரசு திட்டங்கள்' : 'Government Schemes',
      desc: isTa ? 'மானியங்கள் & உதவித்தொகை சரிபார்ப்பு' : 'State & central subsidy matching',
      icon: Award,
      color: '#D97706',
      bg: '#FFFBEB'
    }
  ];

  const todayAdvisories = isTa ? [
    'குளித்தலை வட்டாரத்தில் அடுத்த 48 மணி நேரத்தில் மழை வாய்ப்பு. நெல்லுக்கு தழைச்சத்து இடுவதைத் தவிர்க்கவும்.',
    'கரூர் சந்தையில் கொத்தமல்லி மற்றும் தக்காளி விலை +4.2% உயர்ந்துள்ளது. அறுவடைக்கு உகந்த நேரம்.',
    'காலை பனிப்பொழிவிற்குப் பின் இலை கருகல் அறிகுறிகளை ஆய்வு செய்து பஞ்சகவ்யா 3% தெளிக்கவும்.'
  ] : [
    'Rain forecast in next 48h across Kulithalai block. Delay heavy Nitrogen top dressing for Paddy.',
    'Coriander & Tomato mandi prices surged +4.2% at Karur market. Favorable selling window.',
    'Inspect lower tillers for Bacterial Leaf Blight symptoms post morning dew; spray Panchagavya 3%.'
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Top Header & Welcome Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #064E3B 0%, #047857 100%)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem 1.75rem',
        color: '#FFFFFF',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        boxShadow: '0 4px 12px rgba(6, 78, 59, 0.15)'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
            <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.2)', color: '#FFFFFF', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
              <Sparkles size={12} /> {isTa ? 'உழவர் முடிவு அமைப்பு' : 'Decision Support Active'}
            </span>
            <span style={{ fontSize: '0.8rem', opacity: 0.9, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              <MapPin size={13} /> {districtName}, {stateName}
            </span>
          </div>

          <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFFFFF', margin: 0, letterSpacing: '-0.02em' }}>
            {isTa ? `வணக்கம், ${farmerName}` : `Good morning, ${farmerName}`}
          </h1>
          <p style={{ fontSize: '0.875rem', opacity: 0.9, marginTop: '0.25rem' }}>
            {isTa ? 'உங்கள் பண்ணை நிலைமைகள் மற்றும் இன்றைய முக்கிய வேளாண்மை ஆலோசனைகள்.' : 'Here is your daily farm intelligence, weather advisory & crop health status.'}
          </p>
        </div>

        {/* Weather Quick Pill */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          borderRadius: 'var(--radius-md)',
          padding: '0.65rem 1.15rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.85rem'
        }}>
          <CloudSun size={28} color="#FDE68A" />
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, lineHeight: 1.1 }}>{dashboardData.temperature}°C</div>
            <div style={{ fontSize: '0.725rem', opacity: 0.9 }}>{isTa ? 'மிதமான வெயில்' : 'Partly Sunny'}</div>
          </div>
        </div>
      </div>

      {/* 4 Clean KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
        
        {/* KPI 1: Current Crop */}
        <div className="kpi-card">
          <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#ECFDF5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Sprout size={22} />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
              {isTa ? 'தற்போதைய பயிர்' : 'Current Crop'}
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)' }}>
              {dashboardData.currentCrop}
            </div>
            <div style={{ fontSize: '0.725rem', color: 'var(--primary-600)', fontWeight: 600 }}>
              {farmerProfile?.landSizeAcres || 4.5} Acres Active
            </div>
          </div>
        </div>

        {/* KPI 2: Temperature */}
        <div className="kpi-card">
          <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#FFFBEB', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <CloudSun size={22} />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
              {isTa ? 'வெப்பநிலை' : 'Temperature'}
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)' }}>
              {dashboardData.temperature}°C
            </div>
            <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
              Feels like 35°C
            </div>
          </div>
        </div>

        {/* KPI 3: Soil Moisture */}
        <div className="kpi-card">
          <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#EFF6FF', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Droplet size={22} />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
              {isTa ? 'மண் ஈரப்பதம்' : 'Soil Moisture'}
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)' }}>
              {dashboardData.soilMoisture}
            </div>
            <div style={{ fontSize: '0.725rem', color: '#2563EB', fontWeight: 600 }}>
              Optimal for Red Loam
            </div>
          </div>
        </div>

        {/* KPI 4: Expected Yield */}
        <div className="kpi-card">
          <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#F5F3FF', color: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <TrendingUp size={22} />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
              {isTa ? 'எதிர்பார்க்கப்படும் மகசூல்' : 'Expected Yield'}
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)' }}>
              {dashboardData.expectedYield}
            </div>
            <div style={{ fontSize: '0.725rem', color: '#059669', fontWeight: 600 }}>
              +8.4% above district avg
            </div>
          </div>
        </div>

      </div>

      {/* Today's Agricultural Advisory (Clean High-Priority Banner) */}
      <div className="card-saas" style={{ borderLeft: '4px solid var(--primary-600)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
          <AlertCircle size={18} color="var(--primary-600)" />
          <h3 style={{ fontSize: '1rem', fontWeight: 800, margin: 0 }}>
            {isTa ? 'இன்றைய முக்கிய வேளாண் ஆலோசனைகள்' : "Today's Agricultural Advisory"}
          </h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {todayAdvisories.map((adv, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--text-body)' }}>
              <span style={{ color: 'var(--primary-600)', fontWeight: 800 }}>•</span>
              <span>{adv}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Two-Column Analytics Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.25rem' }}>
        
        {/* Left Column: Farm Health Gauge & Quick Forecast */}
        <div className="card-saas" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800 }}>
              {isTa ? 'பயிர் மற்றும் பண்ணை ஆரோக்கியம்' : 'Crop & Farm Health Score'}
            </h3>
            <span className="badge badge-green">92% {isTa ? 'சிறப்பானது' : 'Excellent'}</span>
          </div>

          <FarmHealthGauge score={dashboardData.farmHealthScore} />

          {/* Micro-climate 7-Day Trend Chart */}
          <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              {isTa ? '7-நாள் வெப்பநிலை முன்னறிவிப்பு' : '7-Day Temperature Trend'}
            </div>
            <WeatherSummaryChart />
          </div>
        </div>

        {/* Right Column: Mandi Prices & Quick Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Quick Actions Grid */}
          <div className="card-saas">
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.85rem' }}>
              {isTa ? 'விரைவு செயல்பாடுகள்' : 'Quick Actions'}
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {quickActions.map((act) => {
                const Icon = act.icon;
                return (
                  <button
                    key={act.id}
                    onClick={() => onNavigate(act.id)}
                    style={{
                      background: 'var(--bg-slate)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.85rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      gap: '0.4rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: act.bg, color: act.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={18} />
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-main)' }}>{act.title}</div>
                    <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', lineHeight: 1.3 }}>{act.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Karur Mandi Price Chart */}
          <div className="card-saas">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800 }}>
                  {isTa ? 'கரூர் சந்தை விலைகள்' : 'Karur Mandi Market Prices'}
                </h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Paddy, Sugarcane, Turmeric, Coriander</span>
              </div>
              <button onClick={() => onNavigate('market')} className="btn-outline" style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}>
                {isTa ? 'முழு சந்தை' : 'Full Market'} <ArrowRight size={12} />
              </button>
            </div>

            <MarketPriceChart />
          </div>

        </div>

      </div>

    </div>
  );
}
