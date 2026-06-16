import { FaGithub, FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import {useIsMobile} from '../hooks/useMediaQuery'


export default function LeftRail(){

    const isMobile = useIsMobile();


        return(
         //   {/* this will be a static left rail no interactivity */}
         <>
         {!isMobile && (

            <nav className="  bg-zinc-800 h-screen" style={{width:'60px' , position:'fixed' , top:'7.8%' , zIndex:'20'}}>   {/* Parent container */}

                  {/* icons container */}
                  <div className="flex flex-col items-center gap-10 pt-9">

                <FaGithub size={35} color="#ffffff" className="cursor-pointer"/>
                <FaPython  size={35} color="#ffffff" className="cursor-pointer"/>
                <BiLogoPostgresql  size={35} color="#ffffff"  className="cursor-pointer"/>
                <DiRedis size={35} color="#ffffff"  className="cursor-pointer"/>
                <SiMongodb  size={35} color="#ffffff"  className="cursor-pointer"/>
               
               </div>
            </nav>
         )}

         {
            isMobile && (

         <nav className=" bg-zinc-800 h-screen" style={{width:'40px' , position:'fixed', top:'12%', zIndex:'20'}}>   {/* Parent container */}

                  {/* icons container */}
                  <div className="flex flex-col items-center gap-10 pt-9">

                <FaGithub size={20} color="#ffffff" className="cursor-pointer"/>
                <FaPython  size={20} color="#ffffff" className="cursor-pointer"/>
                <BiLogoPostgresql  size={20} color="#ffffff" className="cursor-pointer"/>
                <DiRedis size={20} color="#ffffff" className="cursor-pointer"/>
                <SiMongodb  size={20} color="#ffffff"  className="cursor-pointer"/>
               
               </div>
            </nav>



            )
         }

         </>

           
        )
}



// i need github icon , postgre , redis , mongodb , flowchart icon , python icon 