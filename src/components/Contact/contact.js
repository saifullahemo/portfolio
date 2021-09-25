import React, {useState} from 'react'
import Divider from '../../assets/images/divider.png'
import image from '../../assets/images/image.png'
import Instagram from '../../assets/social/instagram.png'
import LinkedIn from '../../assets/social/linkedin.png'
import Github from '../../assets/social/github.png'
import {Container, Row, Col } from 'react-bootstrap';
import Button from '../Button/Button'
import InstagramIcon from '@material-ui/icons/Instagram';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn';


function Contact() {
    const [test, setTest] = useState('Get in Touch');

    return (
        <React.Fragment>
            <div className="contact-container pt-5" >
            <div className="contact">

                <Row className="m-0">
                    <Row>
                        <Col md={9} className="d-flex flex-column">
                            <h1>{test}</h1>
                                <div className="mt-5">
                                    <img src={Divider} className="image" alt="Divider" />
                                </div>
                            
                            <h4 className="mt-5"> Saifullahemo@gmail.com</h4>
                        </Col>
                        <Col md={3}>
                            <div className=" d-flex justify-content-end">
                                <img src={image} alt="" className="imgSides"/>
                            </div>
                        </Col>
                    </Row>

                    <Row className="m-0 p-0">
                            <Col md={6} className="social d-flex align-items-center">
                            <div className="icons">
                                        <a href="" className="icon i-instagram"><InstagramIcon /></a>
                                        <a href="" className="icon i-github"><GithubIcon /></a>
                                        <a href="" className="icon i-linkedin"><LinkedinIcon /></a>
                                       
                                </div>
                            </Col>
                            
                            <Col md={6}>
                                {/* <h1 className="numText">03</h1> */}
                            </Col>
                    </Row>
                </Row>
            </div>
            </div>
        </React.Fragment>
    )
}

export default Contact
