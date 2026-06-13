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
}))