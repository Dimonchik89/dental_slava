"use client"
import { motion } from "framer-motion";
import { textTransitionSecond } from "@/motionVariants/textVariants";

const VariantContentTitle = ({title, animationVariant, controls}) => {

    return (
        <motion.h2 
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