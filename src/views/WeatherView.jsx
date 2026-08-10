import React, { useState, useEffect } from 'react';
import { 
  CloudSun, 
  Droplet, 
  Wind, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  MapPin, 
  Thermometer, 
  ShieldAlert, 
  Activity 
} from 'lucide-react';
import { weatherService } from '../services/weatherService';
import { weatherRuleEngine } from '../services/weatherRuleEngine';

export default function WeatherView({ farmerProfile = {}, selectedLanguage = 'en' }) {
  const isTa = selectedLanguage === 'ta';
  const districtName = farmerProfile?.district || 'Karur';

  const [weather, setWeather] = useState({
    district: districtName,
    temp: 33,
    feelsLike: 35,
    condition: 'Partly Sunny with Light Breeze',
    humidity: 64,
    windSpeed: '14 km/h NW',
    windSpeedKmh: 14,
    rainProbability: 25,
    forecast7Days: [
      { day: 'Today', tempMax: 34, tempMin: 24, condition: 'Partly Sunny', rain: 25, icon: '☀️' },
      { day: 'Tomorrow', tempMax: 32, tempMin: 23, condition: 'Rain Expected', rain: 75, icon: '🌦️' },
      { day: 'Day 3', tempMax: 30, tempMin: 22, condition: 'Passing Showers', rain: 55, icon: '🌧️' },
      { day: 'Day 4', tempMax: 33, tempMin: 24, condition: 'Clear Sky', rain: 15, icon: '☀️' },
      { day: 'Day 5', tempMax: 35, tempMin: 25, condition: 'Warm & Sunny', rain: 10, icon: '☀️' },
      { day: 'Day 6', tempMax: 34, tempMin: 24, condition: 'Cloudy Intervals', rain: 20, icon: '⛅' },
      { day: 'Day 7', tempMax: 33, tempMin: 24, condition: 'Pleasant', rain: 15, icon: '⛅' }
    ]
  });

  const [actionableDirectives, setActionableDirectives] = useState([]);

  useEffect(() => {
    weatherService.getWeatherByDistrict(districtName).then(data => {
      if (data) {
        setWeather(prev => ({ ...prev, ...data }));
        const rules = weatherRuleEngine.evaluateWeatherRules(data, farmerProfile);
        setActionableDirectives(rules);
      } else {
        const rules = weatherRuleEngine.evaluateWeatherRules(weather, farmerProfile);
        setActionableDirectives(rules);
      }
    });
  }, [districtName, farmerProfile]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div className="badge badge-amber" style={{ marginBottom: '0.35rem' }}>
            <Sparkles size={12} /> {isTa ? 'வானிலை அடிப்படையிலான வேளாண் விதிமுறை இன்ஜின்' : 'Weather-Aware Agricultural Rule Engine'}
          </div>
          <h2 style={{ fontSize: '1.65rem', fontWeight: 800 }}>
            🌦️ {isTa ? 'வானிலை நுண்ணறிவு & நேரடி விவசாய வழிகாட்டுதல்கள்' : 'Micro-Climate Telemetry & Actionable Agronomic Directives'}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            {isTa ? `${districtName} மாவட்டத்திற்கான நிகழ்நேர வானிலை கண்காணிப்பு மற்றும் உடனடி விவசாய முடிவுகள்.` : `Translating real-time meteorological observations into actionable farm management protocols for ${districtName}.`}
          </p>
        </div>

        <div style={{ background: 'var(--primary-50)', border: '1px solid var(--primary-100)', borderRadius: 'var(--radius-md)', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MapPin size={16} color="var(--primary-700)" />
          <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--primary-800)' }}>
            {districtName}, Tamil Nadu
          </span>
        </div>
      </div>

      {/* 4 Core Weather Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
        
        {/* Temperature */}
        <div className="kpi-card">
          <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#FFFBEB', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Thermometer size={22} />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
              {isTa ? 'வெப்பநிலை' : 'Temperature'}
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)' }}>
              {weather.temp}°C
            </div>
            <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
              Feels like {weather.feelsLike || 35}°C
            </div>
          </div>
        </div>

        {/* Humidity */}
        <div className="kpi-card">
          <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#EFF6FF', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Droplet size={22} />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
              {isTa ? 'காற்றின் ஈரப்பதம்' : 'Relative Humidity'}
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)' }}>
              {weather.humidity}%
            </div>
            <div style={{ fontSize: '0.725rem', color: '#2563EB', fontWeight: 600 }}>
              {weather.humidity > 70 ? 'High Fungal Spore Risk' : 'Optimal Leaf Transpiration'}
            </div>
          </div>
        </div>

        {/* Wind Speed */}
        <div className="kpi-card">
          <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#ECFDF5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Wind size={22} />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
              {isTa ? 'காற்றின் வேகம்' : 'Wind Speed'}
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)' }}>
              {weather.windSpeed || `${weather.windSpeedKmh} km/h`}
            </div>
            <div style={{ fontSize: '0.725rem', color: '#059669', fontWeight: 600 }}>
              {weather.windSpeedKmh > 18 ? 'Caution: Chemical Drift' : 'Safe for Foliar Spray'}
            </div>
          </div>
        </div>

        {/* Rain Probability */}
        <div className="kpi-card">
          <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#F5F3FF', color: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CloudSun size={22} />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
              {isTa ? 'மழை வாய்ப்பு' : 'Precipitation Probability'}
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)' }}>
              {weather.rainProbability}%
            </div>
            <div style={{ fontSize: '0.725rem', color: '#7C3AED', fontWeight: 600 }}>
              {weather.rainProbability >= 50 ? 'Rain Likely • Delay Spraying' : 'Clear Sowing Window'}
            </div>
          </div>
        </div>

      </div>

      {/* Actionable Rule Engine Decision Directives */}
      <div className="card-saas" style={{ borderLeft: '4px solid var(--primary-600)' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Activity size={18} color="var(--primary-600)" />
          {isTa ? 'வானிலை விதிமுறை இன்ஜின் முடிவுகள் (Actionable Directives)' : 'Actionable Agricultural Directives Derived from Rule Engine'}
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {actionableDirectives.map((dir) => (
            <div key={dir.id} style={{
              background: 'var(--bg-slate)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.85rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 800, fontSize: '0.85rem', color: 'var(--text-main)' }}>
                  <span>{dir.icon}</span>
                  <span>{isTa ? dir.categoryTa : dir.category}</span>
                </div>
                <span className={`badge ${dir.severity === 'HIGH_ALERT' ? 'badge-amber' : 'badge-green'}`} style={{ fontSize: '0.65rem' }}>
                  {dir.severity}
                </span>
              </div>

              <p style={{ fontSize: '0.825rem', color: 'var(--text-body)', lineHeight: 1.4, margin: '0.2rem 0' }}>
                {isTa ? dir.directiveTa : dir.directive}
              </p>

              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', borderTop: '1px dashed var(--border-light)', paddingTop: '0.3rem' }}>
                📖 <strong>Scientific Rationale:</strong> {dir.scientificRationale}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7-Day Forecast Cards */}
      <div className="card-saas">
        <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '1rem' }}>
          {isTa ? '7-நாள் நுண்-காலநிலை முன்னறிவிப்பு' : '7-Day Micro-Climate Weather Telemetry'}
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem' }}>
          {(weather.forecast7Days || []).map((day, idx) => (
            <div key={idx} style={{
              background: 'var(--bg-slate)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.85rem 0.65rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.35rem'
            }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)' }}>{day.day}</div>
              <div style={{ fontSize: '1.75rem', margin: '0.2rem 0' }}>{day.icon}</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-main)' }}>
                {day.tempMax}° / <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{day.tempMin}°</span>
              </div>
              <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>{day.condition}</div>
              {day.rain > 0 && (
                <div style={{ fontSize: '0.7rem', color: '#2563EB', fontWeight: 600 }}>💧 {day.rain}%</div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
