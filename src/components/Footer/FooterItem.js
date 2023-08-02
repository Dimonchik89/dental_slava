"use client"
import { useRef } from "react";
import { motion } from "framer-motion";
import { useAnimate } from "@/hooks/useAnimate";
import { textVariantRightToLeft, textVariantLeftToRight } from "@/motionVariants/textVariants";

const FooterItem = ({footerItem, index}) => {
    const ref = useRef(null)
    const {controls} = useAnimate(ref)

    return (
        <motion.div 
            ref={ref}
            initial={"hidden"}
            animate={controls}
            variants={textVariantRightToLeft}
            transition={{
                ease: "easeInOut",
                type: "spring",
                delay: .3 * index,
                duration: .7
            }}
            className="flex flex-col items-center"
        >
            <h3 className="text-gray-light text-base font-semibold">{footerItem.title}</h3>
            {
                footerItem.text.map(item => <p key={item} className={footerItem.textStyle}>{item}</p>)
            }
        </motion.div>
    )
}
export default FooterItem;