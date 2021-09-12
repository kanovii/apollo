import * as React from "react";
import { gql, useQuery } from "@apollo/client"
import styled from "styled-components";
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
                <div>
                    <div>
                        <div>movies</div>
                        <div>fine movie you want</div>
                    </div>
                    {loading ? 
                        <div>loading...</div> 
                        : 
                        data.movies.map(m => 
                        <Movie 
                            id={m.id} 
                            title={m.title} 
                            medium_cover_image={m.medium_cover_image}
                            key={m.id} 
                        />)
                    }
                </div>
            )


}

export default Home;