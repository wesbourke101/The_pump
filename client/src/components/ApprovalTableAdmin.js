import React, { useState } from "react";

function ApprovalTableAdmin ({falseMappedClimbs, updateRouteInfo, deleteRouteAction}) {
    const {id} = falseMappedClimbs
    const [updateToggle, setUpDateToggle] = useState(true)
    const [updateRouteState, setUpdateRouteState] = useState({
        route_name: falseMappedClimbs.route_name,
        description: falseMappedClimbs.description,
        directions: falseMappedClimbs.directions,
        latitude: falseMappedClimbs.latitude,
        longitude: falseMappedClimbs.longitude,
        approved: falseMappedClimbs.approved
    })
    function onChangeRoute (e) {
        setUpdateRouteState({...updateRouteState, [e.target.name]: e.target.value})
    }
    function editRouteFunction(e) {
        e.preventDefault()
        console.log(updateRouteState)
        updateRouteInfo(updateRouteState, id)
        // setUpdateRouteState({
        //     route_name: falseMappedClimbs.route_name,
        //     description: falseMappedClimbs.description,
        //     directions: falseMappedClimbs.directions,
        //     latitude: falseMappedClimbs.latitude,
        //     longitude: falseMappedClimbs.longitude,
        //     approved: falseMappedClimbs.approved
        // })
        setUpDateToggle(!updateToggle)
    }
    function deleteRouteFunction(e) {
        e.preventDefault()
        deleteRouteAction(id)
        setUpDateToggle(true)
    }
    return (
        <>
            {updateToggle ? 
                <tr>
                    <td>{falseMappedClimbs.route_name}</td>
                    <td>{falseMappedClimbs.climbs.length}</td>
                    <td>{falseMappedClimbs.description}</td>
                    <td>{falseMappedClimbs.directions}</td>
                    <td>N/A</td>
                    <td>{falseMappedClimbs.latitude}</td>
                    <td>{falseMappedClimbs.longitude}</td>
                    <td>{falseMappedClimbs.approved ? "True": "False"}</td>
                    <td><button onClick={deleteRouteFunction}style={{width: "4em", padding: "auto"}}>Delete</button><button onClick={() => setUpDateToggle(!updateToggle) } style={{width: "4em", padding: "auto"}}>Edit</button></td>
                </tr>
            :
                <tr>
                    <td>
                        <input type="type" name="route_name" onChange={onChangeRoute} value={updateRouteState.route_name}/>
                    </td>
                    <td>
                        null
                    </td>
                    <td>    
                        <textarea type="type" name="description" onChange={onChangeRoute} value={updateRouteState.description}></textarea>
                    </td>
                    <td>
                        <textarea type="type" name="directions" onChange={onChangeRoute} value={updateRouteState.directions}></textarea>
                    </td>
                    <td>
                        null
                    </td>
                    <td>
                        <input type="number" name="latitude" onChange={onChangeRoute} value={updateRouteState.latitude}/>
                    </td>
                    <td>
                    <input type="number" name="longitude" onChange={onChangeRoute} value={updateRouteState.longitude}/>
                    </td>
                    <td>
                        <select name="approved" onChange={onChangeRoute} value={updateRouteState.approved}>
                            <option value="false">False</option>
                            <option value="true">True</option>
                        </select>
                    </td>
                    <td>
                        <button onClick={editRouteFunction}>Submit</button><button onClick={() => setUpDateToggle(!updateToggle)}>Cancel</button>
                    </td>
                </tr>

            }
        </>
    );
}

export default ApprovalTableAdmin;