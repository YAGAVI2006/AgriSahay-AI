package com.agrisahay.repository;

import com.agrisahay.model.FarmerProfile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<FarmerProfile, Long> {
}
