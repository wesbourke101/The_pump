import React, { useState } from "react";
import ApprovalTableAdmin from "./ApprovalTableAdmin";
import "../styles/routeApproval.css"

function RouteApproval ({routeData, updateRouteInfo, deleteRouteAction}) {
    console.log(routeData)
    const filteredNonApprovedClimbs = routeData.filter((falseClimbs) => {return falseClimbs.approved == false})
    const mappedNonApprovedClimbs = filteredNonApprovedClimbs.map((falseMappedClimbs) => {return <ApprovalTableAdmin deleteRouteAction={deleteRouteAction} updateRouteInfo={updateRouteInfo} falseMappedClimbs={falseMappedClimbs}/>})

    const filterApprovalClimbs = routeData.filter((falseClimbs) => {return falseClimbs.approved == true})
    const mappedApprovedClimbs = filterApprovalClimbs.map((falseMappedClimbs) => {return <ApprovalTableAdmin deleteRouteAction={deleteRouteAction} updateRouteInfo={updateRouteInfo} falseMappedClimbs={falseMappedClimbs}/>})

   
    return (
        <div>
            <div style={{marginTop: "4em"}}>
                <table id="customersFalse">
                    <tr>
                        <th>Route name</th>
                        <th>Total climbes</th>
                        <th>Discription</th>
                        <th>Directions</th>
                        <th>Avg. star rating</th>
                        <th>latitude</th>
                        <th>longitude</th>
                        <th>Route Approved</th>
                        <th>Buttons</th>
                    </tr>
                    {mappedNonApprovedClimbs}
                </table>
            </div>
            <div style={{marginTop: "4em"}}>
                <table id="customers">
                    <tr>
                        <th>Route name</th>
                        <th>Total climbes</th>
                        <th>Discription</th>
                        <th>Directions</th>
                        <th>Avg. star rating</th>
                        <th>latitude</th>
                        <th>longitude</th>
                        <th>Route Approved</th>
                        <th>Buttons</th>
                    </tr>
                    {mappedApprovedClimbs}
                </table>
            </div>

        </div>
    );
}

export default RouteApproval;