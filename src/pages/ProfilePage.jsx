import React, { useState } from 'react';
import { User, Save, CheckCircle2, Camera, MapPin, Phone, Mail, Layers, Droplets, Sprout, Landmark } from 'lucide-react';
import { STATES_AND_DISTRICTS, KARUR_TALUKS, SOIL_TYPES, CROP_LIST, IRRIGATION_TYPES, FARMER_CATEGORIES } from '../data/cropsData';
import { authService } from '../services/authService';

export default function ProfilePage({ farmerProfile, onUpdateProfile }) {
  const [formData, setFormData] = useState({
    name: farmerProfile.name || 'Shanmugam Periasamy',
    email: farmerProfile.email || 'shanmugam@agrisahay.in',
    phone: farmerProfile.phone || '9443210987',
    village: farmerProfile.village || 'Mayanur',
    taluk: farmerProfile.taluk || 'Kulithalai',
    state: farmerProfile.state || 'Tamil Nadu',
    district: farmerProfile.district || 'Karur',
    landSizeAcres: farmerProfile.landSizeAcres || 4.5,
    soilType: farmerProfile.soilType || 'red',
    primaryCrop: farmerProfile.primaryCrop || 'paddy',
    irrigationType: farmerProfile.irrigationType || 'canal',
    farmerCategory: farmerProfile.farmerCategory || 'small',
    avatarUrl: farmerProfile.avatarUrl || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  });

  const [savedMessage, setSavedMessage] = useState(false);

  const availableDistricts = STATES_AND_DISTRICTS[formData.state] || STATES_AND_DISTRICTS["Tamil Nadu"];

  const handleStateChange = (e) => {
    const newState = e.target.value;
    const districts = STATES_AND_DISTRICTS[newState] || [];
    setFormData({ ...formData, state: newState, district: districts[0] || 'Karur' });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvt) => {
        setFormData({ ...formData, avatarUrl: uploadEvt.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updated = await authService.updateProfile(formData);
    onUpdateProfile(updated);
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 2500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Header Title */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="badge badge-green" style={{ marginBottom: '0.35rem' }}>
            <User size={12} /> Farmer Management
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>👤 Karur Farmer Profile & Farm Settings</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Manage personal details, crop parameters, soil classification & irrigation setup for Karur district.
          </p>
        </div>

        {savedMessage && (
          <div style={{ background: '#d1fae5', border: '1px solid #a7f3d0', color: '#065f46', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <CheckCircle2 size={16} /> Profile Saved & Applied!
          </div>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.5fr', gap: '1.75rem' }}>
        
        {/* Left Column: Avatar Card & Summary */}
        <div className="card-glass" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: '2rem 1.5rem' }}>
          
          {/* Avatar Image Upload Container */}
          <div style={{ position: 'relative', width: '110px', height: '110px', borderRadius: '50%', border: '4px solid var(--primary-500)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <img src={formData.avatarUrl} alt={formData.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <label 
              htmlFor="avatar-upload" 
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'rgba(0,0,0,0.6)',
                color: '#ffffff',
                padding: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              title="Change Profile Photo"
            >
              <Camera size={16} />
            </label>
            <input id="avatar-upload" type="file" accept="image/*" onChange={handleAvatarChange} style={{ display: 'none' }} />
          </div>

          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-800)' }}>{formData.name}</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{formData.village}, {formData.taluk} Taluk</p>
            <span className="badge badge-amber" style={{ marginTop: '0.5rem' }}>{formData.district}, {formData.state}</span>
          </div>

          <div style={{ width: '100%', borderTop: '1px solid var(--border-light)', paddingTop: '1rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', textAlign: 'left', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
              <Phone size={15} color="var(--primary-600)" />
              <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{formData.phone}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
              <Mail size={15} color="var(--primary-600)" />
              <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{formData.email}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
              <MapPin size={15} color="var(--primary-600)" />
              <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{formData.district}, {formData.state}</span>
            </div>
          </div>

        </div>

        {/* Right Column: Edit Profile Form */}
        <div className="card-glass">
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', marginBottom: '0.25rem' }}>
              Edit Farmer Profile & Land Parameters
            </h3>

            {/* Farmer Name & Mobile */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Farmer Full Name (பெயர்)</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Mobile Number (கைபேசி)</label>
                <input 
                  type="text" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                />
              </div>
            </div>

            {/* Email & Village */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Village (கிராமம்)</label>
                <input 
                  type="text" 
                  required
                  value={formData.village}
                  onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                />
              </div>
            </div>

            {/* State, District & Taluk */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>State (மாநிலம்)</label>
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
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>District (மாவட்டம்)</label>
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

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Taluk (வட்டம்)</label>
                <select 
                  value={formData.taluk}
                  onChange={(e) => setFormData({ ...formData, taluk: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontWeight: 500 }}
                >
                  {KARUR_TALUKS.map(tk => (
                    <option key={tk} value={tk}>{tk}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Land Size & Soil Type */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Land Size (Acres)</label>
                <input 
                  type="number" 
                  step="0.1" 
                  min="0.1"
                  required
                  value={formData.landSizeAcres}
                  onChange={(e) => setFormData({ ...formData, landSizeAcres: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Soil Type (மண் வகை)</label>
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

            {/* Primary Crop & Irrigation Type */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Primary Cultivated Crop (பயிர்)</label>
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
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Irrigation Type (பாசனம்)</label>
                <select 
                  value={formData.irrigationType}
                  onChange={(e) => setFormData({ ...formData, irrigationType: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontWeight: 500 }}
                >
                  {IRRIGATION_TYPES.map(irg => (
                    <option key={irg.id} value={irg.id}>{irg.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Form Actions */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--border-light)', paddingTop: '1rem', marginTop: '0.5rem' }}>
              <button type="submit" className="btn-primary" style={{ padding: '0.75rem 1.5rem', borderRadius: '10px' }}>
                <Save size={18} /> Save Profile Details
              </button>
            </div>

          </form>
        </div>

      </div>

    </div>
  );
}
