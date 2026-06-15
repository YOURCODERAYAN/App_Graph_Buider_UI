import { useUIStore } from '../stores/uistore'
import { Handle, Position } from 'reactflow'



export default function ServiceNode({data , id} : any){

    const{setSelectedNode} = useUIStore()

   


    const statusColor = data.status === 'Healthy' ? '#22c55e':
        data.status === 'Degraded' ? '#eab308':
        '#ef4444'

    const badgeBg =
    data.status === 'Healthy'  ? 'rgba(34,197,94,0.15)'  :
    data.status === 'Degraded' ? 'rgba(234,179,8,0.15)'  :
    'rgba(239,68,68,0.15)'

    const badgeText =
    data.status === 'Healthy'  ? '#22c55e' :
    data.status === 'Degraded' ? '#eab308' :
    '#ef4444'


        return(

            <>
                <Handle
                type="target"
                position={Position.Left}
                style={{

                    background:statusColor,
                    width:'8px',
                    height:'8px',
                    border:'2px solid #0e0e12',

                }}

                />
                         <div
              className="active:border-2  border-white rounded-"
        onClick={() => setSelectedNode({ id, data })}
        style={{
          background: '#1c1c22',
          border: '1.5px solid #2e2e3a',
          borderRadius: '10px',
          padding: '12px 14px',
          minWidth: '180px',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          
        }}
      >

        {/* Top Row — icon + name + status badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>

          {/* Icon */}
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '7px',
            background: statusColor + '22',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            flexShrink: 0,
          }}>
            {data.icon}
          </div>

          {/* Label */}
          <span style={{
            color: '#e8e8f0',
            fontSize: '13px',
            fontWeight: '600',
            flex: 1,
          }}>
            {data.label}
          </span>

          {/* Status Badge */}
          <span style={{
            background: badgeBg,
            color: badgeText,
            fontSize: '10px',
            fontWeight: '700',
            padding: '2px 8px',
            borderRadius: '20px',
            flexShrink: 0,
          }}>
            {data.status}
          </span>

        </div>

        {/* Bottom Row — tags */}
        <div style={{
          display: 'flex',
          gap: '5px',
          flexWrap: 'wrap',
        }}>
          {data.tags?.map((tag: string) => (
            <span
              key={tag}
              style={{
                background: '#2a2a35',
                border: '1px solid #3a3a45',
                borderRadius: '4px',
                color: '#8888a0',
                fontSize: '10px',
                padding: '2px 7px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

      </div>



                <Handle
              type="source"
              position={Position.Right}
              style={{

                background:statusColor,
                width:'8px',
                height:'8px',
                border:'2px solid #0e0e12',
              }}

                
                
               />
            
 
            
            </>


        )
}



