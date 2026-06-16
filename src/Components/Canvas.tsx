
import ReactFlow, { 
  Background, 
  BackgroundVariant,
  useNodesState,
  useEdgesState,
} from 'reactflow'
import 'reactflow/dist/style.css'    
import { useEffect } from 'react'
import { useUIStore } from '../stores/uistore'
import { useGraph } from '../hooks/useGraph'
import {Trash} from 'lucide-react'
import ServiceNode from './ServiceNode'
import {useReactFlow} from 'reactflow'


const nodeTypes = {

    serviceNode :ServiceNode
  }

  {/* Fit View Trigger */}
  function  FlowController(){

      const {fitView} =   useReactFlow()
      const {fitTriggerView} = useUIStore()


        useEffect(()=>{

          fitView({duration:300})
        }, [fitTriggerView])


        useEffect(()=>{

            const handleSize = () => fitView({duration:300})

        window. addEventListener('resize' , handleSize)
        return () => window.removeEventListener('resize' , handleSize)
          


        }, [fitView])

        return null

  }








export default function Canvas() {

  const { selectedAppId, nodes: storeNodes, setNodes: setStoreNodes , deleteNode , selectedNode } = useUIStore()
  const {  data, isLoading, isError, error } = useGraph(selectedAppId)

  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])


  const HandleDelete = ()=>{
    if(selectedNode?.id){
          deleteNode(selectedNode.id)
    }
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.key === 'Delete' || event.key === 'Backspace') && selectedNode?.id) {
        event.preventDefault()
        deleteNode(selectedNode.id)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [deleteNode, selectedNode])

  useEffect(() => {
    if (data?.nodes) {
      setStoreNodes(data.nodes)
      setNodes(data.nodes)
      setEdges(data.edges || [])
    }
  }, [data, setEdges, setNodes, setStoreNodes])

  useEffect(() => {
    if (storeNodes.length > 0) {
      setNodes(storeNodes)
    }
  }, [storeNodes, setNodes])

  if (isLoading) return (
    <div style={{ 
      width: '100%', height: '100%', 
      background: '#1a1a1a',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      color: '#a1a1aa' 
    }}>
      Loading graph...
    </div>
  )

  if (isError) return (
    <div style={{ 
      width: '100%', height: '100%', 
      background: '#1a1a1a',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      color: '#ef4444' 
    }}>
      Error: {error?.message}
    </div>
  )

  

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#1a1a1a' }}>
      <ReactFlow
      
      nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodesDraggable={true}          
        panOnDrag={true}               
        zoomOnScroll={true}            
        fitView
      >
        <FlowController />
        <Background 
          variant={BackgroundVariant.Dots} 
          gap={10} size={1} color="#cbd5e1" 
        />
      </ReactFlow>

    <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2">
      <div className="flex h-12  px-2  gap-1 items-center  flex-row justify-center rounded-lg border border-zinc-700 bg-red-700/60 shadow-lg cursor-pointer" onClick={HandleDelete}>
      <span className="text-sm"> DeleteNode </span>   <Trash className="h-5 w-5 text-white" />
      </div>
    </div>
    </div>
  )
}