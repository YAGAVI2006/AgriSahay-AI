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
  Activity, 
  Layers, 
  Clock, 
  History, 
  FileText 
} from 'lucide-react';
import FarmHealthGauge from '../components/FarmHealthGauge';
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

  const [farmData, setFarmData] = useState({
    location: `${districtName}, ${stateName}`,
    areaAcres: farmerProfile?.landSizeAcres || 4.5,
    crop: farmerProfile?.primaryCrop || 'Paddy (Kuruvai)',
    soilPh: 6.8,
    soilN: 72,
    soilP: 38,
    soilK: 55,
    cropHealthScore: 92,
    waterBalance: 'Adequate (64%)',
    diseaseRisk: 'Low Risk (Prophylactic monitoring)',
    cropSuitability: '92.5% Optimal'
  });

  const [recommendationHistory, setRecommendationHistory] = useState([
    { id: 1, date: '2026-08-08', crop: 'Paddy (Kuruvai)', score: '92.5%', yield: '28.5 Qtl/Ac', estRevenue: '₹68,400/Ac', status: 'Active Field' },
    { id: 2, date: '2026-07-15', crop: 'Coriander & Leafy Greens', score: '94.0%', yield: '5.2 Qtl/Ac', estRevenue: '₹42,000/Ac', status: 'Completed Cycle' },
    { id: 3, date: '2026-06-02', crop: 'Sugarcane (Co 86032)', score: '89.5%', yield: '45.0 Tons/Ac', estRevenue: '₹1,41,750/Ac', status: 'Reference Model' }
  ]);

  useEffect(() => {
    apiClient.get('/dashboard/summary', {
      cropHealthScore: 92
    }).then(data => {
      if (data) setFarmData(prev => ({ ...prev, ...data }));
    });
  }, [districtName]);

  const quickActions = [
    {
      id: 'disease',
      title: isTa ? 'CNN நோய் கண்டறிதல்' : 'CNN Disease Diagnosis',
      desc: isTa ? 'நரம்பியல் ஸ்கேன் & சரிபார்க்கப்பட்ட சிகிச்சை' : 'MobileNetV2 classification & ICAR remedies',
      icon: Scan,
      color: '#059669',
      bg: '#ECFDF5'
    },
    {
      id: 'assistant',
      title: isTa ? 'அக்ரிபாட் AI' : 'Bilingual AgriBot',
      desc: isTa ? 'இருமொழி உடனடி விவசாய உதவி' : 'Voice & text agricultural intelligence',
      icon: Bot,
      color: '#7C3AED',
      bg: '#F5F3FF'
    },
    {
      id: 'recommend',
      title: isTa ? 'பயிர் பொருத்தம் (30/25/20/15/10)' : 'Crop Scoring Engine',
      desc: isTa ? 'மண், பருவம், நீர் எடையிடப்பட்ட மாதிரி' : 'Multi-criteria mathematical suitability',
      icon: Sprout,
      color: '#047857',
      bg: '#ECFDF5'
    },
    {
      id: 'evaluation',
      title: isTa ? 'பரிசோதனை மதிப்பீடு' : 'TNSCST Evaluation',
      desc: isTa ? 'துல்லியம், F1-Score & குழப்ப அணி' : 'Model validation metrics & confusion matrix',
      icon: Activity,
      color: '#D97706',
      bg: '#FFFBEB'
    }
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
              <Sparkles size={12} /> {isTa ? 'வேளாண்மை முடிவு ஆதரவு அமைப்பு' : 'Decision Support System Active'}
            </span>
            <span style={{ fontSize: '0.8rem', opacity: 0.9, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              <MapPin size={13} /> {districtName}, {stateName}
            </span>
          </div>

          <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFFFFF', margin: 0, letterSpacing: '-0.02em' }}>
            {isTa ? `வணக்கம், ${farmerName}` : `Good morning, ${farmerName}`}
          </h1>
          <p style={{ fontSize: '0.875rem', opacity: 0.9, marginTop: '0.25rem' }}>
            {isTa ? 'உங்கள் பண்ணை நிலைமைகள் மற்றும் நிகழ்நேர அறிவியல் வழிகாட்டுதல்கள்.' : 'Personalized farm telemetry, explainable crop suitability & weather directives.'}
          </p>
        </div>

        {/* Micro-Climate Quick Pill */}
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
            <div style={{ fontSize: '1.25rem', fontWeight: 800, lineHeight: 1.1 }}>{activeWeather?.temp || 33}°C</div>
            <div style={{ fontSize: '0.725rem', opacity: 0.9 }}>{isTa ? 'மிதமான வெயில்' : 'Partly Sunny'}</div>
          </div>
        </div>
      </div>

      {/* MY FARM Profile & Telemetry Card */}
      <div className="card-saas" style={{ borderLeft: '4px solid var(--primary-600)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.25rem' }}>🏡</span>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0 }}>
              {isTa ? 'எனது பண்ணை விவரம் (MY FARM)' : 'MY FARM – Personalized Field Profile & Telemetry'}
            </h3>
          </div>
          <span className="badge badge-green">Cauvery Basin • Karur</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', fontSize: '0.85rem' }}>
          <div style={{ background: 'var(--bg-slate)', padding: '0.65rem 0.85rem', borderRadius: '6px' }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', fontWeight: 700 }}>LOCATION</span>
            <span style={{ fontWeight: 800, color: 'var(--text-main)' }}>{districtName}</span>
          </div>

          <div style={{ background: 'var(--bg-slate)', padding: '0.65rem 0.85rem', borderRadius: '6px' }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', fontWeight: 700 }}>FARM AREA</span>
            <span style={{ fontWeight: 800, color: 'var(--text-main)' }}>{farmData.areaAcres} Acres</span>
          </div>

          <div style={{ background: 'var(--bg-slate)', padding: '0.65rem 0.85rem', borderRadius: '6px' }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', fontWeight: 700 }}>CURRENT CROP</span>
            <span style={{ fontWeight: 800, color: 'var(--primary-700)' }}>{farmData.crop}</span>
          </div>

          <div style={{ background: 'var(--bg-slate)', padding: '0.65rem 0.85rem', borderRadius: '6px' }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', fontWeight: 700 }}>SOIL pH</span>
            <span style={{ fontWeight: 800, color: '#0284c7' }}>{farmData.soilPh} (Neutral)</span>
          </div>

          <div style={{ background: 'var(--bg-slate)', padding: '0.65rem 0.85rem', borderRadius: '6px' }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', fontWeight: 700 }}>SOIL N-P-K</span>
            <span style={{ fontWeight: 800, color: '#d97706' }}>{farmData.soilN} : {farmData.soilP} : {farmData.soilK}</span>
          </div>
        </div>

        {/* Current Farm Status Bar */}
        <div style={{ marginTop: '1rem', borderTop: '1px solid var(--border-light)', paddingTop: '0.85rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', fontSize: '0.8rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ color: 'var(--primary-600)', fontWeight: 800 }}>🌱 Crop Health:</span>
            <span style={{ fontWeight: 700 }}>{farmData.cropHealthScore}% (Vigorous)</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ color: '#2563EB', fontWeight: 800 }}>💧 Water Balance:</span>
            <span style={{ fontWeight: 700 }}>{farmData.waterBalance}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ color: '#d97706', fontWeight: 800 }}>🐛 Disease Risk:</span>
            <span style={{ fontWeight: 700 }}>{farmData.diseaseRisk}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ color: '#7c3aed', fontWeight: 800 }}>📈 Suitability:</span>
            <span style={{ fontWeight: 700 }}>{farmData.cropSuitability}</span>
          </div>
        </div>
      </div>

      {/* Main Two-Column Analytics Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.25rem' }}>
        
        {/* Left Column: Farm Health Gauge & Quick Forecast */}
        <div className="card-saas" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800 }}>
              {isTa ? 'பயிர் & பண்ணை ஆரோக்கிய குறியீடு' : 'Crop & Soil Health Index'}
            </h3>
            <span className="badge badge-green">92% {isTa ? 'சிறப்பானது' : 'Optimal'}</span>
          </div>

          <FarmHealthGauge score={farmData.cropHealthScore} />

          {/* Micro-climate 7-Day Trend Chart */}
          <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              {isTa ? '7-நாள் வெப்பநிலை முன்னறிவிப்பு' : '7-Day Temperature Telemetry'}
            </div>
            <WeatherSummaryChart />
          </div>
        </div>

        {/* Right Column: Quick Actions & Market Tracker */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Quick Actions Grid */}
          <div className="card-saas">
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.85rem' }}>
              {isTa ? 'முக்கிய தொகுதிகள்' : 'Core Research Modules'}
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

          {/* Mandi Price Chart */}
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

      {/* Recommendation History Table */}
      <div className="card-saas">
        <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <History size={18} color="var(--primary-600)" />
          {isTa ? 'பரிந்துரை வரலாறு & முந்தைய முடிவுகள்' : 'Recommendation History & Historical Decision Logs'}
        </h3>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ background: 'var(--bg-slate)', borderBottom: '2px solid var(--border-light)', textAlign: 'left' }}>
                <th style={{ padding: '0.65rem' }}>Date</th>
                <th style={{ padding: '0.65rem' }}>Recommended Crop</th>
                <th style={{ padding: '0.65rem', textAlign: 'center' }}>Suitability Score</th>
                <th style={{ padding: '0.65rem' }}>Expected Yield</th>
                <th style={{ padding: '0.65rem' }}>Estimated Revenue</th>
                <th style={{ padding: '0.65rem', textAlign: 'center' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {recommendationHistory.map((rec) => (
                <tr key={rec.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '0.65rem', color: 'var(--text-muted)' }}>{rec.date}</td>
                  <td style={{ padding: '0.65rem', fontWeight: 700 }}>{rec.crop}</td>
                  <td style={{ padding: '0.65rem', textAlign: 'center', fontWeight: 800, color: 'var(--primary-700)' }}>{rec.score}</td>
                  <td style={{ padding: '0.65rem' }}>{rec.yield}</td>
                  <td style={{ padding: '0.65rem', color: '#059669', fontWeight: 700 }}>{rec.estRevenue}</td>
                  <td style={{ padding: '0.65rem', textAlign: 'center' }}>
                    <span className={`badge ${rec.status === 'Active Field' ? 'badge-green' : 'badge-amber'}`} style={{ fontSize: '0.65rem' }}>
                      {rec.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
