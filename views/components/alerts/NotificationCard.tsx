import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, Radius, Typography } from '@/constants/theme';
import { AppNotification, NotificationType } from '@/models/Notification';

const iconMap: Record<NotificationType, keyof typeof Ionicons.glyphMap> = {
  task_reminder: 'notifications',
  task_completed: 'checkmark-circle',
  new_task: 'calendar',
  weekly_summary: 'star',
  streak: 'trophy',
};

interface Props {
  notification: AppNotification;
}

export function NotificationCard({ notification }: Props) {
  return (
    <View style={styles.card}>
      <View style={[styles.iconWrap, { backgroundColor: `${notification.iconColor}22` }]}>
        <Ionicons
          name={iconMap[notification.type]}
          size={20}
          color={notification.iconColor}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{notification.title}</Text>
          <View style={styles.timeRow}>
            <Text style={styles.time}>{notification.timestamp}</Text>
            {!notification.isRead && <View style={styles.dot} />}
          </View>
        </View>
        <Text style={styles.description}>{notification.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: Colors.card,
    borderRadius: Radius.lg,
    padding: 14,
    marginBottom: 10,
    gap: 12,
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  title: {
    ...Typography.bodyBold,
    color: Colors.textPrimary,
    flex: 1,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginLeft: 8,
  },
  time: {
    ...Typography.caption,
    color: Colors.textSecondary,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.newDot,
  },
  description: {
    ...Typography.caption,
    color: Colors.textSecondary,
    lineHeight: 18,
  },
});
