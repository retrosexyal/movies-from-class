import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = () => {
    const favorit = useSelector(state=>state.favorite.favorite)
    return (
        <div className='header'>
            <Link to="favorit">
                favorits {favorit.length}
            </Link>
            <div></div>
            <Link to="/">
                main
            </Link>
        </div>
    )
}
