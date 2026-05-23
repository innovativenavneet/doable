import { Colors } from '@/constants/theme';
import { TaskCategory } from '@/models/Task';

const categoryMap: Record<TaskCategory, string> = {
  Work: Colors.primary,
  Health: Colors.teal,
  Personal: Colors.orange,
  Errands: Colors.pink,
};

export function getCategoryColor(category: TaskCategory): string {
  return categoryMap[category] ?? Colors.primary;
}
