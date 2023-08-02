"use client"
import { motion } from "framer-motion";
import { useRef } from "react";
import { textTransitionSecond } from "@/motionVariants/textVariants";
import { useAnimate } from "@/hooks/useAnimate";

const VariantContentTitle = ({title, animationVariant}) => {
    const ref = useRef(null)
    const { controls } = useAnimate(ref)

    return (
        <motion.h2 
            ref={ref}
            initial={"hidden"}
            animate={controls}
            variants={animationVariant}
            transition={textTransitionSecond}
            className="text-3xl font-bold text-center text-gray-light"
        >
            {title}
        </motion.h2>
    )
}
export default VariantContentTitle;