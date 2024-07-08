/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Drawer } from "@/components/drawer";
import { ReactNode } from "react";
import { create } from "zustand";

export interface IDrawerProviderProps {
  drawer: {
    title: ReactNode, content: ReactNode
  } |  null | undefined;
  open: (title: ReactNode, content: ReactNode) => void
  close: () => void;
}



export const useDrawer = create<IDrawerProviderProps>((set) => ({
  drawer: null,
  open: (title: ReactNode, content: ReactNode) => {
    set({ drawer: { title, content } })
  },
  close: () => set({ drawer: null})
}))


const DrawerProvider = () => {  
  const { drawer, close }  = useDrawer()

  return (
    <div id="sheet" 
    // className="container inset-0 fixed z-[9999]  h-screen pointer-events-none overflow-hidden"
    >
      <Drawer title={drawer?.title} open={!!drawer} onOpenChange={(v ) => !v && close()} >
        {drawer?.content}
      </Drawer>
    </div>
  );
};

export { DrawerProvider };