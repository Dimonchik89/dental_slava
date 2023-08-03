"use client"
import { motion } from "framer-motion";
import { useAnimate } from "@/hooks/useAnimate";
import { useRef } from "react";
import { textVariant, textTransitionSecond, textTransitionThird } from "@/motionVariants/textVariants";

const Title = ({title}) => {
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
                transition={textTransitionThird}
                className="title text-center"
            >
                {title}
            </motion.h1>
        </div>
    )
}
export default Title;