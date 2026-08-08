package com.agrisahay.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "disease_records")
public class DiseaseRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String cropName;
    private String diseaseName;
    private Double confidence;

    @Column(length = 2000)
    private String symptoms;

    @Column(length = 2000)
    private String organicTreatment;

    @Column(length = 2000)
    private String chemicalTreatment;

    @Column(length = 2000)
    private String prevention;

    private String imageUrl;
    private LocalDateTime createdAt = LocalDateTime.now();

    public DiseaseRecord() {}

    public DiseaseRecord(String cropName, String diseaseName, Double confidence, String symptoms, String organicTreatment, String chemicalTreatment, String prevention) {
        this.cropName = cropName;
        this.diseaseName = diseaseName;
        this.confidence = confidence;
        this.symptoms = symptoms;
        this.organicTreatment = organicTreatment;
        this.chemicalTreatment = chemicalTreatment;
        this.prevention = prevention;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getCropName() { return cropName; }
    public void setCropName(String cropName) { this.cropName = cropName; }

    public String getDiseaseName() { return diseaseName; }
    public void setDiseaseName(String diseaseName) { this.diseaseName = diseaseName; }

    public Double getConfidence() { return confidence; }
    public void setConfidence(Double confidence) { this.confidence = confidence; }

    public String getSymptoms() { return symptoms; }
    public void setSymptoms(String symptoms) { this.symptoms = symptoms; }

    public String getOrganicTreatment() { return organicTreatment; }
    public void setOrganicTreatment(String organicTreatment) { this.organicTreatment = organicTreatment; }

    public String getChemicalTreatment() { return chemicalTreatment; }
    public void setChemicalTreatment(String chemicalTreatment) { this.chemicalTreatment = chemicalTreatment; }

    public String getPrevention() { return prevention; }
    public void setPrevention(String prevention) { this.prevention = prevention; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
