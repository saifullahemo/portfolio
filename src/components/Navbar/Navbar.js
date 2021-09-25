import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../../assets/images/Avatar.jpg'
// import { links } from './Data'

const Navbar = () =>{
    // const [ showLinks, setShowLinks ] = useState();
    // const linksContainerRef = useRef(null) 
    // const linksRef = useRef(null) 

    // useEffect(() => {
    //     const linksHeight = linksRef.current.getBoundingClientRect //to change the height of the links container 
    //     ().height;
    //     // console.log(linksHeight);

    //     if(showLinks){ //if showlinks is true
    //         linksContainerRef.current.style.height = `${linksHeight}px` //looking for the height on current property 
    //     }else {
    //         linksContainerRef.current.style.height = '0px'
    //     }
    // }, [showLinks])

    // console.log(linksRef);

    return(
        <nav className="navbar ">
            <div className="avatar">
                            {/* <img src={avatar} alt=""/> */}
                        </div>
                        <ul className="nav-items p-0 d-flex flex-column">
                            <li className="nav-item">
                                <NavLink to="/" activeClassName="active-class" exact>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/works" activeClassName="active-class" exact>Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" activeClassName="active-class" exact>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" activeClassName="active-class" exact>Contact</NavLink>
                            </li>
                        </ul>
                        <footer className="footer">
                            <p>@2021 <b>Raihan</b></p>
                        </footer>

            
            {/* <div className="nav-center">
                <div className="nav-header">
                    <h4>Rayhan</h4>
                        <button className = "nav-toggle" onClick = {() => setShowLinks(!showLinks)}>
                            <FaBars />
                        </button>
                </div>
               
            <div className="links-container" ref = {linksContainerRef}>
                <ul className = "links" ref = {linksRef}>
                    {links.map((link) => {
                        const {id, url, text} = link
                        return (
                            <li key ={id}>
                                <a href={url}>{text}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>   */}
        </nav>
    )
}

export default Navbar
