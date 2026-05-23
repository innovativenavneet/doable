import { mockNotifications } from '@/data/mockData';
import { AppNotification } from '@/models/Notification';

export class AlertsController {
  getNotifications(): AppNotification[] {
    return mockNotifications;
  }

  getUnreadCount(): number {
    return mockNotifications.filter((n) => !n.isRead).length;
  }
}

export const alertsController = new AlertsController();
