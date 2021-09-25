import React,{useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Navbar/Sidebar'
import Hero from './components/Hero/Hero'
import Works from './components/works/works'
import Latest from './components/works/latest'
import About from './components/About/about'
import Contact from './components/Contact/contact'
import Home from './assets/images/Home.png'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from "@material-ui/core";
import styled from 'styled-components';

import { Route, Switch as Switching } from "react-router";

// import {BrowserRouter as Router, Route, Link, Navlink, Switch} from "react-router-dom";


function App() {
  const [navToggle, setNavToggle] = useState(false);

  return (

    
    <div className="App">
        <Sidebar navToggle={navToggle} />
        
            {/* <div className="ham-burger-menu">
              <IconButton onClick={() => setNavToggle(!navToggle)}>
                  <MenuIcon />
              </IconButton>
            </div> */}
            <MainContentStyled>
                <div className="lines">
                  <div className="line-1"></div>
                  <div className="line-2"></div>
                  <div className="line-3"></div>
                  <div className="line-4"></div>
                </div>

                <Switching>
                  <Route path="/" exact> 
                    <Hero />
                  </Route>
                  
                  <Route path="/about" exact> 
                    <About />
                  </Route>
                  
                  <Route path="/works" exact> 
                    <Works />
                  </Route>

                  <Route path="/contact" exact> 
                    <Contact />
                  </Route>
                </Switching>
            </MainContentStyled>
                {/* <Navbar /> */}
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width:1200px){
    margin-left: 0;
  }
  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(white);
    }
  }
`;

export default App;
