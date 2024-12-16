"use client";

import React, { useState } from "react";
import { format, subDays, eachDayOfInterval } from "date-fns";
import { HabitEntry, Habit as HabitType } from "@/types";
import { motion } from "framer-motion";

// Function to generate the past 30 days
const generatePastDays = (numDays = 30) => {
  const endDate = new Date();
  const startDate = subDays(endDate, numDays - 1);
  return eachDayOfInterval({ start: startDate, end: endDate });
};

interface HabitCalendarProps {
  habit: HabitType;
  onClick: (habit: HabitType) => void;
}

const HabitCalendar: React.FC<HabitCalendarProps> = ({ habit, onClick }) => {
  const [entries, setEntries] = useState(habit.entries);
  const pastDays = generatePastDays(30);

  // Create a lookup for completed dates
  const completedDates = new Set(
    entries
      .filter((e: HabitEntry) => e.completed)
      .map((e: HabitEntry) => e.completed)
  );

  // Create a lookup for entries by date
  const entryMap = entries.reduce<Record<string, HabitEntry>>(
    (acc, entry: HabitEntry) => {
      if (!entry.completed) return acc;
      acc[entry.completed] = entry;
      return acc;
    },
    {}
  );

  const handleDayClick = (dateString: string) => {
    const existingEntry = entryMap[dateString];

    let updatedEntries;

    if (existingEntry) {
      // Toggle the existing entry
      updatedEntries = entries.filter(
        (entry) => entry.completed !== dateString
      );
    } else {
      // Add a new entry for the day
      updatedEntries = [
        ...entries,
        {
          id: `entry-${dateString}`,
          completed: dateString,
        },
      ];
    }

    // Update the habit with the new entries
    const updatedHabit = {
      ...habit,
      lastCompleted: dateString,
      entries: updatedEntries,
    };
    onClick(updatedHabit);
    setEntries(updatedEntries);
    return updatedEntries;
  };

  return (
    <div className="grid grid-cols-7 place-items-center gap-1">
      {pastDays.map((day) => {
        const dateString = format(day, "dd-MM-yyyy");
        const isCompleted = completedDates.has(dateString);

        return (
          <motion.div
            key={dateString}
            className={`w-4 h-4 m-[5px] rounded-sm ${
              isCompleted ? "bg-emerald-600" : "bg-background"
            }`}
            title={dateString}
            whileHover={{ scale: 1.1 }}
            onClick={() => handleDayClick(dateString)}
          ></motion.div>
        );
      })}
    </div>
  );
};

export default HabitCalendar;
