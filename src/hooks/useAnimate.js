"use client"
import { useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";

export const useAnimate = (ref) => {
    const controls = useAnimation()
    const isInView = useInView(ref)

    useEffect(() => {
        if(isInView) {
            controls.start("visible")
        }
    }, [controls, isInView])

    return { controls }
}