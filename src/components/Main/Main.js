import './styles.css'
import "animate.css";
import About from '../About/About'
import Projects from '../Projects/Projects'
import Work from '../Work/Work'
import Contact from '../Contact/Contact'
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import ScrollAnimation from 'react-animate-on-scroll';


import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";


const Main = () => {

    return ( 
        <div style={{background:'#1D1D1D', height:'100%'}}>
            <div class="header" >
                <a class="link" style={{fontSize:'40px', position:'absolute', marginTop:'-10px'}} href="">
                    <span style={{color:'#25F4EE'}}>K</span ><span style={{color:'white', marginLeft:'-23px'}}>K</span><span style={{color:'#FE2C55', marginLeft:'-24px'}}>K</span>
                </a>

                <div style={{display:'flex', width:'100%', flexDirection:'row', justifyContent:'flex-end', color:'white'}}>
                    <nav style={{display:'flex', flexDirection:'row'}}>
                        <AnchorLink href='#about'><div class="link">About</div> </AnchorLink>
                        <AnchorLink class="link" href='#projects' >Project</AnchorLink>
                        <AnchorLink class="link" href='#work'>Work</AnchorLink>
                        <AnchorLink class="link" href='#contact'>Contact</AnchorLink>
                        <div class="resume-container" ><a class="resume" href="NgJingKang-Resume.pdf" download>Resume</a></div>
                    </nav>
                </div>
            </div>
            <div>

            </div>
            <div style={{height:'100vh', display:'flex', flexDirection:'row', alignItems:'center'}}>
                <div style={{margin:'100px', color:'white', width:'100%'}}>
                    <div style={{fontSize:'15px', letterSpacing: '2px', fontWeight:'bold', marginBottom:'30px'}}>
                        <div class="intro">
                            HI THERE <span class="hand">👋🏻</span> , I'M  
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <span class="char">j</span><span class="char">i</span><span class="char">n</span><span class="char">g</span>
                            <span class="j" style={{color:'#25F4EE'}}>K</span><span class="j" style={{color:'white', marginLeft:'-37px'}}>K</span>
                            <span class="j" style={{color:'#FE2C55', marginLeft:'-40px'}}>K</span>
                            <span class="char">a</span><span class="char">n</span><span class="char">g</span><span class="char">.</span>
                        </div>
                        <div style={{marginTop:'30px', color:'#25F4EE', display:'flex', alignItems:'center'}} class="role">FULL STACK WEB DEVELOPER <span style={{fontSize:'25px'}}>🧑🏻‍💻</span></div>
                    </div>
                    <AnchorLink href='#contact' style={{textDecoration:'none'}}><div class="button">Contact Me</div></AnchorLink>
                </div>
                <div style={{width:'100%', backgroundColor:'transparent', fontSize:'100px', animation:'fadeInRight 1s', fontWeight:'bold'}}>
                    <div style={{display:'flex'}}><div class="K" style={{color:'#25F4EE'}}>K</div>&emsp;&emsp;<div class="K" style={{color:'#FE2C55', animationDelay:'1s'}}>K</div></div>
                    <div style={{marginTop:'-30px', display:'flex'}}><div class="K" style={{color:'white', animationDelay:'1.5s'}}>K</div>&emsp;&nbsp;<div class="K" style={{color:'#25F4EE', animationDelay:'2s'}}>K</div></div>
                    <div style={{marginTop:'-30px', display:'flex'}}><div class="K" style={{color:'#FE2C55', animationDelay:'2s'}}>K</div>&nbsp;&nbsp;<div class="K" style={{color:'white', animationDelay:'2.5s'}}>K</div></div>
                    <div style={{marginTop:'-30px', display:'flex'}}><div class="K" style={{color:'white', animationDelay:'2.5s'}}>K</div>&nbsp;<div class="K" style={{color:'#FE2C55', animationDelay:'3s'}}>K</div></div>
                    <div style={{marginTop:'-30px', display:'flex'}}><div class="K" style={{color:'#25F4EE', animationDelay:'3s'}}>K</div>&nbsp;&nbsp;<div class="K" style={{color:'white', animationDelay:'3.5s'}}>K</div></div>
                    <div style={{marginTop:'-30px', display:'flex'}}><div class="K" style={{color:'white', animationDelay:'3.5s'}}>K</div>&emsp;&nbsp;<div class="K" style={{color:'#25F4EE', animationDelay:'4s'}}>K</div></div>
                    <div style={{marginTop:'-30px', display:'flex'}}><div class="K" style={{color:'#FE2C55', animationDelay:'4s'}}>K</div>&emsp;&emsp;<div class="K" style={{color:'white', animationDelay:'4.5s'}}>K</div></div>
                </div>
            </div>
            {/* <div style={{fontSize:'100px', color:'white'}}>
            <ScrollAnimation animateIn="bounceInRight">
                    About Me
                </ScrollAnimation>

            </div> */}
            

            <section id="about">
                <About />
            </section>
            <section id='projects'>
                <Projects />
            </section>
            <section id='work'>
                <Work />
            </section>
            <section id='contact'>
                <Contact />
            </section>
            <div class="connects" style={{fontSize:'20px', color:'white', position:'fixed', bottom:'0'}}>
                <div style={{marginLeft:'40px', marginBottom:'20px'}} ><a href="https://github.com/jingkang97" target="_blank"><FiGithub class="icon"/></a> </div>
                <div style={{marginLeft:'40px', marginBottom:'20px'}} ><a href="https://www.linkedin.com/in/ngjingkang/" target="_blank"><FiLinkedin class="icon"/></a> </div>
                <div style={{marginLeft:'40px', marginBottom:'20px'}} ><a href="https://www.instagram.com/ngjkjk/" target="_blank"><FiInstagram class="icon"/></a> </div>
                <div style={{marginLeft:'50px',borderLeft:'1px solid white', height:'100px'}}></div>
            </div>
        </div>
     );
}
 
export default Main;