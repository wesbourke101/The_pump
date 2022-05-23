import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import '../styles/index.css';
import MyMarker from "./MyMarker"
import RightInfoWindow from "./RightInfoWindow";
const libraries =["places"]



function Maps({userAddRoute, routeData}) {
    const [openRightWindow, setOpenRightWindow] = useState(null)
    const [markerToggle, setMarkerToggle] = useState(false);
    const [selected, setSelected] = React.useState(null);
    const [markers, setMarkers] = useState([]);
    const [zoom, setZoom] = useState(12);
    const [center, setCenter] = useState({ lat: 36.090185, lng: -84.707735 });
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
      libraries
    });
    const onMapCLick =React.useCallback((event) => {
        setMarkers((current) => [ {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
            time: new Date(),
          }]
        )
        
    },[]);
    const [formAddNewRoute, setAddNewForm] = useState({
      route_name: "",
      description: "",
      picture: "",
      directions: "",
      climb_id: "",
      approved: false,
      longitude: 0,
      latitude: 0,
    })
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
      mapRef.current = map;
    }, []);
    if (!isLoaded) return <div>Loading.........</div>
    function addNewClimbingRoute(e) {
      e.preventDefault()
      formAddNewRoute.longitude = markers[0].lng
      formAddNewRoute.latitude = markers[0].lat
      userAddRoute(formAddNewRoute)
    }
    function newClimbAttributes(e) {
      setAddNewForm({...formAddNewRoute, [e.target.name]: e.target.value})
    }
    const mappedRoutes = routeData?.map((route) => 
      <MyMarker 
        setOpenRightWindow={setOpenRightWindow}
        route={route}
        key={route.id} 
      />
    )

  return (
    <div id="mapsMainDiv">
      <div className="mapsDiv">
        <h1 id="h1MapNameBanner">The Pump</h1>
          <GoogleMap 
            zoom={zoom} 
            center={center} 
            mapContainerClassName='map-container'
            onClick={onMapCLick} 
            onLoad={onMapLoad}
          >
            {mappedRoutes}
            {markerToggle ?
              markers.map(marker => 
                <Marker 
                  key={marker.time.toISOString()} 
                  position={{lat: marker.lat, lng: marker.lng 
                  }}
                  onClick = {() => {
                    setSelected(marker);
                  }}
                />
              )
            :
              null
            };
            {selected ? (<InfoWindow position={{lat: selected.lat, lng: selected.lng }} 
              onCloseClick={() => {
                setSelected(null);
                setAddNewForm({
                  route_name: "",
                  description: "",
                  picture: "",
                  directions: "",
                  climb_id: "",
                  approved: false,
                  longitude: 0,
                  latitude: 0,
                });
                setMarkers([]);
              }
            }>
              <div>
                <h2>Climb Info</h2>
                <div>
                  <form onSubmit={addNewClimbingRoute}>
                    <input name="route_name" value={formAddNewRoute.route_name} onChange={newClimbAttributes} type="type"/>
                    <input name="description" value={formAddNewRoute.description} onChange={newClimbAttributes} type="type"/>
                    {/* <input onChange={newClimbAttributes} type="type"/>
                    <input onChange={newClimbAttributes} type="type"/> */}
                    <button type="submit">[X]</button>
                  </form> 
                </div>
              </div>
            </InfoWindow>) : null}
          </GoogleMap> 

          <button onClick={() => {
            setMarkerToggle(true) 
            setMarkers([])
          }}> Create New Climb </button>   
      </div>
      <div>
        {openRightWindow ? <RightInfoWindow openRightWindow={openRightWindow}/> : null}
      </div>
    </div>
  );
}
export default Maps;