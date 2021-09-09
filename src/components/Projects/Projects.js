import React from 'react';
import Reveal from 'react-reveal/Reveal';
import Wobble from 'react-reveal/Wobble';
import Jump from 'react-reveal/Jump';
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';

import './styles.css'

class Project extends React.Component {
  render() {
    return (
        <div style={{background:'#1D1D1D', color:'white', height:'100vh', padding:'70px'}}>
        <div style={{marginLeft:'20px', fontSize:'30px', color:'#25F4EE'}}>
        <LightSpeed left>
            <Jump>
                <h1>
                    <div class="heading">A</div>
                    <div class="heading">b</div>
                    <div class="heading">o</div>
                    <div class="heading">u</div>
                    <div class="heading">t</div>
                    &nbsp;
                    <div class="heading">M</div>
                    <div class="heading">e</div>
                </h1>
            </Jump>
        </LightSpeed>
        <div style={{fontSize:'20px', color:'white'}}>
            <Fade up>
                <p style={{lineHeight:'30px', letterSpacing: '2px'}}>Hello! My name is Jing Kang and I'm a final year Computer engineering student at the National University of Singapore.
                    I am currently working at Lomotif as a part time web developer intern and I'm working towards 
                    becoming a full stack web developer. 
                </p>
            </Fade>
        </div>
        </div>
        </div>
    );
  }
}
export default Project;

