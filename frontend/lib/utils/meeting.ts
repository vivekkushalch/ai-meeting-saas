// Meeting Utilities
import { Meeting } from '@/components/shared/types';

export const getTodayMeetings = (meetings: Meeting[]): Meeting[] => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  return meetings.filter(m => {
    const meetingDate = new Date(m.date);
    return meetingDate >= today && meetingDate < tomorrow;
  });
};

export const getUpcomingMeetings = (meetings: Meeting[]): Meeting[] => {
  const tomorrow = new Date();
  tomorrow.setHours(0, 0, 0, 0);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  return meetings.filter(m => {
    const meetingDate = new Date(m.date);
    return meetingDate >= tomorrow && m.status === "upcoming";
  });
};

export const getCompletedMeetings = (meetings: Meeting[]): Meeting[] => {
  return meetings.filter(m => m.status === "completed");
};

export const getPaginatedMeetings = (meetings: Meeting[], page: number, itemsPerPage: number): Meeting[] => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return meetings.slice(startIndex, endIndex);
};
