import React, { useState } from 'react';
import { CloudSun, CloudRain, Thermometer, Wind, Droplets, Sun, AlertTriangle, MapPin, CheckCircle2, ShieldAlert } from 'lucide-react';
import { getWeatherData } from '../data/weatherData';

export default function WeatherView({ farmerProfile, onUpdateLocation }) {
  const [selectedDistrict, setSelectedDistrict] = useState(farmerProfile.district || 'Karur');

  const weatherData = getWeatherData(selectedDistrict);

  const handleDistrictSelect = (dt) => {
    setSelectedDistrict(dt);
    if (onUpdateLocation) {
      onUpdateLocation(dt);
    }
  };

  const tnDistricts = ["Karur", "Tiruchirappalli", "Namakkal", "Dindigul", "Erode", "Thanjavur"];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Top Title & Location Bar Selector */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div className="badge badge-blue" style={{ marginBottom: '0.35rem' }}>
            <CloudSun size={12} /> Hyperlocal Micro-Climate Advisories
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>🌦 Smart Weather Dashboard (Karur & TN)</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Real-time weather telemetry, 7-day forecast, rain alerts & agronomic advisories for Cauvery basin.
          </p>
        </div>

        {/* Location Switcher Pills (Tamil Nadu Districts) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>Quick Select District:</span>
          {tnDistricts.map(dt => (
            <button
              key={dt}
              onClick={() => handleDistrictSelect(dt)}
              className={selectedDistrict === dt ? 'btn-primary' : 'btn-outline'}
              style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', borderRadius: '9999px' }}
            >
              <MapPin size={12} /> {dt}
            </button>
          ))}
        </div>
      </div>

      {/* Extreme Rain / Weather Warning Alert Box */}
      {weatherData.alerts && weatherData.alerts.length > 0 && (
        <div style={{
          background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
          border: '1px solid #fed7aa',
          borderRadius: 'var(--radius-lg)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          gap: '1rem',
          alignItems: 'flex-start'
        }}>
          <AlertTriangle size={26} color="#ea580c" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#c2410c', marginBottom: '0.25rem' }}>
              {weatherData.alerts[0].title}
            </h4>
            <p style={{ fontSize: '0.9rem', color: '#9a3412', lineHeight: 1.5 }}>
              {weatherData.alerts[0].message}
            </p>
          </div>
        </div>
      )}

      {/* Main Weather Telemetry Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 2fr', gap: '1.5rem' }}>
        
        {/* Main Current Weather Card */}
        <div className="card-glass" style={{ background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)', color: '#ffffff', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '9999px', fontSize: '0.85rem' }}>
                <MapPin size={14} />
                <span>{farmerProfile.village ? `${farmerProfile.village}, ` : ''}{weatherData.district}, {weatherData.state}</span>
              </div>
              <span style={{ fontSize: '0.8rem', opacity: 0.9 }}>Live Telemetry</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', margin: '1.5rem 0' }}>
              <div style={{ fontSize: '4.5rem', lineHeight: 1 }}>{weatherData.icon}</div>
              <div>
                <div style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1, fontFamily: 'var(--font-heading)' }}>
                  {weatherData.temp}°C
                </div>
                <p style={{ fontSize: '1.1rem', fontWeight: 600, marginTop: '0.35rem' }}>
                  {weatherData.condition}
                </p>
                <p style={{ fontSize: '0.85rem', opacity: 0.85 }}>Feels like {weatherData.feelsLike}°C</p>
              </div>
            </div>

            {/* Quick Metrics Line */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1rem', marginTop: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', opacity: 0.85, display: 'block' }}>Rain Chance</span>
                <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>{weatherData.rainProbability}%</span>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', opacity: 0.85, display: 'block' }}>Humidity</span>
                <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>{weatherData.humidity}%</span>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', opacity: 0.85, display: 'block' }}>Wind Speed</span>
                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{weatherData.windSpeed}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Agronomic Telemetry Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          
          <div className="card-glass" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Droplets size={24} />
            </div>
            <div>
              <span style={{ fontSize: '0.785rem', color: 'var(--text-muted)' }}>Soil Moisture Level</span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{weatherData.soilMoisture}</h4>
              <p style={{ fontSize: '0.725rem', color: 'var(--primary-600)' }}>Optimal for Kuruvai tillering</p>
            </div>
          </div>

          <div className="card-glass" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sun size={24} />
            </div>
            <div>
              <span style={{ fontSize: '0.785rem', color: 'var(--text-muted)' }}>UV Radiation Index</span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>UV {weatherData.uvIndex} (Moderate)</h4>
              <p style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>Safe for morning field work</p>
            </div>
          </div>

          <div className="card-glass" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#d1fae5', color: '#047857', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Wind size={24} />
            </div>
            <div>
              <span style={{ fontSize: '0.785rem', color: 'var(--text-muted)' }}>Wind & Spray Suitability</span>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{weatherData.windSpeed}</h4>
              <p style={{ fontSize: '0.725rem', color: '#059669' }}>Favorable for spraying</p>
            </div>
          </div>

          <div className="card-glass" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#f3e8ff', color: '#7e22ce', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CloudRain size={24} />
            </div>
            <div>
              <span style={{ fontSize: '0.785rem', color: 'var(--text-muted)' }}>Expected Rain Total</span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>15 - 25 mm</h4>
              <p style={{ fontSize: '0.725rem', color: '#7e22ce' }}>Next 48 hrs forecast</p>
            </div>
          </div>

        </div>

      </div>

      {/* 7-Day Interactive Forecast Card Deck */}
      <div className="card-glass">
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <CloudSun size={20} color="var(--primary-600)" /> 7-Day Karur Agronomic Forecast
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.75rem' }}>
          {weatherData.forecast7Days.map((item, idx) => (
            <div 
              key={idx}
              style={{
                background: idx === 0 ? 'var(--primary-50)' : 'var(--bg-main)',
                border: idx === 0 ? '2px solid var(--primary-500)' : '1px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                padding: '0.85rem 0.5rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <span style={{ fontSize: '0.85rem', fontWeight: idx === 0 ? 800 : 600, color: idx === 0 ? 'var(--primary-800)' : 'var(--text-main)' }}>
                {item.day}
              </span>
              <div style={{ fontSize: '1.8rem', margin: '2px 0' }}>{item.icon}</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>
                {item.tempMax}° <span style={{ opacity: 0.5, fontSize: '0.75rem', fontWeight: 400 }}>/ {item.tempMin}°</span>
              </div>
              <div style={{ fontSize: '0.725rem', color: 'var(--primary-700)', display: 'flex', alignItems: 'center', gap: '2px' }}>
                <CloudRain size={10} /> {item.rain}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Farming Action Recommendations based on Weather */}
      <div className="card-glass">
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <CheckCircle2 size={20} color="var(--primary-600)" /> Weather-Based Farming Recommendations for Karur
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          {weatherData.farmingAdvice.map((advice, i) => (
            <div key={i} style={{ background: 'var(--bg-main)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-700)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                <span>Recommendation #{i+1}</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-main)', lineHeight: 1.4 }}>
                {advice}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
