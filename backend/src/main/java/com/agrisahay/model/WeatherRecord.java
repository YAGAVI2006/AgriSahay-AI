package com.agrisahay.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "weather_records")
public class WeatherRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String district;
    private Double tempC;
    private Integer humidity;
    private String windSpeedKmh;
    private Integer rainProb;
    private String conditionText;
    private String advisoryText;
    private LocalDateTime recordedAt = LocalDateTime.now();

    public WeatherRecord() {}

    public WeatherRecord(String district, Double tempC, Integer humidity, String windSpeedKmh, Integer rainProb, String conditionText, String advisoryText) {
        this.district = district;
        this.tempC = tempC;
        this.humidity = humidity;
        this.windSpeedKmh = windSpeedKmh;
        this.rainProb = rainProb;
        this.conditionText = conditionText;
        this.advisoryText = advisoryText;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getDistrict() { return district; }
    public void setDistrict(String district) { this.district = district; }

    public Double getTempC() { return tempC; }
    public void setTempC(Double tempC) { this.tempC = tempC; }

    public Integer getHumidity() { return humidity; }
    public void setHumidity(Integer humidity) { this.humidity = humidity; }

    public String getWindSpeedKmh() { return windSpeedKmh; }
    public void setWindSpeedKmh(String windSpeedKmh) { this.windSpeedKmh = windSpeedKmh; }

    public Integer getRainProb() { return rainProb; }
    public void setRainProb(Integer rainProb) { this.rainProb = rainProb; }

    public String getConditionText() { return conditionText; }
    public void setConditionText(String conditionText) { this.conditionText = conditionText; }

    public String getAdvisoryText() { return advisoryText; }
    public void setAdvisoryText(String advisoryText) { this.advisoryText = advisoryText; }

    public LocalDateTime getRecordedAt() { return recordedAt; }
    public void setRecordedAt(LocalDateTime recordedAt) { this.recordedAt = recordedAt; }
}
