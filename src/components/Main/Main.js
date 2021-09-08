import './styles.css'
import "animate.css"

const Main = () => {
    return ( 
        <div style={{background:'#1D1D1D', width:'100%', height:'100vh', padding:'30px'}}>
            <div style={{height:'50px'}}>
                {/* Header */}
            </div>
            <div >
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
            
            
            
        </div>
     );
}
 
export default Main;