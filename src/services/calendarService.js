import { CROP_CALENDARS, getCalendarForCrop } from '../data/calendarData';

export const calendarService = {
  getCalendarByCrop: async (cropId) => {
    // Phase 2: return axios.get(`/api/v1/calendar/${cropId}`);
    return new Promise((resolve) => {
      setTimeout(() => {
        const cal = getCalendarForCrop(cropId);
        resolve(cal);
      }, 300);
    });
  }
};
