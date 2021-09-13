import * as React from "react";
import "./Movie.css"
import { Link } from "react-router-dom";

const Movie = ({id, title, medium_cover_image, rating}) => {
    
    console.log(medium_cover_image)
    return (
        <div className="movie_box">
            <Link to={`/${id}`}>
                <img className="movie_img" src={medium_cover_image} />  
                <div className="movie_title">{title} <span>rating: {rating}</span></div>
 
            </Link>
        </div>
    )
}

export default Movie