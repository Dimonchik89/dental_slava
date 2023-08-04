"use client"
import Title from "@/components/Title/Title";
import ContactImage from "@/components/Contact/ContactImage";
import ContactContent from "@/components/Contact/ContactContent";
import { useRef } from "react";
import { useAnimate } from "@/hooks/useAnimate";

const Contacts = () => {
    const ref = useRef(null)
    const { controls } = useAnimate(ref)

    return (
        <div className="mt-[106px] bg-gray flex-auto">
            <div className="container mx-auto">
                <Title title={"Contacts"}/>
                <div className="my-10">
                    <div 
                        ref={ref}
                        className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-y-5 lg:gap-x-5"
                    >
                        <ContactImage animateCb={controls}/>
                        <ContactContent animateCb={controls}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contacts;