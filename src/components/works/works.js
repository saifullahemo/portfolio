import React, {useState} from 'react';
import Hero from './Hero';
import Divider from '../../assets/images/divider.png'
import image from '../../assets/images/image.png'

export default function works() {
    return (
        <>
        <Hero 
            title="Explore the Space" 
            subtitle="Projects"
            divider={Divider}
            img={image}
        >
        </Hero>

        </>
    )
}