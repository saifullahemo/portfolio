import React, {useState, useEffect} from 'react';
import Hero from '../components/Hero'
import Divider from '../assets/divider.png'

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

