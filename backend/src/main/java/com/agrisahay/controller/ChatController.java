package com.agrisahay.controller;

import com.agrisahay.service.GeminiAiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping({"/api/chat", "/api/v1/ai"})
public class ChatController {

    @Autowired
    private GeminiAiService geminiAiService;

    @PostMapping({"", "/chat"})
    public ResponseEntity<?> askAssistant(@RequestBody Map<String, String> request) {
        String prompt = request.getOrDefault("prompt", request.getOrDefault("message", "Hello"));
        String reply = geminiAiService.generateAgriResponse(prompt);
        return ResponseEntity.ok(Map.of("reply", reply, "status", "SUCCESS"));
    }
}
