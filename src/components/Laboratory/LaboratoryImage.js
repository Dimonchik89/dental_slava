"use client"
import { imageScale, imageTransition } from "@/motionVariants/imageVariants"
import { useAnimation, useInView, motion } from "framer-motion"
import { useEffect, useRef } from "react"
import image from "../../images/main/dental4.png"
import Image from "next/image";

const LaboratoryImage = () => {
    const ref = useRef(null)
    const controls = useAnimation()
    const isInView = useInView(ref)

    useEffect(() => {
        if(isInView) {
            controls.start("visible")
        }
    }, [controls, isInView])

    return (
        <motion.div 
            ref={ref}
            className="mt-10 img-wrapepr"
            initial={"hidden"}
            animate={controls}
            variants={imageScale}
            transition={imageTransition}
        >
            <Image
                src={image}
                alt="image"
                height={500}
                className=""
            />
        </motion.div>
    )
}
export default LaboratoryImage;