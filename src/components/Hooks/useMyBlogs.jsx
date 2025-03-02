import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import useAxiosPublic from './AxiosPublic/useaxiosPublic'
import { useQuery } from '@tanstack/react-query'

const useMyBlogs = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

    const { data: myBlogs = [] } = useQuery({
        queryKey: ['myBlogs', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/blog?email=${user?.email}`)
            return res.data;
        }
    })
    return { myBlogs }
}

export default useMyBlogs