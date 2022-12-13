import { useEffect, useState } from "react";

// Custom Hook
// Se realiza la consulta a la Api generada por mockapi, al momento de montar la pagina
export const useFetch = (url) => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] =useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [url]);
    return {data, error, loading};
}