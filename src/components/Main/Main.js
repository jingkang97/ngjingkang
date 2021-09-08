import './styles.css'
import "animate.css"
import About from '../About/About'
import Projects from '../Projects/Projects'
import Work from '../Work/Work'
import Contact from '../Contact/Contact'

import AnchorLink from 'react-anchor-link-smooth-scroll'


const Main = () => {

    return ( 
        <div style={{background:'#1D1D1D', height:'100%'}}>
            <div class="header" >
            <a class="link" style={{fontSize:'40px', position:'absolute', marginTop:'-10px'}} href=""><span style={{color:'#25F4EE'}}>K</span ><span style={{color:'white', marginLeft:'-23px'}}>K</span><span style={{color:'#FE2C55', marginLeft:'-24px'}}>K</span></a>

                <div style={{display:'flex', width:'100%', flexDirection:'row', justifyContent:'flex-end', color:'white'}}>
                    <nav>
                        <AnchorLink href='#about'><div class="link">About</div> </AnchorLink>
                        <AnchorLink class="link" href='#projects'>Project</AnchorLink>
                        <AnchorLink class="link" href='#work'>Work</AnchorLink>
                        <AnchorLink class="link" href='#contact'>Contact</AnchorLink>
                    </nav>
                </div>
                {/* Header */}
            </div>
            <div>

            </div>
            <div style={{height:'100vh', display:'flex', flexDirection:'row', alignItems:'center'}}>
                <div style={{margin:'100px', color:'white'}}>
                    <div style={{fontSize:'15px', letterSpacing: '2px', fontWeight:'bold'}}>
                        HI THERE <span class="hand">👋🏻</span> , I'M  
                        <div style={{marginTop:'20px'}}>
                            <span class="char">j</span><span class="char">i</span><span class="char">n</span><span class="char">g</span>
                            <span class="j" style={{color:'#25F4EE'}}>K</span><span class="j" style={{color:'white', marginLeft:'-37px'}}>K</span>
                            <span class="j" style={{color:'#FE2C55', marginLeft:'-40px'}}>K</span>
                            <span class="char">a</span><span class="char">n</span><span class="char">g</span><span class="char">.</span>
                        </div>
                        <div style={{marginTop:'30px', color:'#25F4EE', display:'flex', alignItems:'center'}}>FULL STACK WEB DEVELOPER <span style={{fontSize:'25px'}}>🧑🏻‍💻</span></div>
                    </div>
                    <button class="button">Contact Me</button>
                </div>
                
            </div>
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
            
            
            
        </div>
     );
}
 
export default Main;