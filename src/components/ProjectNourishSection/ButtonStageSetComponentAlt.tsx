import { projectNourishStore } from "@/lib/appStateStore";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {RxChevronLeft, RxChevronRight} from 'react-icons/rx';
import {motion, AnimatePresence} from 'framer-motion';

export default function AltButtonStageSetAboutSection() {

    const storeHandler = projectNourishStore();

    const btnStyles = 'bg-green-500 backdrop-blur text-slate-50 hover:text-zinc-50 aspect-square min-w-24 min-h-24 tracking-wide font-semibold rounded-full hover:bg-slate-700';
    

    return (
        <AnimatePresence mode='sync'>
            <motion.span 
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 2, repeat: Infinity, type: 'spring', repeatType: 'mirror', delay: 0}}
            exit={{scale: 2, opacity: 0}}
            className='hidden lg:flex absolute top-[42%] left-[46%]'>
            {storeHandler.stage === 0 ? <Button className={cn(btnStyles)} onClick={() => storeHandler.setStage(1)}>Info</Button> : null}
            {storeHandler.stage === 1 ? <Button className={cn(btnStyles)} onClick={() => storeHandler.setStage(0)}>Info</Button> : null}
        
            </motion.span>
            <motion.span 
            initial={{opacity: 0, scale: 0.8}}
            animate={{opacity: 1, scale: 1}}
            exit={{scale: 2, opacity: 0}}
            transition={{duration: 2, repeat: Infinity, type: 'spring', repeatType: 'mirror', delay: 1.3}}
            className='hidden lg:flex absolute top-[42%] left-[46%]'>
            {storeHandler.stage === 0 ? <Button className={cn(btnStyles)} onClick={() => storeHandler.setStage(1)}><RxChevronRight size={20} /></Button> : null}
            {storeHandler.stage === 1 ? <Button className={cn(btnStyles)} onClick={() => storeHandler.setStage(0)}><RxChevronRight size={20} /></Button> : null}
            </motion.span>
        </AnimatePresence>
    )
}