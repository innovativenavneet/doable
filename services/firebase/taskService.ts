import { Task } from '@/models/Task';

/**
 * Firestore task CRUD placeholder.
 * Collection path: users/{uid}/tasks/{taskId}
 */

export async function fetchTasks(_userId: string): Promise<Task[]> {
  return [];
}

export async function createTask(_userId: string, _task: Omit<Task, 'id'>): Promise<Task> {
  throw new Error('Firebase not configured');
}

export async function updateTask(
  _userId: string,
  _taskId: string,
  _updates: Partial<Task>
): Promise<void> {
  throw new Error('Firebase not configured');
}

export async function deleteTask(_userId: string, _taskId: string): Promise<void> {
  throw new Error('Firebase not configured');
}
