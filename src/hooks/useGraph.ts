import {useQuery} from '@tanstack/react-query'
import {fetchGraphData} from '../lib/mockApi'



export const useGraph = (appId:string) => {


        return useQuery({
                queryKey:['graph' , appId],
                queryFn :()=> fetchGraphData(appId),
                enabled : !!appId,
        
        
        })
}





