import React, { useState, useEffect } from 'react';
import { Search, X, ChevronRight, Leaf, Landmark, TrendingUp, CalendarDays, FileText } from 'lucide-react';
import { searchService } from '../services/searchService';

export default function GlobalSearchModal({ isOpen, onClose, onNavigate }) {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    setLoading(true);
    const timer = setTimeout(() => {
      searchService.searchAll(query).then(res => {
        setResults(res);
        setLoading(false);
      });
    }, 250);
    return () => clearTimeout(timer);
  }, [query]);

  const handleSelectResult = (item) => {
    onNavigate(item.view);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ maxWidth: '650px', padding: '1.5rem' }}>
        
        {/* Search Header Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem', marginBottom: '1rem' }}>
          <Search size={22} color="var(--primary-600)" />
          <input 
            type="text"
            autoFocus
            placeholder="Search crops, diseases, government schemes, mandi prices, documents..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              border: 'none',
              background: 'transparent',
              fontSize: '1.05rem',
              fontWeight: 600,
              color: 'var(--text-main)',
              outline: 'none'
            }}
          />
          <button onClick={onClose} className="btn-outline" style={{ padding: '0.35rem', borderRadius: '50%' }}>
            <X size={18} />
          </button>
        </div>

        {/* Quick Suggestion Tags */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          {['Paddy', 'TNIAMP Scheme', 'Banana Disease', 'Karur Mandi', 'Soil Card'].map((tag, i) => (
            <button 
              key={i} 
              onClick={() => setQuery(tag)} 
              className="btn-outline"
              style={{ fontSize: '0.75rem', padding: '0.25rem 0.65rem', borderRadius: '9999px' }}
            >
              🔍 {tag}
            </button>
          ))}
        </div>

        {/* Results Stream */}
        <div style={{ maxHeight: '360px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {loading ? (
            <div style={{ padding: '1.5rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              Searching AgriSahay AI database...
            </div>
          ) : results.length > 0 ? (
            results.map((item) => (
              <div 
                key={item.id}
                onClick={() => handleSelectResult(item)}
                style={{
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  background: 'var(--bg-main)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ fontSize: '1.5rem' }}>{item.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '0.925rem', fontWeight: 700, color: 'var(--primary-800)' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>{item.description}</p>
                  </div>
                </div>

                <span className="badge badge-green" style={{ fontSize: '0.6875rem' }}>
                  {item.type} <ChevronRight size={12} />
                </span>
              </div>
            ))
          ) : query ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              No matching records found for "{query}". Try searching "Paddy", "Kuruvai", "PM-KISAN", or "Banana".
            </div>
          ) : (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              Start typing to search across all decision-support features.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
