import {useState} from 'react';
import { useUIStore } from '../stores/uistore';






export  function CardInfo(){



            return(

                    <div className="bg-zinc-800 w-full  flex flex-col items-center  rounded-lg mt-4" style={{height:'26vh'}}>
                                <div className="flex items-start  flex-col ">
                                    <label className="text-zinc-400 text-sm">Node Name</label>    
                                    <input type="text" placeholder="Type your Node ...." className="w-max  py-1 border border-zinc-300 px-16 rounded-lg "/>

                                    <label className="text-zinc-400 text-sm">Description</label>
                                  <textarea rows={4} className="w-max py-1 border border-zinc-300 px-16 rounded-lg" />


                                    </div>
                                    
                    </div>
            )
    }




export default function CardUI(){

    const {selectedNode} = useUIStore()

    const [activeTab , setActiveTab] = useState("")





    if(!selectedNode) return(

            <div className="text-white/20 text-sm">
                Click a Node to view the Details
            </div>
    )


    const{id , data} = selectedNode;




    const StatusColor = data.status === "Healthy" ? '#22c55e' : 
        data.status === "Degraded" ? '#eab308':
        '#ef4444'
            



        return(






            
              //  {/* main-container */}
                <div className="bg-zinc-900  w-full flex flex-col items-center rounded-xl mx-3 px-2" style={{height:'40vh' }}>

                        {/*first nodename tab with node icon*/}
                            <div className="flex items-center justify-between w-full py-1">

                                    <div className="text-white  font-semibold flex items-center gap-1.5 ">
                                        {/*Here the app name with icon will be visible */}

                                        <span>{data.icon}</span>
                                        {data.label}

                                    </div>

                                    <div className="text-white font-semibold">
                                        X
                                    </div>
                            </div>
                        
                            {/*Status Tab here will be visible */}

                        <div className="flex items-center justify-between w-full px-3">
                            <div className="flex flex-row items-center">
                            <h3>Status</h3>
                           
                               
       
                            </div>

                            {/* Here will be the button of status will be visible*/}
                            <div className="flex items-center gap-1.5">
                                    <div  className="rounded-lg text-red-400 font-semibold  px-3 "style={{background:StatusColor +  '22'}}>{data.status}</div>
                            </div>


                        </div>



                        {/* main two tabs */}

                        <div className="flex gap-20 items-center justify-between mt-5">
                            <div className={`text-white cursor-pointer  hover:bg-zinc-200 hover:text-zinc-900 px-3 rounded-lg ${activeTab === "Config" ? "bg-zinc-200 text-zinc-900" : ""}`} onClick={()=> setActiveTab("Config")}>
                                    Config 
                            </div>

                            <div className="text-white cursor-pointer hover:bg-zinc-200 hover:text-zinc-900 px-3 rounded-lg" onClick={()=> setActiveTab("Runtime")}>
                                    Runtime
                            </div>


                        </div>


                        {
                            activeTab === "Config" && <CardInfo />

                            
                        }


                </div>

        )
}