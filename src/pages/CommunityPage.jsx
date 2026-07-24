import React, { useState, useEffect } from 'react';
import { Users, ThumbsUp, MessageSquare, Plus, Search, Filter, Sparkles, CheckCircle2 } from 'lucide-react';
import { communityService } from '../services/communityService';

export default function CommunityPage({ farmerProfile }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newCategory, setNewCategory] = useState('Crops');
  const [showNewPostForm, setShowNewPostForm] = useState(false);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = () => {
    setLoading(true);
    communityService.getPosts().then(res => {
      setPosts(res);
      setLoading(false);
    });
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    await communityService.createPost({
      author: farmerProfile.name || 'Shanmugam (Farmer)',
      village: `${farmerProfile.village || 'Mayanur'}, Karur`,
      category: newCategory,
      cropTag: farmerProfile.primaryCrop ? farmerProfile.primaryCrop.toUpperCase() : 'Paddy',
      title: newTitle,
      content: newContent
    });

    setNewTitle('');
    setNewContent('');
    setShowNewPostForm(false);
    loadPosts();
  };

  const handleLike = async (id) => {
    const updated = await communityService.toggleLike(id);
    setPosts(updated);
  };

  const categories = ['All', 'Crops', 'Diseases', 'Irrigation', 'Organic Farming', 'Government Schemes'];

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(p => p.category === selectedCategory);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div className="badge badge-green" style={{ marginBottom: '0.35rem' }}>
            <Users size={12} /> Farmer Collaboration Forum
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>👨‍🌾 Farmer Community Hub (உழவர் மன்றம்)</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Connect with Tamil Nadu farmers, ask questions, share organic experiences & discuss crop prices.
          </p>
        </div>

        <button onClick={() => setShowNewPostForm(!showNewPostForm)} className="btn-primary">
          <Plus size={16} /> Share Experience / Ask Question
        </button>
      </div>

      {/* Category Filter Pills */}
      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.25rem' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? 'btn-primary' : 'btn-outline'}
            style={{ fontSize: '0.8rem', padding: '0.35rem 0.85rem', borderRadius: '9999px', whiteSpace: 'nowrap' }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* New Post Form Drawer */}
      {showNewPostForm && (
        <form onSubmit={handleCreatePost} className="card-glass" style={{ background: 'var(--primary-50)', border: '1px solid var(--primary-300)', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary-900)' }}>Create Community Post</h3>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
            <input 
              type="text" 
              placeholder="Question or Experience Title (e.g. 35-day Coriander success)..." 
              value={newTitle} 
              onChange={(e) => setNewTitle(e.target.value)} 
              style={{ padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--border-light)', fontSize: '0.875rem' }} 
              required 
            />

            <select 
              value={newCategory} 
              onChange={(e) => setNewCategory(e.target.value)} 
              style={{ padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--border-light)', fontSize: '0.875rem', fontWeight: 600 }}
            >
              <option value="Crops">Crops & Greens</option>
              <option value="Diseases">Disease Control</option>
              <option value="Irrigation">Drip & Irrigation</option>
              <option value="Organic Farming">Organic Farming</option>
              <option value="Government Schemes">Government Schemes</option>
            </select>
          </div>

          <textarea 
            rows={3} 
            placeholder="Share detailed farming steps, seed treatment, or ask for advice..." 
            value={newContent} 
            onChange={(e) => setNewContent(e.target.value)} 
            style={{ padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--border-light)', fontSize: '0.875rem' }} 
            required 
          />

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
            <button type="button" onClick={() => setShowNewPostForm(false)} className="btn-outline">Cancel</button>
            <button type="submit" className="btn-primary">Post to Community</button>
          </div>
        </form>
      )}

      {/* Posts Stream */}
      {loading ? (
        <div className="card-glass" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: 'var(--text-muted)' }}>Loading farmer discussions & experiences...</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {filteredPosts.map((post) => (
            <div key={post.id} className="card-glass">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #059669 0%, #047857 100%)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>
                    👨‍🌾
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--primary-900)' }}>{post.author}</h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{post.village} • {post.timeAgo}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <span className="badge badge-green">{post.category}</span>
                  <span className="badge badge-amber">{post.cropTag}</span>
                </div>
              </div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                {post.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.5, marginBottom: '1rem' }}>
                {post.content}
              </p>

              {/* Comments Stream */}
              {post.comments && post.comments.length > 0 && (
                <div style={{ background: 'var(--bg-main)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-light)', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {post.comments.map(c => (
                    <div key={c.id} style={{ fontSize: '0.8rem', lineHeight: 1.4 }}>
                      <strong style={{ color: 'var(--primary-800)' }}>{c.author}:</strong> {c.text}
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.65rem', display: 'flex', gap: '1rem' }}>
                <button onClick={() => handleLike(post.id)} className="btn-outline" style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <ThumbsUp size={14} color="var(--primary-600)" /> Like ({post.likes})
                </button>

                <button className="btn-outline" style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <MessageSquare size={14} /> Comment ({post.comments?.length || 0})
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
