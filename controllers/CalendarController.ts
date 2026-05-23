import { format } from 'date-fns';
import { Task } from '@/models/Task';
import { taskRepository } from '@/services/local/taskRepository';

export class CalendarController {
  private selectedDate: string = '2023-05-15';

  getSelectedDate(): string {
    return this.selectedDate;
  }

  setSelectedDate(date: string): void {
    this.selectedDate = date;
  }

  getTasksForSelectedDate(): Task[] {
    return taskRepository.getTasksByDate(this.selectedDate);
  }

  formatSelectedDateLabel(): string {
    const date = new Date(this.selectedDate + 'T12:00:00');
    return format(date, 'MMM d');
  }
}

export const calendarController = new CalendarController();
