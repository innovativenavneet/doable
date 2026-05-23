import { Colors } from '@/constants/theme';
import { AppNotification } from '@/models/Notification';
import { ProfileMenuItem } from '@/models/ProfileMenuItem';
import { DailyProgress, TaskSummary } from '@/models/Progress';
import { Task } from '@/models/Task';
import { UserProfile, UserStats } from '@/models/User';

export const mockUser: UserProfile = {
  id: 'user-1',
  name: 'Nompupo',
  email: 'nompupo@email.com',
  initial: 'N',
};

export const mockDailyProgress: DailyProgress = {
  percent: 20,
  completed: 1,
  total: 5,
};

export const mockTaskSummary: TaskSummary = {
  total: 5,
  done: 1,
  pending: 4,
};

export const mockTodayTasks: Task[] = [
  {
    id: '1',
    title: 'Team Standup Meeting',
    time: '09:00 AM',
    category: 'Work',
    accentColor: Colors.primary,
    isCompleted: false,
    dueDate: '2023-05-23',
    priority: 'high',
  },
  {
    id: '2',
    title: 'Morning Workout',
    time: '07:00 AM',
    category: 'Health',
    accentColor: Colors.teal,
    isCompleted: true,
    dueDate: '2023-05-23',
    priority: 'medium',
  },
  {
    id: '3',
    title: 'Grocery Shopping',
    time: '06:00 PM',
    category: 'Errands',
    accentColor: Colors.pink,
    isCompleted: false,
    dueDate: '2023-05-23',
    priority: 'low',
  },
  {
    id: '4',
    title: 'Read 30 pages',
    time: '08:00 PM',
    category: 'Personal',
    accentColor: Colors.orange,
    isCompleted: false,
    dueDate: '2023-05-23',
    priority: 'medium',
  },
  {
    id: '5',
    title: 'Prepare presentation',
    time: '02:00 PM',
    category: 'Work',
    accentColor: Colors.primary,
    isCompleted: false,
    dueDate: '2023-05-23',
    priority: 'high',
  },
];

export const mockCalendarTasks: Task[] = [
  {
    id: 'c1',
    title: 'Team Standup Meeting',
    time: '09:00 AM',
    category: 'Work',
    accentColor: Colors.primary,
    isCompleted: false,
    dueDate: '2023-05-15',
  },
  {
    id: 'c2',
    title: 'Morning Workout',
    time: '07:00 AM',
    category: 'Health',
    accentColor: Colors.teal,
    isCompleted: false,
    dueDate: '2023-05-15',
  },
  {
    id: 'c3',
    title: 'Call Mom',
    time: '06:30 PM',
    category: 'Personal',
    accentColor: Colors.orange,
    isCompleted: false,
    dueDate: '2023-05-15',
  },
];

export const mockNotifications: AppNotification[] = [
  {
    id: 'n1',
    type: 'task_reminder',
    title: 'Task Reminder',
    description: 'Team Standup Meeting starts in 15 minutes',
    timestamp: '8:45 AM',
    isRead: false,
    iconColor: Colors.yellow,
  },
  {
    id: 'n2',
    type: 'task_completed',
    title: 'Task Completed',
    description: 'Morning Workout has been marked as done',
    timestamp: '7:32 AM',
    isRead: false,
    iconColor: Colors.green,
  },
  {
    id: 'n3',
    type: 'new_task',
    title: 'New Task Added',
    description: 'Project Review scheduled for 2:00 PM today',
    timestamp: 'Yesterday',
    isRead: true,
    iconColor: Colors.blue,
  },
  {
    id: 'n4',
    type: 'weekly_summary',
    title: 'Weekly Summary',
    description: 'You completed 12 of 15 tasks this week. Great work!',
    timestamp: 'Mon',
    isRead: true,
    iconColor: Colors.yellow,
  },
  {
    id: 'n5',
    type: 'streak',
    title: 'Streak Achieved',
    description: '7-day task completion streak! Keep it up!',
    timestamp: 'Sun',
    isRead: true,
    iconColor: Colors.gold,
  },
];

export const mockUserStats: UserStats = {
  tasksDone: 1,
  streakDays: '7d',
  tasksThisWeek: 12,
};

export const mockProfileMenu: ProfileMenuItem[] = [
  {
    id: 'achievements',
    title: 'Achievements',
    subtitle: 'View your badges',
    icon: 'star',
    iconColor: Colors.orange,
    iconBg: 'rgba(255, 138, 101, 0.15)',
  },
  {
    id: 'notifications',
    title: 'Notifications',
    subtitle: 'Manage alerts',
    icon: 'notifications',
    iconColor: Colors.primary,
    iconBg: 'rgba(139, 128, 248, 0.15)',
  },
  {
    id: 'weekly_review',
    title: 'Weekly Review',
    subtitle: 'See your progress',
    icon: 'calendar',
    iconColor: Colors.teal,
    iconBg: 'rgba(77, 182, 172, 0.15)',
  },
  {
    id: 'productivity_tips',
    title: 'Productivity Tips',
    subtitle: 'Get better each day',
    icon: 'flash',
    iconColor: Colors.pink,
    iconBg: 'rgba(240, 98, 146, 0.15)',
  },
];
