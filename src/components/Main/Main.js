"use client"
import { Box } from "@mui/material"
import { motion } from "framer-motion";
import { textVariant, textTransitionFirst, textTransitionSecond } from "../../motionVariants/textVariants"

const Main = () => {

    return (
        <Box className="h-screen md:h-[calc(100vh_-_106px)] main__bg flex">
            <Box className="container mx-auto relative flex items-center">
                <Box className="flex flex-col items-center max-w-screen-lg mx-auto">
                    <motion.h1 
                        initial={"hidden"}
                        animate={"visible"}
                        variants={textVariant}
                        transition={textTransitionFirst}
                        className="title"
                    >
                        Pomagamy tworzyć piękne uśmiechy
                    </motion.h1>
                    <motion.h4 
                        className="text-gray-light text-center text-base md:text-xl"
                        initial={"hidden"}
                        animate={"visible"}
                        variants={textVariant}
                        transition={textTransitionSecond}
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit voluptatem repellendus aspernatur harum dolor explicabo soluta quos? Eos, perspiciatis saepe, ea assumenda eum tenetur nulla suscipit aperiam iure dignissimos adipisci!
                        Illum iure cum rem atque totam perferendis magni itaque explicabo, consectetur nulla provident, voluptatum consequatur nemo voluptas, cumque ipsam neque officia dolorem dolorum deserunt! Ipsam iusto animi provident distinctio sequi.
                        Mollitia quisquam sit, tempora debitis fugiat animi est fugit consequatur tenetur temporibus ratione similique neque nostrum provident officia repellendus delectus inventore aliquam dolorem, explicabo voluptas architecto. Fugiat nam iure quidem!
                        Illo error alias, velit sequi accusantium earum necessitatibus magnam maiores. Quae culpa quis id, cumque quo sequi dolore fuga at quia facere quasi labore aspernatur debitis magnam voluptas numquam molestias!
                    </motion.h4>
                </Box>
            </Box>
        </Box>
    )
}
export default Main;