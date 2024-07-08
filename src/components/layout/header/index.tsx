/* eslint-disable @typescript-eslint/no-unused-vars */
import logo from "@/assets/medtime.svg"
import { Menu } from "@/components/menu";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ModeToggle } from "@/components/theme/theme-switch";
import { useActivePath } from "@/hooks/use-active-path";
import { Avatar } from "@/components/avatar";

const menu = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    disabled: false
  },
  {
    key: "patients",
    label: "Patients",
    path: "/patients",
    disabled: false
  },
  {
    key: "medication-schedule",
    label: "Schedule",
    path: "/medication-schedule",
    disabled: true
  },
  {
    key: "administration-record",
    label: "Record",
    path: "/administration-record",
    disabled: true
  },
];


const Header = () => {
  const { active } = useActivePath()



  return (
    <header className="border-b  h-20 shadow-lg shadow-indigo-950/5">
      <div className="container flex w-full items-center  h-full">
        <div className="mr-5">
          <img src={logo} className="min-w-28  w-28" />
        </div>
        <Menu items={menu} activeKey={[active]} />

        <div className="ml-auto flex flex-1 gap-5 items-center">
          <Input placeholder="Search..." className="w-full min-w-52" addonBefore={<Search className="size-4 text-muted-foreground" />} />
          <ModeToggle />
          <Avatar src="https://avatar.iran.liara.run/public/79" fallback="DL" className="outline outline-2 outline-primary outline-offset-1 rounded-full" />
        </div>
      </div>
    </header>
  );
};

export { Header };