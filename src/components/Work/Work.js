import React from 'react';
import Wobble from 'react-reveal/Wobble';
import Jump from 'react-reveal/Jump';
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-grid-system';
import {FiPlay} from 'react-icons/fi'

import './styles.css'

class Work extends React.Component {
    constructor(){
        super()
        this.state = {tab: 'lomotif'};
    }

    handleChange = () => {
        if(this.state.tab == 'lomotif'){
            this.setState({tab: 'thales'})
        }else{
            this.setState({tab: 'lomotif'})

        }
        console.log('click')
    }
  render() {
    return (
        <div style={{background:'#1D1D1D', color:'white', height:'100%', marginBottom:'50px'}}>
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
                <div  style={{width:'100%', height:'400px', backgroundColor:'transparent', marginTop:'50px', display:'flex', flexDirection:'row'}}>
                    <div style={{width:'20%', display:'flex', display:'flex', flexDirection:'column'}}>

                        <div class={this.state.tab == "lomotif"? "title-active" : "title"}  onClick={this.handleChange}>
                            <span id="txt">Lomotif</span>
                        </div>
                        <div class={this.state.tab == "thales"? "title-active" : "title"}  onClick={this.handleChange}>
                            <span id="txt">Thales</span>
                        </div>
                        
                    </div>
                    {this.state.tab == 'lomotif' ? 
                    <div class={this.state.tab=='lomotif' ? 'enter' : null} style={{width:'100%', display:'flex', backgroundColor:'transparent', height:'100%', color:'white', fontSize:'15px', paddingTop:'10px', paddingLeft:'20px',display:'flex', flexDirection:'column', letterSpacing:'1px', lineHeight:'30px'}}>
                        <div style={{fontWeight:'bold'}}>Web Developer Intern @ <a href="https://lomotif.com" style={{textDecoration:'none', color:'#25f4ee'}} target="_blank">Lomotif</a></div>
                        <div>June 2021 - Present</div>
                        <p>
                        <FiPlay style={{marginBottom:'-2px'}}/> Created an internal full stack web application (LomoTool) which increase efficiency/accuracy of data retrieval and database manipulation by 90%
                        </p>
                        <p>
                        <FiPlay style={{marginBottom:'-2px'}}/> Implemented a login/logout system with JWT Token authentication for increased security
                        </p>
                        <p>
                        <FiPlay style={{marginBottom:'-2px'}}/> Successfully deployed backend with Docker container service
                        </p>
                        
                        
                    </div>
                    : 
                    <div class={this.state.tab=='thales' ? 'enter-thales' : null} style={{width:'100%', display:'flex', backgroundColor:'transparent', height:'100%', color:'white', fontSize:'15px', paddingTop:'10px', paddingLeft:'20px',display:'flex', flexDirection:'column', letterSpacing:'1px', lineHeight:'30px'}}>
                        <div style={{fontWeight:'bold'}}>Soft Engineer Intern @ <a href="https://thales.com" style={{textDecoration:'none', color:'#25f4ee'}} target="_blank">Thales</a></div>
                        <div>June 2020 - November 2020</div>
                        <p>
                        <FiPlay style={{marginBottom:'-2px'}}/> Participated in technical writing, code development and testing for certain modules/functionalities in the solution     </p>
                        <p>
                        <FiPlay style={{marginBottom:'-2px'}}/> Improved traffic forecast by 80% using FBProphet
                        </p>
                        <p>
                        <FiPlay style={{marginBottom:'-2px'}}/> Provided strong and timely support to the IVVQ team and site deployment
                        </p>
                        
                        
                    </div>
                    }
                    
                    


                
                   
                </div>
                            
                            
                        
                        
                        </Fade>
            

            </div>
            
            
        </div>
    </div>
    );
  }
}
export default Work;

