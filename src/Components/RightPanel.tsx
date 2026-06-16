import { ChevronRight} from 'lucide-react'
import { useIsMobile } from '../hooks/useMediaQuery'
import { useUIStore } from '../stores/uistore'
import { useApps } from '../hooks/useApps'
import CardUI from './CardUi'


export default function RightPanel(){


    const isMobile = useIsMobile()
    const { isDrawerOpen, closeDrawer } = useUIStore()
    const {selectedAppId , setSelectedAppId} = useUIStore()



    const {data:apps , isLoading , isError} = useApps()




    const AppList = () => {

            if(isLoading)

                return(
                    <div className="flex items-center justify-center h-full text-zinc-300 text-sm">
                        Loading Apps ...
                    </div>
                
                )
             if (isError) return (
            <div className="flex items-center justify-center h-full text-red-400 text-sm">
                Failed to load apps!
            </div>
             )

      return (
      <ul className="overflow-y-auto h-full">
        {apps?.map((app: any) => (
          <li
            key={app.id}
            onClick={() => setSelectedAppId(app.id)}        // on click saves to Zustand
            className={`py-2 pl-2 mt-3 mr-3 ml-3 cursor-pointer flex flex-row justify-between items-center
              ${selectedAppId === app.id ? 'bg-white/10 rounded-xl mr-3 ml-3' : ''}  
            `}                                               //  highlight selected app
          >
            <div className="flex items-center gap-2">
              {/* color dot comes from mockApi data */}
              <div
                className="w-2 h-2 rounded-full pr-5"
                style={{ background: app.color }}           //  real color from mockApi
              />
              {app.name}                                    
            </div>
            <ChevronRight  size={13} className="mr-4"/>
          </li>
        ))}
      </ul>
    )
  }
            
    if(!isMobile){
        return(
            <aside className="bg-zinc-800 h-full  overflow-y-hidden" style={{width:'20%' , position:'fixed' , top:'7.9%' , right:'0px'}}>

            {/* first section where we have to select the app section  */}
                <div className="bg-white/10  rounded-2xl mt-4 ml-2 mr-2  flex flex-col " style={{  height:'35vh'}}>

                            <div className="text-zinc-300 text-bold flex  items-start ml-2 pt-2 font-serif"> Apps / App Selector</div>

                    {/* App list Section */}

                    <div className="bg-black/25  overflow-y-auto scrollbar-visible h-full rounded-2xl mt-10 flex flex-col mx-2 mb-2 font-serif "   >
                    
                       <AppList />

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

                                <CardUI />
                                
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
            className="bg-zinc-800 h-screen overflow-y-auto w-80 ml-auto p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4 mt-20">
              <h2 className="text-white font-serif">Menu</h2>
              <button 
                onClick={closeDrawer}
                className="text-white text-xl cursor-pointer"
                
              >
                ✕
              </button>
            </div>
            
            {/* Mobile App Selector */}
            <div className="bg-white/10 rounded-2xl p-3 mb-4 ">
              <div className="text-zinc-300 font-serif mb-1">Apps</div>
                    <AppList />
            </div>
            
            {/* Mobile Node Inspector */}
            <div className="bg-white/10 rounded-2xl p-3">
              <div className="text-zinc-300 font-serif mb-2">Node Inspector</div>
              <div className="text-zinc-500 text-center py-4">
                  <CardUI />
              </div>
            </div>
          </div>
        </div>
      )}
    </>

        
    )

    



}