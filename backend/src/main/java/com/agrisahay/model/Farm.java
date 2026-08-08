package com.agrisahay.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "farms")
public class Farm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String farmName;
    private Double latitude;
    private Double longitude;
    private Double areaAcres;
    private Double soilPh;
    private Double nitrogen;
    private Double phosphorus;
    private Double potassium;

    private LocalDateTime createdAt = LocalDateTime.now();

    public Farm() {}

    public Farm(String farmName, Double latitude, Double longitude, Double areaAcres, Double soilPh, Double nitrogen, Double phosphorus, Double potassium) {
        this.farmName = farmName;
        this.latitude = latitude;
        this.longitude = longitude;
        this.areaAcres = areaAcres;
        this.soilPh = soilPh;
        this.nitrogen = nitrogen;
        this.phosphorus = phosphorus;
        this.potassium = potassium;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getFarmName() { return farmName; }
    public void setFarmName(String farmName) { this.farmName = farmName; }

    public Double getLatitude() { return latitude; }
    public void setLatitude(Double latitude) { this.latitude = latitude; }

    public Double getLongitude() { return longitude; }
    public void setLongitude(Double longitude) { this.longitude = longitude; }

    public Double getAreaAcres() { return areaAcres; }
    public void setAreaAcres(Double areaAcres) { this.areaAcres = areaAcres; }

    public Double getSoilPh() { return soilPh; }
    public void setSoilPh(Double soilPh) { this.soilPh = soilPh; }

    public Double getNitrogen() { return nitrogen; }
    public void setNitrogen(Double nitrogen) { this.nitrogen = nitrogen; }

    public Double getPhosphorus() { return phosphorus; }
    public void setPhosphorus(Double phosphorus) { this.phosphorus = phosphorus; }

    public Double getPotassium() { return potassium; }
    public void setPotassium(Double potassium) { this.potassium = potassium; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
