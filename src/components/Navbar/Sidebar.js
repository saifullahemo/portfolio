import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';

function Sidebar({navToggle}) {
    return (
        <div id="sidebar" className={`${navToggle ? 'nav-toggle ' : ''}`}>
            <Navbar />

        </div>
    )
}

// const SidebarStyled = styled.div`
//         width: 16.3rem;
//         position: fixed;
//         height: 100vh;
//         // background-color: var(#051B37);
//         // overflow: hidden;
//         transition: all .4s ease-in-out;
//         @media screen and (max-width:1200px){
//             transform: translateX(-100%);
//             z-index: 20;
// }
// `;

export default Sidebar
