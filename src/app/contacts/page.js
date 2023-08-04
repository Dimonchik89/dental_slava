"use client"
import Title from "@/components/Title/Title";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useMemo } from "react";

const containerStyle = {
    width: '100%',
    height: '400px'
};

const Contacts = () => {
    const key = 'AIzaSyDRX0D21tjCpNmpABQp8bnfNyA99pscQrM'    
    const { isLoaded } = useLoadScript({
        // googleMapsApiKey: key
    })

    const center = useMemo(() => ({
        lat: -3.745,
        lng: -38.523
    }), [])


    return (
        <div className="mt-[106px] bg-gray flex-auto">
            <div className="container mx-auto">
                <Title title={"Contacts"}/>
                <div className="my-10">
                    <div className="grid grid-cols-2">
                        <div>
                            {
                                isLoaded ? 
                                <GoogleMap
                                    zoom={10}
                                    center={center}
                                    mapContainerStyle={containerStyle}
                                >
                                    <Marker position={center}/>
                                </GoogleMap> :
                                <h2>Loading...</h2>
                            }
                        </div>
                        <div>
                            <h1 className="text-gray-light">lalala</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contacts;