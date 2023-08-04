"use client"
import dental9 from "../../images/services/dental9.jpg";
import dental10 from "../../images/services/dental10.jpg";
import dental11 from "../../images/services/dental11.jpg";
import dental12 from "../../images/services/dental12.jpg";
import dental13 from "../../images/services/dental13.jpg";
import dental14 from "../../images/services/dental14.jpg";
import ServiceItem from "./ServiceItem";
import { useRouter } from "next/navigation";
import { useAnimate } from "@/hooks/useAnimate";
import { useRef } from "react";

const arrCard = [
    {
        title: "Вініри1",
        text: "Прес-кераміка E.max, LiSi Press, Livento Press.",
        image: dental9
    },
    {
        title: "Вініри2",
        text: "Прес-кераміка E.max, LiSi Press, Livento Press.",
        image: dental10
    },
    {
        title: "Вініри3",
        text: "Прес-кераміка E.max, LiSi Press, Livento Press.",
        image: dental11
    },
    {
        title: "Вініри4",
        text: "Прес-кераміка E.max, LiSi Press, Livento Press.",
        image: dental12
    },
    {
        title: "Вініри5",
        text: "Прес-кераміка E.max, LiSi Press, Livento Press.",
        image: dental13
    },
    {
        title: "Вініри6",
        text: "Прес-кераміка E.max, LiSi Press, Livento Press.",
        image: dental14
    }
]


const ServiceList = () => {
    const router = useRouter()
    const ref = useRef(null)
    const { controls } = useAnimate(ref)

    const content = arrCard.map((item, i) => (
        <ServiceItem 
            key={item.title} 
            card={item} 
            callback={() => router.push("/price")} 
            animateCb={controls}
            index={i}
        />
    ))

    return (
        <div className="my-5 lg:my-10">
            <div 
                ref={ref}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
                {content}
            </div>
        </div>
    )
}
export default ServiceList;