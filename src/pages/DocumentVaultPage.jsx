import React, { useState, useEffect } from 'react';
import { FileText, Upload, Trash2, Eye, Download, Plus, CheckCircle2, ShieldCheck, X } from 'lucide-react';
import { vaultService } from '../services/vaultService';

export default function DocumentVaultPage() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [previewDoc, setPreviewDoc] = useState(null);
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadCategory, setUploadCategory] = useState('Land Records');
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    loadDocs();
  }, []);

  const loadDocs = () => {
    setLoading(true);
    vaultService.getDocuments().then(res => {
      setDocuments(res);
      setLoading(false);
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    setTimeout(async () => {
      await vaultService.uploadDocument({
        title: uploadTitle || file.name.split('.')[0],
        category: uploadCategory,
        fileName: file.name,
        fileSize: (file.size / 1024 / 1024).toFixed(1) + ' MB',
        fileUrl: URL.createObjectURL(file)
      });
      setUploadTitle('');
      setIsUploading(false);
      loadDocs();
    }, 600);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this document from your vault?')) {
      const updated = await vaultService.deleteDocument(id);
      setDocuments(updated);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="badge badge-amber" style={{ marginBottom: '0.35rem' }}>
            <ShieldCheck size={12} /> Encrypted Digital Vault
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>📄 Farmer Document Vault</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Securely store & access Aadhaar, Chitta/Patta land records, Soil Health Cards & PMFBY insurance policies.
          </p>
        </div>
      </div>

      {/* Upload New Document Card */}
      <div className="card-glass" style={{ background: 'var(--primary-50)', border: '1px dashed var(--primary-400)' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Upload size={18} color="var(--primary-600)" /> Upload New Document
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '1rem', alignItems: 'center' }}>
          <input 
            type="text"
            placeholder="Document Name (e.g., Patta Land Extract 2026)..."
            value={uploadTitle}
            onChange={(e) => setUploadTitle(e.target.value)}
            style={{ padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: '#ffffff', color: 'var(--text-main)', fontSize: '0.875rem' }}
          />

          <select 
            value={uploadCategory}
            onChange={(e) => setUploadCategory(e.target.value)}
            style={{ padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: '#ffffff', color: 'var(--text-main)', fontSize: '0.875rem', fontWeight: 600 }}
          >
            <option value="Land Records">Land Records (Chitta / Patta)</option>
            <option value="Identity Proof">Identity Proof (Aadhaar / Voter)</option>
            <option value="Soil Testing">Soil Health Card</option>
            <option value="Crop Insurance">Crop Insurance Policy</option>
            <option value="Bank Details">Bank Passbook Copy</option>
          </select>

          <label className="btn-primary" style={{ padding: '0.65rem 1rem', borderRadius: '8px', cursor: 'pointer', textAlign: 'center' }}>
            {isUploading ? 'Uploading...' : 'Choose File (PDF/JPG)'}
            <input type="file" accept=".pdf,image/*" onChange={handleFileUpload} style={{ display: 'none' }} />
          </label>
        </div>
      </div>

      {/* Document Grid Stream */}
      {loading ? (
        <div className="card-glass" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: 'var(--text-muted)' }}>Decrypting document vault...</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
          {documents.map((doc) => (
            <div key={doc.id} className="card-glass" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="badge badge-amber">{doc.category}</span>
                  <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>{doc.uploadedDate}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#fee2e2', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <FileText size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--primary-900)' }}>{doc.title}</h4>
                    <p style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>{doc.fileName} ({doc.fileSize})</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
                <button 
                  onClick={() => setPreviewDoc(doc)}
                  className="btn-secondary"
                  style={{ fontSize: '0.8rem', padding: '0.35rem 0.65rem' }}
                >
                  <Eye size={14} /> Preview
                </button>

                <a 
                  href={doc.fileUrl} 
                  download={doc.fileName} 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-outline"
                  style={{ fontSize: '0.8rem', padding: '0.35rem 0.65rem', textDecoration: 'none' }}
                >
                  <Download size={14} /> Download
                </a>

                <button 
                  onClick={() => handleDelete(doc.id)}
                  className="btn-outline"
                  style={{ fontSize: '0.8rem', padding: '0.35rem 0.65rem', color: '#dc2626', borderColor: '#fca5a5' }}
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Preview Modal */}
      {previewDoc && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: '650px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>{previewDoc.title}</h3>
                <span className="badge badge-amber">{previewDoc.category}</span>
              </div>
              <button onClick={() => setPreviewDoc(null)} className="btn-outline" style={{ padding: '0.35rem', borderRadius: '50%' }}>
                <X size={18} />
              </button>
            </div>

            <div style={{ height: '350px', background: 'var(--bg-main)', borderRadius: '8px', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
              <FileText size={56} color="var(--primary-600)" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{previewDoc.fileName}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.5rem 0 1.5rem' }}>
                Securely encrypted & verified in Farmer Vault.
              </p>
              <a 
                href={previewDoc.fileUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-primary"
              >
                Open Full Document PDF <Download size={16} />
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
