import {create} from 'zustand';


interface UIState {

    
    isDrawerOpen : boolean
    openDrawer : () => void
    closeDrawer : () => void
    toggleDrawer : ()=> void





    selectedAppId : string
    setSelectedAppId:(id:string) => void



    selectedNode: any | null
    setSelectedNode: (node: any | null) => void

    nodes: any[],
    setNodes: (nodes: any[]) => void,
    updateNode: (id: string, newData: any) => void,



    edges:any[],
    setEdges : (edges: any[] | null) => void,
    deleteNode : (id:string) => void ,


    fitTriggerView : number
    triggerFitView : ()=> void








    

}



export const useUIStore = create<UIState>((set) => ({
    isDrawerOpen: false,

    openDrawer: () => set({ isDrawerOpen: true }),
    closeDrawer: () => set({ isDrawerOpen: false }),

    toggleDrawer: () => set((state) => ({
        isDrawerOpen: !state.isDrawerOpen,
    })),

    selectedAppId: 'app-1',
    setSelectedAppId: (id) => set({ selectedAppId: id }),

    selectedNode: null,
    setSelectedNode: (node: any | null) => set({ selectedNode: node }),



    nodes: [],
    setNodes: (nodes: any[]) => set({ nodes }),
    updateNode: (id: string, newData: any) => set((state) => ({


            nodes:state.nodes.map((node) => 
            
                    node.id === id ? {...node , data:{...node.data  , ...newData}} : node
            
            ),

            selectedNode : state.selectedNode?.id === id ? { 

                        ...state.selectedNode , data :{...state.selectedNode.data , ... newData}
            } : state.selectedNode
    })),

    edges : [],
    setEdges: (edges: any[] | null) => set({ edges: edges ?? [] }),

    deleteNode: (id: string) => set((state) => ({
        nodes: state.nodes.filter((node: any) => node.id !== id),
        edges: state.edges.filter((edge: any) => edge.source !== id && edge.target !== id),
        selectedNode: null,
    })),

    fitTriggerView: 0,
    triggerFitView: () => set((state) => ({
        fitTriggerView: state.fitTriggerView + 1
    }))
    






}))