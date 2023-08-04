"use client"
import { textTransitionSecond, textVariant } from "@/motionVariants/textVariants";
import { motion } from 'framer-motion';
import { useRef } from "react";
import CustomButton from "../CustomButton/CustomButton";
import { buttonVariant } from "@/motionVariants/buttonVariants";
import { useAnimate } from "@/hooks/useAnimate";

const LaboratoryInfo = () => {
    const ref = useRef(null)
    const { controls } = useAnimate(ref)

    return (
        <div ref={ref} className="mt-10">
            <motion.p 
                className="text-gray-light text-center text-base md:text-xl"
                initial={"hidden"}
                animate={controls}
                variants={textVariant}
                transition={textTransitionSecond}    
            >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ut, debitis fugit, similique necessitatibus corrupti eligendi quia voluptate aliquid omnis repellendus tempore repudiandae ab ducimus eveniet facilis numquam quidem magni! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ut, debitis fugit, similique necessitatibus corrupti eligendi quia voluptate aliquid omnis repellendus tempore repudiandae ab ducimus eveniet facilis numquam quidem magni! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ut, debitis fugit, similique necessitatibus corrupti eligendi quia voluptate aliquid omnis repellendus tempore repudiandae ab ducimus eveniet facilis numquam quidem magni!
            </motion.p>
            <CustomButton 
                title={"Czytaj więcej"} 
                path="/about"
                animationVariant={buttonVariant}
                animateCb={controls}
            />
        </div>
    )
}
export default LaboratoryInfo;