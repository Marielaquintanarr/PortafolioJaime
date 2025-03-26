import { Routes, Route, Link } from 'react-router-dom';
import MainImage5 from '../components/MainImage5';
import titan from "../assets/titan-main.png"
import Text from '../components/Text';
import Image2_1 from '../components/Imagen2_1';
import titan1 from "../assets/Mask-titan2.png";
import titan2 from "../assets/Mask-titan3.png";
import titan4 from "../assets/titan4.png"
import MainImage3_1 from '../components/MainImage3_1';
import ImagenYTexto from '../components/ImagenYTexto';
import MainImage4 from '../components/MainImage4';
import carrito from "../assets/carrito1.png"
import Image6 from '../components/Image6';
import titan5 from "../assets/titan5.png";
import Image7 from '../components/Image7';
import titan7 from "../assets/titan7.png"
import titan6 from "../assets/titan6.png"
import Image5 from '../components/Image5';
import PageHeader from "../components/PageHeader";
import logo from "../assets/logo.png";
import Block2 from '../components/Block2';
import Text2 from '../components/Text2';
import Footer from '../components/Footer';

const text = `Academic project: Universidad de Guadalajara
Team partners: Adan López López / Valeria Hidalgo y Costilla Castellanos
Product design
12 weeks
2024

Contribution: Design / Research / C.M.F. / Visualization / CAD`;

const text5 = `linkedin
behance
instagram`;

function Titan() {
    return (
      <div style={{ width: "100vw", margin: 0, padding: 0, height: "100vh" }}>
        <PageHeader logo={logo} title={"Titan"} text={text} />
        <Block2 />
        <Block2 />
        <Image5 image={titan} color={"#0704B1"} />
        <Text2 columna={3} cspan={3} row={2} rspan={1}text={"Titan is a multifunctional toy designed for children aged 3 to 5, aimed at fostering physical and cognitive development through active play. Titan was design with a modular design, Titan can transform into different configurations, such as a balance bike and scooter, promoting both creativity and active play. Titan´s interchangeable and optional accessories further encourage imaginative play."}/>
        <Image2_1 image1={titan1} image2={titan2} />
        <Text2 columna={2} cspan={5} row={2} rspan={1}  text={"While designing Titan’s play and build features, I considered how kids interact with toys both with and without parental help. Younger children might need assistance at first, but as they grow, Titan’s system of oversized screws ensures that assembly and disassembly are easy and intuitive. This approach not only supports their development but also allows them to engage more independently as they gain confidence and skills."}/>
        <MainImage3_1 image={titan4} color={"#ffff"}/>
        <ImagenYTexto image={titan7} text={"As part of our project development, we conducted field research at a kindergarten, interviewing children aged 3 to 5 through playful activities. The research involved engaging the children in a series of recreational exercises, beginning with educational games and concluding with a group interview. We discovered that the toys children enjoyed the most were those that allowed them to express themselves and engage in imaginative play."} />
        <MainImage4 image={carrito} />
        <Image6 image={titan5}/>
        <Image7 image={titan6}/>
        <Footer text={text5}/>
      </div>
    );
  }
  
  export default Titan;
  