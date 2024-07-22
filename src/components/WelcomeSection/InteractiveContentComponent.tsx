import { motion, AnimatePresence } from "framer-motion";

import { welcomeSectionDataStore } from "@/lib/appStateStore";

import { cn } from "@/lib/utils";
import { RxChevronRight } from "react-icons/rx";

export default function InteractiveContentAndButtonsJSXComponent() {
  const storeHandler = welcomeSectionDataStore();

  const x = "flex flex-col items-start";

  const h2Styles: string = 'flex text-lg md:text-2xl tracking-wider text-slate-400 uppercase max-w-[320px] mb-2 md:mb-4';
  const liStyles: string =  'group relative bg-clip-text text-transparent bg-gradient-to-b from-slate-400 via-slate-500 to-slate-500';
  const ulStyles: string = 'max-w-[320px] md:max-w-[430px] lg:max-w-[530px] mb-8 flex flex-col items-start justify-center gap-1';
  const liWrapperStyles: string = 'bg-clip-text text-lg md:text-2xl font-bold';

  return (
    <>
      <AnimatePresence mode="wait">
        <div className="py-4 px-2">
          {storeHandler.stage === 0
            ? [storeHandler.items[0]].map((el, idx) => (
                <span key={`${idx} - span-welcome`} className={cn(x)}>
                  <ul className={cn(ulStyles, liWrapperStyles)}>
                    {el.liItem1 ? (
                      <motion.li
                        className={cn(liStyles)}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0 }}
                      >
                        <span className=" group relative bg-clip-text text-lg text-transparent bg-gradient-to-b from-zinc-100 via-slate-200 to-slate-200">
                          <span className="absolute hidden group-hover:flex text-cyan-400 top-1 -left-8 z-40">
                            <RxChevronRight size={22} />
                          </span>
                          {el.liItem1}
                        </span>
                      </motion.li>
                    ) : null}
                    {el.liItem2 ? (
                      <motion.li
                        className={cn(liStyles)}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <span className=" group relative bg-clip-text text-lg text-transparent bg-gradient-to-b from-zinc-100 via-slate-200 to-slate-200">
                          <span className="absolute hidden group-hover:flex text-cyan-400 top-1 -left-8 z-40">
                            <RxChevronRight size={22} />
                          </span>
                          {el.liItem2}
                        </span>
                      </motion.li>
                    ) : null}
                    {el.liItem3 ? (
                      <motion.li
                        className={cn(liStyles)}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                      >
                        <span className=" group relative bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 via-slate-200 to-slate-200">
                          <span className="absolute hidden group-hover:flex text-cyan-400 top-1 -left-8 z-40">
                            <RxChevronRight size={22} />
                          </span>
                          {el.liItem3}
                        </span>
                      </motion.li>
                    ) : null}
                    {el.liItem4 ? (
                      <motion.li
                        className={cn(liStyles)}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                      >
                        <span className=" group relative bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 via-slate-200 to-slate-200">
                          <span className="absolute hidden group-hover:flex text-cyan-400 top-1 -left-8 z-40">
                            <RxChevronRight size={22} />
                          </span>
                          {el.liItem4}
                        </span>
                      </motion.li>
                    ) : null}
                  </ul>
                </span>
              ))
            : null}
          {storeHandler.stage === 1
            ? [storeHandler.items[1]].map((el, idx) => (
                <span key={`${idx} - span-welcome`} className={cn(x)}>
                  <ul className={cn(ulStyles, liWrapperStyles)}>
                    {el.liItem1 ? (
                      <motion.li
                        className={cn(liStyles)}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0 }}
                      >
                        <span className=" group relative bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 via-slate-200 to-slate-200">
                          <span className="absolute hidden group-hover:flex text-cyan-400 top-1 -left-8 z-40">
                            <RxChevronRight size={22} />
                          </span>
                          {el.liItem1}
                        </span>
                      </motion.li>
                    ) : null}
                    {el.liItem2 ? (
                      <motion.li
                        className={cn(liStyles)}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <span className=" group relative bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 via-slate-200 to-slate-200">
                          <span className="absolute hidden group-hover:flex text-cyan-400 top-1 -left-8 z-40">
                            <RxChevronRight size={22} />
                          </span>
                          {el.liItem2}
                        </span>
                      </motion.li>
                    ) : null}
                    {el.liItem3 ? (
                      <motion.li
                        className={cn(liStyles)}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                      >
                        <span className=" group relative bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 via-slate-200 to-slate-200">
                          <span className="absolute hidden group-hover:flex text-cyan-400 top-1 -left-8 z-40">
                            <RxChevronRight size={22} />
                          </span>
                          {el.liItem3}
                        </span>
                      </motion.li>
                    ) : null}
                    {el.liItem4 ? (
                      <motion.li
                        className={cn(liStyles)}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                      >
                        <span className=" group relative bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 via-slate-200 to-slate-200">
                          <span className="absolute hidden group-hover:flex text-cyan-400 top-1 -left-8 z-40">
                            <RxChevronRight size={22} />
                          </span>
                          {el.liItem4}
                        </span>
                      </motion.li>
                    ) : null}
                  </ul>
                </span>
              ))
            : null}
          {storeHandler.stage === 2
            ? [storeHandler.items[2]].map((el, idx) => (
                <span key={`${idx} - span-welcome`} className={cn(x)}>
                  <ul className={cn(ulStyles, liWrapperStyles)}>
                    <motion.li
                      className="bg-clip-text"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0 }}
                    >
                      <li className={cn(liStyles)}>
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 via-slate-200 to-slate-200">
                          {el.liItem1}
                        </span>
                      </li>
                    </motion.li>
                    <motion.li
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: -0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <li className={cn(liStyles)}>
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 via-slate-200 to-slate-200">
                          {el.liItem2}
                        </span>
                      </li>
                    </motion.li>
                    <motion.li
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: -0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <li className={cn(liStyles)}>
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 via-slate-300 to-slate-400">
                          {el.liItem3}
                        </span>
                      </li>
                    </motion.li>
                    <motion.li
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: -0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                    >
                      <li className={cn(liStyles)}>
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 via-slate-300 to-slate-400">
                          {el.liItem4}
                        </span>
                      </li>
                    </motion.li>
                  </ul>
                </span>
              ))
            : null}
        </div>
      </AnimatePresence>
    </>
  );
}
