import React from 'react'
import Navbar from './Navbar';

function Sidebar({navToggle}) {
    return (
        <div id="sidebar" className={`${navToggle ? 'nav-toggle ' : ''}`}>
            <Navbar />

        </div>
    )
}

export default Sidebar
