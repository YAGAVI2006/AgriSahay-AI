// Farmer Document Vault Service (Phase 2)

const VAULT_STORAGE_KEY = 'agrisahay_vault';

export const INITIAL_VAULT_DOCUMENTS = [
  {
    id: 'doc-1',
    title: 'Farmer Aadhaar Card',
    category: 'Identity Proof',
    fileName: 'Aadhaar_Shanmugam.pdf',
    fileSize: '1.2 MB',
    uploadedDate: '12 May 2026',
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  {
    id: 'doc-2',
    title: 'Land Ownership Chitta / Patta Record',
    category: 'Land Records',
    fileName: 'Karur_Patta_Mayanur_4.5Acre.pdf',
    fileSize: '2.4 MB',
    uploadedDate: '04 June 2026',
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  {
    id: 'doc-3',
    title: 'Soil Health Card (மண் வள அட்டை)',
    category: 'Soil Testing',
    fileName: 'SoilCard_Karur_KVK_2026.pdf',
    fileSize: '850 KB',
    uploadedDate: '18 June 2026',
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  {
    id: 'doc-4',
    title: 'PMFBY Crop Insurance Certificate',
    category: 'Crop Insurance',
    fileName: 'PMFBY_Kuruvai_Paddy_2026.pdf',
    fileSize: '1.8 MB',
    uploadedDate: '01 July 2026',
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  }
];

export const vaultService = {
  getDocuments: async () => {
    const saved = localStorage.getItem(VAULT_STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    localStorage.setItem(VAULT_STORAGE_KEY, JSON.stringify(INITIAL_VAULT_DOCUMENTS));
    return INITIAL_VAULT_DOCUMENTS;
  },

  uploadDocument: async (docData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const saved = localStorage.getItem(VAULT_STORAGE_KEY);
        const docs = saved ? JSON.parse(saved) : INITIAL_VAULT_DOCUMENTS;
        
        const newDoc = {
          id: 'doc-' + Date.now(),
          title: docData.title || 'Farmer Document',
          category: docData.category || 'General Document',
          fileName: docData.fileName || 'document.pdf',
          fileSize: docData.fileSize || '1.5 MB',
          uploadedDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
          fileUrl: docData.fileUrl || 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
        };

        const updated = [newDoc, ...docs];
        localStorage.setItem(VAULT_STORAGE_KEY, JSON.stringify(updated));
        resolve(newDoc);
      }, 500);
    });
  },

  deleteDocument: async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const saved = localStorage.getItem(VAULT_STORAGE_KEY);
        const docs = saved ? JSON.parse(saved) : INITIAL_VAULT_DOCUMENTS;
        const updated = docs.filter(d => d.id !== id);
        localStorage.setItem(VAULT_STORAGE_KEY, JSON.stringify(updated));
        resolve(updated);
      }, 300);
    });
  }
};
