

// hooks
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { cn } from "@/lib/utils";

// icons
import { RxHome } from "react-icons/rx";
// types
interface PositionProps {
  left: number;
  width: number;
  opacity: number;
}

export default function PillNavBarComponent() {
  const [state, setState] = useState<number>(0);
  const ref = useRef(null);
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    setState(scroll);
  });

  const [position, setPosition] = useState<PositionProps>({
    left: 220,
    width: 120,
    opacity: 0,
  });

  const resetPos = (): void => {
    setPosition((prev) => ({
      ...prev,
      opacity: 0,
    }));
  };

  const navStyles: string = cn(
    "relative flex  lg:ml-4 items-center justify-center w-full h-full gap-4"
  );
  // TSX component

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        ref={ref}
        onMouseLeave={resetPos}
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className={cn(navStyles)}
      >
        <LinkItem setPosition={setPosition} href="/">
          home
        </LinkItem>
        <LinkItem setPosition={setPosition} href="/about">
          About
        </LinkItem>
        <LinkItem setPosition={setPosition} href="/thenourishproject">
          Projects
        </LinkItem>
        {/* <TriggerEntries /> */}
        {/* <LinkItem setPosition={setPosition} href={`/${path}`}>{path}</LinkItem> */}
        {/* <CursorBackground position={position} /> */}
      </motion.nav>
    </AnimatePresence>
  );
}

const LinkItem = ({ children, href, setPosition }: any) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const aStyles: string = "px-2 py-1 rounded-lg lg:text-5xl";
  const aTextStyles: string =
    "text-zinc-800 font-bold tracking-tight uppercase text-2xl text-white";
  const aTextStylesHover: string = "hover:text-zinc-600";

  return (
    <a
      ref={ref}
      className={cn(aStyles, aTextStyles, aTextStylesHover)}
      href={href}
    >
      {children}
    </a>
  );
};

// const TriggerEntries: React.FC = ( ) => {

//     const triggerHandler = triggerStore();
//     const aStyles: string = 'px-2 py-1 rounded-lg';
//     const aTextStyles: string = 'text-zinc-800 font-bold tracking-tight uppercase text-normal text-white';
//     const aTextStylesHover: string = "hover:opacity-20"

//     return (

//         <Button
//         onClick={() => {
//             triggerHandler.blogPosts ? triggerHandler.closeBlogPosts() : triggerHandler.triggerBlogPosts()
//         }}
//         className={cn(aStyles, aTextStyles, aTextStylesHover, triggerHandler.blogPosts && "opacity-50")}>Posts</Button>

//     )
// };
