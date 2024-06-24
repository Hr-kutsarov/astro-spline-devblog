import { useState, useRef } from 'react';
import { ReactLenis, useLenis } from 'lenis/react'
import { cn } from '@/lib/utils';
import { useScroll, useTransform, motion, useMotionValue, useVelocity, AnimatePresence } from 'framer-motion';
import PillNavBarComponent from '@/components/Experimental/PillNavbarFollowCursor';


export default function AboutMainComponent() {
    const [state, setState] = useState(null)
    const { scrollY } = useScroll();
    const x = useMotionValue(0);
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
        // console.log(scroll)
        setState(scroll)

        
      }, )

    const sectionStyles = 'flex w-full h-full min-h-[100vh] overflow-hidden relative';
    const techStackIconBoxStyles = 'flex items-center justify-center w-full h-full bg-transparent text-2xl h-40 w-40 rounded-lg'

    
    return (
        // from default lerp 0.1, default duration 1.2
        <ReactLenis options={{lerp: 0.067, duration: 1.7, gestureOrientation: 'vertical'}} root>
            <main className={cn('min-h-[300vh] relative flex flex-col')}>
                
                <section id='intro' className={cn(sectionStyles, 'bg-slate-200', 'px-8 py-7 items-center justify-center')}>
                    <motion.h1
                    className='text-8xl'
                    initial={{x: -140, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 1.3, delay: 0.4, repeat: Infinity, repeatType: 'mirror', repeatDelay: 7}}
                    >
                        Kutsarov

                    </motion.h1>
                    <motion.span 
                    className='relative flex'
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1, transition: {delayChildren: 0.2}}}

                    >
                    <motion.h1
                    className='text-8xl text-zinc-600/70'
                    initial={{x: -40, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 0.3, delay: 1.7, repeat: Infinity, repeatType: 'mirror', repeatDelay: 7}}
                    >
                        ,
                    </motion.h1>
                    {'Chris'.split('').map((el, idx) => (
                        <motion.h1
                        key={idx}
                        className='text-8xl text-zinc-600'
                        initial={{x: -40, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{duration: 0.3, delay: 1.7 + (0.2*idx), repeat: Infinity, repeatType: 'mirror', repeatDelay: 4}}
                        >
                            {el}
    
                        </motion.h1>
                    ))}
                    </motion.span>

                </section>
                <section id='description' className={cn(sectionStyles, 'bg-slate-300', 'flex-col items-center justify-center relative min-h-[150vh]')}>
                    { (state > 600)  ? <motion.span
                    key="asd"
                    className='h-40 w-40 bg-slate-400/20 items-center justify-center flex sticky'
                    style={{scale: state * 0.008 }}
                    >{state.toFixed(2)}</motion.span> : null}

                    <motion.span 
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.4, duration: 1.2}}
                    className='bg-rose-300/5 w-full h-40 flex min-h-24 absolute overflow-hidden bottom-0'>
                        <span 
                        style={{marginLeft: state - (state * 0.5)}}
                        className={cn('absolute -left-[500px] flex gap-4 items-center')}>
                            <h1 className={cn('text-6xl text-zinc-50/50 whitespace-nowrap')}>Programming languages</h1>
                            <span className={cn(techStackIconBoxStyles)}>TypeScript</span>
                            <span className={cn(techStackIconBoxStyles)}>Python</span>
                            <span className={cn(techStackIconBoxStyles)}>Java</span>
                            <span className={cn(techStackIconBoxStyles)}>Rust</span>
                            {/* <span className={cn(techStackIconBoxStyles)}>Python</span>
                            <span className={cn(techStackIconBoxStyles)}>Django</span>
                            <span className={cn(techStackIconBoxStyles)}>FastAPI</span>
                            <span className={cn(techStackIconBoxStyles)}>Java</span>
                            <span className={cn(techStackIconBoxStyles)}>Spring Boot</span>
                            <span className={cn(techStackIconBoxStyles)}>Spring Security</span>
                            <span className={cn(techStackIconBoxStyles)}>Docker</span> */}
                        </span>
                    </motion.span>
                </section>
                <section id='content' className={cn(sectionStyles, 'bg-slate-400')}>

                </section>
                {/* tiny devtools */}
                <span id='devtools' className='fixed z-50 flex flex-col bottom-40 left-20 font-lighter'>
                    <h1 className=' text-2xl text-zinc-200 -top-20'>DevTools</h1>
                    <button onMouseEnter={() => setState(lenis?.scroll)} className='flex text-2xl px-12 py-8 rounded-lg text-zinc-50 bg-zinc-50/30 backdrop-blur'><></>Lenis scroll value {state ? Number(state).toFixed(2) : null} {state ? null : '--- '}</button>
                </span>

            </main>
        </ReactLenis>
    )
}