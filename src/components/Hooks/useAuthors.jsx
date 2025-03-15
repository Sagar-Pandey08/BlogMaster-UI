import React from 'react'
import useAxiosPublic from './AxiosPublic/useaxiosPublic'
import { useQuery } from '@tanstack/react-query'

const useAuthors = () => {
    const axiosPublic = useAxiosPublic()

    const { refetch, data: authors = [] } = useQuery({
        queryKey: ["authors"],
        queryFn: async () => {
            const res = await axiosPublic.get("/authors")
            return res.data
        }
    })
    return { authors, refetch }
}

export default useAuthors