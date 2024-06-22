import { motion, AnimatePresence } from "framer-motion"

import { aboutSectionDataStore, projectNourishStore, welcomeSectionDataStore } from "@/lib/appStateStore"

import { cn } from "@/lib/utils";
import { RxChevronRight } from "react-icons/rx";

export default function InteractiveProjectNourishJSXComponent() {

    const storeHandler = projectNourishStore();
 
    const x = 'flex flex-col items-start'

    const h2Styles: string = 'flex text-lg md:text-2xl tracking-wider text-slate-400 uppercase max-w-[320px] mb-4 md:mb-8';
    const liStyles: string =  'group relative bg-clip-text text-transparent bg-gradient-to-b from-slate-400 via-slate-500 to-slate-500';
    const ulStyles: string = 'max-w-[320px] md:max-w-[430px] lg:max-w-[530px] mb-8 flex flex-col items-start justify-center gap-4';
    const liWrapperStyles: string = 'bg-clip-text text-lg md:text-2xl font-bold';
    const pStyles: string = 'text-slate-500 italic ml-1 text-balance font-light'

    

    return (
        <>
        <AnimatePresence mode="wait">
        <div className='bg-transparent flex w-auto h-auto min-w-[330px] '>
            
            {storeHandler.stage === 0 ? [storeHandler.items[0]].map((el, idx) => 
                <span key={`${idx} - span-welcome`} className={cn(x)}>
                    <motion.h2 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ duration: 0.2, delay: 0.2}}
                    exit={{opacity: 0}}
                    className={cn(h2Styles)}>
                        {el.subtitleText}
                    </motion.h2>
                    
                    <ul className={cn(ulStyles)}>
                        {el.liItem1 ?                         
                        <motion.li 
                        className={cn(liWrapperStyles)}
                        initial={{x: -50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{ duration: 0.4, delay: 0}}>
                            <span className={cn(liStyles)}>
                                <span className='absolute hidden group-hover:flex text-cyan-400 top-1 -left-8 z-40'><RxChevronRight size={22} /></span>
                            {el.liItem1}
                            </span>
                            {el.pItem1 ? 
                            <span className={cn(pStyles)}>
                                {el.pItem1}
                            </span>
                            : null}
                        </motion.li> : null}
                        {el.liItem2 ?                         
                        <motion.li 
                        className={cn(liWrapperStyles)}
                        initial={{x: -50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{ duration: 0.4, delay: 0.2}}>
                            <span className={cn(liStyles)}>
                                <span className='absolute hidden group-hover:flex text-cyan-400 top-1 -left-8 z-40'><RxChevronRight size={22} /></span>
                            {el.liItem2}
                            </span>
                            {el.pItem2 ? 
                            <span className={cn(pStyles)}>
                                {el.pItem2}
                            </span>
                            : null}
                        </motion.li> : null}
                        {el.liItem3 ?                         
                        <motion.li 
                        className={cn(liWrapperStyles)}
                        initial={{x: -50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{ duration: 0.4, delay: 0.4}}>
                            <span className={cn(liStyles)}>
                                <span className='absolute hidden group-hover:flex text-cyan-400 top-1 -left-8 z-40'><RxChevronRight size={22} /></span>
                            {el.liItem3}
                            </span>
                            {el.pItem3 ? 
                            <span className={cn(pStyles)}>
                                {el.pItem3}
                            </span>
                            : null}
                        </motion.li> : null}
                        {el.liItem4 ?                         
                        <motion.li 
                        className={cn(liWrapperStyles)}
                        initial={{x: -50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{ duration: 0.4, delay: 0.6}}>
                            <span className={cn(liStyles)}>
                                <span className='absolute hidden group-hover:flex text-cyan-400 top-1 -left-8 z-40'><RxChevronRight size={22} /></span>
                            {el.liItem4}
                            </span>
                            {el.pItem4 ? 
                            <span className={cn(pStyles)}>
                                {el.pItem4}
                            </span>
                            : null}
                        </motion.li> : null}
                    </ul>
                </span>
            ) : null}
            {storeHandler.stage === 1 ? [storeHandler.items[1]].map((el, idx) => 
                <span key={`${idx} - span-welcome`} className={cn(x)}>
                    <motion.h2 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ duration: 0.2, delay: 0.2}}
                    exit={{opacity: 0}}
                    className={cn(h2Styles)}>
                        {el.subtitleText}
                    </motion.h2>
                    
                    <ul className={cn(ulStyles)}>
                        {el.liItem1 ?                         
                        <motion.li 
                        className={cn(liWrapperStyles)}
                        initial={{x: -50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{ duration: 0.4, delay: 0}}>
                            <span className={cn(liStyles)}>
                                <span className='absolute hidden group-hover:flex text-cyan-400 top-1 -left-8 z-40'><RxChevronRight size={22} /></span>
                            {el.liItem1}
                            </span>
                            {el.pItem1 ? 
                            <span className={cn(pStyles)}>
                                {el.pItem1}
                            </span>
                            : null}
                        </motion.li> : null}
                        {el.liItem2 ?                         
                        <motion.li 
                        className={cn(liWrapperStyles)}
                        initial={{x: -50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{ duration: 0.4, delay: 0.2}}>
                            <span className={cn(liStyles)}>
                                <span className='absolute hidden group-hover:flex text-cyan-400 top-1 -left-8 z-40'><RxChevronRight size={22} /></span>
                            {el.liItem2}
                            </span>
                            {el.pItem2 ? 
                            <span className={cn(pStyles)}>
                                {el.pItem2}
                            </span>
                            : null}
                        </motion.li> : null}
                        {el.liItem3 ?                         
                        <motion.li 
                        className={cn(liWrapperStyles)}
                        initial={{x: -50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{ duration: 0.4, delay: 0.4}}>
                            <span className={cn(liStyles)}>
                                <span className='absolute hidden group-hover:flex text-cyan-400 top-1 -left-8 z-40'><RxChevronRight size={22} /></span>
                            {el.liItem3}
                            </span>
                            {el.pItem3 ? 
                            <span className={cn(pStyles)}>
                                {el.pItem3}
                            </span>
                            : null}
                        </motion.li> : null}
                        {el.liItem4 ?                         
                        <motion.li 
                        className={cn(liWrapperStyles)}
                        initial={{x: -50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{ duration: 0.4, delay: 0.6}}>
                            <span className={cn(liStyles)}>
                                <span className='absolute hidden group-hover:flex text-cyan-400 top-1 -left-8 z-40'><RxChevronRight size={22} /></span>
                            {el.liItem4}
                            </span>
                            {el.pItem4 ? 
                            <span className={cn(pStyles)}>
                                {el.pItem4}
                            </span>
                            : null}
                        </motion.li> : null}
                    </ul>
                </span>
            ) : null}
            {storeHandler.stage === 2 ? [storeHandler.items[2]].map((el, idx) => 
                <span key={`${idx} - span-welcome`} className={cn(x)}>
                    <motion.h2 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ duration: 0.2, delay: 0.2}}
                    exit={{opacity: 0}}
                    className={cn(h2Styles)}>
                        {el.subtitleText}
                    </motion.h2>
                    
                    <ul className={cn(ulStyles)}>
                        {el.liItem1 ?                         
                        <motion.li 
                        className={cn(liWrapperStyles)}
                        initial={{x: -50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{ duration: 0.4, delay: 0}}>
                            <span className={cn(liStyles)}>
                                <span className='absolute hidden group-hover:flex text-cyan-400 top-1 -left-8 z-40'><RxChevronRight size={22} /></span>
                            {el.liItem1}
                            </span>
                            {el.pItem1 ? 
                            <span className={cn(pStyles)}>
                                {el.pItem1}
                            </span>
                            : null}
                        </motion.li> : null}
                        {el.liItem2 ?                         
                        <motion.li 
                        className={cn(liWrapperStyles)}
                        initial={{x: -50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{ duration: 0.4, delay: 0.2}}>
                            <span className={cn(liStyles)}>
                                <span className='absolute hidden group-hover:flex text-cyan-400 top-1 -left-8 z-40'><RxChevronRight size={22} /></span>
                            {el.liItem2}
                            </span>
                            {el.pItem2 ? 
                            <span className={cn(pStyles)}>
                                {el.pItem2}
                            </span>
                            : null}
                        </motion.li> : null}
                        {el.liItem3 ?                         
                        <motion.li 
                        className={cn(liWrapperStyles)}
                        initial={{x: -50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{ duration: 0.4, delay: 0.4}}>
                            <span className={cn(liStyles)}>
                                <span className='absolute hidden group-hover:flex text-cyan-400 top-1 -left-8 z-40'><RxChevronRight size={22} /></span>
                            {el.liItem3}
                            </span>
                            {el.pItem3 ? 
                            <span className={cn(pStyles)}>
                                {el.pItem3}
                            </span>
                            : null}
                        </motion.li> : null}
                        {el.liItem4 ?                         
                        <motion.li 
                        className={cn(liWrapperStyles)}
                        initial={{x: -50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{ duration: 0.4, delay: 0.6}}>
                            <span className={cn(liStyles)}>
                                <span className='absolute hidden group-hover:flex text-cyan-400 top-1 -left-8 z-40'><RxChevronRight size={22} /></span>
                            {el.liItem4}
                            </span>
                            {el.pItem4 ? 
                            <span className={cn(pStyles)}>
                                {el.pItem4}
                            </span>
                            : null}
                        </motion.li> : null}
                    </ul>
                </span>
            ) : null}
        
        </div>
        </AnimatePresence>
        </>
    )
}