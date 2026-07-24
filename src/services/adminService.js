// Admin & Agriculture Officer Control Panel Service (Phase 3)

export const adminService = {
  getAdminMetrics: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          totalFarmers: 1420,
          activeDailyUsers: 845,
          aiQueriesProcessed: 12450,
          diseaseScansResolved: 3120,
          totalSubsidiesDisbursed: '₹1.84 Crores',

          farmerUsersList: [
            { id: 'f-101', name: 'M. Shanmugam', village: 'Mayanur', district: 'Karur', land: '4.5 Acres', crop: 'Paddy & Kothamalli', status: 'Active (Verified)' },
            { id: 'f-102', name: 'S. Tamilselvi', village: 'Kulithalai', district: 'Karur', land: '6.0 Acres', crop: 'Banana & Sugarcane', status: 'Active (Verified)' },
            { id: 'f-103', name: 'K. Murugesan', village: 'Manmangalam', district: 'Karur', land: '3.0 Acres', crop: 'Groundnut', status: 'Active (Verified)' },
            { id: 'f-104', name: 'P. Arumugam', village: 'Aravakurichi', district: 'Karur', land: '8.5 Acres', crop: 'Cotton & Maize', status: 'Pending Verification' }
          ]
        });
      }, 400);
    });
  }
};
