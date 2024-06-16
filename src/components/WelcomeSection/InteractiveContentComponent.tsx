import { motion, AnimatePresence } from "framer-motion"

import { welcomeSectionDataStore } from "@/lib/appStateStore"

import { cn } from "@/lib/utils";
import { RxChevronRight } from "react-icons/rx";

export default function InteractiveContentAndButtonsJSXComponent() {

    const storeHandler = welcomeSectionDataStore();
 
    const x = 'flex flex-col items-end'

    return (
        <>
        <AnimatePresence mode="popLayout">
        <div>
            {storeHandler.stage === 0 ? [storeHandler.items[0]].map((el, idx) => 
                <span key={`${idx} - span-welcome`} className={cn(x)}>
                    <motion.h2 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ duration: 0.2, delay: 0.2}}
                    className="hidden md:flex  text-lg md:text-2xl tracking-wider text-slate-400 uppercase max-w-[320px] mb-4 md:mb-8">
                        {el.subtitleText}
                    </motion.h2>
                    
                    <ul className=' max-w-[320px] md:max-w-[430px] lg:max-w-[530px] mb-8 flex flex-col items-end'>
                        <motion.li 
                        className='bg-clip-text '
                        initial={{x: -50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{ duration: 0.4, delay: 0}}>
                        
                        <li className="text-2xl font-bold">
                            
                            <span className=" group relative bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 via-slate-200 to-slate-200">
                                <span className='absolute hidden group-hover:flex text-cyan-400 top-1 -left-8 z-40'><RxChevronRight size={22} /></span>
                            {el.liItem1}
                            </span>
                        </li>
                        </motion.li>
                        <motion.li 
                        initial={{x: -50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{ duration: 0.4, delay: 0.2}}>
                            <li className="text-2xl font-bold">
                            <span className=" group relative bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 via-slate-200 to-slate-200">
                            <span className='absolute hidden group-hover:flex group-hover:translate-x-2 transition-all text-cyan-400 top-1 -left-8 z-40'><RxChevronRight size={22} /></span>
                                {el.liItem2}
                                </span>
                            </li>
                        </motion.li>
                        <motion.li 
                        initial={{x: -50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{ duration: 0.4, delay: 0.4}}>
                            <li className="text-2xl font-bold ">
                            <span className=" group relative bg-clip-text  text-transparent bg-gradient-to-b from-zinc-100 via-slate-200 to-slate-200">
                            <span className='absolute  hidden group-hover:flex  transition-all text-cyan-400 top-1 -left-8 z-40'><RxChevronRight size={22} /></span>
                                {el.liItem3}
                                </span>
                            </li>
                        </motion.li>
                        <motion.li 
                        initial={{x: -50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{ duration: 0.4, delay: 0.6}}>
                            <li className="text-2xl font-bold">
                            <span className=" group relative bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 via-slate-200 to-slate-200">
                            <span className='absolute hidden group-hover:flex group-hover:translate-x-2 transition-all text-cyan-400 top-1 -left-8 z-40'><RxChevronRight size={22} /></span>
                                {el.liItem4}
                                </span>
                            </li>
                        </motion.li>
                    </ul>
                </span>
            ) : null}
            {storeHandler.stage === 1 ? [storeHandler.items[1]].map((el, idx) => 
            
            <span key={`${idx} - span-welcome`} className={cn(x)}>
                    <motion.h2 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ duration: 0.2, delay: 0.2}}
                    className="hidden md:flex  items-end text-lg md:text-2xl tracking-wider text-slate-400 uppercase max-w-[320px] mb-4 md:mb-8">
                        {el.subtitleText}
                    </motion.h2>
                    <ul className=' max-w-[320px] md:max-w-[430px] mb-8 flex flex-col items-end'>
                    <motion.li 
                    className='bg-clip-text'
                    initial={{x: -50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{ duration: 0.4, delay: 0}}>
                    <li className="text-2xl font-bold">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 via-slate-200 to-slate-200">
                        {el.liItem1}
                        </span>
                    </li>
                    </motion.li>
                    <motion.li 
                    initial={{x: -50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{ duration: 0.4, delay: 0.2}}>
                        <li className="text-2xl font-bold">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 via-slate-200 to-slate-200">
                            {el.liItem2}
                            </span>
                        </li>
                    </motion.li>
                    <motion.li 
                    initial={{x: -50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{ duration: 0.4, delay: 0.4}}>
                        <li className="text-2xl font-bold">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 via-slate-200 to-slate-200">
                            {el.liItem3}
                            </span>
                        </li>
                    </motion.li>
                    <motion.li 
                    initial={{x: -50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{ duration: 0.4, delay: 0.6}}>
                        <li className="text-2xl font-bold">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 via-slate-200 to-slate-200">
                            {el.liItem4}
                            </span>
                        </li>
                    </motion.li>
                </ul>
            </span>
        ) : null}
        {storeHandler.stage === 2 ? [storeHandler.items[2]].map((el, idx) => 
            
            <span key={`${idx} - span-welcome`} className={cn(x)}>
                    <motion.h2 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ duration: 0.2, delay: 0.2}}
                    className="hidden md:flex w-full h-auto  text-nowrap justify-end flex-col items-end text-lg md:text-2xl tracking-wider text-slate-400 uppercase max-w-[320px] mb-4 md:mb-8">
                        {el.subtitleText}
                    </motion.h2>
                    <ul className=' max-w-[320px] md:max-w-[430px] mb-8 flex flex-col items-end'>
                    <motion.li 
                    className='bg-clip-text'
                    initial={{x: -50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{ duration: 0.4, delay: 0}}>
                    <li className="text-2xl font-bold">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 via-slate-200 to-slate-200">
                        {el.liItem1}
                        </span>
                    </li>
                    </motion.li>
                    <motion.li 
                    initial={{x: -50, opacity: 0}}
                    animate={{x: -0, opacity: 1}}
                    transition={{ duration: 0.4, delay: 0.2}}>
                        <li className="text-2xl font-bold">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 via-slate-200 to-slate-200">
                            {el.liItem2}
                            </span>
                        </li>
                    </motion.li>
                    <motion.li 
                    initial={{x: -50, opacity: 0}}
                    animate={{x: -0, opacity: 1}}
                    transition={{ duration: 0.4, delay: 0.4}}>
                        <li className="text-2xl font-bold">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 via-slate-300 to-slate-400">
                            {el.liItem3}
                            </span>
                        </li>
                    </motion.li>
                    <motion.li 
                    initial={{x: -50, opacity: 0}}
                    animate={{x: -0, opacity: 1}}
                    transition={{ duration: 0.4, delay: 0.6}}>
                        <li className="text-2xl font-bold">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 via-slate-300 to-slate-400">
                            {el.liItem4}
                            </span>
                        </li>
                    </motion.li>
                </ul>
            </span>
        ) : null}

        </div>
        </AnimatePresence>
        </>
    )
}