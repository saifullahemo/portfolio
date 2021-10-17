import React,{useState} from 'react'
import Sidebar from './components/Navbar/Sidebar'
import Home from './pages/Home'
import Works from './pages/Works'
import About from './pages/About'
import Contact from './pages/Contact'
// import Works from './components/works/works'
// import About from './components/About/about'
// import Contact from './components/Contact/contact'
import styled from 'styled-components';

import { Route, Switch as Switching } from "react-router";


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

                <Switching>
                  <Route path="/" exact> <Home /></Route>  
                  <Route path="/about" exact> <About /></Route>
                  <Route path="/works" exact> <Works /></Route>
                  <Route path="/contact" exact> <Contact /></Route>
                </Switching>

            </MainContentStyled>
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
