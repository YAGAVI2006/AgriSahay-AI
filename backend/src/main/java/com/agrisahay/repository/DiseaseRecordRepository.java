package com.agrisahay.repository;

import com.agrisahay.model.DiseaseRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface DiseaseRecordRepository extends JpaRepository<DiseaseRecord, Long> {
    List<DiseaseRecord> findByCropNameIgnoreCase(String cropName);
}
