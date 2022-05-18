import React, { useState } from "react";
import {GoogleMap, useLoadScript} from '@react-google-maps/api'
import '../styles/index.css';

const libraries =["places"]
function Maps() {
    const [zoom, setZoom] = useState(12)
    const [center, setCenter] = useState({ lat: 36.090185, lng: -84.707735 })
    const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
    libraries})
    if (!isLoaded) return <div>Loading.........</div>
    
  return (
    <div className="mapsDiv">
        <GoogleMap zoom={zoom} center={center} mapContainerClassName='map-container' >
        </GoogleMap>    
    </div>
  );
}
export default Maps;