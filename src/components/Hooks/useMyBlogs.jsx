import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure'

const useMyBlogs = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const { data: myBlogs = [] } = useQuery({
        queryKey: ['myBlogs', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/blog?email=${user?.email}`)
            return res.data;
        }
    })
    return { myBlogs }
}

export default useMyBlogs