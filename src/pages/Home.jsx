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

const text5 = `linkedin
behance
instagram`;

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
        <Footer text={text5} />
    </div>
  );
}

export default Home;