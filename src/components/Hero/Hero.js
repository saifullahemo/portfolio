import React, {useState, useEffect} from 'react';
import Divider from '../../assets/images/divider.png'
import { Container, Row, Col } from 'react-bootstrap';
// import Work from '../works/works'


const Hero = () => {

    const [text, setText] = useState('Abu Rayhan Md Saifullah');

    useEffect(() => {
        // setTest();
        console.log('hello');
    })


    return (
        <>
             {/* <section className="hero-container"> */}

            <section className = "hero">

                <Row>
                <Col md={1}></Col>
                <Col md={8}> 
                    <h1>{text}</h1>
                </Col>
                
                <Col md={12}>
                    <img className = "image" src={Divider} alt="Divider" />
                </Col>
                <Col md={12}>
                    <h4>Front-end Developer</h4>
                </Col>
            </Row>

        </section>

        {/* <Work /> */}
       
        {/* </section> */}
        </>
        )
}

export default Hero;