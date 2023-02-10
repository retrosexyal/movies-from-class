import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className='header'>
            <Link to="favorit">
                favorits
            </Link>
        </div>
    )
}
