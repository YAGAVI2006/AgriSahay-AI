package com.agrisahay.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "chat_history")
public class ChatHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 2000)
    private String prompt;

    @Column(length = 4000)
    private String reply;

    private String language = "en";
    private LocalDateTime createdAt = LocalDateTime.now();

    public ChatHistory() {}

    public ChatHistory(String prompt, String reply, String language) {
        this.prompt = prompt;
        this.reply = reply;
        this.language = language;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getPrompt() { return prompt; }
    public void setPrompt(String prompt) { this.prompt = prompt; }

    public String getReply() { return reply; }
    public void setReply(String reply) { this.reply = reply; }

    public String getLanguage() { return language; }
    public void setLanguage(String language) { this.language = language; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
