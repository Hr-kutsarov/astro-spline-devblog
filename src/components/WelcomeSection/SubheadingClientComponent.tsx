import { motion, AnimatePresence } from "framer-motion"

import { welcomeSectionDataStore } from "@/lib/appStateStore"

import { cn } from "@/lib/utils";

export default function SubheadingClientComponent() {

    const storeHandler = welcomeSectionDataStore();
 
    const x = 'flex flex-col items-start'
    const subText: string = "flex text-lg text-slate-400 uppercase max-w-[320px] pb-4";

    return (
        <>
        <AnimatePresence mode="wait">
        <div className=''>
            {storeHandler.stage === 0 ? [storeHandler.items[0]].map((el, idx) => 
                <span key={`${idx} - span-subheading`} className={cn(x)}>
                    <motion.h2 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ duration: 0.2, delay: 0.2}}
                    exit={{opacity: 0}}
                    className={cn(subText)}>
                        {el.subtitleText}
                    </motion.h2>
                    
                </span>
            ) : null}
            {storeHandler.stage === 1 ? [storeHandler.items[1]].map((el, idx) => 
            
            <span key={`${idx} - span-subheading`} className={cn(x)}>
                    <motion.h2 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ duration: 0.2, delay: 0.2}}
                    exit={{opacity: 0}}
                    className={cn(subText)}>
                        {el.subtitleText}
                    </motion.h2>
            </span>
        ) : null}
        {storeHandler.stage === 2 ? [storeHandler.items[2]].map((el, idx) => 
            
            <span key={`${idx} - span-subheading`} className={cn(x)}>
                    <motion.h2 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ duration: 0.2, delay: 0.2}}
                    exit={{opacity: 0}}
                    className={cn(subText)}>
                        {el.subtitleText}
                    </motion.h2>
            </span>
        ) : null}

        </div>
        </AnimatePresence>
        </>
    )
}