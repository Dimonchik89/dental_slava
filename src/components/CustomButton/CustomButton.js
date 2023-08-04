"use client"
import { motion } from "framer-motion";
import { variantButtonTransition } from "@/motionVariants/buttonVariants";

const CustomButton = ({title, path, animationVariant, animateCb}) => {

    return (
        <motion.div 
            initial={"hidden"}
            animate={animateCb}
            variants={animationVariant}
            transition={variantButtonTransition}
            className="text-center mt-8"
        >
            <button
                onClick={() => router.push(path)}
                className="bg-yellow text-black font-semibold hover:text-gray-light hover:bg-black px-8 py-1 rounded-md ease duration-300"
            >
                {title}
            </button>
        </motion.div>
    )
}
export default CustomButton;