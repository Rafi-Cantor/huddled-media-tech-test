import React from "react";
import { Link } from 'react-router-dom'


function NotFound(){

    return(
        <>
            <p>Page not found.</p>
            <Link to='/'>Home</Link>
        </>
    )
}

export default NotFound;