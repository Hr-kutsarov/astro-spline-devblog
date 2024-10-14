import { cn } from "@/lib/utils"
import LogoIcon from "./Logo";
import NavToAppButton from "./ButtonNavToApp";

const HeroSection = () => {
    const sectionShape: string = "flex w-full h-auto min-h-screen items-center justify-evenly flex-col lg:flex-row";
    const sectionColors: string = "bg-gradient-to-b from-zinc-800 via-slate-800 to-emerald-900";
    // const sectionResponsive: string = "md:grid-cols-2"
    const subtextAccent: string = "text-emerald-500";

    return (
        <section id="page__top" className={cn(sectionShape, sectionColors)}>
            <div id="hero__text" className=" flex flex-col justify-center px-14 md:px-0">
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
                <h2 className='text-4xl text-balance max-w-[400px] mt-4 mb-8 text-zinc-200 font-semibold tracking-wide'>
                Nutrition tracker and a cookbook made by professional chefs
                </h2>
                <h2 className={cn('text-balance text-zinc-300 font-semibold tracking-wide text-sm')}>
                Works on any device, <span className={cn(subtextAccent)}>even offline</span>.
                </h2>

                <NavToAppButton />
            </div>
            {/* quote */}
            <div id="hero__quote" className=" flex flex-col justify-end items-end">
                <span className='flex items-center gap-1'>
                <span className='text-5xl italic text-zinc-500 font-bold mr-3'>"</span>
                <h2 className='text-2xl italic whitespace-nowrap text-balance mt-4 mb-4 text-zinc-400 font-semibold tracking-wide'>
                Cooks cook to nurture people.
                </h2>
                <span className='text-5xl italic text-zinc-500 font-bold -mb-12'>"</span>
                </span>
                <h2 className={cn('text-balance text-emerald-600 font-semibold tracking-wide text-sm mr-5')}>
                Thomas Keller
                </h2>
            </div>
        </section>
    )
}

export default HeroSection;