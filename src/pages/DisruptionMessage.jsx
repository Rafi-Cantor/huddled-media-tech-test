import React from "react";
import { useLocation, Link } from "react-router-dom";


function DisruptionMessage(){
    const location = useLocation();
    const {reason, line_name, last_updated} = location.state;

    return(
        <>
            <h2>{line_name}</h2>
            <h4>{last_updated}</h4>
            <p>{reason ? reason : `There are currently no reported disruptions on the ${line_name} line`}</p>
            <Link to='/travel'>Go Back</Link>
        </>
    )
}
 
export default DisruptionMessage;