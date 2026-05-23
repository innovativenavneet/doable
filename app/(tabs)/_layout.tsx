import { Slot } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Colors } from '@/constants/theme';
import { BottomTabBar } from '@/views/components/shared/BottomTabBar';

export default function TabsLayout() {
  return (
    <View style={styles.container}>
      <Slot />
      <BottomTabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
