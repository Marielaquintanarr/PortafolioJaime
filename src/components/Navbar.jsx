"use client";
import { Routes, Route, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [hoverHome, setHoverHome] = useState(false);
  const [hoverWork, setHoverWork] = useState(false);
  const [hoverAbout, setHoverAbout] = useState(false);
  const [hoverMore, setHoverMore] = useState(false);
  const [hoverSwitch, setHoverSwitch] = useState(false);
  const [hoverTitan, setHoverTitan] = useState(false);
  const [hoverReDesign, setHoverReDesign] = useState(false);
  const [hoverStoool, setHoverStoool] = useState(false);

  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const isLogoActive = (windowWidth < 768) && isHovered || (windowWidth < 768) && isClicked;

  const getHomeStyle = () => {
    if (hoverHome) {
      return ["rgba(151, 71, 255, 0.8)", "black", "rgba(151, 71, 255, 0.8)"]
    }else{
      return ["white", "#1A1A1D", "#212126"]
    }
  }

  const getWorkStyle = () => {
    if (hoverWork) {
      return ["rgba(151, 71, 255, 0.8)", "black", "rgba(151, 71, 255, 0.8)"]
    }else{
      return ["white", "#1A1A1D", "#212126"]
    }
  }

  const getAboutStyle = () => {
    if (hoverAbout) {
      return ["rgba(151, 71, 255, 0.8)", "black", "rgba(151, 71, 255, 0.8)"]
    }else{
      return ["white", "#1A1A1D", "#212126"]
    }
  }

  const getMoreStyle = () => {
    if (hoverMore) {
      return ["rgba(151, 71, 255, 0.8)", "black", "rgba(151, 71, 255, 0.8)"]
    }else{
      return ["white", "#1A1A1D", "#212126"]
    }
  }

  const getSwitchStyle = () => {
    if (hoverSwitch) {
      return ["rgba(151, 71, 255, 0.8)", "black", "rgba(151, 71, 255, 0.8)"]
    }else{
      return ["white", "#28282A", "#212126"]
    }
  }

  const getTitanStyle = () => {
    if (hoverTitan) {
      return ["rgba(151, 71, 255, 0.8)", "black", "rgba(151, 71, 255, 0.8)"]
    }else{
      return ["white", "#28282A", "#212126"]
    }
  }

  const getReDesignStyle = () => {
    if (hoverReDesign) {
      return ["rgba(151, 71, 255, 0.8)", "black", "rgba(151, 71, 255, 0.8)"]
    }else{
      return ["white", "#28282A", "#212126"]
    }
  }

  const getStooolStyle = () => {
    if (hoverStoool) {
      return ["rgba(151, 71, 255, 0.8)", "black", "rgba(151, 71, 255, 0.8)"]
    }else{
      return ["white", "#28282A", "#212126"]
    }
  }

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gridColumns = 7;
  const gridRows = 1;
  const paddingLeft = 24;
  const paddingRight = 48;
  const extraWidth = 24;

  const gridWidth = windowWidth - paddingLeft - paddingRight;


  const getDimensions = () => {
    if (windowWidth >= 1920) return [61, 48.68];
    if (windowWidth >= 1440) return [48, 38.3];
    if (windowWidth >= 1280) return [42, 33.5];
    if (windowWidth >= 768) return [32, 25.5];
    return [24, 19];
  };

  const getDimensions2 = () => {
    if (windowWidth >= 1920) {
        return [624, 60];
    } else if (windowWidth >= 1440) {
        return [520, 55];
    } else if (windowWidth >= 1280) {
        return [480, 50];
    } else if (windowWidth >= 768) {
        return [400, 45];
    } else {
        return [320, 40];
    }
};

const getDimensions3 = () => {
  if (windowWidth >= 1920) return [130, 50];  
  if (windowWidth >= 1440) return [110, 45];  
  if (windowWidth >= 1280) return [100, 40];  
  if (windowWidth >= 768) return [80, 35];   
  return [24, 19];                            
};

  const getNavbarFontSize = () => {
    if (windowWidth >= 1920) {
        return 29.25;
    } else if (windowWidth >= 1440) {
        return 26;  
    } else if (windowWidth >= 1280) {
        return 24;  
    } else if (windowWidth >= 768) {
        return 20;  
    } else {
        return 18;  
    }
  };

  const getGapSize = () => {
    if (windowWidth >= 1920) {
        return 30;
    } else if (windowWidth >= 1440) {
      return 20; 
    } else if (windowWidth >= 1280) {
      return 20;  
    } else if (windowWidth >= 768) {
      return 20; 
    } else {
        return 10;  
    }
};

const getNavbarDisplay = () => {
  if (windowWidth >= 1920) {
      return "grid";
  } else if (windowWidth >= 1440) {
      return "grid";  
  } else if (windowWidth >= 1280) {
      return "grid";  
  } else if (windowWidth >= 768) {
      return "grid";  
  } else {
      return "none";  
  }
};

const getLogoDisplay = () => {
  if (windowWidth >= 768) {
    return logo;
  } else {
    if (isLogoActive){
      return logo3;
    }else {
      return logo2;
    }
  }
};

const getNavbar2Display = () => {
  if (isLogoActive) {
    return "flex";
  }else{
    return "none";
  }
}

  return (
    <div style={containerStyle}>
      <div style={{ ...gridStyle, width: `${gridWidth}px` }}>
        {/* Logo */}

        <div style={logoContainerStyle}>
          <img 
            src={`${getLogoDisplay()}`}
            alt="Logo" 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsClicked(!isClicked)}
            style={{ ...logoStyle, width: `${getDimensions()[0]}px`, height: `${getDimensions()[1]}px`, zIndex: 10000 }} />
        </div>

        {/* Navbar */}
        <div style={
         { 
          position: "fixed",
          top: "0",
          gridColumn: "3 / span 3",
          gridRow: "1 / span 1",
          zIndex: 1000,
          display: `${getNavbarDisplay()}`,
          justifyContent: "center",
          marginTop: "10px",
          placeSelf: "center"
        }
        }>
          <nav style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: `${getGapSize()}px`,
            marginLeft: "24px",
            marginTop: "24px",
            backgroundColor: "rgba(255, 255, 255, 0.58)",
            color: "black",
            borderRadius: "39px",
            width: `${getDimensions2()[0]}px`,
            height: `${getDimensions2()[1]}px`,
            objectFit: "contain"
          }}>
            <Link
              to="/"
              style={{
                color: "black",
                textDecoration: "none",
                fontFamily: "Nunito",
                fontWeight: "lighter",
                fontSize: `${getNavbarFontSize()}px`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: `${getDimensions3()[0]}px`,
                height: `${getDimensions3()[1]}px`,
                ...(isActive("/") ? {
                  backgroundColor: "#F5EFFF",
                  borderRadius: "32.5px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
                } : {})
              }}
            >
              home
            </Link>

            {/* Dropdown Work */}
            <div
              style={{ 
                position: "relative", 
                color: "black",
                textDecoration: "none",
                fontFamily: "Nunito",
                fontWeight: "lighter",
                fontSize: `${getNavbarFontSize()}px`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: `${getDimensions3()[0]}px`,
                height: `${getDimensions3()[1]}px`,
               }}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span style={{ 
                color: "black",
                textDecoration: "none",
                fontFamily: "Nunito",
                fontWeight: "lighter",
                fontSize: `${getNavbarFontSize()}px`,
                display: "flex",
                width: `${getDimensions3()[0]}px`,
                height: `${getDimensions3()[1]}px`,
                justifyContent: "center",

                alignItems: "center", ...(isActive("/switchbuds") ?{
                backgroundColor: "#F5EFFF",
                borderRadius: "32.5px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
                
              } : {}), ...(isActive("/titan") ? {
                backgroundColor: "#F5EFFF",
                borderRadius: "32.5px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
              } : {}), ...(isActive("/redesign") ? {
                backgroundColor: "#F5EFFF",
                borderRadius: "32.5px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
              } : {}), ...(isActive("/stoool") ? {
                backgroundColor: "#F5EFFF",
                borderRadius: "32.5px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
              } : {}) }}>
                work
              </span>
              {dropdownOpen && (
                <ul style={{ ...dropdownMenu, position: "absolute", top: "100%", left: 0, zIndex: 1000 }}>
                  <li><Link to="/switchbuds" style={{ ...dropdownItem }}>Switch-buds</Link></li>
                  <li><Link to="/titan" style={{ ...dropdownItem }}>Titan</Link></li>
                  <li><Link to="/redesign" style={{ ...dropdownItem }}>Libre re-design</Link></li>
                  <li><Link to="/stoool" style={{ ...dropdownItem }}>Stoool</Link></li>
                </ul>
              )}
            </div>
            <Link to="/about" style={{ 
                width: `${getDimensions3()[0]}px`,
                height: `${getDimensions3()[1]}px`,
                color: "black",
                textDecoration: "none",
                fontFamily: "Nunito",
                fontWeight: "lighter",
                fontSize: `${getNavbarFontSize()}px`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center", ...(isActive("/about") ? {
                  backgroundColor: "#F5EFFF",
                  borderRadius: "32.5px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
                } : {}) }}>about</Link>
                
            <Link to="/more" style={{ color: "black",
                textDecoration: "none",
                fontFamily: "Nunito",
                fontWeight: "lighter",
                width: `${getDimensions3()[0]}px`,
                height: `${getDimensions3()[1]}px`,
                fontSize: `${getNavbarFontSize()}px`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center", ...(isActive("/more") ? {
                  backgroundColor: "#F5EFFF",
                  borderRadius: "32.5px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
                } : {}) }}>more</Link>
          </nav>
        </div>





        {/* Navbar de cel */}
        <div style={
         { 
          gridRow: "2 / span 7",
          position: "absolute",
          zIndex: 1000,
          display: `${getNavbar2Display()}`,
          justifyContent: "center",
          position: "absolute", 
          left: "-24px",
          width: `${"100vw"}`, 
        }
        }>
          <nav style={{
            display: "flex",
            flexDirection: "column", 
            justifyContent: "center",
            width: `${"100vw"}`,
            height: "100%",
            objectFit: "cover",
          }}>
            <Link
              to="/"
              onMouseEnter={() => setHoverHome(true)}
              onMouseLeave={() => setHoverHome(false)}
              style={{
                padding: "8px 16px",
                textDecoration: "none",
                fontFamily: "Nunito",
                fontWeight: "normal",
                fontSize: "24px",
                justifyContent: "center",
                color: getHomeStyle()[0],
                backgroundColor: getHomeStyle()[1],
                borderBottom: `2px solid ${getHomeStyle()[2]}`,
                ...(isActive("/") ? {
                  color: getHomeStyle()[0],
                  backgroundColor: getHomeStyle()[1],
                  borderBottom: `2px solid ${getHomeStyle()[2]}`,
                } : {})
              }}
            >
              Home
            </Link>

            {/* Work */}
            <div
              onClick={() => {setDropdownOpen(prev => !prev); setHoverSwitch(false); setHoverTitan(false); setHoverReDesign(false); setHoverStoool(false);}}
              onMouseEnter={() => {
                setHoverWork(true);
              }}
              style={{
                padding: "8px 16px",
                position: "relative",
                textDecoration: "none",
                fontFamily: "Nunito",
                fontWeight: "normal",
                fontSize: "24px",
                justifyContent: "center",
                color: getWorkStyle()[0],
                backgroundColor: getWorkStyle()[1],
                borderBottom: `2px solid ${getWorkStyle()[2]}`,  
                cursor: "pointer",
                marginBottom: dropdownOpen ? "195px" : "0px"
               }}
            >
              <span 
              style={{
                textDecoration: "none",
                fontFamily: "Nunito",
                fontWeight: "normal",
                fontSize: "24px",
                justifyContent: "center",
                cursor: "pointer"
                }}>
                Work...
              </span>

              {dropdownOpen && (
                <ul 
                  onClick={(e) => e.stopPropagation()}
                  style={{ 
                  position: "absolute", 
                  top: "100%", 
                  left: 0, 
                  listStyle: "none",
                  zIndex: 1000,
                  width: "100%"
                  }}>
                  <li><Link 
                  onClick={(e) => e.stopPropagation()}
                  onMouseEnter={() => setHoverSwitch(true)} 
                  onMouseLeave={() => setHoverSwitch(false)} 
                  to="/switchbuds" 
                  style={{ 
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    fontFamily: "Nunito",
                    fontWeight: "lighter",
                    fontSize: "24px", 
                    display: "block",
                    padding: "8px 16px",
                    color: getSwitchStyle()[0],
                    backgroundColor: getSwitchStyle()[1],
                    borderBottom: `2px solid ${getSwitchStyle()[2]}`,
                    }}> Switch-buds </Link>
                  </li>
                  <li><Link 
                    onClick={(e) => e.stopPropagation()}
                    onMouseEnter={() => setHoverTitan(true)} 
                    onMouseLeave={() => setHoverTitan(false)} 
                    to="/titan" 
                    style={{ 
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    fontFamily: "Nunito",
                    fontWeight: "lighter",
                    fontSize: "24px", 
                    display: "block",
                    padding: "8px 16px",
                    color: getTitanStyle()[0],
                    backgroundColor: getTitanStyle()[1],
                    borderBottom: `2px solid ${getTitanStyle()[2]}`,
                   }}>Titan</Link></li>
                  <li><Link 
                  onClick={(e) => e.stopPropagation()}
                  onMouseEnter={() => setHoverReDesign(true)} 
                  onMouseLeave={() => setHoverReDesign(false)}
                  to="/redesign" 
                  style={{ 
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    fontFamily: "Nunito",
                    fontWeight: "lighter",
                    fontSize: "24px", 
                    display: "block",
                    padding: "8px 16px",
                    color: getReDesignStyle()[0],
                    backgroundColor: getReDesignStyle()[1],
                    borderBottom: `2px solid ${getReDesignStyle()[2]}`,
                   }}
                  >Libre re-design</Link></li>
                  <li><Link 
                  onClick={(e) => e.stopPropagation()}
                  onMouseEnter={() => setHoverStoool(true)} 
                  onMouseLeave={() => setHoverStoool(false)}
                  to="/stoool" 
                  style={{ 
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    fontFamily: "Nunito",
                    fontWeight: "lighter",
                    fontSize: "24px", 
                    display: "block",
                    padding: "8px 16px",
                    color: getStooolStyle()[0],
                    backgroundColor: getStooolStyle()[1],
                    borderBottom: `2px solid ${getStooolStyle()[2]}`,
                  }}>Stoool</Link></li>
                </ul>
              )}
            </div>

            <Link to="/about" 
            onMouseEnter={() => setHoverAbout(true)}
            onMouseLeave={() => setHoverAbout(false)}
            style={{
              padding: "8px 16px",
              textDecoration: "none",
              fontFamily: "Nunito",
              fontWeight: "normal",
              fontSize: "24px",
              justifyContent: "center",
              color: getAboutStyle()[0],
              backgroundColor: getAboutStyle()[1],
              borderBottom: `2px solid ${getAboutStyle()[2]}`,
              ...(isActive("/") ? {
                color: getAboutStyle()[0],
                backgroundColor: getAboutStyle()[1],
                borderBottom: `2px solid ${getAboutStyle()[2]}`,
              } : {})
            }}>About</Link>
                
            <Link to="/more"
            onMouseEnter={() => setHoverMore(true)}
            onMouseLeave={() => setHoverMore(false)}
            style={{
              padding: "8px 16px",
              textDecoration: "none",
              fontFamily: "Nunito",
              fontWeight: "normal",
              fontSize: "24px",
              justifyContent: "center",
              color: getMoreStyle()[0],
              backgroundColor: getMoreStyle()[1],
              borderBottom: `2px solid ${getMoreStyle()[2]}`,
              ...(isActive("/") ? {
                color: getMoreStyle()[0],
                backgroundColor: getMoreStyle()[1],
                borderBottom: `2px solid ${getMoreStyle()[2]}`,
              } : {})
            }}>More</Link>
          </nav>
        </div>

        {/* Grid overlay */}
        <div style={gridOverlayStyle}>
          <div style={gridLinesStyle}>
            {/* Líneas verticales */}
            <div style={verticalLinesStyle} />
            <div style={rightBorderStyle} />
            {/* Líneas horizontales */}
            <div style={horizontalLinesStyle} />
            <div style={bottomBorderStyle} />
          </div>
        </div>
      </div>
    </div>
  );
}


