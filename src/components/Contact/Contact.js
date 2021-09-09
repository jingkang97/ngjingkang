import React from 'react';
import Wobble from 'react-reveal/Wobble';
import Jump from 'react-reveal/Jump';
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-grid-system';


import './styles.css'

class Contact extends React.Component {
  render() {
    return (
        <div style={{background:'#1D1D1D', color:'white', height:'100vh'}}>
            <div style={{marginLeft:'20px', fontSize:'30px', color:'#25F4EE', paddingLeft:'70px', paddingTop:'70px', paddingRight:'70px'}}>
            <div>
            <LightSpeed left>
                <Jump>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', height:'50px'}}>
                        <h1 >
                            <div class="heading">C</div>
                            <div class="heading">o</div>
                            <div class="heading">n</div>
                            <div class="heading">t</div>
                            <div class="heading">a</div>
                            <div class="heading">c</div>
                            <div class="heading">t</div>
                            &nbsp;
                            <div class="heading">M</div>
                            <div class="heading">e</div>
                            <div class="heading" style={{marginLeft:'10px'}}>✉️</div>
                        </h1>
                    </div>
                    
                </Jump>
            </LightSpeed>
            </div>
            <div style={{width:'100%'}}>
            
                
                <Fade up>
                <div style={{width:'100%', marginLeft:'-20px', marginTop:'30px'}}>
                    
                
                </div>
                            
                            
                        
                        
                        </Fade>
            

            </div>
            
            
        </div>
    </div>
    );
  }
}
export default Contact;

