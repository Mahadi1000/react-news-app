import { Outlet } from "react-router-dom";
import SideBar from "../../../Components/Sidebar/Sidebar";


const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex">
      <SideBar></SideBar>
      <div className="flex-1 ">
        <div className="p-5">
          <Outlet></Outlet>
          </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
