import React, {useState} from 'react';
import Divider from '../../assets/images/divider.png'
import image from '../../assets/images/image.png'
import {Container, Row, Col } from 'react-bootstrap';
import Button from '../Button/Button'
import Latest from'./latest';
import { useHistory, Redirect } from "react-router-dom";
import Particle from '../particle'

const Works = () => {
    
    const [test, setTest] = useState('Explore the Space');
    const history = useHistory();
    const [isAuth, setIsAuth] = useState(true);

    if(!isAuth) {
        return <Redirect to="/latest" />
    }
    
    return (
        <React.Fragment>

                <div className="works-container" >
                    <div className="particle-con">
                        <Particle />
                    </div>
        
            <div className="work">

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
{/* 
                        <Row className="m-0 p-0 mt-5 align-items-center foot">
                                <Col md={6}>
                                    
                                    <Button className="btn" onClick={()=> {
                                        setIsAuth(false)
                                    }}/>
                                </Col>
                                
                                <Col md={6}>
                                    <h1 className="numText">01</h1>
                                </Col>
                        </Row> */}
                    </Row>
                </div>
                <Latest />
            </div>

        </React.Fragment>
    )
}


export default Works;