"use client"
import { useRef } from "react"
import { motion } from "framer-motion"
import { useAnimate } from "@/hooks/useAnimate"
import { textVariant } from "@/motionVariants/textVariants"

const AboutContentText = () => {
    const ref = useRef(null)
    const { controls } = useAnimate(ref)

    return (
        <div 
            ref={ref}
            className="text-white text-base flex flex-col justify-center"
        >
            <motion.p 
                initial={"hidden"}
                animate={controls}
                variants={textVariant}
                transition={{
                    ease: "easeInOut",
                    type: "spring",
                    delay: .5,
                    duration: .7
                }}
                className="mb-3 text-sm md:text-base"
            >
                Wraz ze zdobywaną wiedzą i doświadczeniem podczas pracy w różnych laboratoriach w Polsce pojawił się pomysł założenia własnego laboratorium. Marzyliśmy o miejscu, w którym moglibyśmy wykorzystać nabyte umiejętności i wykonywać prace z odpowiednią troską i dbałością o szczegóły. Dziś, już jako małżeństwo, możemy cieszyć się pracą pełną pasji i satysfakcji w firmie tworzonej z sercem. Dzięki temu, że każda praca przechodzi przez nasze ręce, mamy pełną kontrolę nad każdym etapem pracy.
            </motion.p>
            <motion.p
                initial={"hidden"}
                animate={controls}
                variants={textVariant}
                transition={{
                    ease: "easeInOut",
                    type: "spring",
                    delay: .5 * 2,
                    duration: .7
                }}
                className="text-sm md:text-base"
            >
                Opracowaliśmy własny protokół współpracy między gabinetem a laboratorium, który zapewnia lekarzowi odpowiednie zaplanowanie pracy oraz osiągnięcie pełnej powtarzalności od projektu wax-up do gotowego wyrobu. Łączymy najnowocześniejsze technologie CAD/CAM niosące wysoką precyzję z pracą HANDMADE dającą piękny i naturalny wygląd zębów. Uśmiech pacjenta gwarantowany! Nasza placówka mieści się w Ostrołęce, chcemy jednak zaznaczyć, że ofertę kierujemy do klientów z całego województwa mazowieckiego, a także całej Polski!
            </motion.p>
        </div>
    )
}
export default AboutContentText