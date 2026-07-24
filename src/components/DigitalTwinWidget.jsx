import React, { useState } from 'react';
import { Cpu, Play, Zap, Droplets, Thermometer, Sun, ShieldCheck, AlertTriangle, RefreshCw, Layers } from 'lucide-react';

export default function DigitalTwinWidget({ twinData, onSimulateAction }) {
  if (!twinData) return null;

  const [simulationRunning, setSimulationRunning] = useState(false);
  const [activeTab, setActiveTab] = useState('sensors');
  const [simulationSpeed, setSimulationSpeed] = useState('1x');

  const handleRunSimulation = () => {
    setSimulationRunning(true);
    setTimeout(() => {
      setSimulationRunning(false);
      if (onSimulateAction) onSimulateAction();
    }, 1200);
  };

  return (
    <div className="card-glass" style={{ border: '2px solid var(--primary-500)', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#ffffff', borderRadius: 'var(--radius-lg)' }}>
      
      {/* Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, #059669 0%, #047857 100%)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 15px rgba(5, 150, 105, 0.5)' }}>
            <Cpu size={24} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fef08a' }}>{twinData.plotName}</h3>
              <span className="badge badge-green" style={{ fontSize: '0.65rem' }}>LIVE TWIN ACTIVE</span>
            </div>
            <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>
              {twinData.location} | {twinData.crop} ({twinData.landSize}) | Soil: {twinData.soilType}
            </p>
          </div>
        </div>

        {/* Simulation Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button 
            onClick={handleRunSimulation} 
            className="btn-accent"
            style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem', borderRadius: '9999px' }}
          >
            {simulationRunning ? (
              <>
                <RefreshCw size={14} className="animate-spin" /> Simulating 30 Days...
              </>
            ) : (
              <>
                <Play size={14} /> Run 30-Day AI Simulation
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Visual Twin Plot Simulation Canvas */}
      <div style={{
        height: '240px',
        borderRadius: 'var(--radius-md)',
        background: 'radial-gradient(circle at center, #1e293b 0%, #090d16 100%)',
        border: '1px solid rgba(255,255,255,0.15)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1rem'
      }}>
        {/* Animated Grid Overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'linear-gradient(rgba(5, 150, 105, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(5, 150, 105, 0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none'
        }} />

        {/* Plot Status Tag */}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', background: 'rgba(5, 150, 105, 0.25)', border: '1px solid #10b981', color: '#6ee7b7', padding: '4px 10px', borderRadius: '9999px', fontWeight: 700 }}>
            🌾 Stage: {twinData.currentStage}
          </span>
          <span style={{ fontSize: '0.75rem', background: 'rgba(2, 132, 199, 0.25)', border: '1px solid #38bdf8', color: '#7dd3fc', padding: '4px 10px', borderRadius: '9999px', fontWeight: 700 }}>
            🛰 Sentinel Satellite Sync: 100%
          </span>
        </div>

        {/* Visual Crop Canopy Representation */}
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', margin: 'auto' }}>
          <div style={{ fontSize: '3.5rem', filter: 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.6))' }}>
            🌾 🌱 🍌
          </div>
          <p style={{ fontSize: '0.95rem', fontWeight: 800, color: '#6ee7b7', marginTop: '0.25rem' }}>
            {twinData.overallStatus}
          </p>
        </div>

        {/* Real-time Telemetry Strip */}
        <div style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(6px)', padding: '0.5rem 0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div>
            <span style={{ fontSize: '0.65rem', opacity: 0.7, display: 'block' }}>Soil Moisture</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#38bdf8' }}>{twinData.realtimeSensors?.soilMoisture}</span>
          </div>
          <div>
            <span style={{ fontSize: '0.65rem', opacity: 0.7, display: 'block' }}>Canopy Temp</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fba518' }}>{twinData.realtimeSensors?.canopyTemperature}</span>
          </div>
          <div>
            <span style={{ fontSize: '0.65rem', opacity: 0.7, display: 'block' }}>Chlorophyll SPAD</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#4ade80' }}>{twinData.realtimeSensors?.leafChlorophyllIndex}</span>
          </div>
          <div>
            <span style={{ fontSize: '0.65rem', opacity: 0.7, display: 'block' }}>Root Nitrogen</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#c084fc' }}>{twinData.realtimeSensors?.rootZoneNitrogen}</span>
          </div>
        </div>
      </div>

    </div>
  );
}
