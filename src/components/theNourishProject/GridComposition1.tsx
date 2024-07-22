import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";

const GridComposition = () => {

    const centered = 'items-center justify-center '
    return (
        <section className='grid grid-cols-6 bg-rose-300 w-full'>
            <span className={cn('group', centered ,"flex col-span-4 w-full h-40 bg-cyan-200")}>
                {/* on group hover: bg color changes, button gets outlined, text color changes, animated logo appears */}
                <AnimatePresence>
                    
                </AnimatePresence>
                <h2>Lorem</h2>
                <h3>Lorem ipsum dolor sit amet.</h3>
            </span>
            <span className={cn(centered ,"flex col-span-2 w-full h-40 bg-cyan-100")}>
            asd
            </span>
            <span className={cn(centered ,"flex col-span-2 w-full h-40 bg-cyan-200")}>
            asd
            </span>
            <span className={cn(centered ,"flex col-span-4 w-full h-40 bg-cyan-100")}>
            asd
            </span>
        </section>
    )
}

export default GridComposition;