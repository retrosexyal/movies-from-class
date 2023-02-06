import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from '../../components/Card/Card';
import { actionMovies } from '../../store/actions/moviesAction';

export const Home = () => {
  const dispatch = useDispatch();
  const { movies, loading } = useSelector(state => state.movies)
  const [page, setPage] = useState(1)
  useEffect(() => {
    dispatch(actionMovies.getMovies(page))
  }, [page])

  const handlePage = (e) => {
    setPage(e.target.textContent)
  }
  return (
    <div>{movies.map(e => {
      return (
        <Card e={e} key={e.id} />
      )
    })}
      <button onClick={handlePage}>1</button>
      <button onClick={handlePage}>2</button>
      <button onClick={handlePage}>3</button>
    </div>
  )
}
