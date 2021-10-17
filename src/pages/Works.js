import React, {useState} from 'react';
import Hero from '../components/Hero'
import Latest from '../components/latest'
import Divider from '../assets/divider.png'
import image from '../assets/image.png'

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
        < Latest />

        </>
    )
}