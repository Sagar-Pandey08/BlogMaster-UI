import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import useAxiosPublic from './AxiosPublic/useaxiosPublic'
import { useQuery } from '@tanstack/react-query'

const useProfile = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

    const {refetch, data: userData = [] } = useQuery({
        queryKey: ['userData', user?.email],
        queryFn: async () => {
            const response = await axiosPublic.get(`/profile?email=${user?.email}`)
            return response.data
        }
    })
    return {refetch, userData }
}

export default useProfile