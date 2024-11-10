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

export const barData = [
    {
        week: "Week 1",
        guestAmount: "500",
        userAmount: "400"
    },
    {
        week: "Week 2",
        guestAmount: "350",
        userAmount: "450"
    },
    {
        week: "Week 3",
        guestAmount: "200",
        userAmount: "300"
    },
    {
        week: "Week 4",
        guestAmount: "400",
        userAmount: "250"
    },
];

export const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  
export const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
  ];
  