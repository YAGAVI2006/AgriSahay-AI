package com.agrisahay.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "recommendations")
public class Recommendation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String district;
    private String soilType;
    private String season;
    private String recommendedCrop;
    private Double suitabilityScore;
    private String expectedYield;
    private String waterRequirement;
    private String estimatedRevenue;

    @Column(length = 2000)
    private String reason;

    private LocalDateTime createdAt = LocalDateTime.now();

    public Recommendation() {}

    public Recommendation(String district, String soilType, String season, String recommendedCrop, Double suitabilityScore, String expectedYield, String waterRequirement, String estimatedRevenue, String reason) {
        this.district = district;
        this.soilType = soilType;
        this.season = season;
        this.recommendedCrop = recommendedCrop;
        this.suitabilityScore = suitabilityScore;
        this.expectedYield = expectedYield;
        this.waterRequirement = waterRequirement;
        this.estimatedRevenue = estimatedRevenue;
        this.reason = reason;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getDistrict() { return district; }
    public void setDistrict(String district) { this.district = district; }

    public String getSoilType() { return soilType; }
    public void setSoilType(String soilType) { this.soilType = soilType; }

    public String getSeason() { return season; }
    public void setSeason(String season) { this.season = season; }

    public String getRecommendedCrop() { return recommendedCrop; }
    public void setRecommendedCrop(String recommendedCrop) { this.recommendedCrop = recommendedCrop; }

    public Double getSuitabilityScore() { return suitabilityScore; }
    public void setSuitabilityScore(Double suitabilityScore) { this.suitabilityScore = suitabilityScore; }

    public String getExpectedYield() { return expectedYield; }
    public void setExpectedYield(String expectedYield) { this.expectedYield = expectedYield; }

    public String getWaterRequirement() { return waterRequirement; }
    public void setWaterRequirement(String waterRequirement) { this.waterRequirement = waterRequirement; }

    public String getEstimatedRevenue() { return estimatedRevenue; }
    public void setEstimatedRevenue(String estimatedRevenue) { this.estimatedRevenue = estimatedRevenue; }

    public String getReason() { return reason; }
    public void setReason(String reason) { this.reason = reason; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
