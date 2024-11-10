import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";

export const sidebarLists = [
    { name: "Dashboard", icon: <LuLayoutDashboard/>, onClick: () => console.log("Dashboard clicked") },
    { name: "Transanction", icon: <GrTransaction/>, onClick: () => console.log("Transanction clicked") },
    { name: "Schedule", icon: <RiCalendarScheduleLine/>, onClick: () => console.log("Schedule clicked") },
    { name: "User", icon: <FaRegUserCircle/>, onClick: () => console.log("User clicked") },
    { name: "Settings", icon: <MdOutlineSettings/>, onClick: () => console.log("Settings clicked") },
];
  