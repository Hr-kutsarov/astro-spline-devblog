import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";

import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { Image } from "astro:assets";
import NourishMobileViewImage from "../../images/nourish-mobile-view.png";
import NourishMobileViewImage2 from "../../images/nourish-mobile-view2.png";
import NourishMobileViewImage3 from "../../images/nourish-mobile-view3.png";
import NourishMobileViewImage4 from "../../images/nourish-mobile-view4.png";
import { RxChevronRight } from "react-icons/rx";

const GridComposition = () => {
  const [x, setX] = useState<any>(0);

  const [screenH, setScreenH] = useState<any>(null);
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    // console.log(scroll)
    // setState(scroll);
    if (scroll > 1 && scroll < screenH * 0.2) {
      setX(1);
    } else if (scroll > screenH * 0.2 && scroll < screenH * 0.5) {
      setX(2);
    } else if (scroll > screenH * 0.5 && scroll > 1) {
      setX(3);
    }
  });

  useEffect(() => {
    const screenHeight = window.screen.height;
    setScreenH(screenHeight);
  }, []);

  const liTextStyles =
    "relative flex tracking-wide h-auto w-auto bg-transparent mb-5 text-lg font-semibold text-zinc-100/90 text-balance max-w-[320px]";

  return (
    <ReactLenis
      options={{ lerp: 0.067, duration: 1.4, gestureOrientation: "vertical" }}
      root
    >
      {/* preview */}
      <section className="pb-24 flex flex-col lg:flex-row justify-evenly items-center px-14 lg:px-40 w-full min-h-screen bg-gradient-to-b from-emerald-900 via-emerald-700 to-slate-800">
        <ul className="mb-24">
          <motion.li
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            transition={{ delay: 0.2, duration: 0.3, repeat: 0 }}
            className={cn(liTextStyles)}
          >
            Explore food properties
            <span className="absolute text-green-400 top-1 -left-6 z-40 ">
              <RxChevronRight size={22} />
            </span>
          </motion.li>
          <motion.li
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            transition={{ delay: 0.35, duration: 0.3, repeat: 0 }}
            className={cn(liTextStyles)}
          >
            Discover flavor affinities
            <span className="absolute text-green-400 top-1 -left-6 z-40">
              <RxChevronRight size={22} />
            </span>
          </motion.li>
          <motion.li
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            transition={{ delay: 0.5, duration: 0.3, repeat: 0 }}
            className={cn(liTextStyles)}
          >
            Sum up nutrition values
            <span className="absolute text-green-400 top-1 -left-6 z-40">
              <RxChevronRight size={22} />
            </span>
          </motion.li>
          <motion.li
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            transition={{ delay: 0.65, duration: 0.3, repeat: 0 }}
            className={cn(liTextStyles)}
          >
            Get suggestions on what the next ingredient would be
            <span className="absolute text-green-400 top-1 -left-6 z-40">
              <RxChevronRight size={22} />
            </span>
          </motion.li>

          <motion.li
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            transition={{ delay: 0.65, duration: 0.3, repeat: 0 }}
            className={cn(liTextStyles)}
          >
            Focus on micronutrients and essential minerals.
            <span className="absolute text-green-400 top-1 -left-6 z-40">
              <RxChevronRight size={22} />
            </span>
          </motion.li>

          <motion.li
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            transition={{ delay: 0.65, duration: 0.3, repeat: 0 }}
            className={cn(liTextStyles)}
          >
            Forever free to use
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="text-sm italic -ml-2 items-center flex absolute top-6 text-green-500 mt-1"
            >
              * if not saving data
            </motion.span>
            <span className="absolute text-green-400 top-1 -left-6 z-40">
              <RxChevronRight size={22} />
            </span>
          </motion.li>
        </ul>

        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ delay: 0.2, duration: 0.3, repeat: 0 }}
          className="flex h-auto w-auto bg-zinc-800 p-4 rounded-2xl"
        >
          <img
            src={NourishMobileViewImage.src}
            width="300"
            height="500"
            loading="lazy"
            decoding="async"
            alt="nourish-mobile-view1"
          />
        </motion.div>
      </section>

      {/* the problem */}
      <section className="py-24 flex flex-col lg:flex-row justify-evenly items-center px-14 lg:px-40 w-full min-h-screen bg-gradient-to-b from-slate-800 via-slate-800 to-emerald-900">
        {/* left section */}

        <span>
          <span className={cn("flex overflow-hidden mb-14")}>
            <motion.h2
              className="text-4xl bg-gradient-to-br from-green-300 via-green-500 to-emerald-300 inline-block text-transparent bg-clip-text font-semibold "
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.3 }}
            >
              The problem
            </motion.h2>
          </span>

          <p
            className={cn(
              "text-normal text-zinc-300/90 mb-5 font-semibold tracking-wide max-w-[320px]"
            )}
          >
            Nowadays studying nutrition is undoubtedly the most important area
            of knowledge everyone should be familiar with.
          </p>

          <p
            className={cn(
              "text-normal text-zinc-300/90 mb-5 font-semibold tracking-wide max-w-[320px]"
            )}
          >
            There are multiple sources of mostly vague information about
            essential nutrients.
          </p>

          <p
            className={cn(
              "text-normal text-zinc-300/90 mb-5 font-semibold tracking-wide max-w-[320px]"
            )}
          >
            Restaurants do not sell nutritious meals. They simply go along with the latest trends and seek profit while increasing sales.
          </p>

          <p
            className={cn(
              "text-normal text-zinc-300/90 mb-14 font-semibold tracking-wide max-w-[320px]"
            )}
          >
            Calories are not essential nutrients. It is simply a measure of
            energy content. The danger is that sugary foods, heavily processed
            foods, and substitutes that essentially contain no vitamins and
            minerals are consumed as if they are healthy. The hidden risks of malnutrition gradually increase as vital minerals are often insufficient.
          </p>
        </span>
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ delay: 0.2, duration: 0.3, repeat: 0 }}
          className="flex h-auto w-auto bg-zinc-800 p-4 rounded-2xl"
        >
          <img
            src={NourishMobileViewImage2.src}
            width="300"
            height="500"
            loading="lazy"
            decoding="async"
            alt="A very cool penguin!"
          />
        </motion.div>
      </section>

      {/* the solution */}
      <section className="py-24 flex flex-col lg:flex-row justify-evenly items-center px-14 lg:px-40 w-full min-h-screen bg-gradient-to-b from-emerald-900 via-emerald-900 to-slate-800">
        {/* left section */}

        <span>
          <span className={cn("flex overflow-hidden mb-14")}>
            <motion.h2
              className="text-4xl bg-gradient-to-br from-green-50 via-slate-100 to-emerald-50 inline-block text-transparent bg-clip-text font-semibold "
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.3 }}
            >
              The solution
            </motion.h2>
          </span>

          <p
            className={cn(
              "text-normal text-zinc-300/90 mb-5 font-semibold tracking-wide max-w-[320px]"
            )}
          >
            Get concise information about more than ninety food items.
          </p>

          <p
            className={cn(
              "text-normal text-zinc-300/90 mb-5 font-semibold tracking-wide max-w-[320px]"
            )}
          >
            Reconstruct your meal and compare the results to your daily needs. Those values vary from one gender to another.
          </p>

          <p
            className={cn(
              "text-normal text-zinc-300/90 mb-5 font-semibold tracking-wide max-w-[320px]"
            )}
          >
            
            Sum up not only the amount of macronutrients but also the amount of minerals and micronutrients your body needs daily.
          </p>

          <p
            className={cn(
              "text-normal text-zinc-300/90 mb-5 font-semibold tracking-wide max-w-[320px]"
            )}
          >
            The amount of nutrients matches the public data provided by the USDA.
          </p>

          <p
            className={cn(
              "text-normal text-zinc-300/90 mb-5 font-semibold tracking-wide max-w-[320px]"
            )}
          >
            Food affinities are there to inspire you to experiment with different products and elevate your cooking skills.
          </p>

          
          <p
            className={cn(
              "text-normal text-zinc-300/90 mb-14 font-semibold tracking-wide max-w-[320px]"
            )}
          >
           Grab and summarize all the data you need within five to seven clicks.
          </p>
        </span>
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ delay: 0.2, duration: 0.3, repeat: 0 }}
          className="flex h-auto w-auto bg-zinc-800 p-4 rounded-2xl"
        >
          <img
            src={NourishMobileViewImage4.src}
            width="300"
            height="500"
            loading="lazy"
            decoding="async"
            alt="A very cool penguin!"
          />
        </motion.div>
      </section>

      {/* methodology */}
      <section className="py-24 flex flex-col lg:flex-row justify-evenly items-center px-14 lg:px-40 w-full min-h-screen bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950">
        {/* left section */}

        <span>
          <span className={cn("flex overflow-hidden mb-14")}>
            <motion.h2
              className="text-4xl bg-gradient-to-br from-green-300 via-green-500 to-emerald-300 inline-block text-transparent bg-clip-text font-semibold "
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.3 }}
            >
              Technology
            </motion.h2>
          </span>

          <p
            className={cn(
              "text-normal text-zinc-300/90 mb-5 font-semibold tracking-wide max-w-[320px]"
            )}
          >
            Built with React, NextJS and supporting libraries for the purpose of high-customization and fluidity.
          </p>

          <p
            className={cn(
              "text-normal text-zinc-300/90 mb-5 font-semibold tracking-wide max-w-[320px]"
            )}
          >
            Backend architecture of microservices reducing down time and improving scalability.
          </p>

          <p
            className={cn(
              "text-normal text-zinc-300/90 mb-5 font-semibold tracking-wide max-w-[320px]"
            )}
          >
            Simple state management with Zustand.
          </p>

          <p
            className={cn(
              "text-normal text-zinc-300/90 mb-5 font-semibold tracking-wide max-w-[320px]"
            )}
          >
            TailwindCSS and mobile-first approach for easy customization and responsive design.
          </p>

          <p
            className={cn(
              "text-normal text-zinc-300/90 mb-14 font-semibold tracking-wide max-w-[320px]"
            )}
          >
            Motion elements by Framer.
          </p>
        </span>
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ delay: 0.2, duration: 0.3, repeat: 0 }}
          className="flex h-auto w-auto bg-zinc-800 p-4 rounded-2xl"
        >
          <img
            src={NourishMobileViewImage3.src}
            width="300"
            height="500"
            loading="lazy"
            decoding="async"
            alt="A very cool penguin!"
          />
        </motion.div>
      </section>
    </ReactLenis>
  );
};

export default GridComposition;
