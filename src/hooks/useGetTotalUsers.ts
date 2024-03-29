import {
  useQuery
} from '@tanstack/react-query'
import axios from 'axios'
import { User } from '../interfaces/User'

const url = import.meta.env.VITE_REACT_APP_BACKEND_URL

export const useGetTotalUser = () => {
    // console.log(url);
    return useQuery(['getTotalUsers'],{
        queryFn : async () => {
            const { data } = await axios.get(
                `https://mock-backend-data-json-server.onrender.com/users`
            )
            return data as User[];
        }
    })
}