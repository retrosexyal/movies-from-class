import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from '../../components/Card/Card';
import PaginationControlled from '../../components/Pagination/PaginationControlled';
import Slideshow from '../../components/Slideshow/Slideshow';
import { actionFavorite, actionTypes } from '../../store/actions/favoriteAction';
import { actionMovies } from '../../store/actions/moviesAction';

import "./Home.css"
export const Home = () => {
  const dispatch = useDispatch();
  const { movies, loading } = useSelector(state => state.movies)
  const [page, setPage] = useState(1)

   const handleAdd = (id) => () =>{
/* console.log(movies) */
console.log()
     dispatch(actionFavorite.addMovies(movies.find((i)=>i.id === id)))
   }
 
  /* const handleAdd = function (id) {
    return function () {
      console.log(id)
    }
  } */

  useEffect(() => {
    dispatch(actionMovies.getMovies(page))
  }, [page])

  const handlePage = (e) => {
    setPage(e.target.textContent)
  }
  return (
    <div>
      <Slideshow />
      <div className="main-cont">{movies.map(e => {
        return (
          <Card e={e} key={e.id} onClick={handleAdd(e.id)} />
        )
      })}

      </div>
      <button onClick={handlePage}>1</button>
      <button onClick={handlePage}>2</button>
      <button onClick={handlePage}>3</button>
      <PaginationControlled handleChange={handlePage} page={page} />
    </div>

  )
}
