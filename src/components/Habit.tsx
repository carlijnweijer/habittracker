"use client";

import { Habit as HabitType } from "@/types";
import { AnimatePresence, motion } from "framer-motion";

interface HabitProps extends HabitType {
  onClick: () => void;
}

const Habit = ({ name, completed, streak, onClick }: HabitProps) => {
  return (
    <li className="grid grid-cols-[30px_1fr] p-2 bg-white rounded list-none border min-w-[220px]">
      <div className="col-start-1 flex items-center justify-center">
        <AnimatedCheckIcon isVisible={completed} />
      </div>

      <motion.button
        className="col-start-2 flex items-center justify-end w-full p-2 gap-1 text-right text-gray-800"
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
      >
        <p className="font-bold text-md">{name}</p>
        <p className="font-medium text-sm">{streak} 🔥</p>
      </motion.button>
    </li>
  );
};

export default Habit;

function AnimatedCheckIcon({
  initial = true,
  isVisible,
}: {
  initial?: boolean;
  isVisible: boolean;
}) {
  return (
    <AnimatePresence initial={initial}>
      {isVisible && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          className="stroke-emerald-400"
          width={24}
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            exit={{ pathLength: 0 }}
            transition={{
              type: "tween",
              duration: 0.3,
              ease: isVisible ? "easeOut" : "easeIn",
            }}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      )}
    </AnimatePresence>
  );
}
