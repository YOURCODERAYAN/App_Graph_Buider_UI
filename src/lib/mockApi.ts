
{/* Defing the types  of App Items*/}
export type AppItem = {

    id:string
    name: string
    color: string


}

{/* Defing the types of the NodeData */}
export type NodeData = {

    label: string
    icon: string
    status: 'Healthy' |  ' Degraded' | 'Down'
    tags: string[]
    cpu: number
    description: string
}

{/* Defining the types of the GraphData */}
export type GraphData = {

        nodes: any[]
        edges: any[]


}



/// Defing the App items -------------------------------->

const APPS : AppItem [] = [

    {id:'app-1' , name:'supertokens-golang' , color:'#3b82f6'},
    {id:'app-2' , name:'supertokens-python' , color:'#ef4444'},
    {id:'app-3' , name:'supertokens-Java' , color :'#eab308'},
    {id :'app-4' , name:'supertokens-redis' , color:'#22c55e'}

]


const GRAPHS: Record <string , GraphData> = {


        // Graph Data will contain (all nodes with edges combined )//


    //-----------------App-1=>( Api Gateway -> Postgres + Redis -> MongoDB )----------------------------//
    'app-1' : {

            nodes:[
                {   
                        id:'n1',
                        type:'serviceNode',
                        position:{x:80 , y:150},
                        data:{

                            label:'API Gateway',
                            icon:'⚡',
                            status:'Healthy',
                            tags:['$0.03 / HR' , 'aws'],
                            cpu:42,
                            description:'Main entry point for all requests'
                        }

                },
                {   
                        id:'n2',
                        type:'serviceNode',
                        position:{x:380 , y : 60},
                        data:{

                                label:'Postgres',
                                icon:'🐘',
                                status:'Healthy',
                                tags:['$0.03 / HR' , 'aws'],
                                cpu:'65',
                                description:'Primary  relational database'

                        }

                }
                ,
                {


                        id:'n3',
                        type:'serviceNode',
                        position:{x:380  , y:260},
                        data:{

                                label:'Redis',
                                icon:'🔴',
                                status:'Degraded',
                                tags:['$0.03 / HR ' , 'aws'],
                                cpu:'88',
                                description:'Session and Cache layer'

                            }

                },
                {   

                        id:'n4',
                        type:'serviceNode',
                        position:{x:380 , y:150},
                        data:{

                                label:'MongoDb',
                                icon:'🍃',
                                status:'Down',
                                tags: ['$0.03/HR', 'aws'],
                                cpu: 0,
                                description: 'Document store for analytics',

                            }
                        }
                    ] 
                , 

            edges:[

                {id:'e1' , source :'n1' , target:'n2' , animated:true},
                {id:'e2' , source :'n1' , target :'n3' , animated:true},
                {id:'e3' , source:'n2' , target:'n4' , animated:true}



            ]



    },



    // ----------------App-2 => Load Balancer -> App Servers ->RDS --------------------------------------------------->

    'app-2':{

    nodes:[
     {
        id: 'n1',
        type: 'serviceNode',
        position: { x: 30, y: 150 },
        data: {
          label: 'Load Balancer',
          icon: '⚖️',
          status: 'Healthy',
          tags: ['$0.05/HR', 'aws'],
          cpu: 30,
          description: 'Distributes traffic across instances',
        },
      },
      {
        id: 'n2',
        type: 'serviceNode',
        position: { x: 180, y: 60 },
        data: {
          label: 'App Server A',
          icon: '☕',
          status: 'Healthy',
          tags: ['$0.03/HR', 'gcp'],
          cpu: 55,
          description: 'Java Spring Boot instance A',
        },
      },
      {
        id: 'n3',
        type: 'serviceNode',
        position: { x: 280, y: 260 },
        data: {
          label: 'App Server B',
          icon: '☕',
          status: 'Degraded',
          tags: ['$0.03/HR', 'gcp'],
          cpu: 78,
          description: 'Java Spring Boot instance B',
        },
      },
      {
        id: 'n4',
        type: 'serviceNode',
        position: { x: 380, y: 150 },
        data: {
          label: 'RDS MySQL',
          icon: '🗄️',
          status: 'Healthy',
          tags: ['$0.08/HR', 'aws'],
          cpu: 71,
          description: 'Managed relational database',
        },
      },
    ],
    edges: [
      { id: 'e1', source: 'n1', target: 'n2', animated: true },
      { id: 'e2', source: 'n1', target: 'n3', animated: true },
      { id: 'e3', source: 'n2', target: 'n4', animated: true },
      { id: 'e4', source: 'n3', target: 'n4', animated: true },
    ],
  },


  // App 3 — Auth Service → Token Store + User DB
  'app-3': {
    nodes: [
      {
        id: 'n1',
        type: 'serviceNode',
        position: { x: 80, y: 150 },
        data: {
          label: 'Auth Service',
          icon: '🔐',
          status: 'Healthy',
          tags: ['$0.03/HR', 'aws'],
          cpu: 38,
          description: 'Handles all authentication flows',
        },
      },
      {
        id: 'n2',
        type: 'serviceNode',
        position: { x: 380, y: 60 },
        data: {
          label: 'Token Store',
          icon: '🪙',
          status: 'Healthy',
          tags: ['$0.03/HR', 'aws'],
          cpu: 22,
          description: 'Stores JWT refresh tokens',
        },
      },
      {
        id: 'n3',
        type: 'serviceNode',
        position: { x: 380, y: 260 },
        data: {
          label: 'User DB',
          icon: '👤',
          status: 'Healthy',
          tags: ['$0.05/HR', 'aws'],
          cpu: 44,
          description: 'Stores user profiles and roles',
        },
      },
      {
        id: 'n4',
        type: 'serviceNode',
        position: { x: 380, y: 150 },
        data: {
          label: 'Email Service',
          icon: '📧',
          status: 'Degraded',
          tags: ['$0.02/HR', 'gcp'],
          cpu: 60,
          description: 'Sends verification emails',
        },
      },
    ],
    edges: [
      { id: 'e1', source: 'n1', target: 'n2', animated: true },
      { id: 'e2', source: 'n1', target: 'n3', animated: true },
      { id: 'e3', source: 'n1', target: 'n4', animated: true },
    ],
  },

  // App 4 — CDN → Media Server → Storage
  'app-4': {
    nodes: [
      {
        id: 'n1',
        type: 'serviceNode',
        position: { x: 80, y: 150 },
        data: {
          label: 'CDN Edge',
          icon: '🌐',
          status: 'Healthy',
          tags: ['$0.04/HR', 'aws'],
          cpu: 25,
          description: 'Global content delivery network',
        },
      },
      {
        id: 'n2',
        type: 'serviceNode',
        position: { x: 380, y: 60 },
        data: {
          label: 'Media Server',
          icon: '🎬',
          status: 'Healthy',
          tags: ['$0.06/HR', 'aws'],
          cpu: 70,
          description: 'Processes and streams media files',
        },
      },
      {
        id: 'n3',
        type: 'serviceNode',
        position: { x: 380, y: 260 },
        data: {
          label: 'Image Resizer',
          icon: '🖼️',
          status: 'Healthy',
          tags: ['$0.03/HR', 'gcp'],
          cpu: 55,
          description: 'On-demand image transformation',
        },
      },
      {
        id: 'n4',
        type: 'serviceNode',
        position: { x: 480, y: 150 },
        data: {
          label: 'S3 Storage',
          icon: '🪣',
          status: 'Healthy',
          tags: ['$0.02/HR', 'aws'],
          cpu: 10,
          description: 'Object storage for all media',
        },
      },
    ],
    edges: [
      { id: 'e1', source: 'n1', target: 'n2', animated: true },
      { id: 'e2', source: 'n1', target: 'n3', animated: true },
      { id: 'e3', source: 'n2', target: 'n4', animated: true },
      { id: 'e4', source: 'n3', target: 'n4', animated: true },
    ],
  },
}




// API Functions ---------------------------------------->

{/* Fetch Apps function will resolve after 8s*/}
export const fetchApps = (): Promise<AppItem[]> =>
    new Promise<AppItem[]>((resolve) => {
        setTimeout(() => resolve(APPS), 800)
    })

{/* Fetch GraphData function will resolve after 9s */}
export const fetchGraphData = (appId: string): Promise<GraphData> =>
    new Promise<GraphData>((resolve, reject) => {
        setTimeout(() => {
            const graph = GRAPHS[appId]
            if (!graph) {
                reject(new Error(`Graph not found for ${appId}`))
            } else {
                resolve(graph)
            }
        }, 900)
    })

