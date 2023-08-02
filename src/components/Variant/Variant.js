import { Button } from "@mui/material";
import Image from "next/image";
import CustomButton from "../CustomButton/CustomButton";
import VariantImage from "./VariantImage";
import VariantContent from "./VariantContent";

const Variant = ({children}) => {

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-3 lg:gap-0">
                {children}
            </div>
        </>

    )
}
export default Variant;