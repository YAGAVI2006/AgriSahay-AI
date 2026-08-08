package com.agrisahay.controller;

import com.agrisahay.model.Scheme;
import com.agrisahay.repository.SchemeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/api/schemes", "/api/v1/schemes"})
public class SchemeController {

    @Autowired
    private SchemeRepository schemeRepository;

    @GetMapping({"", "/matched"})
    public ResponseEntity<?> getMatchedSchemes() {
        List<Scheme> list = schemeRepository.findAll();
        if (list.isEmpty()) {
            schemeRepository.save(new Scheme("TNIAMP Cauvery Basin Subsidy", "Tamil Nadu Government", "50% to 100% Subsidy on Seeds & Drip Irrigation", "Cauvery basin river sub-watersheds in Karur"));
            schemeRepository.save(new Scheme("PM-KISAN Samman Nidhi Yojana", "Central Government", "₹6,000 / year in 3 equal installments", "All landholding small/marginal farmer families"));
            schemeRepository.save(new Scheme("PMKSY Micro-Irrigation Grant", "TN Horticulture & Agri", "100% Subsidy for Small Farmers", "Land with assured borewell/canal water source"));
            schemeRepository.save(new Scheme("PMFBY Crop Insurance", "Central & TN Joint", "1.5%-2% Low Premium Insurance", "All farmers growing notified crops in Karur"));
            list = schemeRepository.findAll();
        }
        return ResponseEntity.ok(list);
    }
}
