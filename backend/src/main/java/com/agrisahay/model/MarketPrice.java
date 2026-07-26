package com.agrisahay.model;

import jakarta.persistence.*;

@Entity
@Table(name = "market_prices")
public class MarketPrice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String commodity;
    private String category;
    private String marketName;
    private Double pricePerKg;
    private Double pricePerQtl;
    private String priceTrend; // +4.2%, stable
    private String unit;

    public MarketPrice() {}

    public MarketPrice(String commodity, String category, String marketName, Double pricePerKg, Double pricePerQtl, String priceTrend, String unit) {
        this.commodity = commodity;
        this.category = category;
        this.marketName = marketName;
        this.pricePerKg = pricePerKg;
        this.pricePerQtl = pricePerQtl;
        this.priceTrend = priceTrend;
        this.unit = unit;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getCommodity() { return commodity; }
    public void setCommodity(String commodity) { this.commodity = commodity; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getMarketName() { return marketName; }
    public void setMarketName(String marketName) { this.marketName = marketName; }

    public Double getPricePerKg() { return pricePerKg; }
    public void setPricePerKg(Double pricePerKg) { this.pricePerKg = pricePerKg; }

    public Double getPricePerQtl() { return pricePerQtl; }
    public void setPricePerQtl(Double pricePerQtl) { this.pricePerQtl = pricePerQtl; }

    public String getPriceTrend() { return priceTrend; }
    public void setPriceTrend(String priceTrend) { this.priceTrend = priceTrend; }

    public String getUnit() { return unit; }
    public void setUnit(String unit) { this.unit = unit; }
}
