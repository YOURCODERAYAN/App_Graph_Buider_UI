import {Plus , ChevronRight} from 'lucide-react'
import { useIsMobile } from '../hooks/useMediaQuery'
import { useUIStore } from '../stores/uistore'


export default function RightPanel(){


    const isMobile = useIsMobile()
    const { isDrawerOpen, closeDrawer } = useUIStore()



    if(!isMobile){
        return(
            <aside className="bg-zinc-800 h-full  overflow-y-hidden" style={{width:'20%' , position:'fixed' , top:'7.9%' , right:'0px'}}>

            {/* first section where we have to select the app section it will be scrollable version */}
                <div className="bg-white/10  rounded-2xl mt-4 ml-2 mr-2  flex flex-col " style={{  height:'35vh'}}>

                            <div className="text-zinc-300 text-bold flex justify-between items-start ml-2 pt-2 font-serif"> Apps / App Selector
                        <Plus className="bg-zinc-300 p-1  mr-2 text-black rounded-2xl"/>

                            </div>

                    {/* App list Section */}

                    <div className="bg-black/25  overflow-y-auto scrollbar-visible h-full rounded-2xl mt-10 flex flex-col mx-2 mb-2 font-serif "   >
                    {/* Created  a unordered list to store the app names */}
                        <ul className=" overflow-y-auto h-full">

                            <li className="py-2  pl-2  mt-3  cursor-pointer flex flex-row justify-between items-center">
                                {/* App name with a blue dot that it is fetched */}
                                <div className="flex items-center gap-2">
                                     <div className="w-2 h-2 bg-blue-400 rounded-full " />   First Token 
                                </div>
                                {/* Right arrow icon */}
                                  <ChevronRight />
                            </li>
                             <li className="py-2  pl-2  mt-3   cursor-pointer flex flex-row justify-between">
                                <div className="flex items-center gap-2">
                                     <div className="w-2 h-2 bg-red-400 rounded-full " />   Second Token 
                                </div>
                                {/* Right arrow icon */}
                                  <ChevronRight />
                            </li>
                             <li className="py-2  pl-2  mt-3  cursor-pointer flex flex-row justify-between">
                                <div className="flex items-center gap-2">
                                     <div className="w-2 h-2 bg-yellow-400 rounded-full " />   Third Token 
                                </div>
                                {/* Right arrow icon */}
                                  <ChevronRight />
                            </li>
                             <li className="py-2  pl-2  mt-3   cursor-pointer  flex flex-row justify-between">
                               <div className="flex items-center gap-2">
                                     <div className="w-2 h-2 bg-green-400 rounded-full " />   Forth Token 
                                </div>
                                {/* Right arrow icon */}
                                  <ChevronRight />
                            </li>
                            
                        </ul>


                    </div>
                    {/* ---------------end of the app list scrollable section ----------------- */}

                

                </div>

            {/* -----------------------------end of the first partition of total 2 partition-----------------------------------------------------------------------*/}

            {/* This is a border effect */}
                <div 
  className="border-b border-white pt-10"
  style={{
    maskImage: 'linear-gradient(to right, transparent, white 50%, white 20%, transparent)',
    WebkitMaskImage: 'linear-gradient(to right, transparent, white 40%, white 40%, transparent)'
  }}
/>


            {/* node inspector panel here the card will be appear this section */}
                <div className="bg-white/10 rounded-2xl mt-10 ml-2  mr-2 mb-10 flex items-center justify-center font-serif text-white/10"  style={{height:'45vh'}}>

                                Node Inspector section
                                
                </div>



                
            </aside>
        )
}



    

    return(
           <>
      {/* Drawer overlay - shows when isDrawerOpen is true */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50"
          onClick={closeDrawer}
        >
          <div 
            className="bg-zinc-800 h-full w-80 ml-auto p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-white font-serif">Menu</h2>
              <button 
                onClick={closeDrawer}
                className="text-white text-xl"
              >
                ✕
              </button>
            </div>
            
            {/* Mobile App Selector */}
            <div className="bg-white/10 rounded-2xl p-3 mb-4">
              <div className="text-zinc-300 font-serif mb-2">Apps</div>
              <ul>
                <li className="py-2 flex items-center gap-2 text-zinc-200">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" /> First Token
                </li>
                <li className="py-2 flex items-center gap-2 text-zinc-200">
                  <div className="w-2 h-2 bg-red-400 rounded-full" /> Second Token
                </li>
                <li className="py-2 flex items-center gap-2 text-zinc-200">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full" /> Third Token
                </li>
              </ul>
            </div>
            
            {/* Mobile Node Inspector */}
            <div className="bg-white/10 rounded-2xl p-3">
              <div className="text-zinc-300 font-serif mb-2">Node Inspector</div>
              <div className="text-zinc-500 text-center py-4">
                Click a node to see details
              </div>
            </div>
          </div>
        </div>
      )}
    </>

        
    )

    



}