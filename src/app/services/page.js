import ServiceList from "@/components/Service/ServiceList";
import ServiceSubtitle from "@/components/Service/ServiceSubtitle";
import Title from "@/components/Title/Title";

const Services = () => {

    return (
        <div className="mt-[106px] bg-black flex-auto">
            <div className="container mx-auto">
                <Title title={"Services"}/>
                <div className="mt-5 lg:mt-10">
                    <ServiceSubtitle/>
                    <ServiceList/>
                </div>
            </div>
        </div> 
    )
}
export default Services;