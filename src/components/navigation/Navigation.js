import React from 'react';
import {NavLink} from "react-router-dom";
import './Navigation.css';

const Navigation = ({isAuthenticated, toggleIsAuthenticated}) => {

    return (

        <nav>
            <div className="nav-container">
                <ul>
                    <li><NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/">Home</NavLink></li>
                    {isAuthenticated && <li><NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/Blogposts">Blogposts</NavLink></li>}
                    {!isAuthenticated && <li><NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                  to="/login">Login</NavLink></li>}

                </ul>
                <ul>
                    <li >
                        {isAuthenticated && <button className='logout' type='button' onClick={ () => toggleIsAuthenticated( false ) }>Logout</button>}
                   </li>
                </ul>

            </div>
        </nav>
    );
}

export default Navigation;