import React, { useContext } from 'react'
import useAxiosPublic from './AxiosPublic/useaxiosPublic'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { useQuery } from '@tanstack/react-query'

const useSaveBlogs = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useContext(AuthContext)

    const { data: savedBlogs = [] } = useQuery({
        queryKey: ['savedBlogs', user?.email],
        queryFn: async () => {
            const response = await axiosPublic.get(`/saved-blogs?email=${user?.email}`)
            return response.data
        }
    })
    return { savedBlogs }
}

export default useSaveBlogs