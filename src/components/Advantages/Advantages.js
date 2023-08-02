"use client"
import { motion, useAnimation, useInView } from "framer-motion"
import { useAnimate } from "@/hooks/useAnimate"
import { useEffect, useRef } from "react"
import { advantageVariant, advantagetransition } from "@/motionVariants/advantageVariant"
import AdvantageTitle from "./AdvantagesTitle"

const argsArr = [
    {
        title: "Technology",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ut sint ipsa ea voluptatibus, sapiente non molestiae voluptas numquam minima a hic quia, totam suscipit!",
        number: 1
    },
    {
        title: "Technology",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ut sint ipsa ea voluptatibus, sapiente non molestiae voluptas numquam minima a hic quia, totam suscipit!",
        number: 2
    },
    {
        title: "Technology",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ut sint ipsa ea voluptatibus, sapiente non molestiae voluptas numquam minima a hic quia, totam suscipit!",
        number: 3
    },
    {
        title: "Technology",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ut sint ipsa ea voluptatibus, sapiente non molestiae voluptas numquam minima a hic quia, totam suscipit!",
        number: 4
    },
    {
        title: "Technology",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ut sint ipsa ea voluptatibus, sapiente non molestiae voluptas numquam minima a hic quia, totam suscipit!",
        number: 5
    },
    {
        title: "Technology",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ut sint ipsa ea voluptatibus, sapiente non molestiae voluptas numquam minima a hic quia, totam suscipit!",
        number: 6
    },
]

const Advantages = () => {
    const ref = useRef(null)
    const controls = useAnimation()
    const isInView = useInView(ref)
    
    useEffect(() => {
        if(isInView) {
            controls.start("visible")
        }
    }, [controls, isInView])

    return (
        <div className="py-10">
            <div className="container mx-auto">
                <AdvantageTitle/>
                <div 
                    ref={ref}
                    className="grid gap-5 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10"
                >
                    {
                        argsArr.map((item, i) => (
                            <motion.div 
                                key={item.title}
                                className="relative"
                                initial={"hidden"}
                                animate={controls}    
                                variants={advantageVariant}
                                transition={{
                                    ease: "easeInOut",
                                    type: "spring",
                                    delay: .7 * i,
                                    duration: .7
                                }}
                            >
                                <h3 className="text-2xl lg:text-3xl font-semibold text-gray-light text-center">{item.title}</h3>
                                <p className="text-gray-light text-center">
                                    {item.text}
                                </p>
                                <p className="advantages__item">{item.number}</p>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Advantages