import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from './AxiosPublic/useaxiosPublic'

const useManageBlog = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

    const {refetch, data: blogs = [] } = useQuery({
        queryKey: ['blogs', user?.email],
        queryFn: async () => {
            const response = await axiosPublic.get(`/blog?email=${user.email}`)
            return response.data

        }
    })
    return { blogs, refetch }
}

export default useManageBlog