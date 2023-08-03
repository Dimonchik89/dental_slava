"use client"
import image from "../../images/main/about_img.jpg"
import Image from "next/image";
import { motion } from "framer-motion"
import { useAnimate } from "@/hooks/useAnimate";
import { useRef } from "react";
import { imageScale, imageTransition } from "../../motionVariants/imageVariants";

const AboutContentPhoto = () => {
    const ref = useRef(null)
    const { controls } = useAnimate(ref)

    return (
        <motion.div 
            ref={ref}
            initial={"hidden"}
            animate={controls}
            variants={imageScale}
            transition={{
                delay: .7,
                duration: 1,
                type: "spring",
            }}
            className="text-white"
        >
            <Image
                src={image}
                alt="doctor"
                className="w-1/2 mx-auto lg:w-full lg:m-0"
            />
        </motion.div>
    )
}
export default AboutContentPhoto;