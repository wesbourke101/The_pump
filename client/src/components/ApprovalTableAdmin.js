import React, { useState } from "react";

function ApprovalTableAdmin ({falseMappedClimbs, updateRouteInfo}) {
    const [updateToggle, setUpDateToggle] = useState(true)
    const [updateRouteState, setUpdateRouteState] = useState({})
     
    return (
        <tr>
            <td>{falseMappedClimbs.route_name}</td>
            <td>{falseMappedClimbs.climbs.length}</td>
            <td>{falseMappedClimbs.description}</td>
            <td>{falseMappedClimbs.directions}</td>
            <td>N/A</td>
            <td>{falseMappedClimbs.latitude}</td>
            <td>{falseMappedClimbs.longitude}</td>
            <td>{falseMappedClimbs.approved ? "True": "False"}</td>
            <td><button style={{width: "4em", padding: "auto"}}>Edit</button><button style={{width: "4em", padding: "auto"}}>Delete</button></td>
        </tr>
    );
}

export default ApprovalTableAdmin;