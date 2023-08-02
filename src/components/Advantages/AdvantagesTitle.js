"use client"
import { motion } from "framer-motion";
import { useRef } from "react";
import { useAnimate } from "@/hooks/useAnimate";
import { textVariantLeftToRight, textTransitionSecond } from "@/motionVariants/textVariants";

const AdvantageTitle = () => {
    const ref = useRef(null)
    const { controls } = useAnimate(ref)

    return (
        <>
            <motion.h1 
                ref={ref}
                initial={"hidden"}
                animate={controls}
                variants={textVariantLeftToRight}
                transition={textTransitionSecond}
                className="title text-center"
            >
                    Why are we being robbed?
            </motion.h1>
        </>
    )
}
export default AdvantageTitle;