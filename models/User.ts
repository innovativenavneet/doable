export interface UserProfile {
  id: string;
  name: string;
  email: string;
  initial: string;
}

export interface UserStats {
  tasksDone: number;
  streakDays: string;
  tasksThisWeek: number;
}
