import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from './useAxiosSecure'

const useReview = () => {
    const axiosSecure = useAxiosSecure()
    const { refetch, data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const response = await axiosSecure.get('/review')
            return response.data;
        }
    })
    return { reviews, refetch }
}

export default useReview