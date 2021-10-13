import React, {useState, useEffect} from 'react';
import Divider from '../../assets/images/divider.png'
import Particle from '../particle'
import { social, images } from '../../Data'

const Hero = () => {

    return (
        <React.Fragment>
            <div className = "hero">
                <div className="particle-con">
                    <Particle />
                </div>
                    
                    {social.map((hero)=>{

                        console.log(hero);
                            return(
                                <>
                                <div className="text" key={hero.id}>
                                    <h1>{hero.h1}</h1>
                                    {/* {images.map((image)=>{
                                        const {img} = image;

                                        console.log(img); */}
                                        <div>
                                            <img className = "image" src={hero.img} alt="Divider" />
                                        </div>
                                        {/* })} */}
                                    <h4>{hero.h1}</h4>
                                    
                                    <div className="icons">
                                        {social.map((socials)=> {
                                            const { url, icon} = socials;
                                            return(
                                                <a href={url} className="icon">{icon}</a>
                                            )
                                        })}                                    
                                    </div>
                                </div>
                                </>
                                    )
                          })}
            </div>
    </React.Fragment>
        )
}

export default Hero;