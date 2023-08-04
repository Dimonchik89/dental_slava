"use client"
import { motion } from "framer-motion";
import { textTransitionSecond, contentTextVariant } from "@/motionVariants/textVariants";

const VariantContextText = ({text, animationVariant, controls}) => {

    return (
        <motion.p
            initial={"hidden"}
            animate={controls}
            variants={animationVariant}
            transition={contentTextVariant}
            className="text-xl text-gray-light text-center"
        >
            {text}
        </motion.p>
    )
}
export default VariantContextText;