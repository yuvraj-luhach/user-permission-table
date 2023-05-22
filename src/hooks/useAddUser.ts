import {
  useMutation
} from '@tanstack/react-query'
import axios from 'axios'
import { User } from '../interfaces/User';

const url = import.meta.env.VITE_REACT_APP_BACKEND_URL

export const useAddUser = (user?: User) => {
    return useMutation({
        mutationFn : async (newUser: User) => {
            await axios.post(
                `https://mock-backend-data-json-server.onrender.com/users`,
                newUser
            )
        }
    })
}