import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Works from './components/works/works'
import Home from './assets/images/Home.png'


function App() {
  return (
    <>
    <div className="App">

      <Navbar />
      {/* <div className="container "> */}

          <Hero />

          <Works />
      {/* </div> */}

    </div>
    </>
  );
}

export default App;
