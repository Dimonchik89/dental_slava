import { motion } from "framer-motion"
import { textVariant } from "@/motionVariants/textVariants"

const listArr = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quaerat earum accusantium hic sint expedita iusto nulla ducimus ut, animi enim fugiat eius alias cupiditate labore porro illum possimus assumenda1.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quaerat earum accusantium hic sint expedita iusto nulla ducimus ut, animi enim fugiat eius alias cupiditate labore porro illum possimus assumenda2.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quaerat earum accusantium hic sint expedita iusto nulla ducimus ut, animi enim fugiat eius alias cupiditate labore porro illum possimus assumenda3."
]

const AboutList = ({animateCb}) => {

    const content = listArr.map((item, i) => (
            <motion.div 
                key={item}
                initial={"hidden"}
                animate={animateCb}
                variants={textVariant}
                transition={{
                    ease: "easeInOut",
                    type: "spring",
                    delay: i === 0 ? 2.1 : 2.1 + +`0.${i}`,
                    duration: .7
                }}
                className="text-white text-center text-sm md:text-base"
            >
                {item}
            </motion.div>
    ))

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-5 mt-3 lg:mt-5">
            {content}
        </div>
    )
}
export default AboutList;