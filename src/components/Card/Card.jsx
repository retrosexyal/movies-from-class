import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"

export const Card = ({e, onClick, text}) => {
    return (
        <div key={e.id} className="card">
            <p>title:{e.title}</p>
            <p>rating: {e.vote_average}</p>
            <p>data: {e.release_date}</p>
            <Link to={`linked/:${e.id}`}>
                <img width="300" src={`https://image.tmdb.org/t/p/w500${e.poster_path}`} alt={e.poster_path} />
            </Link>
            <button onClick={onClick}>{text}</button>
        </div>
    )
}
