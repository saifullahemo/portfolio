import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../../assets/images/Avatar.jpg'
import { links } from '../../Data'

const Navbar = () =>{

    return(
        <nav className="navbar ">
            <div className="avatar">
                            {/* <img src={avatar} alt=""/> */}
                        </div>
                        <ul className="nav-items p-0 d-flex flex-column">
                            {links.map((link) => {
                                const {id, url, text} = link;
                                return(
                                    <li key={id} className="nav-item">
                                        <NavLink to={url} activeClassName="active-class" exact>{text}</NavLink>
                                    </li>
                                )
                            })}          

                        </ul>
                        <footer className="footer">
                            <p>@2021 <b>Raihan</b></p>
                        </footer>
        </nav>
    )
}

export default Navbar
