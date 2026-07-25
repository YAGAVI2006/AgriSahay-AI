import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sprout, 
  Scan, 
  Bot, 
  CloudSun, 
  ShoppingBag, 
  Award, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  Activity, 
  Calendar, 
  Droplet, 
  Zap, 
  Cpu, 
  ShieldCheck, 
  Clock, 
  Check 
} from 'lucide-react';
import FarmHealthGauge from '../components/FarmHealthGauge';
import CropHealthChart from '../components/CropHealthChart';
import WeatherSummaryChart from '../components/WeatherSummaryChart';
import MarketPriceChart from '../components/MarketPriceChart';

export default function DashboardPage({
  farmerProfile,
  activeWeather,
  matchedSchemes,
  onNavigate,
  recentScans
}) {
  const farmHealthScore = 92;

  const quickActions = [
    {
      id: 'recommend',
      title: 'Crop Recommendation',
      desc: 'Discover best suited crops based on soil & rainfall',
      icon: Sprout,
      color: '#10B981',
      bg: '#ECFDF5'
    },
    {
      id: 'disease',
      title: 'Detect Disease',
      desc: 'Neural leaf scan to identify pathogens & cures',
      icon: Scan,
      color: '#059669',
      bg: '#E0F2FE'
    },
    {
      id: 'weather',
      title: 'Check Weather',
      desc: '7-day Karur micro-climate forecast & advice',
      icon: CloudSun,
      color: '#F59E0B',
      bg: '#FEF3C7'
    },
    {
      id: 'assistant',
      title: 'Ask AI Assistant',
      desc: '24/7 bilingual Uzhavar AI Q&A engine',
      icon: Bot,
      color: '#8B5CF6',
      bg: '#F3E8FF'
    }
  ];

  const aiInsights = [
    'Rain expected in 48 hours across Kulithalai block. Delay heavy Nitrogen top dressing for Paddy.',
    'Coriander & Tomato mandi prices increased by +4.2% at Karur Uzhavar Sandhai today.',
    'Inspect lower paddy tillers for early Bacterial Leaf Blight symptoms following morning dew.'
  ];

  const recentActivities = [
    { action: 'Weather checked for Karur District', time: '10 mins ago', icon: CloudSun, color: '#F59E0B' },
    { action: 'Leaf disease scan completed (Paddy BLB)', time: '2 hours ago', icon: Scan, color: '#10B981' },
    { action: 'Crop recommendation generated for Red Soil', time: 'Yesterday', icon: Sprout, color: '#059669' },
    { action: 'PM-KISAN ₹6,000 subsidy eligibility verified', time: '2 days ago', icon: Award, color: '#8B5CF6' }
  ];

  // Format today's date
  const todayDateString = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}
    >
      
      {/* ---------------------------------------------------- */}
      {/* WELCOME SECTION */}
      {/* ---------------------------------------------------- */}
      <div 
        style={{
          background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
          borderRadius: '20px',
          padding: '2rem 2.25rem',
          color: '#FFFFFF',
          boxShadow: '0 10px 25px -5px rgba(5, 150, 105, 0.3)',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}
      >
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255, 255, 255, 0.2)', padding: '0.3rem 0.75rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.75rem', backdropFilter: 'blur(8px)' }}>
            <Sparkles size={14} color="#FDE68A" /> Today's farming insights are ready.
          </div>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 800, fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '-0.02em', margin: 0 }}>
            Welcome back, {farmerProfile.name || 'Farmer'} 👋
          </h2>
          <p style={{ fontSize: '0.925rem', opacity: 0.9, marginTop: '0.35rem' }}>
            {todayDateString} • {farmerProfile.village || 'Mayanur'}, {farmerProfile.district || 'Karur'} District ({farmerProfile.landSizeAcres || 4.5} Acres)
          </p>
        </div>

        {/* Micro-Climate Weather Badge */}
        <div style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.25)', borderRadius: '16px', padding: '0.85rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <span style={{ fontSize: '2rem' }}>{activeWeather.icon || '☀️'}</span>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>{activeWeather.temp || 33}°C</div>
            <div style={{ fontSize: '0.775rem', opacity: 0.9 }}>{activeWeather.condition || 'Warm & Clear'} • {farmerProfile.district || 'Karur'}</div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* QUICK ACTIONS (4 CLEAN CARDS) */}
      {/* ---------------------------------------------------- */}
      <div>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#111827', marginBottom: '1rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          Quick Actions
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem' }}>
          {quickActions.map(qa => {
            const IconComp = qa.icon;
            return (
              <motion.div
                key={qa.id}
                whileHover={{ y: -4, boxShadow: '0 12px 25px -5px rgba(0, 0, 0, 0.08)' }}
                transition={{ duration: 0.2 }}
                onClick={() => onNavigate(qa.id)}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '16px',
                  padding: '1.35rem',
                  cursor: 'pointer',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: qa.bg, color: qa.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <IconComp size={24} />
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#111827', marginBottom: '0.35rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    {qa.title}
                  </h4>
                  <p style={{ fontSize: '0.825rem', color: '#6B7280', lineHeight: 1.45 }}>
                    {qa.desc}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', fontWeight: 700, color: qa.color, marginTop: '1.25rem' }}>
                  <span>Launch Module</span>
                  <ArrowRight size={14} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* OVERVIEW KPI CARDS (4 CARDS) */}
      {/* ---------------------------------------------------- */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
        
        {/* Farm Health KPI */}
        <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '1.25rem', boxShadow: '0 2px 4px rgba(0,0,0,0.04)', borderLeft: '4px solid #10B981' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Farm Health</span>
            <Activity size={18} color="#10B981" />
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#047857', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            {farmHealthScore}% <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#10B981' }}>Optimal</span>
          </div>
          <p style={{ fontSize: '0.775rem', color: '#6B7280', marginTop: '4px' }}>Good Soil Moisture & Chlorophyll</p>
        </div>

        {/* Weather KPI */}
        <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '1.25rem', boxShadow: '0 2px 4px rgba(0,0,0,0.04)', borderLeft: '4px solid #F59E0B' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Today's Weather</span>
            <CloudSun size={18} color="#F59E0B" />
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#111827', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            {activeWeather.temp || 33}°C
          </div>
          <p style={{ fontSize: '0.775rem', color: '#6B7280', marginTop: '4px' }}>Humidity: 68% • Rain Chance: 15%</p>
        </div>

        {/* Market Trend KPI */}
        <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '1.25rem', boxShadow: '0 2px 4px rgba(0,0,0,0.04)', borderLeft: '4px solid #059669' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Market Trend</span>
            <TrendingUp size={18} color="#059669" />
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#047857', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            ₹2,280 <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#6B7280' }}>/ Qtl</span>
          </div>
          <p style={{ fontSize: '0.775rem', color: '#10B981', fontWeight: 700, marginTop: '4px' }}>▲ +4.2% Paddy ADT 45 (Karur Mandi)</p>
        </div>

        {/* AI Recommendation KPI */}
        <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '1.25rem', boxShadow: '0 2px 4px rgba(0,0,0,0.04)', borderLeft: '4px solid #8B5CF6' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>AI Recommendation</span>
            <Sparkles size={18} color="#8B5CF6" />
          </div>
          <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111827', lineHeight: 1.4 }}>
            Rain expected in 48h. Delay heavy irrigation for Paddy & Coriander.
          </p>
        </div>

      </div>

      {/* ---------------------------------------------------- */}
      {/* MAIN DASHBOARD (TWO-COLUMN RESPONSIVE LAYOUT) */}
      {/* ---------------------------------------------------- */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.75rem' }}>
        
        {/* LEFT COLUMN */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          
          {/* Weather Widget & Chart */}
          <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#111827', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Micro-Climate Weather Forecast & Rain Trends
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#6B7280' }}>Karur District Daily Telemetry</p>
              </div>
              <button onClick={() => onNavigate('weather')} className="btn-outline" style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem' }}>
                Full Weather
              </button>
            </div>
            <WeatherSummaryChart forecastData={activeWeather.forecast7Days} />
          </div>

          {/* Farm Health Gauge & Crop Health Trend Chart */}
          <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#111827', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Crop Health Index & Seasonal Growth Curve
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#6B7280' }}>Paddy Kuruvai Season Growth Tracking</p>
              </div>
            </div>
            <CropHealthChart />
          </div>

          {/* AI Insights Card */}
          <div style={{ background: 'linear-gradient(135deg, #ECFDF5 0%, #FFFFFF 100%)', border: '1px solid #A7F3D0', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#10B981', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#064E3B', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Intelligent AI Insights for Today
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#047857' }}>Generated based on satellite NDVI & soil sensors</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {aiInsights.map((insight, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', background: '#FFFFFF', border: '1px solid #D1FAE5', padding: '0.85rem 1rem', borderRadius: '12px', fontSize: '0.875rem', color: '#1F2937' }}>
                  <CheckCircle2 size={18} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{insight}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          
          {/* Market Prices Board */}
          <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#111827', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Karur Mandi Prices
              </h3>
              <button onClick={() => onNavigate('market')} className="btn-outline" style={{ padding: '0.35rem 0.75rem', fontSize: '0.775rem' }}>
                View All
              </button>
            </div>
            <MarketPriceChart />
          </div>

          {/* Government Scheme Updates Card */}
          <div style={{ background: 'linear-gradient(135deg, #FFFBEB 0%, #FFFFFF 100%)', border: '1px solid #FDE68A', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Award size={20} color="#D97706" />
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#B45309', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Matched Govt Subsidies
              </h4>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#4B5563', lineHeight: 1.45, marginBottom: '1rem' }}>
              You are eligible for PM-KISAN ₹6,000 annual subsidy + Kuruvai Crop Package in Karur district.
            </p>
            <button onClick={() => onNavigate('schemes')} className="btn-primary" style={{ width: '100%', background: '#D97706' }}>
              Apply for Schemes
            </button>
          </div>

          {/* Recent Activity Timeline */}
          <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.04)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#111827', marginBottom: '1rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Recent Activity
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {recentActivities.map((act, idx) => {
                const IconComp = act.icon;
                return (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#F8FAFC', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <IconComp size={16} color={act.color} />
                    </div>
                    <div style={{ fontSize: '0.85rem' }}>
                      <p style={{ fontWeight: 600, color: '#1F2937' }}>{act.action}</p>
                      <span style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>{act.time}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

    </motion.div>
  );
}
