import { aboutSectionDataStore } from "@/lib/appStateStore";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {RxChevronLeft, RxChevronRight} from 'react-icons/rx'

export default function ButtonStageSetNourishSection() {

    const storeHandler = aboutSectionDataStore();

    const btnStyles = 'bg-slate-300 backdrop-blur text-zinc-50 px-5 py-3 min-w-24 max-h-14 font-semibold rounded-lg hover:text-white text-slate-900 hover:bg-slate-400';
    

    return (
        <>
        {storeHandler.stage === 0 ? <Button className={cn(btnStyles)} onClick={() => storeHandler.setStage(1)}><RxChevronRight size={20} /></Button> : null}
        {storeHandler.stage === 1 ? <Button className={cn(btnStyles)} onClick={() => storeHandler.setStage(2)}><RxChevronRight size={20} /></Button> : null}
        {storeHandler.stage === 2 ? <Button className={cn(btnStyles, '')} onClick={() => storeHandler.setStage(0)}><RxChevronLeft size={20} /></Button> : null}
        </>
    )
}