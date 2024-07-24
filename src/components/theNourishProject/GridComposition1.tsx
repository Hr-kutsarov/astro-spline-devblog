import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";

import { motion, useScroll } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { RxChevronRight } from "react-icons/rx";

const GridComposition = () => {

    

    const [state, setState] = useState<any>(null);
    const [x, setX] = useState<any>(0);


    const [screenH, setScreenH] = useState<any>(null);
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
        // console.log(scroll)
        // setState(scroll);
        if ((scroll > 1) && (scroll < screenH * 0.2)) {
            setX(1)
        } else if ((scroll > screenH * 0.2) && (scroll < screenH * 0.5)) {
            setX(2)
        } else if ((scroll > screenH * 0.5) && (scroll > 1)) {
            setX(3)
        }
    
    });

    useEffect(() => {
        const screenHeight = window.screen.height;
        setScreenH(screenHeight);
    }, [])

    const s1: string = "flex w-full h-full pb-4 px-4 lg:px-8 bg-gradient-to-r from-zinc-100 via-slate-100 to-slate-100";
    const bgColors1: string = "bg-gradient-to-br from-emerald-900 via-slate-800 to-slate-800 group-hover:from-green-500 transition-all cursor-pointer group-hover:via-emerald-500 group-hover:to-emerald-500 hover:text-white "
    const centered: string = 'items-center justify-center ';
    const largeH1: string = "text-4xl lg:text-8xl text-slate-700 items-center justify-center flex w-auto";
    const smallText: string = "text-sm font-semibold tracking-wide even:italic even:text-slate-300 odd:text-zinc-400";
    const largeTextWrapper: string = "min-h-40 w-full flex flex-col lg:flex-row items-center justify-start ml-[11%] lg:gap-24 gap-8"

    const span2: string = " mt-5"
    return (
      <ReactLenis
        options={{ lerp: 0.067, duration: 1.4, gestureOrientation: "vertical" }}
        root
      >
        <section className="grid grid-cols-6  w-full">
          <span
            className={cn(
              "group",
              centered,
              "flex col-span-5 xl:col-span-4 w-full min-h-[37vh] bg-zinc-100 overflow-hidden"
            )}
          >
            {/* on group hover: bg color changes, button gets outlined, text color changes, animated logo appears */}
            <AnimatePresence mode="wait">
              <motion.span
                className={cn("w-full h-full flex ", centered, "relative", )}
              >
                {x===1 ? (
                  <motion.span
                    className={cn(s1, centered)}
                    initial={{ opacity: 0.2, x: 140 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.3 }}
                    exit={{ opacity: 0, x: -100 }}
                  >
                    <span 
                    className={cn(largeTextWrapper)}>
                        <h1 className={cn(largeH1)}>For chefs</h1>
                        <motion.span 
                        initial={{opacity: 0.2}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.2, duration: 0.7, delayChildren: 0.2}}
                        className={cn(span2)}>
                        <p className={cn(smallText)}>Lorem ipsum dolor sit amet.</p>
                        <p className={cn(smallText)}>Lorem ipsum dolor sit amet.</p>
                        </motion.span>
                    </span>
                  </motion.span>
                ) : null}
                {x===2 ? (
                  <motion.span
                  className={cn(s1, centered)}
                  initial={{ opacity: 0, x: 140 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.3 }}
                  exit={{ opacity: 0, x: -100 }}
                >
                    <span className={cn(largeTextWrapper)}>
                        <h1 className={cn(largeH1)}>For athletes</h1>
                        <motion.span 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.2, duration: 0.7, delayChildren: 0.2}}
                        className={cn(span2)}>
                        <p className={cn(smallText)}>Lorem ipsum dolor sit amet.</p>
                        <p className={cn(smallText)}>Lorem ipsum dolor sit amet.</p>
                        </motion.span>
                    </span>
                </motion.span>
                ) : null}
                {x=== 3 ? (
                  <motion.span
                  className={cn(s1, centered)}
                  initial={{ opacity: 0.5, x: 140 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.3 }}
                  exit={{ opacity: 0, x: -100 }}
                >
                    <span className={cn(largeTextWrapper)}>
                        <h1 className={cn(largeH1)}>For you</h1>
                        <motion.span 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.2, duration: 1.3, delayChildren: 0.2}}
                        className={cn(span2)}>
                        <p className={cn(smallText)}>Lorem ipsum dolor sit amet.</p>
                        <p className={cn(smallText)}>Lorem ipsum dolor sit amet.</p>
                        </motion.span>
                    </span>
                </motion.span>
                ) : null}
              </motion.span>
            </AnimatePresence>
          </span>
          <span
            className={cn(
              
              "flex col-span-1 w-full min-h-[27vh]  overflow-hidden group",
              
            )}
          >
            {/* {x} {state} */}
            <a href="#demo" className={cn(bgColors1,centered, 'flex overflow-hidden w-full h-full')}>
                <span className="flex xl:hidden text-zinc-50 opacity-50 group-hover:opacity-100 p-4"><RxChevronRight size={32} /></span>
                <span className="hidden xl:flex text-zinc-50 font-thin tracking-tight text-6xl">Explore</span>
            </a>
          </span>
          <span
          className={cn(
            'hidden xl:flex w-full h-full col-span-1 min-h-[27vh] overflow-hidden',
            "bg-gradient-to-r from-slate-200 via-slate-100 to-zinc-100",
            centered
          )}
          >
            <a href="#hero__text" className='text-sm font-semibold tracking-wide text-zinc-400 p-24'>
              Return
            </a>
          </span>
        </section>
      </ReactLenis>
    );
}

export default GridComposition;