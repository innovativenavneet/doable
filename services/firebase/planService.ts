/**
 * Firestore plan CRUD placeholder.
 * Collection path: users/{uid}/plans/{planId}
 */

export interface Plan {
  id: string;
  title: string;
  description?: string;
  startDate: string;
  targetDate: string;
  status: 'not_started' | 'in_progress' | 'completed' | 'on_hold';
  category: string;
  color: string;
  milestones: { id: string; title: string; targetDate?: string; isCompleted: boolean }[];
}

export async function fetchPlans(_userId: string): Promise<Plan[]> {
  return [];
}

export async function createPlan(_userId: string, _plan: Omit<Plan, 'id'>): Promise<Plan> {
  throw new Error('Firebase not configured');
}
