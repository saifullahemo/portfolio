import React, {useState} from 'react'
import Divider from '../../assets/images/divider.png'
// import image from '../../assets/images/image.png'
// import Instagram from '../../assets/social/instagram.png'
// import LinkedIn from '../../assets/social/linkedin.png'
// import Github from '../../assets/social/github.png'
import {Container, Row, Col } from 'react-bootstrap';
import Button from '../Button/Button'
// import InstagramIcon from '@material-ui/icons/Instagram';
// import GithubIcon from '@material-ui/icons/GitHub';
// import LinkedinIcon from '@material-ui/icons/LinkedIn';
import { social } from '../../Data'
import Particle from '../particle'


function Contact() {
    const [test, setTest] = useState('Get in Touch');

    return (
        <React.Fragment>
            <div className="contact-container pt-5" >

            <div className="particle-con">
                    <Particle />
                </div>
                    {social.map((hero)=>{
                        const {text, text1} = hero;
                            return(
                                <div className="text">
                                    <h1>{text}</h1>
                                        <div>
                                            <img className = "image" src={Divider} alt="Divider" />
                                        </div>
                                    <h4>{text1}</h4>
                                    
                                    <div className="icons">
                                        {social.map((socials)=> {
                                            const { url, icon} = socials;
                                            return(
                                                <a href={url} className="icon">{icon}</a>
                                            )
                                        })}                                    
                                    </div>
                                </div>
                                    )
                          })}
            </div>
        </React.Fragment>
    )
}

export default Contact
