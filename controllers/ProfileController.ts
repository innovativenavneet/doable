import { mockProfileMenu, mockUser, mockUserStats } from '@/data/mockData';
import { ProfileMenuItem } from '@/models/ProfileMenuItem';
import { UserProfile, UserStats } from '@/models/User';

export class ProfileController {
  getUser(): UserProfile {
    return mockUser;
  }

  getStats(): UserStats {
    return mockUserStats;
  }

  getMenuItems(): ProfileMenuItem[] {
    return mockProfileMenu;
  }
}

export const profileController = new ProfileController();
