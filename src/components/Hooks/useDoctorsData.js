import { useQuery } from "@tanstack/react-query";

const useDoctorsData = () => {

    const { data: doctors = [], isLoading: loading, refetch } = useQuery({
        queryKey: ["doctors"],
        queryFn: async () => {
            const res = await fetch("http://localhost:3001/doctors")
            return res.json();
        }
    })
    return { doctors, loading, refetch };
};

export default useDoctorsData;