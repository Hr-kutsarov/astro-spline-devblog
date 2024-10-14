import { useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { cn } from "@/lib/utils";
import DonutChartUsageExampleWithClickEvent from "@/components/AboutPage/ChartsComponent";
import {
  useScroll,
  useMotionValue,
  motion,
  AnimatePresence,
} from "framer-motion";
import PillNavBarComponent from "@/components/Experimental/PillNavbarFollowCursor";
import { RxCrossCircled } from "react-icons/rx";

export default function AboutMainComponent() {
  const [state, setState] = useState(null);
  const { scrollY } = useScroll();
  const x = useMotionValue(0);
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    // console.log(scroll)
    setState(scroll);
  });

  const sectionStyles =
    "flex w-full h-full min-h-[100vh] overflow-hidden relative items-center justify-center flex-col";
  const techStackIconBoxStyles =
    "flex items-center justify-center w-full h-full bg-transparent text-4xl h-auto w-full rounded-lg";
  const langStackSpanStyles = "text-zinc-700 flex gap-4 items-center";
  const langStackPStyles = "text-slate-600 whitespace-nowrap text-2xl";
  const groupHoverContentStyles =
    "group-hover:flex ml-[340px] cursor-pointer shadow-md -top-[25vh] w-[320px] h-[443px] absolute hidden bg-slate-100/80 text-zinc-800 text-2xl items-center justify-center rounded-2xl";

  return (
    // from default lerp 0.1, default duration 1.2
    <ReactLenis
      options={{ lerp: 0.067, duration: 1.7, gestureOrientation: "vertical" }}
      root
    >
      <main className={cn("min-h-[100vh] relative flex flex-col items-center")}>
        <PillNavBarComponent />
        {/* <TestSection1 /> */}
        {/* <TestSection2 /> */}
        <LayoutingGuidelines />
        <LayoutingGuidelinesDark />
        <section id="content" className={cn(sectionStyles, "bg-slate-500")}>
          <span
            className={cn(
              "min-h-40 min-w-40 md:min-w-[660px] ",
              "grid px-4 md:grid-cols-2"
            )}
          >
            <span id="contact-text" className="flex flex-col">
              <span
                id="contact-text-title"
                className="flex gap-1  relative mb-4 items-center"
              >
                {/* right div */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex w-auto h-auto items-center justify-center -mb-2 p-2"
                >
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      transition={{
                        duration: 1.1,
                        delay: 0.4,
                        repeat: Infinity,
                        repeatType: "mirror",
                        repeatDelay: 10,
                      }}
                      d="M4.83277 1.62702C3.78253 2.58671 2.72527 3.74832 2.18514 4.91174C-0.0231084 9.66826 2.67883 13.2684 4.72106 18.0985C7.01425 23.5222 13.6034 30.0419 14.2981 30.7203C14.3404 30.7616 14.3742 30.7957 14.4152 30.8382C15.0835 31.5317 21.4379 38.0334 26.7836 40.161C31.4428 42.0154 34.963 44.4024 39.4632 42.1898C40.4556 41.7018 41.455 40.8085 42.3012 39.906C43.6941 38.4204 43.3572 36.1261 41.7994 34.8143L37.5149 31.2063C36.0782 29.9964 33.9281 30.2017 32.7463 31.6616C31.5619 33.1246 29.4076 33.3258 27.989 32.0885C25.7408 30.1276 22.4974 27.2413 20.1902 24.9455C17.7426 22.5102 14.6677 19.067 12.6018 16.7048C11.3299 15.2506 11.5363 13.0403 13.038 11.8246C14.4807 10.6567 14.7372 8.55511 13.6177 7.07451L10.0116 2.30508C8.74544 0.630532 6.38252 0.210873 4.83277 1.62702Z"
                      stroke="#cffafe"
                      strokeWidth={2}
                    />
                  </svg>
                </motion.div>
                {/* left div */}
                <motion.h2
                  className=" text-4xl font-light text-cyan-100"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  Contacts
                </motion.h2>
              </span>

              <motion.a
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                href="https://www.linkedin.com/in/hristo-kutsarov-794105136/"
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  stiffness: 25,
                  type: "spring",
                }}
                className={cn(
                  "px-1 mb-1 flex group relative gap-2 ml-16 cursor-pointer",
                  "text-zinc-200 text-2xl hover:text-cyan-100/80 "
                )}
              >
                <HoverArrowComponent />
                <>Linkedin</>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                href="https://github.com/Hr-kutsarov"
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  stiffness: 25,
                  type: "spring",
                }}
                className={cn(
                  "px-1 flex mb-1 group relative gap-2 ml-16 cursor-pointer",
                  "text-zinc-200 text-2xl hover:text-cyan-100/80 "
                )}
              >
                <HoverArrowComponent />
                <>GitHub </>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                href="/"
                transition={{
                  duration: 0.9,
                  delay: 1,
                  stiffness: 25,
                  type: "spring",
                }}
                className={cn(
                  "px-1 flex mb-1 group relative gap-2 ml-16 cursor-pointer",
                  "text-zinc-200 text-2xl hover:text-cyan-100/80 "
                )}
              >
                <HoverArrowComponent />
                <>Dev Blog</>
              </motion.a>
            </span>
          </span>
        </section>
        {/* tiny devtools */}
        {/* <span id='devtools' className='fixed z-50 flex flex-col bottom-40 left-20 font-lighter'>
                    <h1 className=' text-2xl text-zinc-200 -top-20'>DevTools</h1>
                    <button onMouseEnter={() => setState(lenis?.scroll)} className='flex text-2xl px-12 py-8 rounded-lg text-zinc-50 bg-zinc-50/30 backdrop-blur'><></>Lenis scroll value {state ? Number(state).toFixed(2) : null} {state ? null : '--- '}</button>
                </span> */}
      </main>
    </ReactLenis>
  );
}

