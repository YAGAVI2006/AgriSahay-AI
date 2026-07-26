package com.agrisahay.model;

import jakarta.persistence.*;

@Entity
@Table(name = "farmer_profiles")
public class FarmerProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name = "Yagavi S";
    private String mobile = "9443218920";
    private String village = "Mayanur";
    private String taluk = "Kulithalai";
    private String district = "Karur";
    private String state = "Tamil Nadu";
    private Double landSizeAcres = 4.5;
    private String soilType = "Red Soil";
    private String irrigationType = "Canal & Drip Fertigation";
    private String primaryCrop = "paddy";

    public FarmerProfile() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getMobile() { return mobile; }
    public void setMobile(String mobile) { this.mobile = mobile; }

    public String getVillage() { return village; }
    public void setVillage(String village) { this.village = village; }

    public String getTaluk() { return taluk; }
    public void setTaluk(String taluk) { this.taluk = taluk; }

    public String getDistrict() { return district; }
    public void setDistrict(String district) { this.district = district; }

    public String getState() { return state; }
    public void setState(String state) { this.state = state; }

    public Double getLandSizeAcres() { return landSizeAcres; }
    public void setLandSizeAcres(Double landSizeAcres) { this.landSizeAcres = landSizeAcres; }

    public String getSoilType() { return soilType; }
    public void setSoilType(String soilType) { this.soilType = soilType; }

    public String getIrrigationType() { return irrigationType; }
    public void setIrrigationType(String irrigationType) { this.irrigationType = irrigationType; }

    public String getPrimaryCrop() { return primaryCrop; }
    public void setPrimaryCrop(String primaryCrop) { this.primaryCrop = primaryCrop; }
}
