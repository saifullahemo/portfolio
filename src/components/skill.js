import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import js from '../assets/js.png'

function Skill() {
    return (
        <>
            <div className="skill ">
                <h3>Skill set</h3>
                <Row className="d-flex skills">
                    <Col md={4}>
                        <Col md={12}>
                            <h6>JavaScript</h6>
                            <div>
                                <img className="img" src={js} alt="" />
                            </div>
                        </Col>
                        {/* <hr className="rounded"/> */}
                    </Col>
                    <Col md={4}>
                        <Col md={12}>
                            <h6>JavaScript</h6>
                            <div>
                                <img className="img" src={js} alt="" />
                            </div>
                        </Col>

                    </Col>
                </Row>
                <Row className="d-flex pt-5 skills">
                    <Col md={4}>
                        <Col md={12}>
                            <h6>JavaScript</h6>
                            <div>
                                <img className="img" src={js} alt="" />
                            </div>
                        </Col>
                        {/* <hr className="rounded"/> */}
                    </Col>
                    <Col md={4}>
                        <Col md={12}>
                            <h6>JavaScript</h6>
                            <div>
                                <img className="img" src={js} alt="" />
                            </div>
                        </Col>

                    </Col>
                </Row>
            </div>
            
        </>
    )
}

export default Skill
