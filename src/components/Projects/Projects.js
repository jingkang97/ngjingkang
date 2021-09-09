import React from 'react';
import Wobble from 'react-reveal/Wobble';
import Jump from 'react-reveal/Jump';
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-grid-system';


import './styles.css'

class Project extends React.Component {
  render() {
    return (
        <div style={{background:'#1D1D1D', color:'white', height:'100%', marginBottom:'50px'}}>
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
            <div style={{width:'100%'}}>
            
                
                <Fade up>
                <div style={{width:'100%', marginLeft:'-20px', marginTop:'30px'}}>
                    
                
                <Container>
                <Row>
                    <Col md={4}>
                    <div class="work">
                        <div>
                            PhotoBook
                        </div>
                        <div style= {{marginTop:'30px', marginBottom:'30px', fontSize:'15px', letterSpacing:'2px'}}>
                            React | Material UI | Redux
                        </div>
                    </div>
                    </Col>
                    <Col md={4}>
                    <div class="work-one">
                    <div>
                            Secret Santas
                        </div>
                        <div style= {{marginTop:'30px', marginBottom:'30px', fontSize:'15px', letterSpacing:'2px'}}>
                            Django | JS | BootStrap
                        </div>
                    </div>
                    </Col>
                    <Col md={4}>
                    <div class="work-two">
                    <div>
                            Dashboard
                        </div>
                        <div style= {{marginTop:'30px', marginBottom:'30px', fontSize:'15px', letterSpacing:'2px'}}>
                            React | Ant Design | MongoDB
                        </div>
                    </div>
                    </Col>
                </Row>
                <Row>
                <Col md={4}>
                    <div class="work-three">
                    <div>
                            Kevlar
                        </div>
                        <div style= {{marginTop:'30px', marginBottom:'30px', fontSize:'15px', letterSpacing:'2px'}}>
                            Angular | BootStrap
                        </div>
                    </div>
                    </Col>

                </Row>
                </Container>
                   
                </div>
                            
                            
                        
                        
                        </Fade>
            

            </div>
            
            
        </div>
    </div>
    );
  }
}
export default Project;

