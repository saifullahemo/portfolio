import React from 'react'
import Divider from '../assets/divider.png'
import Hero from '../components/Hero'
import image from '../assets/image.png'

export default function about() {
    return (
        <>
        <Hero   
            title="Get in Touch" 
            subtitle="Saifullahemo@gmail.com"
            divider={Divider}
            img={image}
        >
        </Hero>
        </>
    )
}

