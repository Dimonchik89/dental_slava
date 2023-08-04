import { motion } from "framer-motion";
import { textVariant, aboutSubtitleVariant } from "@/motionVariants/textVariants"


const AboutContentSubtitle = ({animateCb}) => {

    return (
        <>
            <motion.h1 
                initial={"hidden"}
                animate={animateCb}
                variants={textVariant}
                transition={aboutSubtitleVariant}
                className="text-2xl lg:text-3xl text-yellow font-semibold text-center"
            >
                Co nas wyróżnia?
            </motion.h1>
        </>
    )
}
export default AboutContentSubtitle;