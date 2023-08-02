import CustomButton from "../CustomButton/CustomButton";
import VariantContentTitle from "./VariantContentTitle";
import VariantContextText from "./VariantContentText";


const VariantContent = ({title, text, animationVariant, buttonAnimation, buttonTitle, buttonPath}) => {

    return (
        <div className="py-5 lg:py-0 order-2 lg:order-none">
            <div className="flex flex-col justify-center h-full lg:max-w-3xl lg:pl-5 max-w-full px-10">
                <VariantContentTitle title={title} animationVariant={animationVariant}/>
                <VariantContextText text={text} animationVariant={animationVariant}/>
                <CustomButton 
                    title={buttonTitle} 
                    path={buttonPath}
                    animationVariant={buttonAnimation}
                />
            </div>
        </div>
    )
}
export default VariantContent;