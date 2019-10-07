import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    
    return(

    <header id="header">
        <div className="container">
            <div className="content">
                <NavLink to="/" className="logo">Logo</NavLink>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/yellow" >Yellow</NavLink>
                        </li>
                        <li>
                            <NavLink to="/red" >Red</NavLink>
                        </li>
                        <li>
                            <NavLink to="/green">Green</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blue">Blue</NavLink>
                        </li>
                        <li>
                            <NavLink to="/purple">Purple</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

)}
export default Header;