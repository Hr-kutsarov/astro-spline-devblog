import { create } from 'zustand'

interface sectionBlueprint {
    liItem1: string,    
    liItem2: string,
    liItem3: string,
    liItem4: string,
    btnPrimaryText: string,
    btnSecondaryText: string,
    subtitleText: string
}

interface extendedSectionBlueprint extends sectionBlueprint {
    pItem1: string,    
    pItem2: string,
    pItem3: string,
    pItem4: string,
}
const exampleSectionData: sectionBlueprint[] = [
    {
        liItem1: 'Tech news',
        liItem2: 'Sample code',
        liItem3: 'Discussing ideas',
        liItem4: '',
        btnPrimaryText: 'More',
        btnSecondaryText: 'More',
        subtitleText: 'Passion turns digital'
    },
    {
        liItem1: 'Front-end frameworks.',
        liItem2: 'Build cheap servers.',
        liItem3: 'Web security.',
        liItem4: 'User sessions and user experience.',
        btnPrimaryText: 'Front-end',
        btnSecondaryText: 'More',
        subtitleText: 'General topics'
    },
    {
        liItem1: 'The state of front-end development',
        liItem2: 'SSR, SSO and SPA talks',
        liItem3: 'Stateful web applications',
        liItem4: '3D when and how to',
        btnPrimaryText: '',
        btnSecondaryText: 'End',
        subtitleText: 'Front-end development'
    }
]

const aboutSectionData: sectionBlueprint[] = [

    {

        liItem1: 'Showcasing projects',
        liItem2: 'Software development architecture',
        liItem3: 'Web development insights',
        liItem4: 'Experimenting with new tech',
        btnPrimaryText: 'Front-end',
        btnSecondaryText: 'Return',
        subtitleText: ''
    },
    {

        liItem1: 'Developed and deployed multiple stateful applications powered by all the latest in tech SPA features.',
        liItem2: 'Most frequently used technologies: NextJS, Astro, React, Zustand, Docker, Postgres, Redis, Express. Now learning Spring, Spring Boot and Kafka.',
        liItem3: 'Programming languages: TypeScript, Python, Java.',
        liItem4: '',
        btnPrimaryText: 'Next',
        btnSecondaryText: 'Return',
        subtitleText: 'Experience'
    },
    {
        // general idea

        liItem1: 'documenting a coding jouney',
        liItem2: 'front-end development playground',
        liItem3: 'personal portfolio',
        liItem4: '',
        btnPrimaryText: 'Tech Stuff',
        btnSecondaryText: 'Tech',
        subtitleText: 'this website'
    },
]

const projectNourishSectionData: extendedSectionBlueprint[] = [

    {

        liItem1: 'Calculate your daily macros',
        liItem2: 'Sum up daily intake of micronutrients and minerals.',
        liItem3: 'Learn more about nutrition and food pairing.',
        liItem4: 'Track your diet plan goals.',
        pItem1: '',
        pItem2: '',
        pItem3: '',
        pItem4: '',
        btnPrimaryText: '',
        btnSecondaryText: 'More',
        subtitleText: 'Purpose'
    },
    {

        liItem1: 'Public view:',
        liItem2: 'Registered users only:',
        liItem3: 'Extras:',
        liItem4: '',
        pItem1: 'Forever free way of tracking your nutrition.',
        pItem2: 'Save your meal plan and recipes.',
        pItem3: 'Multiply your recipe, add cooking steps, visualize your progress.',
        pItem4: '',
        btnPrimaryText: 'Next',
        btnSecondaryText: 'Tech info',
        subtitleText: 'Usage'
    },
    // {

    //     liItem1: 'Front-end:',
    //     liItem2: 'Back-end: ',
    //     liItem3: 'Database: ',
    //     liItem4: 'Libs:',
    //     pItem1: 'NextJS 14',
    //     pItem2: 'Spring Boot',
    //     pItem3: 'Postgres',
    //     pItem4: 'Zustand, Tremor, Framer Motion',
    //     btnPrimaryText: 'PrimaryReturn',
    //     btnSecondaryText: 'Return',
    //     subtitleText: 'Technology'
    // },
]

const BlogDataWelcomeComponent: extendedSectionBlueprint[] = [
    {
        liItem1: 'Front-end:',
        liItem2: 'Back-end: ',
        liItem3: 'Database: ',
        liItem4: 'Libs:',
        pItem1: 'NextJS 14',
        pItem2: 'Spring Boot',
        pItem3: 'Postgres',
        pItem4: 'Zustand, Tremor, Framer Motion',
        btnPrimaryText: 'PrimaryReturn',
        btnSecondaryText: 'Return',
        subtitleText: 'Tech stack'
    },
    {
        liItem1: 'Front-end:',
        liItem2: 'Back-end: ',
        liItem3: 'Database: ',
        liItem4: 'Libs:',
        pItem1: 'NextJS 14',
        pItem2: 'Spring Boot',
        pItem3: 'Postgres',
        pItem4: 'Zustand, Tremor, Framer Motion',
        btnPrimaryText: 'PrimaryReturn',
        btnSecondaryText: 'Return',
        subtitleText: 'Tech stack'
    },
    {
        liItem1: 'Front-end:',
        liItem2: 'Back-end: ',
        liItem3: 'Database: ',
        liItem4: 'Libs:',
        pItem1: 'NextJS 14',
        pItem2: 'Spring Boot',
        pItem3: 'Postgres',
        pItem4: 'Zustand, Tremor, Framer Motion',
        btnPrimaryText: 'PrimaryReturn',
        btnSecondaryText: 'Return',
        subtitleText: 'Tech stack'
    },
]

interface SectionDataStoreProps {
    items: sectionBlueprint[],
    setItems: ( data : sectionBlueprint[] ) => void,
    clearItems: () => void;
    stage: number,
    setStage: (data: number) => void;
}

interface ExtendedSectionDataStoreProps {
    items: extendedSectionBlueprint[],
    setItems: ( data : extendedSectionBlueprint[] ) => void,
    clearItems: () => void;
    stage: number,
    setStage: (data: number) => void;
}


// friendly tip
// you know what you're doing when you know how to name your props

const projectNourishStore = create<ExtendedSectionDataStoreProps>((set) => ({
    items: projectNourishSectionData,
    setItems: (data: extendedSectionBlueprint[]) => set({ items: data }),
    clearItems: () => set({ items: [] }),
    stage: 0,
    setStage: (data: number) => set({stage: data})
  }));


const welcomeSectionDataStore = create<SectionDataStoreProps>((set) => ({
    items: exampleSectionData,
    setItems: (data: sectionBlueprint[]) => set({ items: data }),
    clearItems: () => set({ items: [] }),
    stage: 0,
    setStage: (data: number) => set({stage: data})
  }));

  const aboutSectionDataStore = create<SectionDataStoreProps>((set) => ({
    items: aboutSectionData,
    setItems: (data: sectionBlueprint[]) => set({ items: data }),
    clearItems: () => set({ items: [] }),
    stage: 0,
    setStage: (data: number) => set({stage: data})
  }));

// example
interface bearStoreProps {
    bears: number,
    increasePopulation: ( data: number ) => void;
    removeAllBears: () => void;
}

const useBearStore = create<bearStoreProps>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

export { useBearStore, welcomeSectionDataStore, aboutSectionDataStore, projectNourishStore };
export type { sectionBlueprint }