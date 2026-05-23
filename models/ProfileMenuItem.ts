import { ComponentProps } from 'react';
import { Ionicons } from '@expo/vector-icons';

export interface ProfileMenuItem {
  id: string;
  title: string;
  subtitle: string;
  icon: ComponentProps<typeof Ionicons>['name'];
  iconColor: string;
  iconBg: string;
}
