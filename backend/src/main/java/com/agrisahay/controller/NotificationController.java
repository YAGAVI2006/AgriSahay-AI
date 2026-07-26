package com.agrisahay.controller;

import com.agrisahay.model.Notification;
import com.agrisahay.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/notifications")
public class NotificationController {

    @Autowired
    private NotificationRepository notificationRepository;

    @GetMapping
    public ResponseEntity<List<Notification>> getNotifications() {
        List<Notification> list = notificationRepository.findAll();
        if (list.isEmpty()) {
            list = List.of(
                new Notification("⛈️ Heavy Rainfall Advisory - Kulithalai", "Rain expected in 48 hours. Delay heavy paddy nitrogen top dressing.", "weather", false, "10 mins ago"),
                new Notification("📈 Paddy Price Hike (+4.2%)", "Karur Uzhavar Sandhai paddy ADT 45 price reached ₹2,280/Quintal.", "market", false, "2 hours ago"),
                new Notification("🏛️ PM-KISAN Subsidy Installment", "Verify Aadhaar linkage with land Chitta for 17th installment.", "scheme", true, "1 day ago")
            );
            notificationRepository.saveAll(list);
        }
        return ResponseEntity.ok(list);
    }

    @PutMapping("/{id}/read")
    public ResponseEntity<Notification> markAsRead(@PathVariable Long id) {
        Optional<Notification> opt = notificationRepository.findById(id);
        if (opt.isPresent()) {
            Notification n = opt.get();
            n.setIsRead(true);
            notificationRepository.save(n);
            return ResponseEntity.ok(n);
        }
        return ResponseEntity.notFound().build();
    }
}
