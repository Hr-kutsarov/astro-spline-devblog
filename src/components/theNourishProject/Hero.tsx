import { cn } from "@/lib/utils"
import LogoIcon from "./Logo";
import NavToAppButton from "./ButtonNavToApp";

const HeroSection = () => {

    // css

    const sectionShape: string = "px-8 pt-40 pb-16 grid grid-cols-1  min-h-screen w-full";
    const sectionColors: string = "bg-gradient-to-br from-zinc-800 via-slate-800 to-emerald-900";
    const sectionResponsive: string = "md:grid-cols-2"
    const temp1: string = '-mt-16 relative'
    const subtextAccent: string = "text-emerald-500";

    return (
        <section className={cn(sectionShape, sectionColors, temp1, sectionResponsive)}>
            <div id="hero__text" className="lg:px-40 flex flex-col justify-center">
                <span className='flex gap-2  items-center'>
                <LogoIcon />
                <h1 className={cn('text-emerald-50 text-2xl')}>
                    Nourish
                </h1>
                </span>

                {/* <h2 className='text-6xl text-balance mt-4 mb-8 text-zinc-200'>
                    Works on any device, <span className={cn(subtextAccent)}>even offline</span>.
                </h2>
                <h2 className={cn('text-balance text-zinc-300 font-semibold tracking-wide text-sm')}>
                    Nutrition tracker, pocket encyclopedia and a cookbook in one app.
                </h2> */}
                <h2 className='text-4xl text-balance mt-4 mb-8 text-zinc-200 font-semibold tracking-wide'>
                Nutrition tracker, encyclopedia & cookbook in one app.
                </h2>
                <h2 className={cn('text-balance text-zinc-300 font-semibold tracking-wide text-sm')}>
                Works on any device, <span className={cn(subtextAccent)}>even offline</span>.
                </h2>

                <NavToAppButton />
            </div>
            <div id="hero__image" className="flex w-full h-full bg-transparent relative z-0 items-center justify-center">
                <h2 className='mt-16 z-25  text-4xl text-rose-50/5 font-semibold'>Place animation</h2>
            </div>
        </section>
    )
}

export default HeroSection;