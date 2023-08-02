"use client"

import NavigationList from "../Navigation/NavigationList";
import HeaderLogo from "./HeaderLogo";
import { AnimatePresence, motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react";

const Header = () => {
    const ref = useRef(null)
    const [headerStyle, setHeaderStyle] = useState("bg-black py-2 absolute w-full")
    const isInView = useInView(ref)

    // useEffect(() => {
    //     const callback = function (entries, observer) {
    //     if(entries[0].isIntersecting) {
    //         // headerElement.classList.remove('_scroll')
    //         // setHeaderStyle("bg-black py-2 absolute w-full")
    //     } else {
    //         // headerElement.classList.add('_scroll')
    //         setHeaderStyle("bg-white fixed w-full ease duration-500")
    //     }
    // }

    //     const headerObserver = new IntersectionObserver(callback)
    //     headerObserver.observe(ref.current)
    // }, [])

    return (
        <AnimatePresence>
            <motion.div 
                ref={ref}
                className={headerStyle}
                initial={{}}
                animate={{}}
                // variants={headerVariant}
                exit={{ opacity: 0 }}
            >
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <HeaderLogo/>
                        <NavigationList/>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>

    )
}
export default Header;