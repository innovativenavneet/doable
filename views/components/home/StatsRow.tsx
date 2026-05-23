import { StyleSheet, Text, View } from 'react-native';
import { Colors, Radius, Typography } from '@/constants/theme';
import { TaskSummary } from '@/models/Progress';

interface Props {
  summary: TaskSummary;
}

export function StatsRow({ summary }: Props) {
  return (
    <View style={styles.row}>
      <StatCard value={String(summary.total)} label="Total" valueColor={Colors.primary} />
      <StatCard value={String(summary.done)} label="Done" valueColor={Colors.teal} />
      <StatCard value={String(summary.pending)} label="Pending" valueColor={Colors.orange} />
    </View>
  );
}

function StatCard({
  value,
  label,
  valueColor,
}: {
  value: string;
  label: string;
  valueColor: string;
}) {
  return (
    <View style={styles.card}>
      <Text style={[styles.value, { color: valueColor }]}>{value}</Text>
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
  },
});
