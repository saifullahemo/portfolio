import React, {useState, useEffect} from 'react';
import Divider from '../../assets/images/divider.png'
import Instagram from '../../assets/social/instagram.png'
import LinkedIn from '../../assets/social/linkedin.png'
import Github from '../../assets/social/github.png'
import Particle from '../particle'
import InstagramIcon from '@material-ui/icons/Instagram';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn';

import {Container, Row, Col } from 'react-bootstrap';

// import Work from '../works/works'


const Hero = () => {

    const [text, setText] = useState('Abu Rayhan Md Saifullah');

    useEffect(() => {
        // setTest();
        console.log('hello');
    })


    return (
        <React.Fragment>
            {/* <section className = "hero pt-5"> */}

                <div className = "hero">
                    <div className="particle-con">
                        <Particle />
                    </div>

                    <div className="text">
                        <h1>{text}</h1>
                            <div>
                                <img className = "image" src={Divider} alt="Divider" />
                            </div>
                        <h4>Front-end Developer</h4>
                        
                        <div className="icons">
                            <a href="" className="icon i-instagram"><InstagramIcon /></a>
                            <a href="" className="icon i-github"><GithubIcon /></a>
                            <a href="" className="icon i-linkedin"><LinkedinIcon /></a>                                     
                        </div>
                    </div>

                    <Container>
                       
                    </Container>
                </div>
                {/* <Row className = "hero pt-5">
                    <Col md={8}>
                        <h1>{text}</h1>
                        <div>
                            <img className = "image" src={Divider} alt="Divider" />
                        </div>
                        <h4>Front-end Developer</h4>
                    </Col>
                    
                </Row> */}

        {/* </section> */}

    </React.Fragment>
        )
}

export default Hero;