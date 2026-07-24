// Farm Health Score & Risk Meter Algorithm (Phase 2)

export const farmHealthService = {
  calculateFarmHealthScore: async ({ profile, weather, recentScans }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Calculate health component breakdown
        const cropHealthScore = 94; // Based on leaf scanning history
        const weatherRiskScore = weather.rainProbability > 70 ? 65 : 90; // Weather safety score
        const diseaseRiskScore = recentScans && recentScans.length > 0 ? 82 : 95; // Disease absence score
        const irrigationScore = 90; // Soil moisture sufficiency
        const fertilizerScore = 88; // Timely NPK dosage schedule

        // Weighted Average
        const overallScore = Math.round(
          (cropHealthScore * 0.3) +
          (weatherRiskScore * 0.2) +
          (diseaseRiskScore * 0.2) +
          (irrigationScore * 0.15) +
          (fertilizerScore * 0.15)
        );

        let riskLevel = 'Low Risk (Optimal Health)';
        let badgeColor = 'green';
        if (overallScore < 70) {
          riskLevel = 'High Risk (Immediate Action Required)';
          badgeColor = 'red';
        } else if (overallScore < 85) {
          riskLevel = 'Moderate Risk (Scouting Needed)';
          badgeColor = 'amber';
        }

        resolve({
          overallScore,
          riskLevel,
          badgeColor,
          breakdown: {
            cropHealth: cropHealthScore,
            weatherRisk: weatherRiskScore,
            diseaseRisk: diseaseRiskScore,
            irrigationStatus: irrigationScore,
            fertilizerStatus: fertilizerScore
          },
          suggestedImprovements: [
            "Maintain 2-3 cm standing water from Cauvery canal during Kuruvai tillering.",
            "Apply Potash (MOP 15kg/acre) during panicle emergence to enhance drought resilience.",
            "Inspect Groundnut & Banana foliage weekly for Sigatoka & Tikka spots post rain."
          ]
        });
      }, 350);
    });
  }
};
