"use client"
import { useRef } from "react";
import { motion } from "framer-motion";
import { useAnimate } from "@/hooks/useAnimate";
import { textVariant, textTransitionSecond } from "@/motionVariants/textVariants";

const ServiceSubtitle = () => {
    const ref = useRef()
    const { controls } = useAnimate(ref)

    return (
        <motion.h3 
            ref={ref}
            initial={"hidden"}
            animate={controls}
            variants={textVariant}
            transition={textTransitionSecond}
            className="text-gray-light font-semibold text-2xl lg:text-3xl text-center w-full lg:w-1/2 mx-auto"
        >
            It is possible to see all kinds of unknown orthopedic structures, victoriously milling and 3D others.
        </motion.h3>
    )
}
export default ServiceSubtitle;