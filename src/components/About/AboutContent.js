"use client"
import AboutContentPhoto from "./AboutContentPhoto";
import AboutContentSubtitle from "./AboutContentSubtitle";
import AboutContentText from "./AboutContentText";
import AboutList from "./AboutList";
import { useRef } from "react";
import { useAnimate } from "@/hooks/useAnimate";

const AboutContent = () => {
    const ref = useRef(null)
    const { controls } = useAnimate(ref)

    return (
        <div className="my-5 lg:my-10">
            <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6">
                <AboutContentText animateCb={controls}/>
                <AboutContentPhoto animateCb={controls}/>
            </div>
            <div className="mt-10">
                <AboutContentSubtitle animateCb={controls}/>
                <AboutList animateCb={controls}/>
            </div>
        </div>
    )
}
export default AboutContent;