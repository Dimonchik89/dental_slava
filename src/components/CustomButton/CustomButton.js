"use client"
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useRef } from "react";
import { buttonTransition } from "@/motionVariants/buttonVariants";
import { useAnimate } from "@/hooks/useAnimate";

const CustomButton = ({title, path, animationVariant}) => {
    const router = useRouter()
    const ref = useRef(null)
    const { controls } = useAnimate(ref)

    return (
        <motion.div 
            initial={"hidden"}
            animate={controls}
            variants={animationVariant}
            transition={buttonTransition}
            ref={ref}
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