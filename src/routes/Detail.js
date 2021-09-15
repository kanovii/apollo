import * as React from "react";
import { gql, useQuery } from "@apollo/client"
import { useParams } from "react-router";
import  "./Detail.css"

const movieQueryy = gql`
    query movieQuery($id: Int!) {
        movie(id: $id) {
            id
            rating
            title
            medium_cover_image
        }
    }
`
const Detail = () => {
    const { id } = useParams()
    const {loading, error, data } = useQuery(movieQueryy, {
        variables: { id: +id }
    });
    console.log(loading, error, data)
    return (
        <div>
            {loading ? 
                <div>loading...</div>
                :
                <>
                <div>{id}</div>
                <img src={data.movie.medium_cover_image} />
                <div>{data.movie.title}</div>
                
                </>
            
            }
        </div>
    )
}

export default Detail;