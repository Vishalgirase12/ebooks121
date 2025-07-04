import { useEffect, useState } from "react";

export const useApi = (url) => {
    const [product, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(d => d.json())
            .then(res => setProducts(res))
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    return { product, loading };
};