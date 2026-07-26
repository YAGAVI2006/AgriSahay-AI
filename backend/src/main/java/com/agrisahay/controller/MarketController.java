package com.agrisahay.controller;

import com.agrisahay.model.MarketPrice;
import com.agrisahay.repository.MarketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/market")
public class MarketController {

    @Autowired
    private MarketRepository marketRepository;

    @GetMapping("/prices")
    public ResponseEntity<List<MarketPrice>> getMarketPrices() {
        List<MarketPrice> list = marketRepository.findAll();
        if (list.isEmpty()) {
            list = List.of(
                new MarketPrice("Paddy (ADT 45)", "Cereal", "Karur Uzhavar Sandhai", 22.8, 2280.0, "+4.2%", "₹/Qtl"),
                new MarketPrice("Coriander / Kothamalli", "Greens", "Karur Uzhavar Sandhai", 38.0, 3800.0, "+5.5%", "₹/Kg"),
                new MarketPrice("Mint / Pudina", "Greens", "Karur Mandi", 32.0, 3200.0, "+2.1%", "₹/Kg"),
                new MarketPrice("Groundnut (Pods)", "Oilseed", "Kulithalai Regulated Market", 68.5, 6850.0, "+3.0%", "₹/Qtl"),
                new MarketPrice("Tomato (Local Red)", "Vegetable", "Karur Market", 28.0, 2800.0, "+8.0%", "₹/Kg")
            );
            marketRepository.saveAll(list);
        }
        return ResponseEntity.ok(list);
    }

    @PostMapping("/submit-price")
    public ResponseEntity<MarketPrice> submitPrice(@RequestBody MarketPrice price) {
        if (price.getPricePerQtl() == null && price.getPricePerKg() != null) {
            price.setPricePerQtl(price.getPricePerKg() * 100);
        }
        MarketPrice saved = marketRepository.save(price);
        return ResponseEntity.ok(saved);
    }
}
