import React from 'react'
import { Row, Col, Card, Button, CardGroup } from 'react-bootstrap';
import Design from '../../assets/images/Group.png'
import Developing from '../../assets/images/developing.png'
import Travelling from '../../assets/images/travelling.png'

function Passion() {
    return (
        <React.Fragment>
            <div className="passion p-5">
                <h3>Passion</h3>
                <Row className="d-flex justify-content-around">
                    <Col md={4} className="d-flex justify-content-around">
                        <Card className="p-3 d-flex justify-content-center align-items-center text-align-center" style={{ width: '60%' }}>
                            <Card.Img className="design" variant="center" src={Design} />
                            <Card.Body>
                                <h5>Design</h5>
                            
                            </Card.Body>
                            
                        </Card>

                    </Col>
                    <Col md={4} >
                        <Card className="p-3 d-flex justify-content-center align-items-center text-align-center" style={{ width: '60%' }}>
                        <Card.Img className="design" variant="center" src={Developing} />
                            <Card.Body>
                            <h5>Developing</h5>
                            
                            </Card.Body>
                            
                        </Card>

                    </Col>
                    <Col md={4}>
                        <Card className="p-3 d-flex justify-content-center align-items-center text-align-center" style={{ width: '60%' }}>
                        <Card.Img className="design" variant="center" src={Travelling} />
                            <Card.Body>
                            <h5>Travelling</h5>
                           
                            </Card.Body>
                            
                        </Card>

                    </Col>
                </Row>
                    <CardGroup >
                    </CardGroup>
            </div>
        </React.Fragment>
    )
}

export default Passion
