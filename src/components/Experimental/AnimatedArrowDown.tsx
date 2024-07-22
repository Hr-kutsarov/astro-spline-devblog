import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const AnimatedArrowDownComponent = () => {
  return (
    <AnimatePresence>
      <motion.span      
      className={cn("flex rotate-90 bg-slate-100/5 backdrop-blur-sm items-center justify-center p-8 rounded-full ")}>
        <svg
          width="26"
          height="24"
          viewBox="0 0 24 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ x: 0, opacity: 0, pathLength: 0, pathSpacing: 0 }}
            animate={{ x: 0, opacity: 1, pathLength: 1, pathSpacing: 1 }}
            transition={{ duration: 1.4, delay: 0.1 , repeat: Infinity, repeatDelay: 3, repeatType: 'mirror'}}
            d="M7.78049 8.37143H3C1.89543 8.37143 1 9.26686 1 10.3714V12.7714C1 13.876 1.89543 14.7714 3 14.7714H7.78049C8.88506 14.7714 9.78049 15.6669 9.78049 16.7714V19.0927C9.78049 20.7235 11.6272 21.6687 12.95 20.7151L22.9365 13.5161C23.9875 12.7585 24.0518 11.2169 23.0676 10.3744L13.0811 1.82548C11.7835 0.714675 9.78049 1.6367 9.78049 3.34481V6.37143C9.78049 7.476 8.88506 8.37143 7.78049 8.37143Z"
            stroke="#fff"
            opacity="20%"
            strokeWidth="2"
          />
        </svg>
      </motion.span>
    </AnimatePresence>
  );
};

export default AnimatedArrowDownComponent;
