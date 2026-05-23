import {
  mockDailyProgress,
  mockTaskSummary,
  mockTodayTasks,
  mockUser,
} from '@/data/mockData';
import { DailyProgress, TaskSummary } from '@/models/Progress';
import { Task } from '@/models/Task';
import { UserProfile } from '@/models/User';
import { taskRepository } from '@/services/local/taskRepository';

export class HomeController {
  getUser(): UserProfile {
    return mockUser;
  }

  getProgress(): DailyProgress {
    const tasks = taskRepository.getTodayTasks();
    const completed = tasks.filter((t) => t.isCompleted).length;
    const total = tasks.length;
    return {
      ...mockDailyProgress,
      completed,
      total,
      percent: total > 0 ? Math.round((completed / total) * 100) : 0,
    };
  }

  getSummary(): TaskSummary {
    const tasks = taskRepository.getTodayTasks();
    const done = tasks.filter((t) => t.isCompleted).length;
    return {
      total: tasks.length,
      done,
      pending: tasks.length - done,
    };
  }

  getTodayTasks(): Task[] {
    return taskRepository.getTodayTasks();
  }

  toggleTask(taskId: string): Task[] {
    return taskRepository.toggleComplete(taskId);
  }
}

export const homeController = new HomeController();
