"use client";

import { Habit as HabitType } from "@/types";
// import { AnimatePresence, motion } from "framer-motion";
import HabitCalendar from "./HabitCalendar";

interface HabitProps extends HabitType {
  onUpdate: (habit: HabitType) => void;
}

{
  /* <div className="col-start-1 flex items-center justify-center">
        <AnimatedCheckIcon isVisible={completed} />
      </div> */
}

const Habit = (habit: HabitProps) => {
  return (
    <li className="grid grid-rows-[30px_1fr_30px] gap-4 p-2 bg-backgroundTertiary rounded list-none min-w-[220px]">
      <h2 className="font-bold text-lg">{habit.name}</h2>
      <div className="">
        <HabitCalendar habit={habit} onClick={habit.onUpdate} />
      </div>
      <p className="font-light text-sm tracking-wide">
        streak: {habit.streak} 🔥
      </p>

      {/* <motion.button
        className="col-start-2 flex items-center justify-end w-full p-2 gap-1 text-right"
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
      >
        <p className="font-bold text-md">{name}</p>
        <p className="font-medium text-sm">{streak} 🔥</p>
      </motion.button> */}
    </li>
  );
};

export default Habit;

// function AnimatedCheckIcon({
//   initial = true,
//   isVisible,
// }: {
//   initial?: boolean;
//   isVisible: boolean;
// }) {
//   return (
//     <AnimatePresence initial={initial}>
//       {isVisible && (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={2.5}
//           className="stroke-emerald-400"
//           width={20}
//         >
//           <motion.path
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             exit={{ pathLength: 0 }}
//             transition={{
//               type: "tween",
//               duration: 0.3,
//               ease: isVisible ? "easeOut" : "easeIn",
//             }}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M4.5 12.75l6 6 9-13.5"
//           />
//         </svg>
//       )}
//     </AnimatePresence>
//   );
// }
