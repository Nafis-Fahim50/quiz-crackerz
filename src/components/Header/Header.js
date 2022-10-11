import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to='/'>React JS</NavLink>
                <NavLink to='/topics'>Topics</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </nav>
        </div>
    );
};

export default Header;