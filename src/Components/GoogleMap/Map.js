import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Api_Key } from './.confiq';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const localtion = {
    lat: 22.689077254021708,
    lng: 91.7950201034546
};

const onload = marker => {
    console.log('marker', marker);
}

function Map() {
    return (
        <LoadScript
            googleMapsApiKey={Api_Key}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={localtion}
                zoom={15}
            >
                <Marker
                    onload={onload}
                    position={localtion}
                    title='Fatickchri Coronation Model High School'
                />
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Map)