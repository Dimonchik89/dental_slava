"use client"
import { useRef } from "react";
import { motion } from "framer-motion";
import { useAnimate } from "@/hooks/useAnimate";
import { textVariant, textTransitionSecond } from "@/motionVariants/textVariants"


const AboutContentSubtitle = () => {
    const ref = useRef(null)
    const { controls } = useAnimate(ref)

    return (
        <>
            <motion.h1 
                ref={ref}
                initial={"hidden"}
                animate={controls}
                variants={textVariant}
                transition={textTransitionSecond}
                className="text-2xl lg:text-3xl text-yellow font-semibold text-center"
            >
                Co nas wyróżnia?
            </motion.h1>
        </>
    )
}
export default AboutContentSubtitle;