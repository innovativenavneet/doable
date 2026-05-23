import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors, Radius, Typography } from '@/constants/theme';
import { Task } from '@/models/Task';

interface Props {
  task: Task;
  onToggle?: () => void;
  showCheckbox?: boolean;
}

export function TaskItemCard({ task, onToggle, showCheckbox = true }: Props) {
  return (
    <View style={styles.card}>
      {showCheckbox && (
        <Pressable style={styles.checkboxWrap} onPress={onToggle}>
          <View
            style={[
              styles.checkbox,
              task.isCompleted && styles.checkboxDone,
            ]}
          >
            {task.isCompleted && (
              <Ionicons name="checkmark" size={14} color={Colors.white} />
            )}
          </View>
        </Pressable>
      )}

      <View style={styles.content}>
        <Text
          style={[styles.title, task.isCompleted && styles.titleDone]}
          numberOfLines={1}
        >
          {task.title}
        </Text>
        <View style={styles.meta}>
          <Ionicons name="time-outline" size={12} color={Colors.textSecondary} />
          <Text style={styles.time}>{task.time}</Text>
          <View style={[styles.tag, { backgroundColor: `${task.accentColor}22` }]}>
            <Text style={[styles.tagText, { color: task.accentColor }]}>
              {task.category}
            </Text>
          </View>
        </View>
      </View>

      <View style={[styles.accentBar, { backgroundColor: task.accentColor }]} />
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
    minHeight: 72,
  },
  checkboxWrap: {
    paddingLeft: 14,
    paddingRight: 10,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: Colors.checkboxBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxDone: {
    backgroundColor: Colors.teal,
    borderColor: Colors.teal,
  },
  content: {
    flex: 1,
    paddingVertical: 14,
    paddingRight: 8,
  },
  title: {
    ...Typography.bodyBold,
    color: Colors.textPrimary,
    marginBottom: 6,
  },
  titleDone: {
    textDecorationLine: 'line-through',
    color: Colors.textSecondary,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  time: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginRight: 8,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: Radius.sm,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '600',
  },
  accentBar: {
    width: 4,
    alignSelf: 'stretch',
  },
});
