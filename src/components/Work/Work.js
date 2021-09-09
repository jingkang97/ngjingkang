import React from 'react';
import Wobble from 'react-reveal/Wobble';
import Jump from 'react-reveal/Jump';
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-grid-system';


import './styles.css'

class Work extends React.Component {
    constructor(){
        super()
    }
    handleChange(){
        console.log('click')
    }
  render() {
    return (
        <div style={{background:'#1D1D1D', color:'white', height:'100vh', marginBottom:'50px'}}>
            <div style={{marginLeft:'20px', fontSize:'30px', color:'#25F4EE', paddingLeft:'70px', paddingTop:'70px', paddingRight:'70px'}}>
            <div>
            <LightSpeed left>
                <Jump>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', height:'50px'}}>
                        <h1 >
                            <div class="heading">W</div>
                            <div class="heading">h</div>
                            <div class="heading">e</div>
                            <div class="heading">r</div>
                            <div class="heading">e</div>
                            &nbsp;
                            <div class="heading">I</div>
                            &nbsp;
                            <div class="heading">w</div>
                            <div class="heading">o</div>
                            <div class="heading">r</div>
                            <div class="heading">k</div>


                            <div class="heading" style={{marginLeft:'10px'}}>💼</div>
                        </h1>
                    </div>
                    
                </Jump>
            </LightSpeed>
            </div>
            <div style={{width:'100%'}}>
            
                
                <Fade up>
                <div style={{width:'100%', height:'400px', backgroundColor:'transparent', marginTop:'30px'}}>
                    <div style={{width:'100%', display:'flex'}}>
                        <button class="title" onClick={this.handleChange}>
                            <span id="txt">Lomotif</span>
                        </button>
                        <div style={{width:'70%', backgroundColor:'red', height:'100px'}}></div>
                    </div>
                    


                
                   
                </div>
                            
                            
                        
                        
                        </Fade>
            

            </div>
            
            
        </div>
    </div>
    );
  }
}
export default Work;

