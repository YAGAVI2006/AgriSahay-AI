package com.agrisahay.repository;

import com.agrisahay.model.MarketPrice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MarketRepository extends JpaRepository<MarketPrice, Long> {
}
