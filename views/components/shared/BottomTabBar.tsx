import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Radius } from '@/constants/theme';

type TabKey = 'home' | 'calendar' | 'alerts' | 'profile';

const TABS: { key: TabKey; label: string; route: string; icon: keyof typeof Ionicons.glyphMap }[] = [
  { key: 'home', label: 'Home', route: '/', icon: 'home' },
  { key: 'calendar', label: 'Calendar', route: '/(tabs)/calendar', icon: 'calendar-outline' },
  { key: 'alerts', label: 'Alerts', route: '/(tabs)/alerts', icon: 'notifications-outline' },
  { key: 'profile', label: 'Profile', route: '/(tabs)/profile', icon: 'person-outline' },
];

function getActiveTab(pathname: string): TabKey {
  if (pathname.includes('calendar')) return 'calendar';
  if (pathname.includes('alerts')) return 'alerts';
  if (pathname.includes('profile')) return 'profile';
  return 'home';
}

export function BottomTabBar() {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();
  const active = getActiveTab(pathname);

  return (
    <View style={[styles.wrapper, { paddingBottom: Math.max(insets.bottom, 12) }]}>
      <View style={styles.bar}>
        {TABS.slice(0, 2).map((tab) => (
          <TabItem
            key={tab.key}
            tab={tab}
            isActive={active === tab.key}
            isProfileStyle={tab.key === 'profile' && active === 'profile'}
            onPress={() => router.push(tab.route as '/')}
          />
        ))}

        <Pressable
          style={styles.fab}
          onPress={() => router.push('/add-task')}
        >
          <Ionicons name="add" size={28} color={Colors.white} />
        </Pressable>

        {TABS.slice(2).map((tab) => (
          <TabItem
            key={tab.key}
            tab={tab}
            isActive={active === tab.key}
            isProfileStyle={tab.key === 'profile' && active === tab.key}
            onPress={() => router.push(tab.route as '/')}
          />
        ))}
      </View>
    </View>
  );
}

function TabItem({
  tab,
  isActive,
  isProfileStyle,
  onPress,
}: {
  tab: (typeof TABS)[0];
  isActive: boolean;
  isProfileStyle: boolean;
  onPress: () => void;
}) {
  const color = isActive ? Colors.primary : Colors.navInactive;

  const content = (
    <>
      <Ionicons
        name={isActive ? (tab.icon.replace('-outline', '') as keyof typeof Ionicons.glyphMap) : tab.icon}
        size={22}
        color={color}
      />
      <Text style={[styles.label, { color }]}>{tab.label}</Text>
    </>
  );

  if (isProfileStyle) {
    return (
      <Pressable style={styles.tab} onPress={onPress}>
        <View style={styles.profileActiveBorder}>{content}</View>
      </Pressable>
    );
  }

  return (
    <Pressable style={styles.tab} onPress={onPress}>
      {content}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.background,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
    paddingTop: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
    paddingBottom: 4,
  },
  label: {
    fontSize: 11,
    fontWeight: '500',
  },
  fab: {
    width: 56,
    height: 56,
    borderRadius: Radius.lg,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    marginBottom: 8,
    marginTop: -20,
  },
  profileActiveBorder: {
    borderWidth: 1.5,
    borderColor: Colors.white,
    borderRadius: Radius.lg,
    paddingHorizontal: 14,
    paddingVertical: 6,
    alignItems: 'center',
    gap: 4,
  },
});
