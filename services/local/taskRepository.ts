import { mockCalendarTasks, mockTodayTasks } from '@/data/mockData';
import { Task } from '@/models/Task';

/**
 * Local data layer — swap for Firebase taskService when backend is ready.
 */

let tasks: Task[] = [...mockTodayTasks];

export const taskRepository = {
  getTodayTasks(): Task[] {
    return tasks;
  },

  getTasksByDate(date: string): Task[] {
    if (date === '2023-05-15') {
      return mockCalendarTasks;
    }
    return tasks.filter((t) => t.dueDate === date);
  },

  toggleComplete(taskId: string): Task[] {
    tasks = tasks.map((t) =>
      t.id === taskId ? { ...t, isCompleted: !t.isCompleted } : t
    );
    return tasks;
  },

  getAll(): Task[] {
    return tasks;
  },
};
