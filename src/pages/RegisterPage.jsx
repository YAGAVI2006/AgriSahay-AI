import React, { useState } from 'react';
import { Sprout, UserPlus, ArrowRight, Lock, Mail, Phone, MapPin } from 'lucide-react';
import { STATES_AND_DISTRICTS, KARUR_TALUKS, SOIL_TYPES, CROP_LIST, IRRIGATION_TYPES } from '../data/cropsData';
import { authService } from '../services/authService';

export default function RegisterPage({ onRegisterSuccess, onNavigateLogin }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    village: 'Mayanur',
    taluk: 'Kulithalai',
    state: 'Tamil Nadu',
    district: 'Karur',
    landSizeAcres: 4.5,
    soilType: 'red',
    irrigationType: 'canal',
    primaryCrop: 'paddy'
  });
  const [loading, setLoading] = useState(false);

  const availableDistricts = STATES_AND_DISTRICTS[formData.state] || STATES_AND_DISTRICTS["Tamil Nadu"];

  const handleStateChange = (e) => {
    const newState = e.target.value;
    const districts = STATES_AND_DISTRICTS[newState] || [];
    setFormData({ ...formData, state: newState, district: districts[0] || 'Karur' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await authService.register(formData);
      onRegisterSuccess(res.profile);
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, var(--primary-900) 0%, #065f46 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-xl)',
        width: '100%',
        maxWidth: '620px',
        padding: '2.5rem',
        animation: 'fadeIn 0.3s ease-out'
      }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <div style={{ width: '54px', height: '54px', borderRadius: '14px', background: 'var(--primary-600)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem', boxShadow: '0 4px 14px rgba(5, 150, 105, 0.4)' }}>
            <Sprout size={32} />
          </div>
          <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--primary-800)' }}>
            Karur Farmer Registration (கரூர் விவசாயி பதிவு)
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '2px' }}>
            Register to unlock AI crop disease diagnosis, Cauvery weather advisories & TN schemes
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
          
          {/* Farmer Name & Phone */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>Farmer Full Name (பெயர்)</label>
              <input 
                type="text" 
                required
                placeholder="e.g. Shanmugam Periasamy"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '0.875rem' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>Mobile Number (கைபேசி)</label>
              <input 
                type="tel" 
                required
                placeholder="9443210987"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '0.875rem' }}
              />
            </div>
          </div>

          {/* Email & Password */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>Email Address</label>
              <input 
                type="email" 
                required
                placeholder="farmer@agrisahay.in"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '0.875rem' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>Password</label>
              <input 
                type="password" 
                required
                placeholder="At least 6 characters"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '0.875rem' }}
              />
            </div>
          </div>

          {/* State & District */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>State (மாநிலம்)</label>
              <select 
                value={formData.state}
                onChange={handleStateChange}
                style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '0.875rem', fontWeight: 600 }}
              >
                {Object.keys(STATES_AND_DISTRICTS).map(st => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>District (மாவட்டம்)</label>
              <select 
                value={formData.district}
                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '0.875rem', fontWeight: 600 }}
              >
                {availableDistricts.map(dt => (
                  <option key={dt} value={dt}>{dt}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Taluk & Village */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>Taluk (வட்டம்)</label>
              <select 
                value={formData.taluk}
                onChange={(e) => setFormData({ ...formData, taluk: e.target.value })}
                style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '0.875rem', fontWeight: 600 }}
              >
                {KARUR_TALUKS.map(tk => (
                  <option key={tk} value={tk}>{tk}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>Village (கிராமம்)</label>
              <input 
                type="text" 
                required
                placeholder="e.g. Mayanur / Vengamedu"
                value={formData.village}
                onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '0.875rem' }}
              />
            </div>
          </div>

          {/* Land Size, Soil Type & Crop */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>Land Size (Acres)</label>
              <input 
                type="number" 
                step="0.1" 
                min="0.1"
                required
                value={formData.landSizeAcres}
                onChange={(e) => setFormData({ ...formData, landSizeAcres: e.target.value })}
                style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '0.875rem' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>Soil Type (மண்)</label>
              <select 
                value={formData.soilType}
                onChange={(e) => setFormData({ ...formData, soilType: e.target.value })}
                style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 500 }}
              >
                {SOIL_TYPES.map(sl => (
                  <option key={sl.id} value={sl.id}>{sl.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>Primary Crop (பயிர்)</label>
              <select 
                value={formData.primaryCrop}
                onChange={(e) => setFormData({ ...formData, primaryCrop: e.target.value })}
                style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 500 }}
              >
                {CROP_LIST.map(cr => (
                  <option key={cr.id} value={cr.id}>{cr.icon} {cr.name}</option>
                ))}
              </select>
            </div>
          </div>

          <button 
            type="submit" 
            className="btn-primary" 
            disabled={loading}
            style={{ padding: '0.85rem', borderRadius: '10px', fontSize: '1rem', marginTop: '0.5rem' }}
          >
            {loading ? 'Registering Account...' : 'Complete Registration'} <UserPlus size={18} />
          </button>
        </form>

        <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Already have an account?{' '}
          <span onClick={onNavigateLogin} style={{ color: 'var(--primary-700)', fontWeight: 700, cursor: 'pointer' }}>
            Sign In Here
          </span>
        </div>

      </div>
    </div>
  );
}
