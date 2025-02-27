import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from './AxiosPublic/useaxiosPublic'

const useAllBlogs = () => {
    const axiosPublic = useAxiosPublic()

    const { refetch, data: allBlogs = [] } = useQuery({
        queryKey: ['allBlogs'],
        queryFn: async () => {
            const response = await axiosPublic.get('/blogs')
            return response.data
        }
    })
    return { allBlogs, refetch }
}
;
export default useAllBlogs;