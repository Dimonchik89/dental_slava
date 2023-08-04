"use client"
import CustomButton from "../CustomButton/CustomButton";
import VariantContentTitle from "./VariantContentTitle";
import VariantContextText from "./VariantContentText";
import { useRef } from "react";
import { useAnimate } from "@/hooks/useAnimate";

const VariantContent = ({title, text, animationVariant, buttonAnimation, buttonTitle, buttonPath, customMargin}) => {
    const ref = useRef(null)
    const { controls } = useAnimate(ref)

    return (
        <div className={`py-5 lg:py-0 order-2 lg:order-none ${customMargin}`}>
            <div ref={ref} className="flex flex-col justify-center h-full lg:max-w-3xl lg:pl-5 max-w-full px-10">
                <VariantContentTitle title={title} animationVariant={animationVariant} controls={controls}/>
                <VariantContextText text={text} animationVariant={animationVariant} controls={controls}/>
                <CustomButton 
                    title={buttonTitle} 
                    path={buttonPath}
                    animationVariant={buttonAnimation}
                    animateCb={controls}
                />
            </div>
        </div>
    )
}
export default VariantContent;