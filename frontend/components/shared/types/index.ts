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

// Component Props Types
export interface MeetingCardProps {
  meeting: Meeting;
  tasksForMeeting: Task[];
  onQuickSummaryAccess: (meetingId: string) => void;
  onToggleTaskComplete: (taskId: string) => void;
}

export interface TaskItemProps {
  task: Task;
  onToggleComplete: (taskId: string) => void;
}
