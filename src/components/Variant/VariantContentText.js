"use client"
import { motion } from "framer-motion";
import { useAnimate } from "@/hooks/useAnimate";
import { useRef } from "react";
import { textTransitionSecond } from "@/motionVariants/textVariants";

const VariantContextText = ({text, animationVariant}) => {
    const ref = useRef(null)
    const { controls } = useAnimate(ref)

    return (
        <motion.p
            ref={ref}
            initial={"hidden"}
            animate={controls}
            variants={animationVariant}
            transition={textTransitionSecond}
            className="text-xl text-gray-light text-center"
        >
            {text}
        </motion.p>
    )
}
export default VariantContextText;