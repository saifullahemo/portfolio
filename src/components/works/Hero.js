import React from 'react'
import Particle from '../particle'
import {Row, Col} from 'react-bootstrap'

export default function Hero({ title, subtitle, divider, img}) {
    return (
        <>
        <div className="about-container" >
            <div className="particle-con">
                <Particle />
            </div>

            <div className="about">
                <Row className="">
                    <Col md={8} className="d-flex flex-column">
                        <h1>{title}</h1>
                        <div className="mt-5">
                            <img src={divider} className="image" alt="Divider" />
                        </div>
                        <h4 className="mt-5">{subtitle}</h4>
                    </Col>
                    
                    <Col md={4}>
                        <div className="d-flex justify-content-end">
                            <img src={img} alt="" className="imgSide"/>
                        </div>
                    </Col> 
                </Row>
            </div>
            
            
    </div>
        </>
    )
}
