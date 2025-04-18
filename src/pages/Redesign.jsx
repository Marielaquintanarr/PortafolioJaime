import logo from "../assets/logo.png"
import ImagenTexto2 from "../components/ImagenTexto2";
import Block2 from "../components/Block2";
import PageHeader from "../components/PageHeader";
import ImagenTexto3 from "../components/ImagenTexto3";
import elite1 from "../assets/elite1.png"
import elite2 from "../assets/elite2.png";
import elite3 from "../assets/elite3.png";
import elite4 from "../assets/elite4.png";
import elite5 from "../assets/elite5.png";
import elite6 from "../assets/elite6.png";
import elite7 from "../assets/elite7.png";
import elite8 from "../assets/elite8.png";
import elite9 from "../assets/elite9.png";
import elite10 from "../assets/elite10.png";
import BlockText from "../components/BlockText";
import Image2_3 from "../components/Image2_3";
import Image2_4 from "../components/Image2_4";
import Image2_5 from "../components/Image2_5";
import Footer from "../components/Footer";
import Image2_6 from "../components/Image2_6";
const text = `Internship project: Nucle solutions
Team partner: Juan Pablo Torres Gonzalez
UX/UI re-design
2 weeks
2025

Contribution: Wireframing / Desktop UI/UX / Research`;

const text2 = `Elite Last Mile Industrial Parks specializes in developing industrial parks, focusing on providing strategic spaces for companies that need well-located and efficient infrastructure for their logistics operations.

To optimize internal operations, Elite has a web app designed specifically for its agents. This platform centralizes key information and processes, making it easier to access and manage essential data.`;


const text3 = `The quotation area was redesigned to enhance readability and improve the user experience. By optimizing the structure and visual hierarchy, the new design ensures clearer communication, reduces errors, and streamlines interactions, ultimately creating a more intuitive and seamless experience.`;
const text4 = `Inefficient filter screen.
Clustered and hard-to-read data.
Archaic buttons and system.
Difficult to read and distinguish key details.
Mobile app.`;

const text_1 = `linkedin`;
const text_2 = `behance`;
const text_3 = `instagram`;


function Redesign() {
  return (
    <div>
      <PageHeader title={"Elite re-design"} logo={logo} text={text}/>
      <ImagenTexto2 image={elite1} text={text2}/>
      <Block2 />
      <ImagenTexto3 title1={"The challenge"} title2={"Areas for improvement"} text1={text3} text2={text4} image={elite2}/>
      <Block2 />
      <BlockText text={"Main screens"}/>
      <Image2_6 image1={elite4} image2={elite3}/>
      <Block2 />
      <Image2_4 image1={elite5} image2={elite6}/>
      <Block2 />
      <Block2 />
      <BlockText text={"Pop-up menus"}/>
      <Image2_6 image1={elite7} image2={elite8}/>
      <Block2 />
      <Image2_4 image1={elite9} image2={elite10}/>
      <Block2 />
      <Footer text1={text_1} text2={text_2} text3={text_3}/>
    </div>
  );
}

export default Redesign;