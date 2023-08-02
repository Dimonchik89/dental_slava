import FooterItem from "./FooterItem";

const footerItems = [
    {
        title: "Adres:",
        text: [
            "ul. Brata Zenona Żebrowskiego 4 lok.III",
            "07-410 Ostrołęka"
        ],
        textStyle: "text-gray-light text-base"
    },
    {
        title: "Telefon:",
        text: [
            "+48 530 194 763",
            "+48 668 243 010"
        ],
        textStyle: "text-yellow text-base cursor-pointer hover:text-gray-light ease duration-300"
    },
    {
        title: "E-mail:",
        text: [
            "goldlab.kontakt@gmail.com",
        ],
        textStyle: "text-yellow text-base cursor-pointer hover:text-gray-light ease duration-300"
    }
]

const Footer = () => {

    const content = footerItems.map((item, i) => (
        <FooterItem key={item.text} footerItem={item} index={i}/>
    ))

    return (
        <div>
            <div className="pb-10 bg-gray">
                <div className="container mx-auto">
                    <div className="border-t-2 border-amber-300">
                        <div className="grid gap-y-5 grid-cols-1 lg:grid-cols-3 pt-10">
                            {content}
                            {/* <div className="flex flex-col items-center">
                                <h3 className="text-gray-light text-base font-semibold">Adres:</h3>
                                <p className="text-gray-light text-base">ul. Brata Zenona Żebrowskiego 4 lok.III</p>
                                <p className="text-gray-light text-base">07-410 Ostrołęka</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="text-gray-light text-base font-semibold">Telefon:</h3>
                                <p className="text-yellow text-base cursor-pointer hover:text-gray-light ease duration-300">+48 530 194 763</p>
                                <p className="text-yellow text-base cursor-pointer hover:text-gray-light ease duration-300">+48 668 243 010</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="text-gray-light text-base font-semibold">E-mail:</h3>
                                <p href="mailto:dima.music1989@gmail.com" className="text-yellow text-base cursor-pointer hover:text-gray-light ease duration-300">goldlab.kontakt@gmail.com</p>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
            <div className="py-10 bg-black"></div>
            {/* <div className="py-10 bg-gray"></div> */}
        </div>
    )
}
export default Footer;