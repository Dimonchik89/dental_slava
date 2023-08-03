
import AboutTitle from "@/components/About/AboutTitle";
import AboutContent from "@/components/About/AboutContent";

const About = () => {

    return (
        <main className="mt-[106px] bg-gray flex-auto ">
            <div className="container mx-auto">
                <AboutTitle/>
                <AboutContent/>
            </div>
        </main>
    )
}
export default About;