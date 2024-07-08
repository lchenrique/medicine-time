import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils";
import { DialogProps } from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";

export interface IDrawerProps extends DialogProps {
  title: ReactNode,
  open: boolean;
  children?: ReactNode

}

const Drawer = ({ children, open: openDrawer, onOpenChange, title }: IDrawerProps) => {
  const [open, setOpen] = useState(openDrawer)

  useEffect(() => {
    setOpen(openDrawer)

    return () => {
      setOpen(false)
    }
  }, [openDrawer])

  const onChange = (isOpen: boolean) => {
    onOpenChange && onOpenChange(isOpen)
    setOpen(isOpen)
  }


  return (
    <Sheet open={open} onOpenChange={onChange} >
      <SheetContent  >
        {open &&
          <SheetClose
            className={cn(
              "fill-auxiliary absolute",
              "top-5 -left-10 rounded-sm",
              "focus:outline-none focus:ring-2",
              "focus:ring-ring focus:ring-offset-2",
              "disabled:pointer-events-none"
            )} >
            <X />
          </SheetClose>
        }
        <SheetHeader className=" p-6">
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription >
          </SheetDescription>
        </SheetHeader>
       
          {children}

      </SheetContent>
    </Sheet>

  );
};

export { Drawer };