import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

function Loading (props) {
    const navigate = useNavigate();
 
    return (
        <div>
            <h1>Loading......</h1>
            {navigate('/user_profile')}
       </div>
    );
}

export default Loading;