package com.agrisahay.model;

import jakarta.persistence.*;

@Entity
@Table(name = "crops")
public class Crop {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String cropKey;
    private String name;
    private String nameTa;
    private String scientificName;
    private String season;
    private String waterRequirement;
    private Integer growthDurationDays;
    private Double optimalTempMin;
    private Double optimalTempMax;
    private Double baseYieldPerAcre;
    private Double marketPricePerQtl;

    public Crop() {}

    public Crop(String cropKey, String name, String nameTa, String scientificName, String season, String waterRequirement, Integer growthDurationDays, Double optimalTempMin, Double optimalTempMax, Double baseYieldPerAcre, Double marketPricePerQtl) {
        this.cropKey = cropKey;
        this.name = name;
        this.nameTa = nameTa;
        this.scientificName = scientificName;
        this.season = season;
        this.waterRequirement = waterRequirement;
        this.growthDurationDays = growthDurationDays;
        this.optimalTempMin = optimalTempMin;
        this.optimalTempMax = optimalTempMax;
        this.baseYieldPerAcre = baseYieldPerAcre;
        this.marketPricePerQtl = marketPricePerQtl;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getCropKey() { return cropKey; }
    public void setCropKey(String cropKey) { this.cropKey = cropKey; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getNameTa() { return nameTa; }
    public void setNameTa(String nameTa) { this.nameTa = nameTa; }

    public String getScientificName() { return scientificName; }
    public void setScientificName(String scientificName) { this.scientificName = scientificName; }

    public String getSeason() { return season; }
    public void setSeason(String season) { this.season = season; }

    public String getWaterRequirement() { return waterRequirement; }
    public void setWaterRequirement(String waterRequirement) { this.waterRequirement = waterRequirement; }

    public Integer getGrowthDurationDays() { return growthDurationDays; }
    public void setGrowthDurationDays(Integer growthDurationDays) { this.growthDurationDays = growthDurationDays; }

    public Double getOptimalTempMin() { return optimalTempMin; }
    public void setOptimalTempMin(Double optimalTempMin) { this.optimalTempMin = optimalTempMin; }

    public Double getOptimalTempMax() { return optimalTempMax; }
    public void setOptimalTempMax(Double optimalTempMax) { this.optimalTempMax = optimalTempMax; }

    public Double getBaseYieldPerAcre() { return baseYieldPerAcre; }
    public void setBaseYieldPerAcre(Double baseYieldPerAcre) { this.baseYieldPerAcre = baseYieldPerAcre; }

    public Double getMarketPricePerQtl() { return marketPricePerQtl; }
    public void setMarketPricePerQtl(Double marketPricePerQtl) { this.marketPricePerQtl = marketPricePerQtl; }
}
