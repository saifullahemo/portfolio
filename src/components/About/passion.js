import React from 'react'
import { Row, Col, Card, Button, CardGroup } from 'react-bootstrap';
import Design from '../../assets/images/Group.png'
import Developing from '../../assets/images/developing.png'
import Travelling from '../../assets/images/travelling.png'
import Skill from './skill'

function Passion() {
    return (
        <React.Fragment>
            <div className="passion p-5">
                <h3 className="text-align-center pb-5">Passion</h3>
                <Row className="d-flex justify-content-center">
                    <Col md={10}>
                        <Row>

                    <Col md={4} className="d-flex justify-content-around">
                        <Card className="p-3 d-flex justify-content-center align-items-center text-align-center" style={{ width: '80%' }}>
                            <Card.Img className="design" variant="center" src={Design} />
                            <Card.Body>
                                <h6>Design</h6>
                            
                            </Card.Body>
                            
                        </Card>

                    </Col>
                    <Col md={4} className="d-flex justify-content-around">
                        <Card className="p-3 d-flex justify-content-center align-items-center text-align-center" style={{ width: '80%' }}>
                        <Card.Img className="design" variant="center" src={Developing} />
                            <Card.Body>
                            <h6>Developing</h6>
                            
                            </Card.Body>
                            
                        </Card>

                    </Col>
                    <Col md={4} className="d-flex justify-content-around">
                        <Card className="p-3 d-flex justify-content-center align-items-center text-align-center" style={{ width: '80%' }}>
                        <Card.Img className="design" variant="center" src={Travelling} />
                            <Card.Body>
                            <h6>Travelling</h6>
                           
                            </Card.Body>
                            
                        </Card>

                    </Col>
                        </Row>
                    </Col>
                </Row>
                    <CardGroup >
                    </CardGroup>

                <Skill />
            </div>
        </React.Fragment>
    )
}

export default Passion
