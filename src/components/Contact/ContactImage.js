import Image from "next/image";
import contact from "../../images/contact/contact_photo.jpg";
import { motion } from "framer-motion";
import { imageScale, imageTransition } from "@/motionVariants/imageVariants";

const ContactImage = ({animateCb}) => {

    return (
        <motion.div 
            initial={"hidden"}
            animate={animateCb}
            variants={imageScale}
            transition={{
                delay: .7,
                duration: .7,
                type: "just",
                ease: "easeInOut"
            }}
            className="w-1/2 mx-auto lg:w-full"
        >
            <Image
                src={contact}
                alt="contact"
            />
        </motion.div>
    )
}
export default ContactImage;