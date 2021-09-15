import * as React from "react";
import "./Home.css";
import { gql, useQuery } from "@apollo/client";
import Movie from "../components/Movie";
const movieQuery = gql `
    query {
        movies{
            id
            rating
            title
            medium_cover_image
        }    
    }
`
const Home = () => {
    const { loading, error, data } = useQuery(movieQuery);
    console.log(loading, error, data)

            return(
                <div className="container">
                    <div className="header_box">
                        <div>movies</div>
                        <div>find movie you want</div>
                    </div>
                    <div className="at_container">
                        <div className="movies_container">
                            {loading ? 
                                <div>loading...</div> 
                                : 
                                data.movies.map(m => 
                                <Movie 
                                    id={m.id} 
                                    title={m.title} 
                                    medium_cover_image={m.medium_cover_image}
                                    rating={m.rating}
                                    key={m.id} 
                                />)
                            }
                        </div>
                    </div>
                </div>
            )


}

export default Home;