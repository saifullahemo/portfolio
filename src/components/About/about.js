import React from 'react'
import Divider from '../../assets/images/divider.png'
import Hero from '../works/Hero'
import image from '../../assets/images/image.png'
import Passion from './passion'

export default function about() {
    return (
        <>
        <Hero   
            title="About me" 
            subtitle="I love design, technology and story"
            divider={Divider}
            img={image}
        >
        </Hero>
        <Passion />
        </>
    )
}

