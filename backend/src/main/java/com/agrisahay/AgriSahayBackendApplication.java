package com.agrisahay;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AgriSahayBackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(AgriSahayBackendApplication.class, args);
        System.out.println("=================================================");
        System.out.println("🌱 AgriSahay AI Spring Boot 3 Backend is LIVE!");
        System.out.println("🚀 REST API Endpoint: http://localhost:8080/api/v1");
        System.out.println("📊 H2 Database Console: http://localhost:8080/h2-console");
        System.out.println("=================================================");
    }
}
