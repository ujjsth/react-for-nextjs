import React from 'react';
import { Link, NavLink } from "react-router-dom"

const Header = () => {

    let menuItems = [
        { url: "home", label: "Home"},
        { url: "about", label: "About"},
        { url: "contact", label: "Contact"},
        { url: "users", label: "Users"},
    ];

  return (
    <div>
        <nav>
            <ul>
                {
                    menuItems.map(item => {
                        return (
                            <li key={item.url}>
                                <NavLink to={item.url}>{item.label}</NavLink>
                            </li>
                        )
                    })
                }                
            </ul>
        </nav>
    </div>
  )
}

export default Header