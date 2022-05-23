import { Marker, InfoWindow } from "@react-google-maps/api";
import { useState } from "react";


function MyMarker({route, setOpenRightWindow}) {
  const [selected, setSelected] = useState(null);
  const {longitude, latitude, approved, climb_id, description, directions, id, picture, route_name} = route
  const lng = parseFloat(longitude)
  const lat = parseFloat(latitude)

  return (
    <Marker
      position={{ lat: lat, lng: lng }}
      onClick={() => {
          return (
            setSelected(route),
            setOpenRightWindow(route)
          );
      }
    }
    >
      {selected ? (
        <InfoWindow onCloseClick={() => setSelected(null)}>
          <div id={id}>
            <h1>{route_name}</h1>
                <div>
                    <label>Description</label>
                    <p>{description}</p>
                    <label>Directions</label>
                    <p>{directions}</p>
                </div>
            </div>
        </InfoWindow>
      ) : null}
    </Marker>
  );
}
export default MyMarker