import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";


// UNUSED


export default function LoadingReactComponent() {
  return (
    <AnimatePresence>
      <span className={cn("flex  justify-center relative")}>
        <svg
          className="absolute"
          width="53"
          height="132"
          viewBox="0 0 53 132"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ x: 0, pathLength: 0 }}
            whileInView={{ x: 0, opacity: 1, pathLength: 1 }}
            transition={{
              duration: 4,
              delay: 0.2,
              // repeat: Infinity,
              repeatType: "mirror",
              repeatDelay: 1,
            }}
            d="M45.1335 27.5962C50.828 48.0962 49.2782 86.5962 45.1335 104.096C37.673 135.596 17.1379 135.611 8.13356 104.096C3.13342 86.5962 2.13351 46.0962 8.13356 27.5962M8.13356 27.5962C18.3851 -4.01239 36.435 -3.71806 45.1335 27.5962C50.828 48.0962 49.2782 86.5962 45.1335 104.096C37.673 135.596 17.1379 135.611 8.13356 104.096C3.13342 86.5962 2.13351 46.0962 8.13356 27.5962Z"
            stroke="#94a3b8"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="absolute top-[24px]"
          width="118"
          height="83"
          viewBox="0 0 118 83"
          fill="none"
        >
          <motion.path
            initial={{ x: 0, pathLength: 0 }}
            whileInView={{ x: 0, opacity: 1, pathLength: 1 }}
            transition={{
              duration: 4,
              delay: 0.2,
              // repeat: Infinity,
              repeatType: "mirror",
              repeatDelay: 1,
            }}
            d="M34.6379 6.52592C55.2386 11.8444 87.8058 32.4364 100.889 44.776C124.438 66.9869 114.183 84.778 82.3889 76.8188C64.7333 72.399 29.1594 53.015 16.1379 38.5688M16.1379 38.5688C-6.11017 13.8864 3.16972 -1.59813 34.6379 6.52592C55.2386 11.8444 87.8058 32.4364 100.889 44.776C124.438 66.9869 114.183 84.778 82.3889 76.8188C64.7333 72.399 29.1594 53.015 16.1379 38.5688Z"
            stroke="#94a3b8"
            stroke-width="7"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="absolute top-[24px]"
          width="118"
          height="82"
          viewBox="0 0 118 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ x: 0, pathLength: 0 }}
            whileInView={{ x: 0, opacity: 1, pathLength: 1 }}
            transition={{
              duration: 4,
              delay: 0.2,
              // repeat: Infinity,
              repeatType: "mirror",
              repeatDelay: 1,
            }}
            d="M16.9272 44.793C31.8335 29.6115 65.9504 11.7036 83.1783 6.54299C114.188 -2.74598 124.468 15.0307 101.678 38.5859C89.0228 51.6662 54.4487 72.7821 35.4272 76.8359M35.4272 76.8359C2.92761 83.7621 -5.84247 67.9832 16.9272 44.793C31.8335 29.6115 65.9504 11.7036 83.1783 6.54299C114.188 -2.74598 124.468 15.0307 101.678 38.5859C89.0228 51.6662 54.4487 72.7821 35.4272 76.8359Z"
            stroke="#94a3b8"
            stroke-width="7"
            strokeLinecap="round"
          />
        </svg>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 1.8,
            // repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 4,
          }}
          className="absolute top-[55px] flex"
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10.5" cy="10.5" r="10.5" fill="#94a3b8" />
          </svg>
        </motion.div>
      </span>
    </AnimatePresence>
  );
}
