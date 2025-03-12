import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

const useAdmin = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const { data: isAdmin } = useQuery({
        queryKey: ["isAdmin", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/checkAdmin/${user?.email}`)
            return res.data.isAdmin
        }
    })
    return [isAdmin]
}

export default useAdmin