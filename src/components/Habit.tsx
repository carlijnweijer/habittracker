"use client";

import { Habit as HabitType } from "@/types";
import HabitCalendar from "./HabitCalendar";
import { PencilIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

interface HabitProps extends HabitType {
  onUpdate: (habit: HabitType) => void;
}

const Habit = (habit: HabitProps) => {
  const { onUpdate } = habit;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentHabit, setCurrentHabit] = useState<HabitType | null>(habit);
  const [newName, setNewName] = useState("");

  const handleEditClick = (habit: HabitType) => {
    setCurrentHabit(habit);
    setNewName(habit.name);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (currentHabit) {
      onUpdate(currentHabit);
      setIsModalOpen(false);
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };
  // const onEditButtonClick = (habitId: string) => {
  //   const newName = prompt(habitId, "Enter new habit name:");

  //   if (newName) {
  //     console.log("Updating habit name to:", newName);
  //   }
  // };

  return (
    <li className="grid grid-rows-[30px_1fr_30px] gap-4 p-2 bg-backgroundTertiary rounded list-none min-w-[220px]">
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md w-96 relative">
            <h2 className="text-lg font-bold mb-4">Edit Habit Name</h2>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
              >
                Save
              </button>
              <button
                onClick={handleClose}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between">
        <h2 className="font-bold text-lg">{habit.name}</h2>
        <button
          onClick={() => handleEditClick(habit)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-backgroundTertiary hover:bg-backgroundSecondary text-white shadow-md transition-transform transform hover:scale-110"
          aria-label="Add Habit"
        >
          <PencilIcon width={16} height={16} />
        </button>
      </div>
      <div className="">
        <HabitCalendar habit={habit} onClick={onUpdate} />
      </div>
      <p className="font-light text-sm tracking-wide">
        streak: {habit.streak} 🔥
      </p>
    </li>
  );
};

export default Habit;
