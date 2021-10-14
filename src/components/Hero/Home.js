import React, {useState, useEffect} from 'react';
import Hero from '../works/Hero'
import Divider from '../../assets/images/divider.png'
import Particle from '../particle'
import { social, images } from '../../Data'


export default function Home() {
    return (
        <Hero 
        
        title="Abu Rayhan Md Saifullah" 
        subtitle="Front-end Developer"
        divider={Divider}
        >
        </Hero>
    )
}

