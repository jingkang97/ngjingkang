import React from 'react';
import Wobble from 'react-reveal/Wobble';
import Jump from 'react-reveal/Jump';
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';
import {IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact,IoLogoNodejs } from "react-icons/io5";
import {DiMongodb, DiDjango} from 'react-icons/di'
import {SiRedux} from 'react-icons/si'

import './styles.css'

class About extends React.Component {
  render() {
    return (
        <div style={{background:'#1D1D1D', color:'white', height:'100vh'}}>
            <div style={{marginLeft:'20px', fontSize:'30px', color:'#25F4EE', paddingLeft:'70px', paddingTop:'70px', paddingRight:'70px'}}>
            <LightSpeed left>
                <Jump>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', height:'50px'}}>
                        <h1 >
                            <div class="heading">A</div>
                            <div class="heading">b</div>
                            <div class="heading">o</div>
                            <div class="heading">u</div>
                            <div class="heading">t</div>
                            &nbsp;
                            <div class="heading">M</div>
                            <div class="heading">e</div>
                            <span><img class="heading" src="jingkang.png" style={{height:'50px', marginBottom:'-10px', marginLeft:'10px'}}/></span>
                        </h1>
                    </div>
                    
                </Jump>
            </LightSpeed>
                <div style={{fontSize:'20px', color:'white'}}>
                    <Fade up>
                        <p style={{lineHeight:'30px', letterSpacing: '2px'}}>
                            Hello! My name is Jing Kang and I'm a final year Computer engineering student at the National University of Singapore.
                            I am currently working at Lomotif as a part time web developer intern and I'm working towards 
                            becoming a full stack web developer. 
                        </p>
                        <p style={{lineHeight:'30px', letterSpacing: '2px'}}>
                            Below are some of the technologies I've interacted with:
                        </p>
                    </Fade>
                </div>
            </div>
        <div class="skills" style={{display:'flex', flexDirection:'row', marginTop:'50px'}}>
            <div style={{ borderTop: "2px solid #fff ", marginLeft: '20px', marginRight: '20px' }}></div>

            <div class="skill" style={{color:'#25f4ee',   transform: 'rotate(5deg)'}}><IoLogoHtml5 /></div>
            <div class="skill" style={{color:'#25f4ee',   transform: 'rotate(-5deg)'}}><IoLogoCss3 /></div>
            <div class="skill" style={{color:'#25f4ee',   transform: 'rotate(3deg)'}}><IoLogoJavascript /></div>
            <div class="skill" style={{color:'#25f4ee',   transform: 'rotate(5deg)'}}><IoLogoReact /></div>
            <div class="skill" style={{color:'#25f4ee',   transform: 'rotate(-10deg)'}}><DiMongodb /></div>
            <div class="skill" style={{color:'#25f4ee',   transform: 'rotate(6deg)'}}><IoLogoNodejs /></div>
            <div class="skill" style={{color:'#25f4ee',   transform: 'rotate(-1deg)'}}><DiDjango /></div>
            
            <div class="skill" style={{color:'#25f4ee',   transform: 'rotate(5deg)'}}><IoLogoHtml5 /></div>
            <div class="skill" style={{color:'#25f4ee',   transform: 'rotate(-5deg)'}}><IoLogoCss3 /></div>
            <div class="skill" style={{color:'#25f4ee',   transform: 'rotate(3deg)'}}><IoLogoJavascript /></div>
            <div class="skill" style={{color:'#25f4ee',   transform: 'rotate(5deg)'}}><IoLogoReact /></div>
            <div class="skill" style={{color:'#25f4ee',   transform: 'rotate(-10deg)'}}><DiMongodb /></div>
            <div class="skill" style={{color:'#25f4ee',   transform: 'rotate(6deg)'}}><IoLogoNodejs /></div>
            <div class="skill" style={{color:'#25f4ee',   transform: 'rotate(-1deg)'}}><DiDjango /></div>
            
        </div>
        </div>
    );
  }
}
export default About;

