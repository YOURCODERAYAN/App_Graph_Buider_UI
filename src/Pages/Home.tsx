import LeftRail from '../Components/LeftRail'
import Navbar from '../Components/Navbar'
import RightPanel from '../Components/RightPanel'
import Canvas from '../Components/Canvas'

export default function Home(){

        return(

                <section className="w-full h-screen overflow-y-auto overflow-x-auto  text-white">
                               
            <div className="top-nav-bar">
                <Navbar />
            </div>



            <div className="left-rail-bar">
            <LeftRail />
            </div>




            <div className="absolute inset-0">  {/* Remove -z-1 */}
                 <Canvas />
            </div>


            <div className="right-panel">
                <RightPanel />
            </div>








                </section>

        )
}