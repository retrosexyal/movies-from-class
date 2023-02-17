import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../components/Card/Card";
import PaginationControlled from "../../components/Pagination/PaginationControlled";
import Slideshow from "../../components/Slideshow/Slideshow";
import {
  actionFavorite,
  actionTypes,
} from "../../store/actions/favoriteAction";
import { actionMovies } from "../../store/actions/moviesAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Home.css";
import CardSkeleton from "../../components/CardSkeleton/CardSkeleton";
import { genres } from "../../constants/ganres";

const arr = [
  'popularity.asc', 'popularity.desc', 'release_date.asc', 'release_date.desc', 'revenue.asc', 'revenue.desc', 'primary_release_date.asc', 'primary_release_date.desc', 'original_title.asc', 'original_title.desc', 'vote_average.asc', 'vote_average.desc', 'vote_count.asc', 'vote_count.desc'
]

export const Home = () => {
  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state) => state.movies);
  const { favorite } = useSelector((state) => state.favorite);
  const [page, setPage] = useState(1);
  const [isVisibleGanre, setIsVisibleGanre] = useState(false);
  const [genresId, setGenresID] = useState("")
  const [sort, setSort] = useState('popularity.desc')
  const handleAdd = (id) => (e) => {
    /* console.log(movies) */
    toast("🦄 added!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    dispatch(actionFavorite.addMovies(movies.find((i) => i.id === id)));
  };

  /* const handleAdd = function (id) {
    return function () {
      console.log(id)
    }
  } */
  /* const handleGanre = (e) => {
    console.log(e.target)
    const id = e.target.__reactFiber$e40e729svg.key;
    dispatch(actionMovies.getMovies(page, id));
  }; */

  const handleGanre = (id) => () => {
    setGenresID(id)
  };
  const handleVisibleGanres = () => {
    setIsVisibleGanre(!isVisibleGanre);
  };
  useEffect(() => {
    dispatch(actionMovies.getMovies(page,genresId,sort));
  }, [page,genresId, sort]);

  const handlePage = (e) => {
    setPage(e.target.textContent);
  };
  const handleSort = (e)=>{
    setSort(arr[0])
  }
  return (
    <div>
      <ToastContainer />
      <Slideshow />
      <button onClick={handleSort}>sort by popularyty</button>
      <button onClick={handleVisibleGanres}>
        {isVisibleGanre ? "hide genre" : "show genre"}
      </button>
      <div className="ganres">
        {isVisibleGanre &&
          genres.map((e) => {
            return (
              <button onClick={handleGanre(e.id)} key={e.id}>
                {e.name}
              </button>
            );
          })}
      </div>
      <div className="main-cont">
        {movies.map((e) => {
          return (
            <>
              {loading && <CardSkeleton />}
              {!loading && (
                <Card e={e} key={e.id} onClick={handleAdd(e.id)} text={"add"} />
              )}
            </>
          );
        })}
      </div>
      <button onClick={handlePage}>1</button>
      <button onClick={handlePage}>2</button>
      <button onClick={handlePage}>3</button>
      <PaginationControlled handleChange={handlePage} page={page} />
    </div>
  );
};



/* popularity.asc, popularity.desc, release_date.asc, release_date.desc, revenue.asc, revenue.desc, primary_release_date.asc, primary_release_date.desc, original_title.asc, original_title.desc, vote_average.asc, vote_average.desc, vote_count.asc, vote_count.desc
default: popularity.desc */
