
import AboutContentPhoto from "./AboutContentPhoto";
import AboutContentSubtitle from "./AboutContentSubtitle";
import AboutContentText from "./AboutContentText";
import AboutList from "./AboutList";

const AboutContent = () => {

    return (
        <div className="my-5 lg:my-10">
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6">
                <AboutContentText/>
                <AboutContentPhoto/>
            </div>
            <div className="mt-10">
                <AboutContentSubtitle/>
                <AboutList/>
            </div>
        </div>
    )
}
export default AboutContent;