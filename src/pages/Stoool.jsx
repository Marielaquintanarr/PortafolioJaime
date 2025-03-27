import { Routes, Route, Link } from 'react-router-dom';
import MainImage5 from '../components/MainImage5';
import stool1 from "../assets/stoool1.png"
import PageHeader from "../components/PageHeader";
import Text2 from '../components/Text2';
import Image2_2 from '../components/Image2_2';
import banco2 from "../assets/banco2.png"
import banco3 from "../assets/banco3.png"
import Block2 from '../components/Block2';
import MainImage3_1 from '../components/MainImage3_1';
import banco4 from "../assets/banco4.png"
import render from "../assets/renderstool.png";
import Image3 from '../components/Image3';
import Image5 from '../components/Image5';
import banco5 from "../assets/banco5.png";
import banco6 from "../assets/banco6.png";
import banco7 from "../assets/banco7.png";
import logo from "../assets/logo.png";
import Footer from '../components/Footer';
const text = `“The simplicity is a great detail.”
Academic project: Universidad de Guadalajara
CNC furniture
3 weeks
2024

Contribution: Design / Research / C.M.F. / Visualization / CAD`;

const text2 = `My objective was to design  a stool that draws inspiration from the flow of ideas, challenging the conventional approach we often encounter in school, where chairs fail to inspire creativity.



This design seeks to push boundaries by blending form and function in a dynamic way, creating a piece that not only serves its purpose but also sparks imagination and conversation.`;

const text3 =`Project carried out to learn how to use CNC routers.
It was designed to use Kerf technique and give it a visual distinctive. 
The color change creates a contrast function and forms two visual groups.

Designed for creative spaces, the material in this case plywood was taken into account for CNC cutting and standard anthropometric measurements.`

const text_1 = `linkedin`;
const text_2 = `behance`;
const text_3 = `instagram`;


function Stoool() {
    return (
      <div style={{ width: "100vw", margin: 0, padding: 0, height: "100vh" }}>
        <PageHeader logo={logo} title={"Stool"} text={text} />
        {/* quitar color */}
        <Block2 />
        <Block2 />
        <Image5 image={stool1} color={"#A18C8F"}/>
        <Text2 text={text2} width={"505px"} height={"347px"} columna={3} cspan = {3} row = {1} rspan = {3}/>
        <Image2_2 image1={banco2} image2={banco3}/>
        <Block2 />
        <MainImage3_1 image={banco4} color={"#ffff"}/>
        <Block2 />
        <Image3 image1={banco5} image2={banco6} image3={banco7} />
        <Text2 text={text3} width={"1008px"} height={"182px"} columna={3} cspan = {3} row = {2} rspan = {1}/>
        <Image5 image={render} color={"#A18C8F"} />
        <Footer text1={text_1} text2={text_2} text3={text_3}/>
      </div>
    );
  }
  
  export default Stoool;
  