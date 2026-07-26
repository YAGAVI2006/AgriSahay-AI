package com.agrisahay.controller;

import com.agrisahay.model.Scheme;
import com.agrisahay.repository.SchemeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/schemes")
public class SchemeController {

    @Autowired
    private SchemeRepository schemeRepository;

    @GetMapping("/matched")
    public ResponseEntity<List<Scheme>> getMatchedSchemes() {
        List<Scheme> list = schemeRepository.findAll();
        if (list.isEmpty()) {
            list = List.of(
                new Scheme("PM-KISAN Samman Nidhi", "Central Govt", "₹6,000 / year", "Land holding farmer families in Karur", "Tamil Nadu"),
                new Scheme("TN Kalaignar All Village Agriculture Scheme", "TN State Govt", "Free seeds & bio-fertilizer kit", "Small & Marginal farmers", "Tamil Nadu"),
                new Scheme("Kuruvai Paddy Crop Package Subsidy", "TN Agriculture Dept", "100% subsidy on micronutrient mix", "Paddy farmers in Cauvery delta (Karur)", "Tamil Nadu")
            );
            schemeRepository.saveAll(list);
        }
        return ResponseEntity.ok(list);
    }
}
