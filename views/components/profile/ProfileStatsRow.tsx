import { StyleSheet, Text, View } from 'react-native';
import { Colors, Radius, Typography } from '@/constants/theme';
import { UserStats } from '@/models/User';

interface Props {
  stats: UserStats;
}

export function ProfileStatsRow({ stats }: Props) {
  return (
    <View style={styles.row}>
      <StatCard value={String(stats.tasksDone)} label="Tasks Done" color={Colors.primary} />
      <StatCard value={stats.streakDays} label="Streak" color={Colors.teal} />
      <StatCard value={String(stats.tasksThisWeek)} label="This Week" color={Colors.orange} />
    </View>
  );
}

function StatCard({
  value,
  label,
  color,
}: {
  value: string;
  label: string;
  color: string;
}) {
  return (
    <View style={styles.card}>
      <Text style={[styles.value, { color }]}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 24,
  },
  card: {
    flex: 1,
    backgroundColor: Colors.card,
    borderRadius: Radius.lg,
    paddingVertical: 16,
    alignItems: 'center',
  },
  value: {
    ...Typography.stat,
    marginBottom: 4,
  },
  label: {
    ...Typography.caption,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});
