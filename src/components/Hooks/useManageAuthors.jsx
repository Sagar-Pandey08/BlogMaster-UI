import React from 'react'
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

const useManageAuthors = () => {
    const axiosSecure = useAxiosSecure()

    const { data: authors = [], refetch } = useQuery({
        queryKey: ['authors'],
        queryFn: async () => {
            const rest = await axiosSecure.get("/author")
            return rest.data
        }
    })
    return { authors, refetch }
}

export default useManageAuthors