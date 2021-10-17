import React, {useState} from 'react'
import Divider from '../assets/divider.png'
import image from '../assets/image.png'
import { Row, Col, Card, Button } from 'react-bootstrap';
import { latestWork } from '../Data'

function Latest() {

    return (
        <>
          <div className="latest">
                <Row className="d-flex text-center pt-5 p-0 m-0">
                    <h3 className="mb-5">Projects are</h3>  

                        {latestWork.map((latestWorks)=>{
                            const {id, title, text, card1, card2, card3} = latestWorks;
                            console.log(latestWorks);
                            return(
                                <Col md={12} className="d-flex justify-content-center mb-5">
                                <Card className="card" key={id} style={{ width: '50%' }}>
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
                            
                            )
                        })}
                </Row>
           </div>
        </>
    )
}

export default Latest
