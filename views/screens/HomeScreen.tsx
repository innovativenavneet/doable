import { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { homeController } from '@/controllers/HomeController';
import { Colors, Typography } from '@/constants/theme';
import { DailyProgress, TaskSummary } from '@/models/Progress';
import { Task } from '@/models/Task';
import { HomeHeader } from '@/views/components/home/HomeHeader';
import { ProgressCard } from '@/views/components/home/ProgressCard';
import { StatsRow } from '@/views/components/home/StatsRow';
import { TaskItemCard } from '@/views/components/home/TaskItemCard';
import { ScreenContainer } from '@/views/components/shared/ScreenContainer';

export function HomeScreen() {
  const [tasks, setTasks] = useState<Task[]>(() => homeController.getTodayTasks());
  const [progress, setProgress] = useState<DailyProgress>(() =>
    homeController.getProgress()
  );
  const [summary, setSummary] = useState<TaskSummary>(() =>
    homeController.getSummary()
  );

  const user = homeController.getUser();

  const handleToggle = useCallback((taskId: string) => {
    homeController.toggleTask(taskId);
    setTasks([...homeController.getTodayTasks()]);
    setProgress(homeController.getProgress());
    setSummary(homeController.getSummary());
  }, []);

  return (
    <ScreenContainer>
      <HomeHeader user={user} />
      <ProgressCard progress={progress} />
      <StatsRow summary={summary} />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Today&apos;s Tasks</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      {tasks.map((task) => (
        <TaskItemCard
          key={task.id}
          task={task}
          onToggle={() => handleToggle(task.id)}
        />
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  seeAll: {
    ...Typography.body,
    color: Colors.primary,
  },
});
