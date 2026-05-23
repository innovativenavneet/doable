import { StyleSheet, Text, View } from 'react-native';
import { USER_DISPLAY } from '@/constants/config';
import { Colors, Typography } from '@/constants/theme';
import { UserProfile } from '@/models/User';

interface Props {
  user: UserProfile;
}

export function HomeHeader({ user }: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.textBlock}>
        <Text style={styles.greeting}>{USER_DISPLAY.greeting}</Text>
        <Text style={styles.hello}>
          Hello, {user.name} 👋
        </Text>
      </View>
      <View style={styles.avatar}>
        <Text style={styles.initial}>{user.initial}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  textBlock: {
    flex: 1,
  },
  greeting: {
    ...Typography.greeting,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  hello: {
    ...Typography.title,
    color: Colors.textPrimary,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initial: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.white,
  },
});
