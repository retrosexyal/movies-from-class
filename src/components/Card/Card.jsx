import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({e}) => {
    return (
        <div key={e.id}>
            <p>title:{e.title}</p>
            <p>rating: {e.vote_average}</p>
            <p>data: {e.release_date}</p>
            <Link to={`linked/:${e.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${e.poster_path}`} alt={e.poster_path} />
            </Link>
        </div>
    )
}
