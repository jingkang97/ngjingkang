import React from 'react';
import Reveal from 'react-reveal/Reveal';
import Wobble from 'react-reveal/Wobble';
import Jump from 'react-reveal/Jump';
import LightSpeed from 'react-reveal/LightSpeed';

class About extends React.Component {
  render() {
    return (
        <div style={{background:'#1D1D1D', color:'white', height:'100vh', padding:'70px'}}>
        <div style={{marginLeft:'20px', fontSize:'50px'}}>
        <LightSpeed left>
            <Jump><h1 class="heading">About Me</h1></Jump>
            
        </LightSpeed>
        </div>
        </div>
    );
  }
}
export default About;

