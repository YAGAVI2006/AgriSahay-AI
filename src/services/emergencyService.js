// Emergency Agriculture Support Service (Phase 3)

export const emergencyService = {
  getEmergencyData: async (location) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const district = location.district || 'Karur';

        resolve({
          kisanHelpline: '1800-180-1551 (Toll-Free Kisan Call Center)',
          agriOfficerContact: {
            name: 'Er. R. Arumugam (Block Agriculture Officer)',
            office: `${district} Block Agriculture Extension Office, Thanthoni`,
            phone: '+91 94432 18920',
            email: 'ao.karur@tn.gov.in'
          },
          nearbyVeterinaryHospital: {
            name: 'Government Veterinary Hospital & Animal Care',
            location: 'Kulithalai Main Road, Karur',
            phone: '+91 04324 256120'
          },
          nearbyGeneralHospital: {
            name: 'Karur Government Medical College & Hospital',
            location: 'Gandhigramam, Karur',
            phone: '108 / +91 04324 220018'
          },
          emergencyWeatherAlerts: [
            {
              id: 'em-1',
              title: '⛈️ Sudden Thundershower & Squall Advisory',
              message: 'Thunderstorm with wind speed reaching 45 km/h expected in Cauvery basin in next 18 hours. Provide immediate bamboo prop support for young Banana trees and secure pesticide spray equipment.'
            }
          ]
        });
      }, 350);
    });
  }
};
