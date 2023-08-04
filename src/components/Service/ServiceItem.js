"use client"
import { advantageVariant } from "@/motionVariants/advantageVariant";
import { motion } from "framer-motion";
import Image from "next/image";

const ServiceItem = ({card, callback, animateCb, index}) => {

    return (
        <motion.div 
            initial={"hidden"}
            animate={animateCb}
            variants={advantageVariant}
            transition={{
                ease: "easeInOut",
                type: "spring",
                delay: index === 0 ? .5 : .3 * (index + 1),
                duration: .7
            }}
            className="flex flex-col items-center"
        >
            <Image
                height={300}
                src={card.image}
                alt="dental9"
                className="flex-auto"
            />
            <h3 className="text-gray-light font-semibold text-2xl lg:text-3xl mt-3">
                {card.title}
            </h3>
            <p className="text-gray-light text-xl lg:2xl mt-3">
                {card.text}
            </p>

            <button
                className="bg-yellow text-black font-semibold hover:text-gray-light hover:bg-black px-8 py-1 rounded-md ease duration-300 mt-5"
                onClick={callback}
            >
                Узнать цену
            </button>
        </motion.div>
    )
}
export default ServiceItem;