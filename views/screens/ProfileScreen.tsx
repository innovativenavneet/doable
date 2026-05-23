import { StyleSheet, Text } from 'react-native';
import { profileController } from '@/controllers/ProfileController';
import { Colors } from '@/constants/theme';
import { ProfileHeader } from '@/views/components/profile/ProfileHeader';
import { ProfileMenuCard } from '@/views/components/profile/ProfileMenuCard';
import { ProfileStatsRow } from '@/views/components/profile/ProfileStatsRow';
import { ScreenContainer } from '@/views/components/shared/ScreenContainer';

export function ProfileScreen() {
  const user = profileController.getUser();
  const stats = profileController.getStats();
  const menuItems = profileController.getMenuItems();

  return (
    <ScreenContainer>
      <Text style={styles.screenTitle}>Profile</Text>
      <ProfileHeader user={user} />
      <ProfileStatsRow stats={stats} />
      {menuItems.map((item) => (
        <ProfileMenuCard key={item.id} item={item} />
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 8,
  },
});
