import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./AxiosPublic/useaxiosPublic"


const useLatestBlogs = () => {
    const axiosPublic = useAxiosPublic()

    const {data: latestBlogs = []} = useQuery({
        queryKey: ["latestBlogs"],
        queryFn: async () => {
            try {
                const response = await axiosPublic.get("/latest-blogs")
                return response.data
            } catch (error) {
                console.error("Error fetching latest blogs:", error)
                throw error
            }
        }
    })

    
    return { latestBlogs }
}

export default useLatestBlogs