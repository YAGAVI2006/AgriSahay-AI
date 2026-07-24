import React, { useState } from 'react';
import { X, Save, CheckCircle2 } from 'lucide-react';
import { STATES_AND_DISTRICTS, SOIL_TYPES, CROP_LIST, FARMER_CATEGORIES } from '../data/crops';

export default function ProfileModal({ isOpen, onClose, farmerProfile, onSaveProfile }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: farmerProfile.name || 'Rajesh Kumar',
    phone: farmerProfile.phone || '9876543210',
    village: farmerProfile.village || 'Rampur',
    state: farmerProfile.state || 'Punjab',
    district: farmerProfile.district || 'Ludhiana',
    landSizeAcres: farmerProfile.landSizeAcres || 4.5,
    soilType: farmerProfile.soilType || 'alluvial',
    primaryCrop: farmerProfile.primaryCrop || 'paddy',
    farmerCategory: farmerProfile.farmerCategory || 'small'
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const availableDistricts = STATES_AND_DISTRICTS[formData.state] || STATES_AND_DISTRICTS["Punjab"];

  const handleStateChange = (e) => {
    const newState = e.target.value;
    const districts = STATES_AND_DISTRICTS[newState] || [];
    setFormData({
      ...formData,
      state: newState,
      district: districts[0] || ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveProfile(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ fontSize: '1.75rem' }}>👨‍🌾</div>
            <div>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800 }}>Farmer Profile Settings</h2>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Personalize AI advisories, scheme recommendations & weather forecasts</p>
            </div>
          </div>
          <button onClick={onClose} className="btn-outline" style={{ padding: '0.4rem', borderRadius: '50%' }}>
            <X size={20} />
          </button>
        </div>

        {savedSuccess ? (
          <div style={{ textAlign: 'center', padding: '2.5rem 0' }}>
            <CheckCircle2 size={54} color="var(--primary-600)" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--primary-700)' }}>Profile Updated Successfully!</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Recalculating AI advisories and scheme recommendations...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* Name & Phone */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Farmer Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Mobile Number / Village</label>
                <input 
                  type="text" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                />
              </div>
            </div>

            {/* State & District */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>State</label>
                <select 
                  value={formData.state}
                  onChange={handleStateChange}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontWeight: 500 }}
                >
                  {Object.keys(STATES_AND_DISTRICTS).map(st => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>District</label>
                <select 
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontWeight: 500 }}
                >
                  {availableDistricts.map(dt => (
                    <option key={dt} value={dt}>{dt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Land Size & Category */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Land Holding Size (Acres)</label>
                <input 
                  type="number" 
                  step="0.1" 
                  min="0.1" 
                  max="100"
                  required
                  value={formData.landSizeAcres}
                  onChange={(e) => setFormData({ ...formData, landSizeAcres: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Farmer Category</label>
                <select 
                  value={formData.farmerCategory}
                  onChange={(e) => setFormData({ ...formData, farmerCategory: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontWeight: 500 }}
                >
                  {FARMER_CATEGORIES.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Primary Crop & Soil Type */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Primary Cultivated Crop</label>
                <select 
                  value={formData.primaryCrop}
                  onChange={(e) => setFormData({ ...formData, primaryCrop: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontWeight: 500 }}
                >
                  {CROP_LIST.map(cr => (
                    <option key={cr.id} value={cr.id}>{cr.icon} {cr.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Soil Type</label>
                <select 
                  value={formData.soilType}
                  onChange={(e) => setFormData({ ...formData, soilType: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontWeight: 500 }}
                >
                  {SOIL_TYPES.map(sl => (
                    <option key={sl.id} value={sl.id}>{sl.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Form Actions */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1rem', borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
              <button type="button" onClick={onClose} className="btn-outline">
                Cancel
              </button>
              <button type="submit" className="btn-primary">
                <Save size={18} /> Save & Apply
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
