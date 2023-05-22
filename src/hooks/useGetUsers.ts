import {
  useQuery
} from '@tanstack/react-query'
import axios from 'axios'
import { User } from '../interfaces/User'

const url = import.meta.env.VITE_REACT_APP_BACKEND_URL

export const useGetUsers = (query?: string) => {
    // console.log(query);
    return useQuery(['getUser'],{
        queryFn : async () => {
            const { data } = await axios.get(
                `https://mock-backend-data-json-server.onrender.com/users?${query}`
            )
            return data as User[];
        }
    })
}