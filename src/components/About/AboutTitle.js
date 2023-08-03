"use client"
import { motion } from "framer-motion";
import { useAnimate } from "@/hooks/useAnimate";
import { useRef } from "react";
import { textVariant, textTransitionSecond } from "@/motionVariants/textVariants";

const AboutTitle = () => {
    const ref = useRef(null)
    const { controls } = useAnimate(ref)

    return (
        <div 
            className="border-b-2 border-yellow py-3"
        >
            <motion.h1 
                ref={ref}
                initial={"hidden"}
                animate={controls}
                variants={textVariant}
                transition={textTransitionSecond}
                className="title text-center"
            >
                Informacje o laboratorium GoldLab w Ostrołęce
            </motion.h1>
        </div>
    )
}
export default AboutTitle;