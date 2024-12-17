"use client";

import { Habit as HabitType } from "@/types";
import React, { useEffect } from "react";
import Habit from "./Habit";

interface HabitListProps {
  habits: HabitType[];
  setHabits: React.Dispatch<React.SetStateAction<HabitType[]>>;
}

const HabitList: React.FC<HabitListProps> = ({ habits, setHabits }) => {
  const today = new Date().toDateString();

  // Reset completed state if lastCompleted is not today
  useEffect(() => {
    setHabits((prevHabits: HabitType[]) =>
      prevHabits.map((habit) => {
        if (habit.lastCompleted !== today) {
          return { ...habit, completed: false };
        }
        return habit;
      })
    );
  }, [today, setHabits]);

  // Save habits to localStorage whenever they change
  useEffect(() => {
    window.localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const handleUpdateHabit = (updatedHabit: HabitType) => {
    setHabits((prevHabits: HabitType[]) =>
      prevHabits.map((habit) =>
        habit.id === updatedHabit.id ? updatedHabit : habit
      )
    );
  };

  return (
    <ul className="flex flex-col gap-4 bg-backgroundSecondary p-4 rounded border border-backgroundTertiary">
      {habits.map((habit: HabitType) => (
        <Habit key={habit.id} {...habit} onUpdate={handleUpdateHabit} />
      ))}
    </ul>
  );
};

export default HabitList;
