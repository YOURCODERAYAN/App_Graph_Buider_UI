import {useState} from 'react';
import { useUIStore } from '../stores/uistore';
import { useIsMobile } from '../hooks/useMediaQuery';











export default function CardUI(){

    const isMobile = useIsMobile()

    const {selectedNode , updateNode} = useUIStore()
    const {deleteNode} = useUIStore()


    const [activeTab , setActiveTab] = useState("")





    if(!selectedNode) return(

            <div className="text-white/20 text-sm">
                Click a Node to view the Details
            </div>
    )


    const { data } = selectedNode;

    const first = data?.label ?? '';
    const tags = data?.tags[0] ?? '';
    const tags2 = data?.tags[1] ?? '';
    const Des = data?.description ?? '';



    const StatusColor = data.status === "Healthy" ? '#22c55e' : 
        data.status === "Degraded" ? '#eab308':
        '#ef4444'
    
     const StatusText =data.status === 'Healthy'  ? '#22c55e' :
        data.status === 'Degraded' ? '#eab308' :
    '#ef4444' 


    if(!isMobile){

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
                                    <div  className="rounded-lg text-red-400 font-semibold  px-3 "style={{background:StatusColor +  '22' , color: StatusText}}>{data.status}</div>
                            </div>


                        </div>



                        {/* main two tabs */}

                        <div className="flex gap-20 items-center justify-between mt-2">
                            <div className={`text-white cursor-pointer  hover:bg-zinc-200 hover:text-zinc-900 px-3 rounded-lg ${activeTab === "Config" ? "bg-zinc-200 text-zinc-900" : ""}`} onClick={()=> setActiveTab("Config")}>
                                    Config 
                            </div>

                            <div className={`text-white cursor-pointer hover:bg-zinc-200 hover:text-zinc-900 px-3 rounded-lg ${activeTab === 'Runtime' ? "bg-zinc-200 text-zinc-900" : ""} `} onClick={()=> setActiveTab("Runtime")}>
                                    Runtime
                            </div>


                        </div>


                        {
                            activeTab === "Config" && (
                                <CardInfo
                                    First={first}
                                    Tags={tags}
                                    Tags2={tags2}
                                    Des={Des}
                                    updateNode={updateNode}
                                    nodeId={selectedNode.id}
                                />
                            )}



                        {
                            activeTab === 'Runtime' && (


                                    <CardExtra />
                            )
                        }


                </div>

        )
}



        return(

                                  //  {/* main-container */}
                <div className="bg-zinc-900  w-full flex flex-col items-center rounded-xl  px-2" style={{height:'40vh' }}>

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
                                    <div  className="rounded-lg text-red-400 font-semibold  px-3 "style={{background:StatusColor +  '22' , color: StatusText}}>{data.status}</div>
                            </div>


                        </div>



                        {/* main two tabs */}

                        <div className="flex gap-20 items-center justify-between mt-2">
                            <div className={`text-white cursor-pointer  hover:bg-zinc-200 hover:text-zinc-900 px-3 rounded-lg ${activeTab === "Config" ? "bg-zinc-200 text-zinc-900" : ""}`} onClick={()=> setActiveTab("Config")}>
                                    Config 
                            </div>

                            <div className={`text-white cursor-pointer hover:bg-zinc-200 hover:text-zinc-900 px-3 rounded-lg ${activeTab === 'Runtime' ? "bg-zinc-200 text-zinc-900" : ""} `} onClick={()=> setActiveTab("Runtime")}>
                                    Runtime
                            </div>


                        </div>


                        {
                            activeTab === "Config" && (
                                <CardInfo
                                    First={first}
                                    Tags={tags}
                                    Tags2={tags2}
                                    Des={Des}
                                    updateNode={updateNode}
                                    nodeId={selectedNode.id}
                                />
                            )}



                        {
                            activeTab === 'Runtime' && (


                                    <CardExtra />
                            )
                        }


                </div>



        )

}




export function CardInfo({ First, Tags, Tags2, Des, updateNode, nodeId }: { First: string; Tags: string; Tags2: string; Des: string; updateNode: (id: string, newData: any) => void; nodeId: string }) {

    

   



            return(

                    <div className="bg-zinc-800 w-full  flex flex-col items-center px-1.5 py-1.5 rounded-lg mt-2" style={{height:'28vh'}}>
                                <div className="flex items-start  flex-col  w-full">
                                    <label className="text-zinc-400 text-sm">Node Name</label>    
                                    <input
                                        type="text"
                                        value={First}
                                        placeholder="Type your Node ...."
                                        className=" pl-2 py-1 border border-zinc-300  rounded-lg  text-white  font-semibold"
                                        style={{width:'100%'}}
                                        onChange={(e) => updateNode(nodeId, { label: e.target.value })}
                                    />

                                    <label className="text-zinc-400 text-sm">Description</label>
                                    <input
                                        type="text"
                                        value={Des}
                                        className=" py-1  pl-2 border border-zinc-300  text-white  text-sm rounded-lg"
                                        style={{width:'100%'}}
                                        onChange={(e) => updateNode(nodeId, { description: e.target.value })}
                                    />


                                    </div>

                        {/* Per hour cost will be visible here */}

                            <div className="flex flex-col w-full mt-2 font-serif gap-2">
                                {/*Cost Tier */}
                                <div className="flex items-center   justify-between">
                            
                          <span className=" border border-white/20 text-zinc-200 bg-black/40 rounded-lg py-1 px-1 text-sm">CostTier: </span>     <div className="mr-2 text-amber-500 text-sm">{Tags}</div>  
                                </div>

                                <div className='flex items-center justify-between' >
                               <span className=" border border-white/20 text-zinc-200 bg-black/40 rounded-lg px-0.5 py-1 text-sm">Service Provider:</span>    <div className="mr-2 text-amber-500 text-sm"> {Tags2} </div> 
                                </div>
                                

                            </div>
                                    
                    </div>
            )
    }







export function CardExtra(){

        return(

                <div className="bg-zinc-800 flex flex-col items-center w-full px-1.5 py-1.5 mt-2 rounded-lg" style={{height:'28vh'}}>
                            {/* First container */}
                                <div className="grid grid-cols-2 grid-rows-2 w-full gap-4 ">

                                    <div className="bg-white text-black text-center rounded-lg" style={{height:'7vh'}}>
                                            hello
                                    </div>

                                    <div className="bg-white flex flex-col items-center text-black text-center rounded-lg">
                                         <span className="text-blue-700 text-2xl font-semibold">   512 MB </span>
                                         <span className="text-zinc-500 text-sm font-light"> Memory </span>
                                    </div>

                                    <div className="bg-white flex flex-col items-center text-black text-center  rounded-lg">
                                            <span className="text-zinc-800 text-2xl font-semibold">10.0 GB</span>
                                            <span className="text-zinc-500 text-sm font-light">Disk Usage</span>
                                    </div>

                                    <div className="bg-white flex flex-col items-center text-black text-center rounded-lg">
                                           <span className="text-purple-600 text-2xl font-semibold">247/s</span>
                                           <span className="text-zinc-500 text-sm font-light">Requests</span>
                                    </div>



                                </div>
                </div>

        )
}