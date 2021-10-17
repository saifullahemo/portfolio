import React, {useState} from 'react';
import Hero from '../components/Hero'
import Latest from '../components/latest'
import Skill from '../components/skill'
import Passion from '../components/passion'
import Divider from '../assets/divider.png'
import image from '../assets/image.png'

export default function works() {
    return (
        <>
        <Hero 
            title="About me" 
            subtitle="I love design and tech"
            divider={Divider}
            img={image}
        >
        </Hero>
        
        < Passion />

        </>
    )
}