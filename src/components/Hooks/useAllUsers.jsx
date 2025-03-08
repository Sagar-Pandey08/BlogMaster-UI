import React from 'react'
import useAxiosPublic from './AxiosPublic/useaxiosPublic'
import { useQuery } from '@tanstack/react-query'

const useAllUsers = () => {
    const axiosPublic = useAxiosPublic()

    const {refetch, data: users = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosPublic.get('/users')
            return res.data
        }
    })
    return { users , refetch}
}

export default useAllUsers