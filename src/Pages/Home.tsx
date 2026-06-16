import LeftRail from '../Components/LeftRail'
import Navbar from '../Components/Navbar'
import RightPanel from '../Components/RightPanel'
import Canvas from '../Components/Canvas'

export default function Home(){

        return(

                <section className="w-full h-screen overflow-y-auto overflow-x-auto  text-white">
                               
  

  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    height: '100vh', 
    overflow: 'hidden' 
  }}>
    
    {/* Top Navbar */}
    <div style={{ flexShrink: 0, zIndex: 50 }}>
      <Navbar />
    </div>

    {/* Bottom section — Rail + Canvas + RightPanel */}
    <div style={{ 
      display: 'flex', 
      flex: 1, 
      overflow: 'hidden' 
    }}>
      
      {/* Left Rail */}
      <div style={{ flexShrink: 0, zIndex: 40 }}>
        <LeftRail />
      </div>

      {/* Canvas — takes remaining space */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <Canvas />
      </div>

      {/* Right Panel */}
      <div style={{ flexShrink: 0, zIndex: 40 }}>
        <RightPanel />
      </div>

    </div>
  </div>







                </section>

        )
}