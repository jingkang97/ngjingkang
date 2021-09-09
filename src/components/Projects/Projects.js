import React from 'react';
import Wobble from 'react-reveal/Wobble';
import Jump from 'react-reveal/Jump';
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';

import './styles.css'

class Project extends React.Component {
  render() {
    return (
        <div style={{background:'#1D1D1D', color:'white', height:'100vh'}}>
            <div style={{marginLeft:'20px', fontSize:'30px', color:'#25F4EE', paddingLeft:'70px', paddingTop:'70px', paddingRight:'70px'}}>
            <div>
            <LightSpeed left>
                <Jump>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', height:'50px'}}>
                        <h1 >
                            <div class="heading">P</div>
                            <div class="heading">r</div>
                            <div class="heading">o</div>
                            <div class="heading">j</div>
                            <div class="heading">e</div>
                            <div class="heading">c</div>
                            <div class="heading">t</div>
                            <div class="heading">s</div>
                            <div class="heading" style={{marginLeft:'10px'}}>📂</div>
                        </h1>
                    </div>
                    
                </Jump>
            </LightSpeed>
            </div>
 
                
                    <div class="projects">
                        <Fade up>
                            {/* <div style={{width:'100%'}}>
                                <div class="work">
                                    
                                </div>
                            </div> */}
                                
                                

                            



                            
                            
                            
                        </Fade>
                    </div>
                
            
            </div>
        
        </div>
    );
  }
}
export default Project;

