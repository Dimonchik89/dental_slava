import image from "../../images/main/about_img.jpg"
import Image from "next/image";
import { motion } from "framer-motion"
import { imageScale } from "../../motionVariants/imageVariants";

const AboutContentPhoto = ({animateCb}) => {

    return (
        <motion.div 
            initial={"hidden"}
            animate={animateCb}
            variants={imageScale}
            transition={{
                delay: .7,
                duration: .7,
                type: "spring",
            }}
            className="text-white"
        >
            <Image
                src={image}
                alt="doctor"
                className="w-1/2 mx-auto lg:w-full lg:m-0"
            />
        </motion.div>
    )
}
export default AboutContentPhoto;