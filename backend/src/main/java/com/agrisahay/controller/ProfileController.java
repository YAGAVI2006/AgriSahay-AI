package com.agrisahay.controller;

import com.agrisahay.model.FarmerProfile;
import com.agrisahay.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/profile")
public class ProfileController {

    @Autowired
    private ProfileRepository profileRepository;

    @GetMapping
    public ResponseEntity<FarmerProfile> getProfile() {
        List<FarmerProfile> profiles = profileRepository.findAll();
        if (profiles.isEmpty()) {
            FarmerProfile defaultProfile = new FarmerProfile();
            profileRepository.save(defaultProfile);
            return ResponseEntity.ok(defaultProfile);
        }
        return ResponseEntity.ok(profiles.get(0));
    }

    @PutMapping
    public ResponseEntity<FarmerProfile> updateProfile(@RequestBody FarmerProfile updated) {
        List<FarmerProfile> profiles = profileRepository.findAll();
        FarmerProfile profile;
        if (profiles.isEmpty()) {
            profile = updated;
        } else {
            profile = profiles.get(0);
            if (updated.getName() != null) profile.setName(updated.getName());
            if (updated.getMobile() != null) profile.setMobile(updated.getMobile());
            if (updated.getVillage() != null) profile.setVillage(updated.getVillage());
            if (updated.getTaluk() != null) profile.setTaluk(updated.getTaluk());
            if (updated.getDistrict() != null) profile.setDistrict(updated.getDistrict());
            if (updated.getLandSizeAcres() != null) profile.setLandSizeAcres(updated.getLandSizeAcres());
            if (updated.getSoilType() != null) profile.setSoilType(updated.getSoilType());
            if (updated.getPrimaryCrop() != null) profile.setPrimaryCrop(updated.getPrimaryCrop());
        }
        FarmerProfile saved = profileRepository.save(profile);
        return ResponseEntity.ok(saved);
    }
}
