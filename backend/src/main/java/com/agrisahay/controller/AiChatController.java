package com.agrisahay.controller;

import com.agrisahay.service.GeminiAiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/ai")
public class AiChatController {

    @Autowired
    private GeminiAiService geminiAiService;

    @PostMapping("/chat")
    public ResponseEntity<Map<String, String>> chatWithAi(@RequestBody Map<String, String> request) {
        String userPrompt = request.getOrDefault("prompt", "What crop to grow?");
        return ResponseEntity.ok(geminiAiService.generateResponse(userPrompt));
    }
}
