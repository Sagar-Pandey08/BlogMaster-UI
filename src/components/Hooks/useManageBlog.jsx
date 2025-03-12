import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure'

const useManageBlog = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const {refetch, data: blogs = [] } = useQuery({
        queryKey: ['blogs', user?.email],
        queryFn: async () => {
            const response = await axiosSecure.get(`/blog?email=${user.email}`)
            return response.data

        }
    })
    return { blogs, refetch }
}

export default useManageBlog