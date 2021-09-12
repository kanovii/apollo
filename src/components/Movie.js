import * as React from "react";
import { Link } from "react-router-dom";

const Movie = ({id, title, medium_cover_image}) => {
    console.log(medium_cover_image)
    return (
        <>
            <div>{id}</div>
            <div>{title}</div>
            <Link to={`/${id}`}>
                <img src={medium_cover_image} />   
            </Link>
        </>
    )
}

export default Movie