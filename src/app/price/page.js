import Title from "@/components/Title/Title";
import Image from "next/image";
import logo from "../../images/dental_logo.jpg";
import PriceList from "@/components/Price/PriceList";

const priceInfoFirst = [
    {
        title: "Ceramika",
        items: [
            {
                name: "lorem bla bla bla",
                cost: "200$"
            },
            {
                name: "Tututu LALALA",
                cost: "300$"
            },
            {
                name: "Hop Hop Hop",
                cost: "250$"
            },
        ]
    },
    {
        title: "Super Ceramika",
        items: [
            {
                name: "Super lorem bla bla bla",
                cost: "220$"
            },
            {
                name: "Super Tututu LALALA",
                cost: "340$"
            },
            {
                name: "Super Hop Hop Hop",
                cost: "280$"
            },
        ]
    },
]

const priceInfoSecond = [
        {
            title: "Tooth",
            items: [
                {
                    name: "lorem Tooth",
                    cost: "205$"
                },
                {
                    name: "Tooth LALALA",
                    cost: "305$"
                },
                {
                    name: "Tooth Hop Hop Hop",
                    cost: "255$"
                },
            ]
        },
        {
            title: "Super Tooth",
            items: [
                {
                    name: "Super Tooth lorem bla bla bla",
                    cost: "225$"
                },
                {
                    name: "Super Tooth Tututu LALALA",
                    cost: "345$"
                },
                {
                    name: "Super Tooth Hop Hop Hop",
                    cost: "285$"
                },
            ]
        },
]

const Price = () => {

    return (
        <div className="mt-[106px] bg-gray flex-auto">
            <div className="container mx-auto">
                <Title title={"Price"}/>
                <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-2 lg:gap-x-10 my-10">
                    <PriceList priceInfo={priceInfoFirst}>
                        <Image
                            src={logo}
                            alt="logo"
                        />
                    </PriceList>
                    <PriceList priceInfo={priceInfoSecond}/>
                </div>
            </div>
        </div>
    )
}
export default Price;