import React from 'react'
import Particle from './particle'
import {Row, Col} from 'react-bootstrap'

export default function Hero({ title, subtitle, divider, img}) {
    return (
        <>
        <div className="hero-container" >
            <div className="particle-con">
                <Particle />
            </div>

            <div className="hero">
                <Row className="">
                    <Col md={8} >
                        <h1>{title}</h1>
                        <img src={divider} className="image mt-5" alt="Divider" />

                        {/* <div className="mt-5">
                        </div> */}
                        <h4 className="mt-5">{subtitle}</h4>
                    </Col>
                    
                    <Col md={4}>
                        <div >
                            <img src={img} alt="" className="imgSide"/>
                        </div>
                    </Col> 
                </Row>
            </div>
            
            
    </div>
        </>
    )
}
