import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from 'framer-motion';


//  UNUSED


export default function MainSectionWelcomeAnimation() {
    return (
        // <span className="px-4 justify-center flex flex-col w-full h-auto max-h-[100vh] max-w-[660px] border-2 border-slate-500/5 border-dotted min-h-[74vh] mt-14">
        <AnimatePresence mode='sync'>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 1,
                  stiffness: 25,
                  type: "spring",
                }}
                className={cn(
                  "items-center flex flex-col relative overflow-hidden"
                )}
              >
                <span className="text-8xl mb-4 flex overflow-hidden">
                    <motion.h1
                    initial={{letterSpacing: '0em', opacity: 1, scale: 1}}
                    animate={{letterSpacing: '10em', opacity: 0, scale: 12}}
                    transition={{repeat: 1, repeatType: 'loop', duration: 5, delay: 2, repeatDelay: 7, ease: 'easeInOut'}}
                    className="bg-clip-text text-transparent bg-gradient-to-b from-slate-500 to-slate-600">
                        Welcome
                    </motion.h1>
                </span>
              </motion.span>
              <motion.h2 
              initial={{y: 40, opacity: 0}}
              whileInView={{y: -40, opacity: 1}}
              transition={{repeat: 1, repeatType: 'mirror', duration: 1.4, delay: 2.4, repeatDelay: 9.5, type: 'spring'}}
              className="text-4xl mb-4 flex w-full justify-center font-semibold text-slate-500 tracking-wide">
                from graphic design to web development
              </motion.h2>
              <motion.p 
              initial={{y: 40, opacity: 0}}
              whileInView={{y: -40, opacity: 1}}
              transition={{repeat: 1 , repeatType: 'mirror', duration: 1.4, delay: 3.3, repeatDelay: 9.5, type: 'spring'}}
              className="flex text-2xl w-full justify-center font-semibold text-slate-500 tracking-wide gap-2 ">
                and let's talk about 
                <span className='text-cyan-600'>
                  React
                </span>
              </motion.p>
        </AnimatePresence>

        // </span>

    )
}
