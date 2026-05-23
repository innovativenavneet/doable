import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors, Radius } from '@/constants/theme';
import { ScreenContainer } from '@/views/components/shared/ScreenContainer';

/**
 * Placeholder add-task modal — wire to taskController + Firebase later.
 */
export function AddTaskScreen() {
  const router = useRouter();

  return (
    <ScreenContainer scroll={false}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} hitSlop={12}>
          <Ionicons name="close" size={24} color={Colors.white} />
        </Pressable>
        <Text style={styles.title}>New Task</Text>
        <View style={{ width: 24 }} />
      </View>

      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="What needs to be done?"
        placeholderTextColor={Colors.textMuted}
      />

      <Text style={styles.label}>Time</Text>
      <TextInput
        style={styles.input}
        placeholder="09:00 AM"
        placeholderTextColor={Colors.textMuted}
      />

      <Text style={styles.label}>Category</Text>
      <View style={styles.chips}>
        {(['Work', 'Health', 'Personal', 'Errands'] as const).map((cat) => (
          <View key={cat} style={styles.chip}>
            <Text style={styles.chipText}>{cat}</Text>
          </View>
        ))}
      </View>

      <Pressable style={styles.saveBtn} onPress={() => router.back()}>
        <Text style={styles.saveText}>Save Task</Text>
      </Pressable>

      <Text style={styles.hint}>
        Firebase integration pending — task will not persist yet.
      </Text>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.white,
  },
  label: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: Colors.card,
    borderRadius: Radius.lg,
    padding: 14,
    color: Colors.white,
    fontSize: 15,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    backgroundColor: Colors.card,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: Radius.full,
  },
  chipText: {
    color: Colors.white,
    fontSize: 13,
  },
  saveBtn: {
    backgroundColor: Colors.primary,
    borderRadius: Radius.lg,
    padding: 16,
    alignItems: 'center',
    marginTop: 32,
  },
  saveText: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
  hint: {
    textAlign: 'center',
    color: Colors.textMuted,
    fontSize: 12,
    marginTop: 16,
  },
});
