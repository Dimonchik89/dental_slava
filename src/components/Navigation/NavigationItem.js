"use client"
import Link from "next/link";

const NavigationItem = ({nav}) => {

    return (
        <li className="text-white font-semibold text-base hover:text-yellow ease-in duration-300">
            <Link href={nav.link}>{nav.label}</Link>
        </li>
    )
}
export default NavigationItem