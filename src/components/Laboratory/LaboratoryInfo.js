"use client"
import { textTransitionSecond, textVariant } from "@/motionVariants/textVariants";
import { Box } from "@mui/material";
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from "react";
import CustomButton from "../CustomButton/CustomButton";
import { buttonVariant } from "@/motionVariants/buttonVariants";

const LaboratoryInfo = () => {
    const ref = useRef(null)
    const controls = useAnimation()
    const isInView = useInView(ref)

    useEffect(() => {
        if(isInView) {
            controls.start("visible")
        }
    }, [controls, isInView])

    return (
        <Box className="mt-10">
            <motion.p 
                ref={ref}
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
            />
        </Box>
    )
}
export default LaboratoryInfo;