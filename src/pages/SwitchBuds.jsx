import buds1 from '../assets/buds1.png'
import Image2 from '../components/Imagen2';
import mask1 from '../assets/Mask-group.png'
import mask2 from '../assets/Mask-group-1.png'
import { Routes, Route, Link } from 'react-router-dom';
import Image5 from '../components/Image5';
import Text from '../components/Text';
import Block2 from '../components/Block2';
import switch1 from '../assets/Mask_gr2oup.png'
import main_buds from '../assets/Group1.png';
import MainImage3 from '../components/MainImage3';
import main_buds2 from '../assets/main-buds2.png';
import MainImage from '../components/MainImage';
import SBHeader from '../components/SBHeader';
import topswitch from "../assets/topswitch.png";
import logo from "../assets/logo.png"
import Footer from '../components/Footer';
import Text3 from '../components/Text3';
const text = `Personal project
Concept design
4 weeks 
2024`;

const text_1 = `linkedin`;
const text_2 = `behance`;
const text_3 = `instagram`;

function SwitchBuds() {
    return (
      <div style={{ width: "100vw", margin: 0, padding: 0, height: "100vh" }}>
        <SBHeader logo={logo} image={topswitch} text={text} title={"Switch-buds"} />
        <MainImage image={buds1} label={"Switch Buds"} color={"#b91820"}/>
        <Text text = {'These conceptual earbuds were designed to align with the playful and versatile spirit of the Nintendo Switch. Drawing on the console’s iconic colors and minimalist aesthetic.'}/>
        <Image2 image1={mask1} image2={mask2} color={"#1A1A1D"} col1={1} cspan1={3} row1 = {1} rspan1={4} col2={5} cspan2={3} row2={1} rspan2={4}/>
        <Block2 />
        <MainImage3 image={main_buds} color={"#ffff"}/>
        <Block2 />
        <Image2 image1={switch1} image2={switch1} />
        <Text3 text = {"Designed to integrate the concept of the 'Switch' with its functional purpose, the product features a magnetic opening and closing system for seamless user interaction. The design enhances the user experience by offering a satisfying mechanism that aligns with the playful and versatile nature of the Nintendo Switch. Its compact form ensures portability, making it an ideal accessory for gamers on the go."}/>
        <Image5 image={main_buds2} color={"#b91820"} />
        <Footer text1={text_1} text2={text_2} text3={text_3}/>
      </div>
    );
  }
  
  export default SwitchBuds;
  