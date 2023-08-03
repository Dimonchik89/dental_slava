import AboutContent from "@/components/About/AboutContent";
import Title from "@/components/Title/Title";

const About = () => {

    return (
        <main className="mt-[106px] bg-gray flex-auto">
            <div className="container mx-auto">
                <Title title={"Informacje o laboratorium GoldLab w Ostrołęce"}/>
                <AboutContent/>
            </div>
        </main>
    )
}
export default About;