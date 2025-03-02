import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosPublic from './AxiosPublic/useaxiosPublic'

const useReview = () => {
    const axiosPublic = useAxiosPublic()
    const { refetch, data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const response = await axiosPublic.get('/review')
            return response.data;
        }
    })
    return { reviews, refetch }
}

export default useReview