import {
  useMutation
} from '@tanstack/react-query'
import axios from 'axios'

const url = import.meta.env.VITE_REACT_APP_BACKEND_URL

export const useDeleteUser = (postId?: number) => {
    return useMutation({
        mutationFn : async () => {
            await axios.delete(
                `${url}/${postId}`
            )
        }
    })
}