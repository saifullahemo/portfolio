import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links } from './Data'

console.log(links);

const Navbar = () =>{
    const [ showLinks, setShowLinks ] = useState();
    const linksContainerRef = useRef(null) 
    const linksRef = useRef(null) 

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect //to change the height of the links container 
        ().height;
        // console.log(linksHeight);

        if(showLinks){ //if showlinks is true
            linksContainerRef.current.style.height = `${linksHeight}px` //looking for the height on current property 
        }else {
            linksContainerRef.current.style.height = '0px'
        }
    }, [showLinks])

    // console.log(linksRef);

    return(
        <nav>
            <div className="nav-center">
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
        </div>  
        </nav>
    )
}

export default Navbar
