package com.agrisahay.repository;

import com.agrisahay.model.Crop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface CropRepository extends JpaRepository<Crop, Long> {
    Optional<Crop> findByCropKey(String cropKey);
}
