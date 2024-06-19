import { aboutSectionDataStore } from "@/lib/appStateStore";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {RxChevronLeft, RxChevronRight} from 'react-icons/rx'

export default function ButtonStageSetNourishSection() {

    const storeHandler = aboutSectionDataStore();

    const btnStyles = 'bg-slate-400 backdrop-blur text-zinc-50 px-5 py-3 min-w-24 max-h-14 font-semibold rounded-lg hover:bg-green-500/60';
    

    return (
        <>
        {storeHandler.stage === 0 ? <Button className={cn(btnStyles)} onClick={() => storeHandler.setStage(1)}><RxChevronRight size={20} /></Button> : null}
        {storeHandler.stage === 1 ? <Button className={cn(btnStyles)} onClick={() => storeHandler.setStage(2)}><RxChevronRight size={20} /></Button> : null}
        {storeHandler.stage === 2 ? <Button className={cn(btnStyles, 'text-cyan-900')} onClick={() => storeHandler.setStage(0)}><RxChevronLeft size={20} /></Button> : null}
        </>
    )
}