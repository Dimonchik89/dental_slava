"use client"
import { Box } from "@mui/material";

import LaboratoryTitle from "./LaboratoryTitle";
import LaboratoryImage from "./LaboratoryImage";
import LaboratoryInfo from "./LaboratoryInfo";

const Laboratory = () => {

    return (
        <Box className="bg-gray">
            <Box className="container mx-auto">
                <Box className="flex flex-col items-center py-20">
                    <LaboratoryTitle/>
                    <LaboratoryImage/>
                    <LaboratoryInfo/>
                </Box>
            </Box>
        </Box>
    )
}
export default Laboratory;