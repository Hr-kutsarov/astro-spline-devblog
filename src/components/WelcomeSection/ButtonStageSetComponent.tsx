import { welcomeSectionDataStore } from "@/lib/appStateStore";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {RxChevronLeft, RxChevronRight} from 'react-icons/rx'

export default function ButtonStageSet() {

    const storeHandler = welcomeSectionDataStore();

    const btnStyles = 'bg-slate-500/10 backdrop-blur text-zinc-50 px-5 py-3 min-w-24 max-h-14 font-semibold rounded-lg hover:bg-slate-200';
    

    return (
        <>
        {storeHandler.stage === 0 ? <Button className={cn(btnStyles)} onClick={() => storeHandler.setStage(1)}><RxChevronRight size={20} /> {storeHandler.items[0].btnSecondaryText}</Button> : null}
        {storeHandler.stage === 1 ? <Button className={cn(btnStyles)} onClick={() => storeHandler.setStage(2)}><RxChevronRight size={20} /> {storeHandler.items[1].btnSecondaryText}</Button> : null}
        {storeHandler.stage === 2 ? <Button className={cn(btnStyles, 'text-cyan-800 bg-slate-300')} onClick={() => storeHandler.setStage(0)}><RxChevronLeft size={20} /> {storeHandler.items[2].btnSecondaryText}</Button> : null}
        </>
    )
}