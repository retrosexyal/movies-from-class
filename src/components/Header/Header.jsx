import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionMovies } from '../../store/actions/moviesAction';

export const Header = ({handleChangeTheme, selected}) => {
    const favorit = useSelector(state => state.favorite.favorite)
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const handleSearch = () => {
        if (search) {
            dispatch(actionMovies.getMoviesSearch(search))
        }
    }
    return (
        <div className='header'>
            <select onChange={handleChangeTheme} selected={selected} >
                <option value="light">light</option>
                <option value="dark">dark</option>
            </select>
            <Link to="favorit">
                favorits {favorit.length}
            </Link>
            <div></div>
            <Link to="/">
                main
            </Link>
            <input onChange={handleChange} />
            <button onClick={handleSearch}> search</button>
        </div>
    )
}
