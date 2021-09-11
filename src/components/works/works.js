import React, {useState} from 'react';
import Divider from '../../assets/images/divider.png'
import image from '../../assets/images/image.png'
import { Row, Col } from 'react-bootstrap';
import Button from '../Button/Button'

const Works = () => {
    
    const [test, setTest] = useState('Explore the Space');
    // const [color, setColor] = useState({color: "#051B38" })
    
    return (
        <>
        <div className="works-container" >
        <img src={image} alt="" className="imgSide"/>

            <Row className="m-0">
                <Row>
                    <Col md={1}></Col>

                    <Col md={12}> 
                        <h1>{test}</h1>
                    </Col>
                    {/* <Col md={3}>
                    </Col> */}
                </Row>
                
                
                <Col md={12}>
                    <img className = "image" src={Divider} alt="Divider" />
                </Col>

                <Col md={12}>
                    <h4>Projects</h4>
                </Col>
                <Col md={12}>
                    <Button />
                </Col>

            </Row>
        </div>
    
        </>
    )
}


export default Works;