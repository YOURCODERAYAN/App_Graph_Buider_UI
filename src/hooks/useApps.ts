import {useQuery} from '@tanstack/react-query'
import {fetchApps} from '../lib/mockApi'


export const useApps = () => {


    return useQuery({
        queryKey:['apps'],
        queryFn:fetchApps,
    })
}




