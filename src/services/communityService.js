// Farmer Community Hub Service (Phase 3 Uzhavar Mandram)

const COMMUNITY_STORAGE_KEY = 'agrisahay_community';

export const INITIAL_POSTS = [
  {
    id: 'post-1',
    author: 'M. Palanisamy',
    village: 'Mayanur, Karur',
    category: 'Crops',
    cropTag: 'Coriander / Kothamalli',
    title: '35-day Coriander intercropping success in Sugarcane rows! 🌿',
    content: 'Harvested 380 kg of organic Kothamalli greens from sugarcane inter-spaces. Fetched ₹38/kg at Karur Uzhavar Sandhai! Highly recommend sprinkler irrigation for fast germination.',
    likes: 24,
    comments: [
      { id: 'c-1', author: 'K. Murugesan', text: 'Which coriander seed variety did you use brother?' },
      { id: 'c-2', author: 'M. Palanisamy', text: 'Local Karur split seeds treated with Trichoderma viride.' }
    ],
    timeAgo: '2 hours ago'
  },
  {
    id: 'post-2',
    author: 'S. Tamilselvi',
    village: 'Kulithalai, Karur',
    category: 'Government Schemes',
    cropTag: 'Drip Irrigation',
    title: 'Got 100% Drip Irrigation Subsidy approved via Uzhavan App! 🏛️',
    content: 'Applied for 4.5 acres drip system under PMKSY. Horticultural Officer visited within 5 days and subsidy of ₹42,000 sanctioned. Do submit your Chitta & Soil Card in Document Vault.',
    likes: 38,
    comments: [
      { id: 'c-3', author: 'R. Periasamy', text: 'How long did the approval process take sister?' },
      { id: 'c-4', author: 'S. Tamilselvi', text: 'Total 10 days from app submission to installation.' }
    ],
    timeAgo: '1 day ago'
  }
];

export const communityService = {
  getPosts: async () => {
    const saved = localStorage.getItem(COMMUNITY_STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    localStorage.setItem(COMMUNITY_STORAGE_KEY, JSON.stringify(INITIAL_POSTS));
    return INITIAL_POSTS;
  },

  createPost: async (postData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const saved = localStorage.getItem(COMMUNITY_STORAGE_KEY);
        const posts = saved ? JSON.parse(saved) : INITIAL_POSTS;

        const newPost = {
          id: 'post-' + Date.now(),
          author: postData.author || 'Shanmugam (Farmer)',
          village: postData.village || 'Mayanur, Karur',
          category: postData.category || 'Crops',
          cropTag: postData.cropTag || 'Paddy',
          title: postData.title,
          content: postData.content,
          likes: 0,
          comments: [],
          timeAgo: 'Just now'
        };

        const updated = [newPost, ...posts];
        localStorage.setItem(COMMUNITY_STORAGE_KEY, JSON.stringify(updated));
        resolve(newPost);
      }, 400);
    });
  },

  toggleLike: async (postId) => {
    return new Promise((resolve) => {
      const saved = localStorage.getItem(COMMUNITY_STORAGE_KEY);
      const posts = saved ? JSON.parse(saved) : INITIAL_POSTS;
      const updated = posts.map(p => {
        if (p.id === postId) {
          return { ...p, likes: p.likes + 1 };
        }
        return p;
      });
      localStorage.setItem(COMMUNITY_STORAGE_KEY, JSON.stringify(updated));
      resolve(updated);
    });
  }
};
