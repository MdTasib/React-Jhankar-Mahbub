import React, { useState } from 'react'
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import { Api_Key } from './.confiq';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const localtion = {
    lat: 22.689077254021708,
    lng: 91.7950201034546
};


function Direction({ origin, destination }) {
    const [directionResponse, setDirectionResponse] = useState(null);

    return (
        <LoadScript
            googleMapsApiKey={Api_Key}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={localtion}
                zoom={11}
            >
                {
                    origin !== '' && destination !== '' && <DirectionsService
                        options={{
                            destination: destination,
                            origin: origin,
                            travelMode: 'DRIVING'
                        }}
                        callback={res => {
                            if (res !== null) {
                                setDirectionResponse(res);
                            }
                        }}
                    />
                }
                {
                    directionResponse && <DirectionsRenderer
                        options={{
                            directions: directionResponse
                        }}
                    />
                }
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Direction)