"use client";

import { Habit as HabitType } from "@/types";
import React, { useEffect, useState } from "react";
import Habit from "./Habit";

const HabitList = () => {
  const today = new Date().toDateString();
  const daysThisMonth = new Date(2024, 12, 0).getDate();
  const firstDayOfMonth = new Date(2024, 12).getDay();

  console.log("days this month", daysThisMonth);
  console.log("first day of month", firstDayOfMonth);

  const initialHabits = [
    {
      id: 1,
      name: "Exercise",
      completed: false,
      streak: 0,
      lastCompleted: null,
    },
    { id: 2, name: "Read", completed: false, streak: 0, lastCompleted: null },
  ];

  // Load habits from localStorage or use initialHabits
  const [habits, setHabits] = useState(() => {
    const savedHabits = window.localStorage.getItem("habits");
    return savedHabits ? JSON.parse(savedHabits) : initialHabits;
  });

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
  }, [today]);

  // Save habits to localStorage whenever they change
  useEffect(() => {
    window.localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  // Toggle habit completion
  const toggleHabit = (id: number) => {
    setHabits((prevHabits: HabitType[]) =>
      prevHabits.map((habit: HabitType) => {
        if (habit.id === id) {
          if (habit.completed) {
            // If unchecking, reset the streak
            return {
              ...habit,
              completed: false,
              streak: habit.streak - 1,
              lastCompleted: null,
            };
          } else {
            // If checking, increment the streak and update lastCompleted
            return {
              ...habit,
              completed: true,
              streak: habit.streak + 1,
              lastCompleted: today,
            };
          }
        }
        return habit;
      })
    );
  };

  return (
    <ul className="flex flex-col gap-4 bg-backgroundSecondary p-4 rounded">
      {habits.map((habit: HabitType) => (
        <Habit
          key={habit.id}
          {...habit}
          onClick={() => toggleHabit(habit.id)}
        />
      ))}
    </ul>
  );
};

export default HabitList;
