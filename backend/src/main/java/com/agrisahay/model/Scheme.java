package com.agrisahay.model;

import jakarta.persistence.*;

@Entity
@Table(name = "government_schemes")
public class Scheme {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String provider;
    private String benefitAmount;
    private String eligibilityCriteria;
    private String state;

    public Scheme() {}

    public Scheme(String title, String provider, String benefitAmount, String eligibilityCriteria, String state) {
        this.title = title;
        this.provider = provider;
        this.benefitAmount = benefitAmount;
        this.eligibilityCriteria = eligibilityCriteria;
        this.state = state;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getProvider() { return provider; }
    public void setProvider(String provider) { this.provider = provider; }

    public String getBenefitAmount() { return benefitAmount; }
    public void setBenefitAmount(String benefitAmount) { this.benefitAmount = benefitAmount; }

    public String getEligibilityCriteria() { return eligibilityCriteria; }
    public void setEligibilityCriteria(String eligibilityCriteria) { this.eligibilityCriteria = eligibilityCriteria; }

    public String getState() { return state; }
    public void setState(String state) { this.state = state; }
}
