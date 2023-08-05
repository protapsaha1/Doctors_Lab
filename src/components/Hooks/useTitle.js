import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} | Hero Doctors`;
    }, [title])
};

export default useTitle;