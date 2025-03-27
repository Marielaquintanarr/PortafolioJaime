import titan from '../assets/titan-main.png'
import buds1 from '../assets/buds1.png'
import frame from '../assets/Frame.png'
import logo from '../assets/logo.png'
import HomeHeader from '../components/HomeHeader';
import render from "../assets/renderstool.png";
import Image5_2 from '../components/Image5_2';
import Footer from '../components/Footer';
const text = `Design portfolio
by Jaime Barba`

const text_1 = `linkedin`;
const text_2 = `behance`;
const text_3 = `instagram`;

function Home() {
  return (
    <div
    style={{
    }}>
        <HomeHeader logo={logo} text={text}/>
        <Image5_2 image={buds1} text={"Switch-buds"} color={"white"} />
        <Image5_2 image={frame} text={"Elite re-dseign"} color={"black"}/>
        <Image5_2 image={titan} text={"Titan"} color={"white"}/>
        <Image5_2 image={render} text={"Stool"} color={"white"}/>
        <Footer text1={text_1} text2={text_2} text3={text_3}/>
    </div>
  );
}

export default Home;