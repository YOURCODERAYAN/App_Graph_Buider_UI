
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
import ServiceNode from './ServiceNode'

export default function Canvas() {

  const { selectedAppId } = useUIStore()
  const { data, isLoading, isError, error } = useGraph(selectedAppId)

  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  useEffect(() => {
    if (data) {
      setNodes(data.nodes)
      setEdges(data.edges)
    }
  }, [data])

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

  const nodeTypes = {

    serviceNode :ServiceNode
  }

  return (
    <div style={{ width: '100%', height: '100%', background: '#1a1a1a' }}>
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
        <Background 
          variant={BackgroundVariant.Dots} 
          gap={20} size={1} color="#cbd5e1" 
        />
      </ReactFlow>
    </div>
  )
}