import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const NavToAppButton = () => {

    const btnStyles: string = "h-12 text-lg font-semibold tracking-wide  rounded-lg "
    const secondaryColors: string = "hover:bg-gradient-to-br from-zinc-100 to-slate-200";
    const primaryColors: string = 'text-zinc-50 bg-gradient-to-br from-green-600 to-emerald-700 hover:from-green-500 hover:to-emerald-500';
    const responsiveButtons: string = "min-w-24"
    
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className={cn("h-12 text-sm font-bold text-slate-700 bg-slate-100 mt-8 w-40 hover:no-underline")} variant="link">To App</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="rounded-lg flex flex-col gap-0">
        <AlertDialogHeader className='my-12 md:my-4 md:px-4'>
          <AlertDialogTitle className='text-4xl mb-4'>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription className="text-lg font-semibold">
            You will be redirected to the Application.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className='md:w-full  md:px-4 -mt-5 md:mt-2'>
          <AlertDialogCancel className={cn(btnStyles,secondaryColors, responsiveButtons)}>Cancel</AlertDialogCancel>
          <AlertDialogAction className={cn(btnStyles, primaryColors, responsiveButtons)}>
            <a href="http://thenourish.vercel.app">
            Continue
            </a>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default NavToAppButton;
