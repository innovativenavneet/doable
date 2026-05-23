import { StyleSheet, Text, View } from 'react-native';
import { alertsController } from '@/controllers/AlertsController';
import { Colors, Radius, Typography } from '@/constants/theme';
import { NotificationCard } from '@/views/components/alerts/NotificationCard';
import { ScreenContainer } from '@/views/components/shared/ScreenContainer';

export function AlertsScreen() {
  const notifications = alertsController.getNotifications();
  const unreadCount = alertsController.getUnreadCount();

  return (
    <ScreenContainer>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Notifications</Text>
          <Text style={styles.subtitle}>Stay up to date</Text>
        </View>
        {unreadCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{unreadCount} new</Text>
          </View>
        )}
      </View>

      {notifications.map((n) => (
        <NotificationCard key={n.id} notification={n} />
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  subtitle: {
    ...Typography.subtitle,
    color: Colors.textSecondary,
  },
  badge: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: Radius.full,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.white,
  },
});
