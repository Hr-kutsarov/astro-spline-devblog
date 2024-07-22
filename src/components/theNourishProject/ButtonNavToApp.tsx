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

    const btnStyles: string = "h-12 text-lg font-semibold  rounded-lg "
    const secondaryColors: string = "hover:bg-gradient-to-br from-zinc-100 to-slate-200";
    const primaryColors: string = 'text-zinc-50 bg-gradient-to-br from-green-500 to-emerald-500'
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className={cn("h-12 text-sm font-bold text-slate-700 bg-slate-100 mt-8 w-40 hover:no-underline")} variant="link">To App</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="rounded-lg">
        <AlertDialogHeader className='my-12'>
          <AlertDialogTitle className='text-3xl'>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription className="text-lg">
            You will be redirected to the Application.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className={cn(btnStyles,secondaryColors)}>Cancel</AlertDialogCancel>
          <AlertDialogAction className={cn(btnStyles, primaryColors)}>
            <a href="/">
            Continue
            </a>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default NavToAppButton;
