import { StyleSheet, Text, View } from 'react-native';
import { Colors, Radius, Typography } from '@/constants/theme';
import { Task } from '@/models/Task';

interface Props {
  task: Task;
}

export function CalendarTaskCard({ task }: Props) {
  return (
    <View style={styles.card}>
      <View style={[styles.accentBar, { backgroundColor: task.accentColor }]} />
      <View style={styles.content}>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.time}>{task.time}</Text>
      </View>
      <View style={[styles.tag, { backgroundColor: `${task.accentColor}22` }]}>
        <Text style={[styles.tagText, { color: task.accentColor }]}>
          {task.category}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.card,
    borderRadius: Radius.lg,
    marginBottom: 10,
    overflow: 'hidden',
    paddingVertical: 16,
    paddingRight: 14,
  },
  accentBar: {
    width: 4,
    alignSelf: 'stretch',
    marginRight: 14,
  },
  content: {
    flex: 1,
  },
  title: {
    ...Typography.bodyBold,
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  time: {
    ...Typography.caption,
    color: Colors.textSecondary,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Radius.sm,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '600',
  },
});
