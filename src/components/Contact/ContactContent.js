import { motion } from "framer-motion";
import { textVariant } from "@/motionVariants/textVariants";

const ContactContent = ({animateCb}) => {

    return (
        <div className="text-gray-light flex flex-col items-center justify-center">
            <motion.h1 
                initial={"hidden"}
                animate={animateCb}
                variants={textVariant}
                transition={{
                    delay: .7,
                    duration: .3,
                    type: "just",
                    ease: "easeInOut"
                }}
                className="text-gray-light text-xl lg:text-2xl font-semibold"
            >
                Качко Вячеслав
            </motion.h1>
            <div className="mt-5">
                <motion.p 
                    initial={"hidden"}
                    animate={animateCb}
                    variants={textVariant}
                    transition={{
                        delay: .7,
                        duration: .5,
                        type: "just",
                        ease: "easeInOut"
                    }}
                    className="text-yellow text-base lg:text-xl"
                >
                    ul. Brata Zenona Żebrowskiego 4 lok.III
                    07-410 Ostrołęka
                </motion.p>
                <motion.div 
                    initial={"hidden"}
                    animate={animateCb}
                    variants={textVariant}
                    transition={{
                        delay: .7,
                        duration: .7,
                        type: "just",
                        ease: "easeInOut"
                    }}
                    className="mt-3 flex flex-col items-center text-base lg:text-xl"
                >
                    <p>
                        +48 530 194 763
                    </p>
                    <p>
                        +48 668 243 010
                    </p>
                </motion.div>
                <motion.p 
                    initial={"hidden"}
                    animate={animateCb}
                    variants={textVariant}
                    transition={{
                        delay: .7,
                        duration: .9,
                        type: "just",
                        ease: "easeInOut"
                    }}
                    className="mt-3 text-center text-yellow text-base lg:text-xl"
                >
                    balblabla.gmail.com
                </motion.p>
                <motion.div 
                    initial={"hidden"}
                    animate={animateCb}
                    variants={textVariant}
                    transition={{
                        delay: .7,
                        duration: 1.1,
                        type: "just",
                        ease: "easeInOut"
                    }}
                    className="mt-3 flex flex-col items-center text-base lg:text-xl"
                >
                    <p> Godziny otwarcia:</p>
                    <p>
                        Poniedziałek - Piątek: 8:00 - 17:00
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
export default ContactContent;