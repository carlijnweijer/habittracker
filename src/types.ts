export interface HabitEntry {
  id: string;
  completed: string | null;
  count?: number;
}

export interface Habit {
  id: string;
  name: string;
  lastCompleted: string | null;
  streak: number;
  entries: HabitEntry[];
}
