
import {useIsMobile} from '../hooks/useMediaQuery'
import {Plus ,Menu} from 'lucide-react'
import { useUIStore } from '../stores/uistore';
import {useApps} from  '../hooks/useApps';




export default function Navbar(){
    const isMobile = useIsMobile();
    const{toggleDrawer} = useUIStore();
    const {triggerFitView} = useUIStore();

    const {selectedAppId} = useUIStore();
    const {data:apps} = useApps();



    const selectApp = apps?.find((app) => app.id === selectedAppId) // just finding the match and checks if the appid founds


        return(

            <div className="fixed z-20 bg-zinc-800 flex items-center justify-between p-4 font-arial w-full">
                {/*left side portion */}
                <div className="flex items-center gap-3">
                    {/*brand logo or name */}
                <p className="text-white font-semibold border-r border-gray-600 pr-3">App Indicator</p>

                {/*selected item showcase bar */}
                <div className="px-4 py-1 border  flex flex-row  justify-center  font-serif items-center gap-3 border-solid border-purple-900 rounded-lg" style={{width:'200px'}}>
                    {/* it will dynamically chage with app selection */}
                <span className="bg-green-500  h-2 w-2 rounded-full animate-pulse "></span>
                <span>  {selectApp?.name ?? 'Select an App '}</span> 
                </div>
                </div>


                {/*Right Side Portion */}
                <div className="flex items-center gap-3">
                {/*two buttons will be alinged here */}
                { !isMobile && (

                <>
                    <button className="bg-zinc-400 px-5 font-semibold py-2 rounded-2xl cursor-pointer flex items-center gap-2  mr-7" onClick={triggerFitView}> <Plus className="text-xl" />Fit</button>


                    </>
                )
                }


                {

                    isMobile && (
                        <>
                          <button className="bg-zinc-400 px-3.5 font-semibold py-1.5 rounded-2xl cursor-pointer flex items-center gap-2  mr-1" onClick={triggerFitView}> <Plus className="text-xl" />Fit</button>
                        <div className="text-white text-xl  cursor-pointer" onClick={toggleDrawer}>
                                <Menu />
                            </div>
                          

                         
                         </>
                    )
                }


                </div>

            </div>
        )
}