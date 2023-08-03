"use client"
import PriceBlock from "./PriceBlock";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useAnimate } from "@/hooks/useAnimate";
import { imageScale, imageVariantRightToLeft } from "@/motionVariants/imageVariants";

const PriceList = ({priceInfo, children}) => {
    const ref = useRef(null)
    const { controls } = useAnimate(ref)

    const content = priceInfo?.map(item => (
        <PriceBlock key={item.title} priceCostBlock={item}/>
    ))

    return (
        <motion.div 
            ref={ref}
            initial={"hidden"}
            animate={controls}
            variants={imageScale}
            transition={{
                delay: .7,
                duration: .5,
                type: "just",
                ease: "easeInOut"
            }}
            className="border-4 border-yellow p-10 bg-black"
        >
            <div className="flex justify-center">
                {children}
            </div>

            <div className="mt-5">
                {content}
            </div>
        </motion.div>
    )
}
export default PriceList;