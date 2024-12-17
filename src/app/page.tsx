"use client";

import HabitList from "@/components/HabitList";
import Header from "@/components/layout/Header";
import { Habit as HabitType } from "@/types";
import { PlusIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

export default function Home() {
  const initialHabits: HabitType[] = [
    {
      id: "1",
      name: "Exercise",
      streak: 0,
      lastCompleted: "12-12-2024",
      entries: [
        { id: "1", completed: "11-12-2024" },
        { id: "2", completed: "12-12-2024" },
      ],
    },
  ];
  // Load habits from localStorage or use initialHabits
  const [habits, setHabits] = useState(() => {
    const savedHabits = window.localStorage.getItem("habits");
    return savedHabits ? JSON.parse(savedHabits) : initialHabits;
  });

  const addHabit = () => {
    const newHabit = {
      id: Date.now(),
      name: "New Habit",
      entries: [],
    };
    setHabits((prev: HabitType[]) => [...prev, newHabit]);
  };

  useEffect(() => {
    console.log("habits", habits);
  }, [habits]);

  return (
    <div className="grid grid-rows-[30px_1fr_30px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="row-start-1 flex items-center justify-center">
        <Header />
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-end">
        <button
          onClick={addHabit}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-backgroundTertiary hover:bg-backgroundSecondary text-white shadow-md transition-transform transform hover:scale-110"
          aria-label="Add Habit"
        >
          <PlusIcon className="h-6 w-6" />
        </button>
        <HabitList habits={habits} setHabits={setHabits} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <h3>footer</h3>
      </footer>
    </div>
  );
}