const containerStyle = {
  position: "relative",
  display: "flex",
  paddingLeft: "24px",
  paddingRight: "48px",
  boxSizing: "border-box",
  justifyContent: "center",
  alignItems: "center",
};

const gridStyle = {
  position: "relative",
  aspectRatio: "7/1",
  overflow: "visible",
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gridTemplateRows: "repeat(1, 1fr)",
  boxSizing: "border-box",
};

const logoContainerStyle = {
  gridColumn: "1 / span 1",
  gridRow: "1 / span 1",
  display: "flex",
};

const logoStyle = {
  paddingLeft: "24px",
  paddingTop: "24px",
  position: "fixed", 
  top: "0",
};


const dropdownMenu = {
  marginTop: "2px",
  position: "absolute",
  backgroundColor: "rgba(255, 255, 255, 0.58)",
  listStyle: "none",
  borderBottomRightRadius: "20px",
  borderBottomLeftRadius: "20px"
};

const dropdownItem = {
  display: "block",
  padding: "8px 16px",
  color: "black",
  textDecoration: "none",
  whiteSpace: "nowrap",
  fontFamily: "Nunito",
  fontWeight: "lighter",
  fontSize: "24px"
};

const gridOverlayStyle = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: "0px",
  right: "-24px",
  zIndex: 10,
};

const gridLinesStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
};

const verticalLinesStyle = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: "24px",
  backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.5) 24px, transparent 1px)",
  backgroundSize: "calc(100% / 7) 100%",
  backgroundRepeat: "repeat-x",
};

const rightBorderStyle = {
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  width: "24px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
};

const horizontalLinesStyle = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 24px, transparent 1px)",
  backgroundSize: "100% calc(100% / 1)",
  backgroundRepeat: "repeat-y",
};

const bottomBorderStyle = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  height: "1px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
};
