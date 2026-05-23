import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { calendarController } from '@/controllers/CalendarController';
import { Colors, Typography } from '@/constants/theme';
import { Task } from '@/models/Task';
import { CalendarTaskCard } from '@/views/components/calendar/CalendarTaskCard';
import { CalendarWidget } from '@/views/components/calendar/CalendarWidget';
import { ScreenContainer } from '@/views/components/shared/ScreenContainer';

export function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState(
    calendarController.getSelectedDate()
  );
  const [tasks, setTasks] = useState<Task[]>(() =>
    calendarController.getTasksForSelectedDate()
  );

  const handleSelectDate = (date: string) => {
    calendarController.setSelectedDate(date);
    setSelectedDate(date);
    setTasks([...calendarController.getTasksForSelectedDate()]);
  };

  const dateLabel = (() => {
    const d = new Date(selectedDate + 'T12:00:00');
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];
    return `${months[d.getMonth()]} ${d.getDate()}`;
  })();

  return (
    <ScreenContainer>
      <Text style={styles.title}>Calendar</Text>
      <Text style={styles.subtitle}>Your schedule at a glance</Text>

      <CalendarWidget
        selectedDate={selectedDate}
        onSelectDate={handleSelectDate}
      />

      <Text style={styles.tasksHeader}>Tasks — {dateLabel}</Text>

      {tasks.map((task) => (
        <CalendarTaskCard key={task.id} task={task} />
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  subtitle: {
    ...Typography.subtitle,
    color: Colors.textSecondary,
    marginBottom: 20,
  },
  tasksHeader: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 14,
  },
});
