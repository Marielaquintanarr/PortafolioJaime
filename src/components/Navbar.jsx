import React, { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav style={{ backgroundColor: 'rgba(255, 255, 255, 0.58)', width: '500px', height: '60px', borderRadius: '40px', fontWeight: 'lighter', fontFamily: "Nunito", display: "flex", alignContent: "center"}}>
      <ul style={{ listStyleType: 'none', display: 'flex', margin: 0, padding: 0, gap: '10px' }}>
        <li style={{borderRadius: 32.5, width: '72px', height: '40px', fontSize: '29.25px', color: '#181C14'}}>
          <a href="/" style={{ color: '#181C14', textDecoration: 'none'}}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'white'; 
            e.target.style.borderRadius = '32.5px'; 
            e.target.style.width = '130px'; 
            e.target.style.height = '50px'; 
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent'; 
            e.target.style.borderRadius = ''; // Si deseas quitar el borde redondeado al salir
          }}          
          >home</a>
        </li>

        {/* Dropdown */}
        <li style={{ position: 'relative', width: '200px', height: '188px'}}
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}>
          <a href="/about" style={{textDecoration: 'none',  color: '#181C14', fontSize: '29.25px' }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'white'; 
            e.target.style.borderRadius = '32.5px'; 
            e.target.style.width = '130px'; 
            e.target.style.height = '50px'; 
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent'; 
            e.target.style.borderRadius = ''; // Si deseas quitar el borde redondeado al salir
          }} 
          >work 
          </a>
          {isDropdownOpen && (
            <ul style={{
              color: '#181C14',
              position: 'absolute',
              backgroundColor: 'rgba(255, 255, 255, 0.58)',
              listStyleType: 'none',
              padding: '15px 15px',
              borderRadius: '5px',
            }}>
              <li>
                <a href="/" style={{
                  color: '#181C14',
                  textDecoration: 'none',
                  backgroundColor: 'transparent',
                }}
                
                >
                  Switch Buds
                </a>
              </li>
              <li>
                <a href="/" style={{
                  color: '#181C14',
                  textDecoration: 'none',
                  backgroundColor: 'transparent',
                }}>
                  Titan
                </a>
              </li>
              <li>
                <a href="/" style={{
                  color: '#181C14',
                  textDecoration: 'none',
                  backgroundColor: 'transparent',
                }}>
                  Libre re-design
                </a>
              </li>
              <li>
                <a href="/" style={{
                  color: '#181C14',
                  textDecoration: 'none',
                  backgroundColor: 'transparent',
                }}>
                  Stoool
                </a>
              </li>
            </ul>
          )}
        </li>

        <li style={{ margin: '0 15px' }}>
          <a href="/contact" style={{ textDecoration: 'none', fontSize: '29.25px', color: '#181C14'}}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'white'; 
            e.target.style.borderRadius = '32.5px'; 
            e.target.style.width = '130px'; 
            e.target.style.height = '50px'; 
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent'; 
            e.target.style.borderRadius = ''; 
          }} 
          >about</a>
        </li>
        <li style={{ margin: '0 15px' }}>
          <a href="/contact" style={{ textDecoration: 'none', fontSize: '29.25px', color: '#181C14' }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'white'; 
            e.target.style.borderRadius = '32.5px'; 
            e.target.style.width = '130px'; 
            e.target.style.height = '50px'; 
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent'; 
            e.target.style.borderRadius = ''; // Si deseas quitar el borde redondeado al salir
          }} 
          >more</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
