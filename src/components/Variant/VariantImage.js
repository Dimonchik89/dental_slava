"use client"
import Image from "next/image";
import { motion } from "framer-motion"
import { useAnimate } from "@/hooks/useAnimate";
import { useRef } from "react";
import { imageVariantLeftToRight, imageTransition } from "@/motionVariants/imageVariants";

const VariantImage = ({image, animationVariant}) => {
    const ref = useRef(null)
    const { controls } = useAnimate(ref)

    return (
        <motion.div 
            ref={ref}
            initial={"hidden"}
            animate={controls}
            variants={animationVariant}
            transition={imageTransition}
            className="text-white bg-gray order-1 lg:order-none"
        >
            <Image
                className="ml-auto w-full"
                src={image}
                alt="dental"
            />
        </motion.div>
    )
}
export default VariantImage;