import { useQuery } from "@tanstack/react-query";


const useTotalDoctors = () => {
    const { data: totalDoctors, isLoading: loading, refetch } = useQuery({
        queryKey: ["totalDoctors"],
        queryFn: async () => {
            const res = await fetch("http://localhost:3001/total-Doctors")
            return res.json();
        }

    })
    return { totalDoctors, loading, refetch };
};

export default useTotalDoctors;