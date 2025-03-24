import Footer from '../components/Footer';
import SwitchBudsGrid from '../components/MainHeader';
import MainImage from '../components/MainImage';
import buds from '../assets/buds-main.png'
import titan from '../assets/titan-main.png'
import Image5 from '../components/Image5';
import buds1 from '../assets/buds1.png'
import mask1 from '../assets/Mask-group.png'
import mask2 from '../assets/Mask-group-1.png'
import Image2_1 from '../components/Imagen2_1';
import frame from '../assets/Frame.png'
import MainImage2 from '../components/MainImage2';
import MainImageColor from '../components/MainImageColor';

function Home() {
  return (
    <div
    style={{
    }}>
        <MainImageColor image={buds1} label={"Switch Buds"} color={"#b91820"} colorText={"white"}/>
        <MainImageColor image={frame} label={"Elite re-design"} color={"white"}/>
        <MainImageColor image={titan} label={"Titan"} color={"#0805B8"} colorText={"white"}/>
    </div>
  );
}

export default Home;