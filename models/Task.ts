export type TaskPriority = 'high' | 'medium' | 'low';
export type TaskCategory = 'Work' | 'Health' | 'Personal' | 'Errands';

export interface Task {
  id: string;
  title: string;
  description?: string;
  time: string;
  category: TaskCategory;
  accentColor: string;
  isCompleted: boolean;
  dueDate: string;
  priority?: TaskPriority;
}
