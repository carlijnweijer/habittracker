export interface Habit {
  id: number;
  name: string;
  completed: boolean;
  streak: number;
  lastCompleted: string | null;
}
