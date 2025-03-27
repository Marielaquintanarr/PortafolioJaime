import { useState } from 'react';
import AboutHeader from "../components/AboutHeader"
import logo from "../assets/logo.png";
import jaime from "../assets/jaime.png"
import Footer from '../components/Footer';

const text = `My name is Jaime, and I’m an industrial designer passionate about innovation and integrating new technologies into design.

With a strong ability to learn and adapt to evolving environments, I bring a creative and user-centered approach to problem-solving, continually seeking ways to push the boundaries of design.`
const text2 =`
UX/UI INTERN
NUCLEA SOLUTIONS
2025-CURRENT 

3D File Modeler 
FUNNYKITCHENMX
2024

Architectural Model Builder 
MAQ Y MAQUETAS
2022-2023
`

const text3 =`
Concept deseign for coffe station
Fromm diseño elemental    
2025

Custom chocolate molds design
Sala doce Cafe
2024
`

const text1 =`
Universidad de Guadalajara
Bachelor´s degree in Industrial
Design 
2021-2024 
GPA: 3.5/4.0`


const text5 = `linkedin
behance
instagram`;

function About() {
  return (
    <div
    style={{
    }}>
        <AboutHeader logo={logo} title={"Hi!"} text={text} title1={"Education"} text1={text1} title2={'Experience'} text2={text2} title3={'Projects'} text3={text3} image= {jaime}/>
        <Footer text={text5} />
    </div>
  );
}

export default About;