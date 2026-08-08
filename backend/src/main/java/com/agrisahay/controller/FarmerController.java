package com.agrisahay.controller;

import com.agrisahay.model.FarmerProfile;
import com.agrisahay.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping({"/api/farmers", "/api/profile", "/api/v1/profile"})
public class FarmerController {

    @Autowired
    private ProfileRepository profileRepository;

    @GetMapping({"", "/current"})
    public ResponseEntity<?> getProfile() {
        return ResponseEntity.ok(profileRepository.findAll().stream().findFirst().orElseGet(() -> {
            FarmerProfile defaultProfile = new FarmerProfile(
                "Yagavi S",
                "9443218920",
                "Mayanur",
                "Kulithalai",
                "Karur",
                "Tamil Nadu",
                4.5,
                "red",
                "paddy",
                "canal",
                "small"
            );
            return profileRepository.save(defaultProfile);
        }));
    }

    @PutMapping({"", "/update"})
    public ResponseEntity<?> updateProfile(@RequestBody FarmerProfile updated) {
        FarmerProfile profile = profileRepository.findAll().stream().findFirst().orElse(updated);
        profile.setName(updated.getName() != null ? updated.getName() : profile.getName());
        profile.setPhone(updated.getPhone() != null ? updated.getPhone() : profile.getPhone());
        profile.setVillage(updated.getVillage() != null ? updated.getVillage() : profile.getVillage());
        profile.setTaluk(updated.getTaluk() != null ? updated.getTaluk() : profile.getTaluk());
        profile.setDistrict(updated.getDistrict() != null ? updated.getDistrict() : profile.getDistrict());
        profile.setState(updated.getState() != null ? updated.getState() : profile.getState());
        profile.setLandSizeAcres(updated.getLandSizeAcres() != null ? updated.getLandSizeAcres() : profile.getLandSizeAcres());
        profile.setSoilType(updated.getSoilType() != null ? updated.getSoilType() : profile.getSoilType());
        profile.setPrimaryCrop(updated.getPrimaryCrop() != null ? updated.getPrimaryCrop() : profile.getPrimaryCrop());
        profile.setIrrigationType(updated.getIrrigationType() != null ? updated.getIrrigationType() : profile.getIrrigationType());
        profile.setFarmerCategory(updated.getFarmerCategory() != null ? updated.getFarmerCategory() : profile.getFarmerCategory());

        return ResponseEntity.ok(profileRepository.save(profile));
    }
}
