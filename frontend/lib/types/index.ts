// Meeting Types
export interface Meeting {
  id: string;
  title: string;
  date: string;
  summary?: string;
  status: "upcoming" | "completed";
  participants: string[];
  duration: string;
  platform?: string;
  meetingLink?: string;
}

// Task Types
export interface Task {
  id: string;
  text: string;
  completed: boolean;
  meetingId?: string;
}

// Dashboard Types
export interface DashboardFilters {
  searchTerm: string;
  activeTab: "today" | "upcoming" | "completed";
  todayPage: number;
  upcomingPage: number;
  completedPage: number;
  itemsPerPage: number;
}
