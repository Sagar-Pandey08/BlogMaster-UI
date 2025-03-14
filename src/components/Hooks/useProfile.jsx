import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure'

const useProfile = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const {refetch, data: userData = [] } = useQuery({
        queryKey: ['userData', user?.email],
        queryFn: async () => {
            const response = await axiosSecure.get(`/profile?email=${user?.email}`)
            return response.data
        }
    })
    return {refetch, userData }
}

export default useProfile