const HeroSection = () => {
  return (

    <>
    hi!

    I'm 

    Chris

    Kutsarov
    </>
  )
}

export const LayoutingGuidelines = () => {

  const pp1 = 'text-2xl font-semibold text-zinc-800/75 ';
  const hh1 = 'text-5xl ';
  const hh2 = "text-2xl mb-5"

  const ll1 = 'whitespace-nowrap flex w-full h-full items-center justify-center text-sm font-semibold tracking-wide';

  const ll2 = 'whitespace-nowrap flex w-full h-full items-center justify-center text-sm font-semibold tracking-wide';

  const ss1 = "flex w-full items-between px-5 h-12 gap-5";
  return (
    <section className={cn('flex w-full h-full flex-col px-40', 'pt-40', 'bg-white')}>
      <h1 className={cn(hh1, 'text-cyan-800')}>Colors</h1>
      <h2 className={cn(hh2, 'text-sky-500')}>Light theme</h2>
      <p className={cn(pp1)}>Choosing colors is the first step of layouting.</p>
      <p className={cn(pp1)}>The primary colors are the ones that carry the theme - either light or dark.</p>
      <p className={cn(pp1)}>That color will consist for most of the layouting </p>
      <p className={cn(pp1)}>Let's put it in action.</p>

      <a href='#'><RxCrossCircled className="text-zinc-800 hover:text-orange-400 absolute top-40 right-40" size={44} /></a>
      {/* colors */}
      <span className='flex  mt-12 mb-40 shadow-lg'>
        {/* color box */}
        <span className={cn(ss1, 'bg-zinc-800')}>
          <label className={cn(ll1, 'text-zinc-50')}>Deep dark</label>

          <label className={cn(ll2, 'text-zinc-50 opacity-75')}>bg-zinc-800</label>
        </span>
        <span className={cn(ss1)}>
          <label className={cn(ll1, 'text-zinc-800')}>Highlight</label>

          <label className={cn(ll2, 'text-zinc-800/75')}>bg-white</label>
        </span>
        <span className={cn(ss1, 'bg-sky-500')}>
          <label className={cn(ll1, 'text-sky-50')}>Theme neutral</label>

          <label className={cn(ll2, 'text-sky-50/75')}>bg-sky-500</label>
        </span>
        <span className={cn(ss1, 'bg-sky-400')}>
          <label className={cn(ll1, 'text-white')}>Theme highlight</label>

          <label className={cn(ll2, 'text-white/75')}>bg-sky-300</label>
        </span>
        <span className={cn(ss1, 'bg-orange-400')}>
          <label className={cn(ll1, 'text-orange-50')}>Contrast - warning</label>

          <label className={cn(ll2, 'text-orange-50 opacity-75')}>bg-orange-400</label>
        </span>
      </span>
    </section>
  )
}

