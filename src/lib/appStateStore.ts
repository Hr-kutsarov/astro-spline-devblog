import { create } from 'zustand'

interface ComponentDataBlueprint {

    li: String[];
    btnPrimary: string;
    btnSecondary: string;
}

interface sectionBlueprint {
    active: boolean;
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

const exampleSectionData: sectionBlueprint[] = [
    {
        // general idea
        active: true,
        liItem1: 'Building a web app ',
        liItem2: 'from idea to blueprint',
        liItem3: 'every day',
        liItem4: 'for the past two years.',
        btnPrimaryText: 'More',
        btnSecondaryText: 'Return',
        subtitleText: 'Passion turns digital'
    },
    {
        active: false,
        liItem1: 'Front-end frameworks.',
        liItem2: 'Build cheap servers.',
        liItem3: 'Web security.',
        liItem4: 'User sessions and user experience.',
        btnPrimaryText: 'Front-end',
        btnSecondaryText: 'Return',
        subtitleText: 'General topics'
    },
    {
        active: false,
        liItem1: 'The state of front-end development',
        liItem2: 'SSR, SSO and SPA talks',
        liItem3: 'Stateful web applications',
        liItem4: '3D when and how to',
        btnPrimaryText: 'Next',
        btnSecondaryText: 'Return',
        subtitleText: 'Front-end development'
    }
]

interface welcomeSectionDataStoreProps {
    items: sectionBlueprint[],
    setItems: ( data : sectionBlueprint[] ) => void,
    clearItems: () => void;
    stage: number,
    setStage: (data: number) => void;
}

// friendly tip
// you know what you're doing when you know how to name your props


const welcomeSectionDataStore = create<welcomeSectionDataStoreProps>((set) => ({
    items: exampleSectionData,
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

export { useBearStore, welcomeSectionDataStore };
export type { sectionBlueprint }