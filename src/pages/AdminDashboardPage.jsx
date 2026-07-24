import React, { useState, useEffect } from 'react';
import { Users, Cpu, ShieldCheck, CheckCircle2, UserCheck, AlertTriangle, Layers, Building2 } from 'lucide-react';
import { adminService } from '../services/adminService';

export default function AdminDashboardPage({ activeRole, setActiveRole }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    adminService.getAdminMetrics().then(res => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Header & RBAC Role Switcher */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div className="badge badge-amber" style={{ marginBottom: '0.35rem' }}>
            <ShieldCheck size={12} /> Role-Based Access Control (RBAC System)
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>🏛 Admin & Agriculture Officer Control Panel</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Manage registered farmers, verify Chitta land records, review disease outbreak reports & sanction subsidies.
          </p>
        </div>

        {/* Role Switcher Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-main)', border: '1px solid var(--border-light)', padding: '0.35rem 0.5rem', borderRadius: '9999px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', paddingLeft: '0.5rem' }}>Current Role:</span>
          
          <button 
            onClick={() => setActiveRole('farmer')} 
            className={activeRole === 'farmer' ? 'btn-primary' : 'btn-outline'}
            style={{ fontSize: '0.75rem', padding: '0.25rem 0.65rem', borderRadius: '9999px' }}
          >
            👨‍🌾 Farmer
          </button>

          <button 
            onClick={() => setActiveRole('officer')} 
            className={activeRole === 'officer' ? 'btn-primary' : 'btn-outline'}
            style={{ fontSize: '0.75rem', padding: '0.25rem 0.65rem', borderRadius: '9999px' }}
          >
            🏛 Ag Officer
          </button>

          <button 
            onClick={() => setActiveRole('admin')} 
            className={activeRole === 'admin' ? 'btn-primary' : 'btn-outline'}
            style={{ fontSize: '0.75rem', padding: '0.25rem 0.65rem', borderRadius: '9999px' }}
          >
            ⚙️ Admin
          </button>
        </div>
      </div>

      {loading ? (
        <div className="card-glass" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: 'var(--text-muted)' }}>Loading administrator metrics & farmer user directory...</p>
        </div>
      ) : (
        <>
          {/* Main Key System Metrics Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            
            <div className="card-glass">
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Total Registered Farmers</span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary-800)', marginTop: '2px' }}>
                {data.totalFarmers.toLocaleString('en-IN')}
              </h3>
              <p style={{ fontSize: '0.725rem', color: '#059669' }}>100% Karur Verified</p>
            </div>

            <div className="card-glass">
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Active Daily Users</span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0284c7', marginTop: '2px' }}>
                {data.activeDailyUsers}
              </h3>
              <p style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>59.5% Engagement</p>
            </div>

            <div className="card-glass">
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>AI Queries Processed</span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#7e22ce', marginTop: '2px' }}>
                {data.aiQueriesProcessed.toLocaleString('en-IN')}
              </h3>
              <p style={{ fontSize: '0.725rem', color: '#7e22ce' }}>AgriBot Q&A Stream</p>
            </div>

            <div className="card-glass">
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Subsidies Disbursed</span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#d97706', marginTop: '2px' }}>
                {data.totalSubsidiesDisbursed}
              </h3>
              <p style={{ fontSize: '0.725rem', color: '#d97706' }}>TNIAMP & PMKSY Drip</p>
            </div>

          </div>

          {/* Registered Farmers Database Directory Table */}
          <div className="card-glass">
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Users size={18} color="var(--primary-600)" /> Registered Farmers Directory (Karur District)
            </h3>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-main)', borderBottom: '2px solid var(--border-light)', textAlign: 'left' }}>
                    <th style={{ padding: '0.75rem 1rem' }}>Farmer ID & Name</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Village & District</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Land Holding</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Primary Crop</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.farmerUsersList.map((user) => (
                    <tr key={user.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '0.75rem 1rem', fontWeight: 700 }}>{user.name} <span style={{ opacity: 0.5, fontSize: '0.75rem' }}>({user.id})</span></td>
                      <td style={{ padding: '0.75rem 1rem' }}>{user.village}, {user.district}</td>
                      <td style={{ padding: '0.75rem 1rem' }}>{user.land}</td>
                      <td style={{ padding: '0.75rem 1rem', color: 'var(--primary-800)', fontWeight: 600 }}>{user.crop}</td>
                      <td style={{ padding: '0.75rem 1rem' }}><span className="badge badge-green">{user.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

    </div>
  );
}
