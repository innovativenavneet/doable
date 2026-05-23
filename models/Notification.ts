export type NotificationType =
  | 'task_reminder'
  | 'task_completed'
  | 'new_task'
  | 'weekly_summary'
  | 'streak';

export interface AppNotification {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  timestamp: string;
  isRead: boolean;
  iconColor: string;
}
