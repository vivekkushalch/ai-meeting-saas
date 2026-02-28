// Date Utilities
export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString("en-US", { 
    hour: "2-digit", 
    minute: "2-digit", 
    hour12: true 
  });
};

export const formatMonth = (date: Date): string => {
  return date.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
};

export const getDayDifference = (meetingDate: Date): number => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diffTime = meetingDate.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const getRelativeTimeForCalendar = (meetingDate: Date): string => {
  const diffDays = getDayDifference(meetingDate);
  
  if (diffDays === 0) return "TODAY";
  if (diffDays === 1) return "TOMORROW";
  if (diffDays > 1 && diffDays <= 7) return `+${diffDays}`;
  if (diffDays < -1 && diffDays >= -7) return `${diffDays}`;
  return formatMonth(meetingDate);
};
