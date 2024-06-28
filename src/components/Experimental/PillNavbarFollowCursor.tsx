import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { useRef, useState } from "react";
import { ReactLenis, useLenis } from 'lenis/react';
interface PositionProps {
    left: number,
    width: number,
    opacity: number
}

export default function PillNavBarComponent() {
    const [state, setState] = useState<number>(0);
    const ref = useRef(null);
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
        setState(scroll)
      }, )

    const [position, setPosition] = useState<PositionProps>({
        left: 220,
        width: 120,
        opacity: 0
    });

    const resetPos = () : void => {
        setPosition((prev) => ({
            ...prev,
            opacity: 0
        }))
    }

    const navStyles: string = 'fixed z-50 backdrop-blur-sm bg-slate-200/50 rounded-b-2xl flex w-auto gap-2 h-full h-15 w-full justify-evenly p-1 max-w-[660px]';
    // TSX component

    return (
        <AnimatePresence mode="wait">
        {state < 1400  ?         
        <motion.nav 
        ref={ref}
        onMouseLeave={resetPos}
        initial={{x: 0, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        exit={{x: 0, opacity: 0}}
        transition={{duration: 0.4}}
        className={cn(navStyles)}>
            <LinkItem setPosition={setPosition} href='/'>Home</LinkItem>
            <LinkItem setPosition={setPosition} href='/about'>About</LinkItem>
            <LinkItem setPosition={setPosition} href='/thenourishproject'>Projects</LinkItem>
            <LinkItem setPosition={setPosition} href='/blog'>Blog</LinkItem>
            {/* <LinkItem setPosition={setPosition} href={`/${path}`}>{path}</LinkItem> */}
            <CursorBackground position={position} />
        </motion.nav> : null}
        </AnimatePresence>
    )
}

const LinkItem = ({ children, href, setPosition } : any) => {
    const ref = useRef<HTMLAnchorElement>(null);
    const aStyles: string = 'flex z-40 h-12 w-auto bg-transparent items-center justify-center px-2 md:px-5 py-2 rounded-lg mix-blend-multiply';
    const aTextStyles: string = 'text-zinc-800 font-semibold uppercase'

    const movePos = () : void => {
        if (!ref.current) return;
        const { width } = ref?.current?.getBoundingClientRect();


        setPosition({
            width,
            opacity: 1,
            left: ref.current?.offsetLeft
        })
    }
    return (
        <a onMouseEnter={movePos} ref={ref} className={cn(aStyles, aTextStyles)} href={href}>{children}</a>
    )
}

const CursorBackground = ({position} : any) => {
    return (
        <motion.span 
        animate={position}
        className='absolute z-0 h-1 rounded-lg bg-gradient-to-r from-zinc-200 to-slate-300 backdrop-blur w-24 left-1 bottom-2'
        >

        </motion.span>
    )
}