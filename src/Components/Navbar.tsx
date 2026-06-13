
import {useIsMobile} from '../hooks/useMediaQuery'
import {Plus , RotateCcw ,Menu} from 'lucide-react'
import { useUIStore } from '../stores/uistore';



export default function Navbar(){
    const isMobile = useIsMobile();
    const{toggleDrawer} = useUIStore();


        return(

            <div className="fixed z-20 bg-zinc-800 flex items-center justify-between p-4 font-arial w-full">
                {/*left side portion */}
                <div className="flex items-center gap-3">
                    {/*brand logo or name */}
                <p className="text-white font-semibold border-r border-gray-600 pr-3">App Indicator</p>

                {/*selected item showcase bar */}
                <div className="p-4 border border-solid border-purple-900 rounded-lg" style={{width:'200px'}}>
                    {/* it will dynamically chage with app selection */}
                </div>
                </div>


                {/*Right Side Portion */}
                <div className="flex items-center gap-10">
                {/*two buttons will be alinged here */}
                { !isMobile && (

                <>
                    <button className="bg-zinc-400 px-5 font-semibold py-2 rounded-2xl cursor-pointer flex items-center gap-2 "> <Plus className="text-xl" />Fit</button>

                    <button className="bg-zinc-400 px-3 py-2 rounded-2xl font-semibold cursor-pointer flex items-center gap-2"> <RotateCcw  className="text-xl"/>Refresh</button>
                    </>
                )
                }


                {

                    isMobile && (

                        <div className="text-white text-xl " onClick={toggleDrawer}>
                                <Menu />
                            </div>
                    )
                }


                </div>

            </div>
        )
}