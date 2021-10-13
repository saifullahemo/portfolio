import React, {useState} from 'react'
import Divider from '../../assets/images/divider.png'
import image from '../../assets/images/image.png'
import { Row, Col, Card, Button } from 'react-bootstrap';
import { latestWork } from '../../Data'

function Latest() {
    const [test, setTest] = useState('Projects are');

    return (
        <React.Fragment>
            {latestWork.map((latestWorks)=>{

                const {id, h3, title, text, card1, card2, card3} = latestWorks;
                console.log(latestWorks);
                
                return(
                    <div key={id} className="latest">
                        <Row className="d-flex text-center pt-5 p-0 m-0">
                            <h3>{h3}</h3>   
                            <Col md={12} className="d-flex justify-content-center pb-5 pt-5">
                                <Card className="card" style={{ width: '50%' }}>
                                    <Card.Body>
                                        <Card.Title>{title}</Card.Title>
                                        <Card.Text className="cardText" style={{ opacity: ".5" }}>{text}</Card.Text>    
                                            <Row>    
                                                <Col md={6} className="cards">
                                                    <Button className="html">{card1}</Button>
                                                    <Button className="css">{card2}</Button>
                                                    <Button className="js">{card3}</Button>
                                                </Col>
                                            </Row>                                                
                                    </Card.Body>
                                </Card>
                            </Col> 
                            </Row>
                        </div>
                )
                // console.log(latestWorks);
            })}
                    {/* <Col md={12} className="d-flex justify-content-center pb-5 pt-5">
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
                    </Col>  */}
            
        </React.Fragment>
    )
}

export default Latest
