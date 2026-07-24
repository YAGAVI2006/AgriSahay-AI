import React, { useState } from 'react';
import { Upload, Camera, Leaf, CheckCircle2, ShieldAlert, Sparkles, RefreshCw, AlertCircle, Info, ChevronRight, Check } from 'lucide-react';
import { SAMPLE_DISEASE_GALLERY } from '../data/diseaseData';
import { diseaseService } from '../services/diseaseService';
import { CROP_LIST } from '../data/cropsData';

export default function DiseaseDetectionView({ onSaveScanToHistory }) {
  const [selectedSample, setSelectedSample] = useState(null);
  const [customImage, setCustomImage] = useState(null);
  const [selectedCropTarget, setSelectedCropTarget] = useState('paddy');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [activeTab, setActiveTab] = useState('organic');

  const handleSelectSample = (sample) => {
    setSelectedSample(sample);
    setCustomImage(null);
    startDiagnosis(sample.id, null);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const dataUrl = uploadEvent.target.result;
        setCustomImage(dataUrl);
        setSelectedSample(null);
        startDiagnosis(dataUrl, selectedCropTarget);
      };
      reader.readAsDataURL(file);
    }
  };

  const startDiagnosis = (inputSource, cropTarget) => {
    setIsScanning(true);
    setScanResult(null);
    
    diseaseService.analyzeImage(inputSource, cropTarget).then(result => {
      setScanResult(result);
      setIsScanning(false);
      if (onSaveScanToHistory) {
        onSaveScanToHistory(result);
      }
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Header Title */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="badge badge-green" style={{ marginBottom: '0.4rem' }}>
            <Sparkles size={12} /> AI Plant Classifier & Disease Neural Vision
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>🌿 AI Crop & Plant Disease Detector</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Upload crop leaf photos or select sample leaves below to identify the plant species & detect diseases with cure steps.
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.75rem' }}>
        
        {/* Left Column: Upload & Sample Gallery */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Target Plant Selector (For custom upload) */}
          <div className="card-glass" style={{ padding: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--primary-800)' }}>
              Select Plant / Crop Type (Before Uploading Photo):
            </label>
            <select 
              value={selectedCropTarget} 
              onChange={(e) => setSelectedCropTarget(e.target.value)}
              style={{ width: '100%', padding: '0.6rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '0.875rem', fontWeight: 600 }}
            >
              {CROP_LIST.map(cr => (
                <option key={cr.id} value={cr.id}>{cr.icon} {cr.name}</option>
              ))}
            </select>
          </div>

          {/* Main Upload Box / Scanner View */}
          <div className="card-glass" style={{ textAlign: 'center', padding: '1.5rem' }}>
            {isScanning ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: '1rem 0' }}>
                <div className="scanner-box">
                  <div className="scanner-line"></div>
                  <div className="scanner-overlay"></div>
                  <img 
                    src={selectedSample ? selectedSample.imageUrl : customImage} 
                    alt="Scanning" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-600)', fontWeight: 700 }}>
                  <RefreshCw className="animate-spin" size={18} />
                  <span>Identifying plant species & analyzing leaf venation...</span>
                </div>
              </div>
            ) : (
              <div>
                <label 
                  htmlFor="leaf-upload-input"
                  style={{
                    border: '2px dashed var(--primary-400)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    cursor: 'pointer',
                    background: 'var(--primary-50)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#ffffff', color: 'var(--primary-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-md)' }}>
                    <Camera size={28} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-800)' }}>Upload Crop Leaf Image</h3>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginTop: '2px' }}>PNG, JPG or JPEG up to 10MB supported</p>
                  </div>
                  <button type="button" className="btn-primary" style={{ marginTop: '0.5rem', pointerEvents: 'none' }}>
                    <Upload size={16} /> Choose File / Take Photo
                  </button>
                </label>
                <input 
                  id="leaf-upload-input" 
                  type="file" 
                  accept="image/*" 
                  onChange={handleFileUpload} 
                  style={{ display: 'none' }} 
                />
              </div>
            )}
          </div>

          {/* Sample Gallery Section */}
          <div className="card-glass">
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Leaf size={16} color="var(--primary-600)" /> Fast Demo Gallery: Click Sample Leaf Images
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
              {SAMPLE_DISEASE_GALLERY.map((sample) => (
                <div 
                  key={sample.id}
                  onClick={() => handleSelectSample(sample)}
                  style={{
                    border: selectedSample?.id === sample.id ? '2px solid var(--primary-600)' : '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    background: 'var(--bg-main)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <img src={sample.imageUrl} alt={sample.diseaseName} style={{ width: '100%', height: '80px', objectFit: 'cover' }} />
                  <div style={{ padding: '0.4rem', fontSize: '0.725rem', textAlign: 'center' }}>
                    <p style={{ fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{sample.cropIcon} {sample.cropName}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: AI Plant Identification & Diagnosis Display */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {scanResult ? (
            <div className="card-glass" style={{ borderLeft: '4px solid var(--primary-600)', animation: 'fadeIn 0.3s ease-out' }}>
              
              {/* Plant Identification Banner (Fix for User Issue #1) */}
              <div style={{ background: 'linear-gradient(135deg, #059669 0%, #047857 100%)', color: '#ffffff', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '0.725rem', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '0.05em' }}>AI Plant Identification</span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '2px 0 0 0', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span>{scanResult.cropIcon}</span> {scanResult.identifiedPlant || scanResult.cropName}
                  </h3>
                  <p style={{ fontSize: '0.8rem', opacity: 0.85, fontStyle: 'italic', margin: '2px 0 0 0' }}>
                    Botanical Name: {scanResult.botanicalName || 'Oryza sativa'} ({scanResult.cropType || 'Crop Plant'})
                  </p>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fef08a' }}>
                    {scanResult.confidenceScore}%
                  </div>
                  <span className="badge badge-amber" style={{ fontSize: '0.65rem' }}>Match Accuracy</span>
                </div>
              </div>

              {/* Disease Name & Scientific Details */}
              <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '0.85rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Detected Pathon/Disease</span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#dc2626', marginTop: '2px' }}>
                  🦠 {scanResult.diseaseName}
                </h3>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  Pathogen: {scanResult.scientificName}
                </p>
              </div>

              {/* Key Attributes */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ background: 'var(--bg-main)', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Severity Level</span>
                  <span style={{ fontWeight: 700, color: '#d97706', fontSize: '0.875rem' }}>{scanResult.severity}</span>
                </div>
                <div style={{ background: 'var(--bg-main)', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Affected Plant Area</span>
                  <span style={{ fontWeight: 700, fontSize: '0.875rem' }}>{scanResult.affectedPart}</span>
                </div>
              </div>

              {/* Symptoms List */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <AlertCircle size={16} color="#d97706" /> Observed Symptoms
                </h4>
                <ul style={{ listStyleType: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {scanResult.symptoms.map((sym, idx) => (
                    <li key={idx} style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                      <span style={{ color: 'var(--primary-600)', fontWeight: 800 }}>•</span>
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Treatment Tabs Switcher */}
              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                  <button 
                    onClick={() => setActiveTab('organic')}
                    className={activeTab === 'organic' ? 'btn-primary' : 'btn-outline'}
                    style={{ fontSize: '0.8rem', padding: '0.4rem 0.85rem' }}
                  >
                    🌱 Organic Treatment
                  </button>
                  <button 
                    onClick={() => setActiveTab('chemical')}
                    className={activeTab === 'chemical' ? 'btn-primary' : 'btn-outline'}
                    style={{ fontSize: '0.8rem', padding: '0.4rem 0.85rem' }}
                  >
                    🧪 Chemical Fungicide
                  </button>
                  <button 
                    onClick={() => setActiveTab('prevention')}
                    className={activeTab === 'prevention' ? 'btn-primary' : 'btn-outline'}
                    style={{ fontSize: '0.8rem', padding: '0.4rem 0.85rem' }}
                  >
                    🛡️ Prevention Tips
                  </button>
                </div>

                {/* Tab Content Box */}
                <div style={{ background: 'var(--bg-main)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  {activeTab === 'organic' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary-700)', marginBottom: '0.25rem' }}>
                        Recommended Eco-Friendly & Bio-Control Sprays:
                      </p>
                      {scanResult.organicTreatment.map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem' }}>
                          <CheckCircle2 size={16} color="var(--primary-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'chemical' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#c2410c', marginBottom: '0.25rem' }}>
                        Chemical Fungicides & Dosages:
                      </p>
                      {scanResult.chemicalTreatment.map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem' }}>
                          <Info size={16} color="#ea580c" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'prevention' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0284c7', marginBottom: '0.25rem' }}>
                        Long-Term Cultural & Soil Management Practices:
                      </p>
                      {scanResult.preventionTips.map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem' }}>
                          <CheckCircle2 size={16} color="#0284c7" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

            </div>
          ) : (
            <div className="card-glass" style={{ textAlign: 'center', padding: '4rem 2rem', color: 'var(--text-muted)' }}>
              <Leaf size={48} style={{ opacity: 0.3, margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>No Leaf Image Analyzed Yet</h3>
              <p style={{ fontSize: '0.875rem', marginTop: '0.4rem', maxWidth: '360px', margin: '0.4rem auto 0' }}>
                Select a crop from the demo gallery or upload a leaf photo to trigger instant AI Plant Identification & Disease Scanning.
              </p>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
