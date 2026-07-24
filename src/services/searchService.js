// Global Search Index Service (Phase 2)

import { CROP_LIST } from '../data/cropsData';
import { SAMPLE_DISEASE_GALLERY } from '../data/diseaseData';
import { GOVERNMENT_SCHEMES } from '../data/schemes';

export const searchService = {
  searchAll: async (query) => {
    return new Promise((resolve) => {
      if (!query || !query.trim()) {
        resolve([]);
        return;
      }

      const q = query.toLowerCase().trim();
      const results = [];

      // Search Crops
      CROP_LIST.forEach(crop => {
        if (crop.name.toLowerCase().includes(q) || crop.season.toLowerCase().includes(q)) {
          results.push({
            id: 'crop-' + crop.id,
            title: crop.name,
            type: 'Crop Recommendation',
            view: 'recommend',
            icon: crop.icon,
            description: `${crop.season} crop season • ${crop.durationDays} days duration`
          });
        }
      });

      // Search Diseases
      SAMPLE_DISEASE_GALLERY.forEach(dis => {
        if (dis.diseaseName.toLowerCase().includes(q) || dis.cropName.toLowerCase().includes(q) || dis.scientificName.toLowerCase().includes(q)) {
          results.push({
            id: 'dis-' + dis.id,
            title: `${dis.cropName} - ${dis.diseaseName}`,
            type: 'Crop Disease Scan',
            view: 'disease',
            icon: '🌿',
            description: `Scientific: ${dis.scientificName} • Severity: ${dis.severity}`
          });
        }
      });

      // Search Government Schemes
      GOVERNMENT_SCHEMES.forEach(sch => {
        if (sch.title.toLowerCase().includes(q) || sch.category.toLowerCase().includes(q) || sch.shortDesc.toLowerCase().includes(q)) {
          results.push({
            id: 'sch-' + sch.id,
            title: sch.title,
            type: 'Government Scheme',
            view: 'schemes',
            icon: sch.icon,
            description: `${sch.category} • ${sch.monetaryBenefit}`
          });
        }
      });

      // Search Mandi Markets
      if ('mandi market prices karur trichy kulithalai'.includes(q)) {
        results.push({
          id: 'market-1',
          title: 'Karur Regulated Agriculture Mandi Market',
          type: 'Market Intelligence',
          view: 'market',
          icon: '📈',
          description: 'Paddy @ ₹2,280/Qtl, Groundnut @ ₹6,850/Qtl (Trend: UP +6.2%)'
        });
      }

      resolve(results);
    });
  }
};
