import React, { useState, useEffect } from 'react';
import { Landmark, CheckCircle2, FileText, ExternalLink, Filter, Sparkles, ChevronRight, Award, Info, X } from 'lucide-react';
import { GOVERNMENT_SCHEMES, recommendSchemes } from '../data/schemes';
import { CROP_LIST, FARMER_CATEGORIES, STATES_AND_DISTRICTS } from '../data/crops';

export default function SchemesView({ farmerProfile, onOpenProfile, selectedLanguage = 'en' }) {
  const isTa = selectedLanguage === 'ta';

  const [selectedState, setSelectedState] = useState(farmerProfile.state || 'Tamil Nadu');
  const [selectedCrop, setSelectedCrop] = useState(farmerProfile.primaryCrop || 'paddy');
  const [selectedCategory, setSelectedCategory] = useState(farmerProfile.farmerCategory || 'small');
  const [activeModalScheme, setActiveModalScheme] = useState(null);
  const [schemesList, setSchemesList] = useState([]);

  useEffect(() => {
    const matched = recommendSchemes({
      state: selectedState,
      crop: selectedCrop,
      landSizeAcres: farmerProfile.landSizeAcres || 4.5,
      category: selectedCategory
    });
    setSchemesList(matched);
  }, [selectedState, selectedCrop, selectedCategory, farmerProfile]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Header Title */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div className="badge badge-amber" style={{ marginBottom: '0.35rem' }}>
            <Sparkles size={12} /> {isTa ? 'AI பொருத்தும் இன்ஜின்' : 'AI Matching Engine'}
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>
            🏛 {isTa ? 'அரசு திட்டங்கள் & மானிய பரிந்துரைகள்' : 'Government Scheme Recommendations'}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            {isTa ? 'மாநிலம், பயிர், நில அளவு மற்றும் வகையின் அடிப்படையில் அதிகாரப்பூர்வ திட்டங்கள் பொருந்துகின்றன.' : 'AI matches official schemes based on your State, Crop, Land Holding & Category.'}
          </p>
        </div>

        {/* Farmer Profile Status Pill */}
        <div style={{ background: 'var(--primary-50)', border: '1px solid var(--primary-100)', borderRadius: 'var(--radius-md)', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div>
            <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', display: 'block' }}>{isTa ? 'பொருந்தும் சுயவிவரம்' : 'Matching Profile'}</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-800)' }}>
              {selectedState} | {farmerProfile.landSizeAcres || 4.5} Acres | {selectedCrop.toUpperCase()}
            </span>
          </div>
          <button onClick={onOpenProfile} className="btn-outline" style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}>
            {isTa ? 'மாற்று' : 'Change'}
          </button>
        </div>
      </div>

      {/* Filter Control Bar */}
      <div className="card-glass" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, fontSize: '0.9rem', color: 'var(--primary-700)' }}>
          <Filter size={18} /> {isTa ? 'திட்ட வடிகட்டிகள்:' : 'Scheme Filters:'}
        </div>

        <div>
          <select 
            value={selectedState} 
            onChange={(e) => setSelectedState(e.target.value)}
            style={{ padding: '0.45rem 0.75rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 600 }}
          >
            {Object.keys(STATES_AND_DISTRICTS).map(st => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>
        </div>

        <div>
          <select 
            value={selectedCrop} 
            onChange={(e) => setSelectedCrop(e.target.value)}
            style={{ padding: '0.45rem 0.75rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 600 }}
          >
            {CROP_LIST.map(cr => (
              <option key={cr.id} value={cr.id}>{cr.icon} {cr.name}</option>
            ))}
          </select>
        </div>

        <div>
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ padding: '0.45rem 0.75rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 600 }}
          >
            {FARMER_CATEGORIES.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Schemes Grid List */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '1.25rem' }}>
        {schemesList.map((scheme) => (
          <div key={scheme.id} className="card-glass" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              {/* Header Badges */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span className="badge badge-amber">{scheme.category}</span>
                <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>{scheme.level}</span>
              </div>

              {/* Title & Icon */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                  {scheme.icon || '🏛️'}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--primary-800)', lineHeight: 1.3 }}>
                    {scheme.title}
                  </h3>
                </div>
              </div>

              {/* Monetary Benefit Pill */}
              <div style={{ background: 'var(--primary-50)', border: '1px solid var(--primary-100)', borderRadius: '8px', padding: '0.65rem 0.85rem', marginBottom: '0.85rem' }}>
                <span style={{ fontSize: '0.725rem', color: 'var(--primary-700)', fontWeight: 700, display: 'block', textTransform: 'uppercase' }}>
                  {isTa ? 'நிதி உதவி / மானியம்' : 'Financial Benefit / Subsidy'}
                </span>
                <span style={{ fontWeight: 800, color: 'var(--primary-800)', fontSize: '0.95rem' }}>{scheme.monetaryBenefit}</span>
              </div>

              {/* Short Description */}
              <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', lineHeight: 1.4, marginBottom: '1rem' }}>
                {scheme.shortDesc}
              </p>
            </div>

            {/* Card Actions */}
            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.85rem', display: 'flex', gap: '0.5rem' }}>
              <button 
                onClick={() => setActiveModalScheme(scheme)}
                className="btn-primary"
                style={{ fontSize: '0.8rem', padding: '0.4rem 0.75rem', flex: 1, justifyContent: 'center' }}
              >
                {isTa ? 'தகுதி & படிகள்' : 'Eligibility & Steps'} <ChevronRight size={14} />
              </button>

              <a 
                href={scheme.officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
                style={{ fontSize: '0.8rem', padding: '0.4rem 0.75rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
              >
                {isTa ? 'விண்ணப்பிக்க' : 'Apply'} <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Scheme Detail Modal */}
      {activeModalScheme && (
        <div className="modal-overlay" onClick={() => setActiveModalScheme(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '2rem' }}>{activeModalScheme.icon || '🏛️'}</span>
                <div>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary-800)' }}>{activeModalScheme.title}</h2>
                  <span className="badge badge-amber">{activeModalScheme.category}</span>
                </div>
              </div>
              <button onClick={() => setActiveModalScheme(null)} className="btn-outline" style={{ padding: '0.4rem', borderRadius: '50%' }}>
                <X size={20} />
              </button>
            </div>

            {/* Financial Benefit Box */}
            <div style={{ background: 'linear-gradient(135deg, #059669 0%, #047857 100%)', color: '#ffffff', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.75rem', opacity: 0.9, display: 'block', textTransform: 'uppercase' }}>
                {isTa ? 'நிதி உதவி / மானியத் தொகை' : 'Financial Benefit / Grant Amount'}
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{activeModalScheme.monetaryBenefit}</h3>
            </div>

            {/* Eligibility Checklist */}
            <div style={{ marginBottom: '1.25rem' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="var(--primary-600)" /> {isTa ? 'தகுதி நிபந்தனைகள்' : 'Eligibility Criteria'}
              </h4>
              <ul style={{ listStyleType: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {activeModalScheme.eligibility.map((item, idx) => (
                  <li key={idx} style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--primary-600)', fontWeight: 800 }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents Checklist */}
            <div style={{ marginBottom: '1.25rem' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <FileText size={16} color="#d97706" /> {isTa ? 'தேவையான ஆவணங்கள்' : 'Required Documents Checklist'}
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                {activeModalScheme.documents.map((doc, idx) => (
                  <div key={idx} style={{ background: 'var(--bg-main)', border: '1px solid var(--border-light)', padding: '0.5rem 0.75rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 500 }}>
                    📄 {doc}
                  </div>
                ))}
              </div>
            </div>

            {/* Application Steps */}
            <div style={{ marginBottom: '1.25rem' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Award size={16} color="#0284c7" /> {isTa ? 'படி-படியான விண்ணப்ப முறை' : 'Step-by-Step Application Steps'}
              </h4>
              <ol style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem' }}>
                {activeModalScheme.applicationSteps.map((step, idx) => (
                  <li key={idx} style={{ lineHeight: 1.4 }}>{step}</li>
                ))}
              </ol>
            </div>

            {/* Official Portal Button */}
            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button onClick={() => setActiveModalScheme(null)} className="btn-outline">
                {isTa ? 'மூடு' : 'Close'}
              </button>
              <a 
                href={activeModalScheme.officialLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-accent"
                style={{ textDecoration: 'none' }}
              >
                {isTa ? 'அதிகாரப்பூர்வ தளத்தில் விண்ணப்பிக்க' : 'Apply on Official Portal'} <ExternalLink size={14} />
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
