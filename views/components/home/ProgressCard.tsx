import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, Radius, Typography } from '@/constants/theme';
import { DailyProgress } from '@/models/Progress';

interface Props {
  progress: DailyProgress;
}

export function ProgressCard({ progress }: Props) {
  return (
    <LinearGradient
      colors={[Colors.primary, Colors.primaryDark]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <View style={styles.topRow}>
        <Text style={styles.label}>Today&apos;s Progress</Text>
        <Text style={styles.count}>
          {progress.completed} of {progress.total} tasks done
        </Text>
      </View>
      <Text style={styles.percent}>{progress.percent}%</Text>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${progress.percent}%` }]} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Radius.xl,
    padding: 20,
    marginBottom: 16,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    ...Typography.caption,
    color: 'rgba(255,255,255,0.85)',
  },
  count: {
    ...Typography.caption,
    color: 'rgba(255,255,255,0.85)',
  },
  percent: {
    ...Typography.progressPercent,
    color: Colors.white,
    marginBottom: 14,
  },
  track: {
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.progressTrack,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: Colors.progressFill,
    borderRadius: 3,
  },
});
