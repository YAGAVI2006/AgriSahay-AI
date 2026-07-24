import { INITIAL_NOTIFICATIONS } from '../data/notificationData';

let notificationsList = [...INITIAL_NOTIFICATIONS];

export const notificationService = {
  getNotifications: async () => {
    return Promise.resolve(notificationsList);
  },

  markAsRead: async (id) => {
    notificationsList = notificationsList.map(n => n.id === id ? { ...n, read: true } : n);
    return Promise.resolve(notificationsList);
  },

  markAllAsRead: async () => {
    notificationsList = notificationsList.map(n => ({ ...n, read: true }));
    return Promise.resolve(notificationsList);
  }
};