export const LayoutingGuidelinesDark = () => {

  const pp1 = 'text-2xl font-semibold text-white ';
  const hh1 = 'text-5xl ';
  const hh2 = "text-2xl mb-5"

  const ll1 = 'whitespace-nowrap flex w-full h-full items-center justify-center text-sm font-semibold tracking-wide';

  const ll2 = 'whitespace-nowrap flex w-full h-full items-center justify-center text-sm font-semibold tracking-wide';

  const ss1 = "flex w-full items-between px-5 h-12 gap-5 bg-white ";
  return (
    <section className={cn('flex relative w-full h-full flex-col',  ' p-40', 'bg-zinc-800')}>
      <h1 className={cn(hh1, 'text-orange-400')}>Colors</h1>
      <h2 className={cn(hh2, 'text-sky-500 hover:text-sky-300')}>Dark theme</h2>
      <p className={cn(pp1)}>Choosing colors is the first step of layouting.</p>
      <p className={cn(pp1)}>The primary colors are the ones that carry the theme - either light or dark.</p>
      <p className={cn(pp1)}>That color will consist for most of the layouting </p>
      <p className={cn(pp1)}>Let's put it in action now.</p>

      <a href='#'><RxCrossCircled className="text-orange-400 flex absolute right-40 top-40" size={44} /></a>
      {/* colors */}
      <span className='flex flex-row-reverse   mt-12 mb-40 shadow-lg'>
        {/* color box */}
        <span className={cn(ss1, 'bg-zinc-800')}>
          <label className={cn(ll1, 'text-zinc-50')}>Deep dark</label>

          <label className={cn(ll2, 'text-zinc-50 opacity-75')}>bg-zinc-800</label>
        </span>
        <span className={cn(ss1)}>
          <label className={cn(ll1, 'text-zinc-800')}>Highlight</label>

          <label className={cn(ll2, 'text-zinc-800/75')}>bg-white</label>
        </span>
        <span className={cn(ss1, 'bg-sky-500')}>
          <label className={cn(ll1, 'text-sky-50')}>Theme neutral</label>

          <label className={cn(ll2, 'text-sky-50/75')}>bg-sky-500</label>
        </span>
        <span className={cn(ss1, 'bg-sky-400')}>
          <label className={cn(ll1, 'text-white')}>Theme highlight</label>

          <label className={cn(ll2, 'text-white/75')}>bg-sky-300</label>
        </span>
        <span className={cn(ss1, 'bg-orange-400')}>
          <label className={cn(ll1, 'text-orange-50')}>Contrast - warning</label>

          <label className={cn(ll2, 'text-orange-50 opacity-75')}>bg-orange-400</label>
        </span>
      </span>
    </section>
  )
}

const HeroSection2 = () => {
  return (

    <>
      I have a mission

      Turning s**tty layouts into modern layouts!

      Let's turn this into this!
    </>
  )
}

const TestSection1 = () => {

  const [state, setState] = useState(null);
  const { scrollY } = useScroll();
  const x = useMotionValue(0);
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    // console.log(scroll)
    setState(scroll);
  });

  const sectionStyles =
  "flex w-full h-full min-h-[100vh] overflow-hidden relative items-center justify-center flex-col";
const techStackIconBoxStyles =
  "flex items-center justify-center w-full h-full bg-transparent text-4xl h-auto w-full rounded-lg";
const langStackSpanStyles = "text-zinc-700 flex gap-4 items-center";
const langStackPStyles = "text-slate-600 whitespace-nowrap text-2xl";
const groupHoverContentStyles =
  "group-hover:flex ml-[340px] cursor-pointer shadow-md -top-[25vh] w-[320px] h-[443px] absolute hidden bg-slate-100/80 text-zinc-800 text-2xl items-center justify-center rounded-2xl";

  return (

    <>
            <section
          id="intro"
          className={cn(
            sectionStyles,
            "bg-gradient-to-b from-slate-200 via-slate-200 to-slate-300",
            "px-8 py-7 items-center justify-center"
          )}
        >
          <span className="flex">
            <motion.h1
              className="text-4xl md:text-8xl"
              initial={{ x: -140, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1.3,
                delay: 0.4,
                repeat: 2,
                repeatType: "mirror",
                repeatDelay: 3,
              }}
            >
              Kutsarov
            </motion.h1>
            <motion.span
              className="relative flex"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delayChildren: 0.2 } }}
            >
              <motion.h1
                className="text-4xl md:text-8xl text-zinc-600/70"
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 1.7,
                  repeat: 2,
                  repeatType: "mirror",
                  repeatDelay: 3,
                }}
              >
                ,
              </motion.h1>
              {"Chris".split("").map((el, idx) => (
                <motion.h1
                  key={idx}
                  className="text-4xl md:text-8xl text-zinc-600"
                  initial={{ x: -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 1.7 + 0.2 * idx,
                    repeat: 2,
                    repeatType: "mirror",
                    repeatDelay: 3.7,
                  }}
                >
                  {el}
                </motion.h1>
              ))}
            </motion.span>
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 1.4, stiffness: 2 }}
            className="text-zinc-400 font-semibold"
          >
            Web developer
          </motion.h2>
        </section>
    </>
  )
}

