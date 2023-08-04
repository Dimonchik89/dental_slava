"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationItem = ({nav}) => {
    const pathname = usePathname()

    return (
        <li className={`${pathname === nav.link ? "text-yellow" : "text-white"} font-semibold text-base hover:text-yellow ease-in duration-300`}>
            <Link href={nav.link}>{nav.label}</Link>
        </li>
    )
}
export default NavigationItem