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
        <FooterItem 
            key={item.text} 
            footerItem={item} 
            index={i}
        />
    ))

    return (
        <footer>
            <div className="pb-5 lg:pb-10 bg-gray">
                <div className="container mx-auto">
                    <div className="border-t-2 border-amber-300">
                        <div className="grid gap-y-5 grid-cols-1 lg:grid-cols-3 pt-5 lg:pt-10">
                            {content}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="py-10 bg-black"></div> */}
        </footer>
    )
}
export default Footer;