const TestSection2 = () => {

  const [state, setState] = useState(null);
  const { scrollY } = useScroll();
  const x = useMotionValue(0);
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    // console.log(scroll)
    setState(scroll);
  });

  const sectionStyles =
  "flex w-full h-full min-h-[100vh] overflow-hidden relative items-center justify-center flex-col";
const techStackIconBoxStyles =
  "flex items-center justify-center w-full h-full bg-transparent text-4xl h-auto w-full rounded-lg";
const langStackSpanStyles = "text-zinc-700 flex gap-4 items-center";
const langStackPStyles = "text-slate-600 whitespace-nowrap text-2xl";
const groupHoverContentStyles =
  "group-hover:flex ml-[340px] cursor-pointer shadow-md -top-[25vh] w-[320px] h-[443px] absolute hidden bg-slate-100/80 text-zinc-800 text-2xl items-center justify-center rounded-2xl";

  return (

    <>
            <section
          id="description"
          className={cn(
            sectionStyles,
            "bg-slate-300",
            "flex-col items-center justify-center relative min-h-[140vh]"
          )}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key="asd"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-auto w-auto mb-40 text-2xl bg-transparent items-center justify-center flex sticky text-slate-400"
              style={{ scale: state * 0.005 }}
              // style={{marginLeft: state - (state * 0.2)}}
            >
              {state > 450 && state < 940 ? <>Experience</> : null}
            </motion.span>
          </AnimatePresence>

          <DonutChartUsageExampleWithClickEvent />

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1.2 }}
            className="bg-transparent w-full h-auto flex min-h-24 absolute overflow-hidden bottom-0"
          >
            <span
              style={{ marginLeft: state - state * 0.2 }}
              className={cn(
                "absolute -left-[1000px] md:-left-[900px] flex items-center gap-4 md:gap-12"
              )}
            >
              <span className={cn(langStackSpanStyles)}>
                <h1 className={cn(techStackIconBoxStyles)}>TypeScript</h1>
                <p className={cn(langStackPStyles)}>NextJS, Astro, React</p>
              </span>
              <span className={cn(langStackSpanStyles)}>
                <h1 className={cn(techStackIconBoxStyles)}>Python</h1>
                <p className={cn(langStackPStyles)}>FastAPI, Django, Flask</p>
              </span>
              <span className={cn(langStackSpanStyles)}>
                <h1 className={cn(techStackIconBoxStyles)}>Java</h1>
                <p className={cn(langStackPStyles)}>Spring Boot</p>
              </span>
            </span>
          </motion.span>
        </section>
    </>
  )
}
const HoverArrowComponent = () => {
  return (
    <AnimatePresence>
      <span className={cn("group-hover:flex hidden mt-1 absolute -left-10")}>
        <svg
          width="26"
          height="24"
          viewBox="0 0 24 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ x: 0, opacity: 0, pathLength: 0, pathSpacing: 0 }}
            whileInView={{ x: 0, opacity: 1, pathLength: 1, pathSpacing: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            d="M7.78049 8.37143H3C1.89543 8.37143 1 9.26686 1 10.3714V12.7714C1 13.876 1.89543 14.7714 3 14.7714H7.78049C8.88506 14.7714 9.78049 15.6669 9.78049 16.7714V19.0927C9.78049 20.7235 11.6272 21.6687 12.95 20.7151L22.9365 13.5161C23.9875 12.7585 24.0518 11.2169 23.0676 10.3744L13.0811 1.82548C11.7835 0.714675 9.78049 1.6367 9.78049 3.34481V6.37143C9.78049 7.476 8.88506 8.37143 7.78049 8.37143Z"
            stroke="#cffafe"
            strokeWidth="2"
          />
        </svg>
      </span>
    </AnimatePresence>
  );
};
