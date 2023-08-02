"use client"
import { motion, useAnimation, useInView } from "framer-motion"
import { textTransitionSecond, textVariant } from "@/motionVariants/textVariants";
import { useEffect, useRef } from "react";

const LaboratoryTitle = () => {
    const controls = useAnimation();
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        if(isInView) {
            controls.start("visible")
        }
    }, [controls, isInView])

    return (
        <motion.h1
            ref={ref}
            initial={"hidden"}
            animate={controls}
            variants={textVariant} 
            transition={textTransitionSecond}
            className="title text-center text-gray-light"    
        >
            Laboratorium ortodontyczno-protetyczne GoldLab w Ostrołęce
        </motion.h1>
    )
}
export default LaboratoryTitle;