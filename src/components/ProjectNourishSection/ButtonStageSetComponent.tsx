import { projectNourishStore } from "@/lib/appStateStore";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {RxChevronLeft, RxChevronRight} from 'react-icons/rx'

export default function ButtonStageSetAboutSection() {

    const storeHandler = projectNourishStore();

    const btnStyles = 'flex lg:hidden bg-green-500 backdrop-blur text-zinc-50 px-5 py-3 min-w-24 max-h-14 font-semibold rounded-lg hover:text-green-800 text-green-50 hover:bg-slate-300';
    

    return (
        <>
        {storeHandler.stage === 0 ? <Button className={cn(btnStyles)} onClick={() => storeHandler.setStage(1)}><RxChevronRight size={20} /></Button> : null}
        {storeHandler.stage === 1 ? <Button className={cn(btnStyles)} onClick={() => storeHandler.setStage(0)}><RxChevronRight size={20} /></Button> : null}
        {/* {storeHandler.stage === 2 ? <Button className={cn(btnStyles, 'text-cyan-900')} onClick={() => storeHandler.setStage(0)}><RxChevronLeft size={20} /></Button> : null} */}
        </>
    )
}