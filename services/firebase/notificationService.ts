/**
 * Local push notifications placeholder (expo-notifications).
 * Schedule/cancel notifications when task due dates change.
 */

export async function requestNotificationPermissions(): Promise<boolean> {
  return false;
}

export async function scheduleTaskReminder(
  _taskId: string,
  _title: string,
  _dueDate: Date
): Promise<string | null> {
  return null;
}

export async function cancelNotification(_notificationId: string): Promise<void> {}
