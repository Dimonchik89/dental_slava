"use client"
import { useState } from "react";
import NavigationItem from "./NavigationItem";
import NavigationMobile from "./NavigationMobile";
import InfoIcon from '@mui/icons-material/Info';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import CollectionsIcon from '@mui/icons-material/Collections';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ContactsIcon from '@mui/icons-material/Contacts';

export const navLinks = [
    {
        label: "About Us",
        link: "/about",
        Icon: InfoIcon
    },
    {
        label: "Services",
        link: "/services",
        Icon: HomeRepairServiceIcon
    },
    {
        label: "Our work",
        link: "/works",
        Icon: CollectionsIcon
    },
    {
        label: "Price",
        link: "/price",
        Icon: AttachMoneyIcon
    },
    {
        label: "Contacts",
        link: "/contacts",
        Icon: ContactsIcon
    },
]

const NavigationList = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpen = () => setOpenMenu(!openMenu)

    const links = navLinks.map(item => <NavigationItem key={item.link} nav={item}/>)

    const activeMobileClass = openMenu ? "_active" : ""

    return (
        <>
            <nav className="hidden md:block">
                <ul className="flex space-x-10">
                    {links}
                </ul>
            </nav>
            <div className="block md:hidden">
                <div 
                    className={`text-white icon-menu ${activeMobileClass}`}
                    onClick={handleOpen}    
                >
                    <span className="icon-menu__row"></span>
                    <span className="icon-menu__row"></span>
                    <span className="icon-menu__row"></span>
                </div>
                <NavigationMobile handleOpen={handleOpen} open={openMenu}/>
            </div>
        </>

    )
}
export default NavigationList