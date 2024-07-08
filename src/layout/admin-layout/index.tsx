import { Header } from "@/components/layout/header";
import { Outlet } from "react-router-dom";

export interface IAdminLayoutProps {
}

const AdminLayout = () => {
  return (
    <div className="h-full w-ful">
      <Header  />
      <Outlet />
    </div>
  );
};

export { AdminLayout };