import { Routes, Route, Link } from 'react-router-dom';
import MainImage5 from '../components/MainImage5';
import stool1 from "../assets/stoool1.png"
import PageHeader from "../components/PageHeader";
import Text from '../components/Text';
import Text2 from '../components/Text2';
import Image2_2 from '../components/Image2_2';
import banco2 from "../assets/banco2.png"
import banco3 from "../assets/banco3.png"

const text = `“The simplicity is a great detail.”
Academic project: Universidad de Guadalajara
CNC furniture
3 weeks
2024

Contribution: Design / Research / C.M.F. / Visualization / CAD`;

const text2 = `My objective was to design  a stool that draws inspiration from the flow of ideas, challenging the conventional approach we often encounter in school, where chairs fail to inspire creativity.



This design seeks to push boundaries by blending form and function in a dynamic way, creating a piece that not only serves its purpose but also sparks imagination and conversation.`;

function Stoool() {
    return (
      <div style={{ width: "100vw", margin: 0, padding: 0, height: "100vh" }}>
        <PageHeader title={"Stool"} text={text} />
        {/* quitar color */}
        <MainImage5 image={stool1} label={""} color={"#A18C8F"}/>
        <Text2 text={text2} width={"505px"} height={"347px"} columna={3} cspan = {3} row = {1} rspan = {3}/>
        <Image2_2 image1={banco2} image2={banco3}/>
      </div>
    );
  }
  
  export default Stoool;
  