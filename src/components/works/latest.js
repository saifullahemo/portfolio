import React, {useState} from 'react'
import Divider from '../../assets/images/divider.png'
import image from '../../assets/images/image.png'
import { Row, Col, Card, Button } from 'react-bootstrap';

function Latest() {
    const [test, setTest] = useState('Projects are');

    return (
        <React.Fragment>
            <div className="latest">
                <Row className="d-flex text-center pt-5 p-0 m-0">
                    <h3>{test}</h3>   
                    <Col md={12} className="d-flex justify-content-center pb-5 pt-5">
                        <Card className="card" style={{ width: '50%' }}>
                            <Card.Body>
                                <Card.Title>Project Name</Card.Title>
                                    <Card.Text className="cardText" style={{ opacity: ".5" }}>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                <Row>
                                    <Col md={6} className="cards">
                                            <Button className="html">HTML</Button>
                                            <Button className="css">CSS</Button>
                                            <Button className="js">JavaScript</Button>
                
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col> 
                    <Col md={12} className="d-flex justify-content-center pb-5 pt-5">
                        <Card className="card" style={{ width: '50%' }}>
                            <Card.Body>
                                <Card.Title>Project Name</Card.Title>
                                    <Card.Text className="cardText" style={{ opacity: ".5" }}>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                <Row>
                                    <Col md={6} className="cards">
                                            <Button className="html">HTML</Button>
                                            <Button className="css">CSS</Button>
                                            <Button className="js">JavaScript</Button>
                
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col> 
                    <Col md={12} className="d-flex justify-content-center pb-5 pt-5">
                        <Card className="card" style={{ width: '50%' }}>
                            <Card.Body>
                                <Card.Title>Project Name</Card.Title>
                                    <Card.Text className="cardText" style={{ opacity: ".5" }}>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                <Row>
                                    <Col md={6} className="cards">
                                            <Button className="html">HTML</Button>
                                            <Button className="css">CSS</Button>
                                            <Button className="js">JavaScript</Button>
                
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col> 
                </Row>
            </div>
            
        </React.Fragment>
    )
}

export default Latest
