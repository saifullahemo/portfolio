import React, {useState} from 'react'
import Divider from '../../assets/images/divider.png'
import image from '../../assets/images/image.png'
import {Container, Row, Col } from 'react-bootstrap';
// import Button from '../Button/Button'
import Passion from './passion'

function About() {
    const [test, setTest] = useState('About me');

    return (
            <React.Fragment>
                <div className="about-container" >
            <div className="about">

                <Row className="">
                    <Row>
                        <Col md={8} className="d-flex flex-column">
                            <h1>{test}</h1>
                                <div className="mt-5">
                                    <img src={Divider} className="image" alt="Divider" />
                                </div>
                            
                            <h4 className="mt-5"> I love design, tecknology and story</h4>
                        </Col>
                        <Col md={4}>
                            <div className=" d-flex justify-content-end">
                                <img src={image} alt="" className="imgSide"/>
                            </div>
                        </Col>
                    </Row>

                    <Row className="m-0 p-0 mt-5 align-items-center">
                            <Col md={6}>
                                {/* <Button /> */}
                            </Col>

                            <Col md={6}>
                                {/* <h1 className="numText">02</h1> */}
                            </Col>
                    </Row>
                </Row>
            </div>
        </div>
            <Passion />
    
        </React.Fragment>
    )
}

export default About
