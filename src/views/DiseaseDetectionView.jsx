import React, { useState } from 'react';
import { Upload, Camera, Leaf, CheckCircle2, ShieldAlert, Sparkles, RefreshCw, AlertCircle, Check } from 'lucide-react';
import { SAMPLE_DISEASE_GALLERY } from '../data/diseaseData';
import { diseaseService } from '../services/diseaseService';
import { CROP_LIST } from '../data/cropsData';

export default function DiseaseDetectionView({ onSaveScanToHistory, selectedLanguage = 'en' }) {
  const isTa = selectedLanguage === 'ta';
  const [selectedSample, setSelectedSample] = useState(null);
  const [customImage, setCustomImage] = useState(null);
  const [selectedCropTarget, setSelectedCropTarget] = useState('paddy');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [activeTab, setActiveTab] = useState('organic');

  const handleSelectSample = (sample) => {
    setSelectedSample(sample);
    setCustomImage(null);
    const cropId = sample.id.replace('sample-', '');
    setSelectedCropTarget(cropId);
    startDiagnosis(sample.id, cropId);
  };

  const handleCropTargetChange = (cropId) => {
    setSelectedCropTarget(cropId);
    const input = customImage || (selectedSample ? selectedSample.id : null);
    if (input) {
      startDiagnosis(input, cropId);
    }
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

    diseaseService.diagnoseLeafImage(inputSource, cropTarget).then(res => {
      setScanResult(res);
      setIsScanning(false);
      if (onSaveScanToHistory) {
        onSaveScanToHistory(res);
      }
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Header */}
      <div>
        <div className="badge badge-green" style={{ marginBottom: '0.35rem' }}>
          <Sparkles size={12} /> {isTa ? 'நரம்பியல் பார்வை நுண்ணறிவு' : 'Neural Vision Diagnosis Engine'}
        </div>
        <h2 style={{ fontSize: '1.65rem', fontWeight: 800 }}>
          {isTa ? '🐛 AI பயிர் நோய் கண்டறிதல் & சிகிச்சை முறை' : '🐛 AI Crop Disease Detection & Remedies'}
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          {isTa ? 'இலை புகைப்படத்தைப் பதிவேற்றி நோய்க்கிருமிகள், இயற்கை மற்றும் ரசாயன மருந்துகளை உடனடியாகப் பெறுங்கள்.' : 'Upload or capture a leaf photo to identify pathogens and get instant organic & chemical treatment plans.'}
        </p>
      </div>

      {/* Main Grid: Upload on Left, Results on Right */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '1.5rem' }}>
        
        {/* Left Column: Upload & Sample Selection */}
        <div className="card-saas" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Crop Selector Bar */}
          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
              {isTa ? 'பயிர் வகையைத் தேர்ந்தெடுக்கவும்' : 'Select Target Crop Species'}
            </label>
            <select 
              value={selectedCropTarget} 
              onChange={(e) => handleCropTargetChange(e.target.value)}
              className="select-clean"
              style={{ width: '100%' }}
            >
              {(CROP_LIST || []).map(c => (
                <option key={c.id} value={c.id}>{c.icon} {c.name}</option>
              ))}
            </select>
          </div>

          {/* Clean Drag & Drop Upload Zone */}
          <div style={{
            border: '2px dashed var(--primary-300)',
            borderRadius: 'var(--radius-md)',
            background: 'var(--bg-slate)',
            padding: '2rem 1.5rem',
            textAlign: 'center',
            cursor: 'pointer',
            position: 'relative'
          }}>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleFileUpload}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0,
                cursor: 'pointer'
              }}
            />

            {customImage ? (
              <div>
                <img 
                  src={customImage} 
                  alt="Custom Leaf" 
                  style={{ maxHeight: '180px', borderRadius: 'var(--radius-sm)', objectFit: 'contain', margin: '0 auto' }} 
                />
                <p style={{ fontSize: '0.75rem', color: 'var(--primary-600)', marginTop: '0.5rem', fontWeight: 600 }}>
                  ✓ {isTa ? 'புகைப்படம் பதிவேற்றப்பட்டது' : 'Leaf photo uploaded successfully'}
                </p>
              </div>
            ) : selectedSample ? (
              <div>
                <img 
                  src={selectedSample.image} 
                  alt={selectedSample.title} 
                  style={{ maxHeight: '180px', borderRadius: 'var(--radius-sm)', objectFit: 'cover', margin: '0 auto' }} 
                />
                <p style={{ fontSize: '0.8rem', fontWeight: 700, marginTop: '0.5rem' }}>{selectedSample.title}</p>
              </div>
            ) : (
              <div>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary-50)', color: 'var(--primary-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem' }}>
                  <Upload size={24} />
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>
                  {isTa ? 'இலை புகைப்படத்தைப் பதிவேற்றவும்' : 'Upload Leaf Photo'}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  {isTa ? 'படத்தை இங்கே இழுத்துப் போடவும் அல்லது கிளிக் செய்யவும்' : 'Drag and drop image here or browse files'}
                </div>
              </div>
            )}
          </div>

          {/* Quick Demo Sample Gallery */}
          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
              {isTa ? 'அல்லது மாதிரி இலைகளை சோதிக்கவும்' : 'Or Test with Sample Diagnoses'}
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
              {(SAMPLE_DISEASE_GALLERY || []).slice(0, 4).map((sample) => (
                <button
                  key={sample.id}
                  onClick={() => handleSelectSample(sample)}
                  style={{
                    border: selectedSample?.id === sample.id ? '2px solid var(--primary-600)' : '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.35rem',
                    background: 'var(--bg-main)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}
                >
                  <img src={sample.image} alt={sample.title} style={{ width: '100%', height: '48px', objectFit: 'cover', borderRadius: '4px' }} />
                  <span style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--text-main)', textAlign: 'center', lineHeight: 1.1 }}>
                    {sample.title.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Diagnostic Results Card */}
        <div className="card-saas" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          {isScanning ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '320px', gap: '1rem' }}>
              <RefreshCw className="animate-spin" size={32} color="var(--primary-600)" />
              <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-main)' }}>
                {isTa ? 'நரம்பியல் ஸ்கேன் ஆய்வு செய்கிறது...' : 'Neural Network Analyzing Leaf Pathogens...'}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {isTa ? 'துல்லியமான சிகிச்சை பரிந்துரைகள் கணக்கிடப்படுகின்றன' : 'Matching visual lesions against 15+ crop pathology models'}
              </div>
            </div>
          ) : scanResult ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              {/* Header: Plant & Disease Name */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.85rem' }}>
                <div>
                  <span className="badge badge-green" style={{ marginBottom: '0.25rem' }}>
                    {scanResult.cropName ? scanResult.cropName.toUpperCase() : 'PADDY'}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary-800)', margin: 0 }}>
                    {scanResult.diseaseName}
                  </h3>
                </div>

                <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: 'var(--radius-sm)', padding: '0.4rem 0.75rem', textAlign: 'right' }}>
                  <span style={{ fontSize: '0.65rem', color: '#047857', fontWeight: 800, display: 'block', textTransform: 'uppercase' }}>Confidence</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#065F46' }}>{scanResult.confidence}%</span>
                </div>
              </div>

              {/* Symptoms List */}
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  {isTa ? 'அறிகுறிகள்' : 'Symptoms Observed'}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.5, background: 'var(--bg-slate)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                  {scanResult.symptoms}
                </div>
              </div>

              {/* Treatment Tabs (Organic vs Chemical) */}
              <div>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.65rem' }}>
                  <button
                    onClick={() => setActiveTab('organic')}
                    style={{
                      padding: '0.4rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      border: 'none',
                      background: activeTab === 'organic' ? 'var(--primary-600)' : 'var(--bg-slate)',
                      color: activeTab === 'organic' ? '#FFFFFF' : 'var(--text-body)',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      cursor: 'pointer'
                    }}
                  >
                    🌿 {isTa ? 'இயற்கை சிகிச்சை' : 'Organic Remedy'}
                  </button>

                  <button
                    onClick={() => setActiveTab('chemical')}
                    style={{
                      padding: '0.4rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      border: 'none',
                      background: activeTab === 'chemical' ? '#D97706' : 'var(--bg-slate)',
                      color: activeTab === 'chemical' ? '#FFFFFF' : 'var(--text-body)',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      cursor: 'pointer'
                    }}
                  >
                    🧪 {isTa ? 'ரசாயன சிகிச்சை' : 'Chemical Dosage'}
                  </button>
                </div>

                <div style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.5, background: 'var(--bg-slate)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', borderLeft: activeTab === 'organic' ? '4px solid var(--primary-600)' : '4px solid #D97706' }}>
                  {activeTab === 'organic' ? scanResult.organicTreatment : scanResult.chemicalTreatment}
                </div>
              </div>

              {/* Prevention Advisory */}
              {scanResult.prevention && (
                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.75rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    🛡️ {isTa ? 'தடுப்பு முறைகள்' : 'Prevention'}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-body)' }}>
                    {scanResult.prevention}
                  </div>
                </div>
              )}

            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '320px', textAlign: 'center', color: 'var(--text-muted)', gap: '0.75rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary-50)', color: 'var(--primary-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Leaf size={24} />
              </div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>
                {isTa ? 'முடிவுகள் இங்கே தோன்றும்' : 'Ready for Leaf Diagnosis'}
              </div>
              <div style={{ fontSize: '0.8rem', maxWidth: '280px' }}>
                {isTa ? 'இடதுபுறத்தில் புகைப்படத்தைப் பதிவேற்றவும் அல்லது மாதிரியைத் தேர்ந்தெடுக்கவும்.' : 'Upload a leaf photo or pick a sample leaf from the left gallery to initiate neural diagnosis.'}
              </div>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
