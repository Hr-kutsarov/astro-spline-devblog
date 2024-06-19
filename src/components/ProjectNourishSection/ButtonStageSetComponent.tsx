import { projectNourishStore } from "@/lib/appStateStore";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {RxChevronLeft, RxChevronRight} from 'react-icons/rx'

export default function ButtonStageSetAboutSection() {

    const storeHandler = projectNourishStore();

    const btnStyles = 'bg-slate-200/75 backdrop-blur text-slate-600 hover:text-zinc-50 px-5 py-3 min-w-24 max-h-14 font-semibold rounded-lg hover:bg-slate-700';
    

    return (
        <>
        {storeHandler.stage === 0 ? <Button className={cn(btnStyles)} onClick={() => storeHandler.setStage(1)}><RxChevronRight size={20} /></Button> : null}
        {storeHandler.stage === 1 ? <Button className={cn(btnStyles)} onClick={() => storeHandler.setStage(2)}><RxChevronRight size={20} /></Button> : null}
        {storeHandler.stage === 2 ? <Button className={cn(btnStyles, 'text-cyan-900')} onClick={() => storeHandler.setStage(0)}><RxChevronLeft size={20} /></Button> : null}
        </>
    )
}