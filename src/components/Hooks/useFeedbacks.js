import { useQuery } from "@tanstack/react-query";

const useFeedbacks = () => {
    const { data: feedbacks } = useQuery({
        queryKey: ["feedbacks"],
        queryFn: async () => {
            const res = await fetch("http://localhost:3001/feedbacks")
            return res.json();
        }
    })
    return { feedbacks };
};

export default useFeedbacks;