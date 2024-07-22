import { create } from 'zustand'

interface sectionBlueprint {
    // yes I know! this is stupid but there's a reason for that. 
    // example
    // layout.data.map((el, idx)=> (<>
    // <section>
    // <ul>
    // {el.map((e, i) => (<li>{e.param}</li> IS A NONONONONOONO)})}
    // </ul>
    // </section>)) 
    liItem1: string,    
    liItem2: string,
    liItem3: string,
    liItem4: string,
    // 
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
        // general idea
        liItem1: 'One app, four different tech stacks.',
        liItem2: 'From zero coding skills to deployment.',
        liItem3: '',
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

        liItem1: 'Graphic designer with two years of professional experience in printing and package design.',
        liItem2: 'Self-taught web developer with two years of experience working on personal and university projects.',
        liItem3: '',
        liItem4: '',
        btnPrimaryText: 'Front-end',
        btnSecondaryText: 'Return',
        subtitleText: 'the author'
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

        liItem1: 'Contains food data which can be accessed quickly on any device.',
        liItem2: 'Learn more about nutrition and food pairing.',
        liItem3: 'Gain access to compact and concise amount of knowledge in your pocket.',
        liItem4: 'Become a better athlete, a better homecook, a better chef by tracking your goals and progress.',
        pItem1: '',
        pItem2: '',
        pItem3: '',
        pItem4: '',
        btnPrimaryText: '',
        btnSecondaryText: 'More',
        subtitleText: 'what does it do?'
    },
    {

        liItem1: 'Primary view:',
        liItem2: 'Track nutrition:',
        liItem3: 'Taste and flavor:',
        liItem4: '',
        pItem1: 'Discover properties from the culinary world. Learn about flavor affinities, seasonality and flavor nuances.',
        pItem2: 'Input your meal plan, review the charts, track your progress.',
        pItem3: 'Store your food recipes. Learn about flavor weight and volume.',
        pItem4: '',
        btnPrimaryText: 'Next',
        btnSecondaryText: 'Tech info',
        subtitleText: '*swiss army knife*'
    },
    {
        // general idea

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