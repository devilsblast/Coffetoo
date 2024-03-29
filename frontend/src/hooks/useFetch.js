import { useEffect,useState } from "react";

const useFetch = (url) => {
const [dataser,setDataser] = useState(null);
const [error,setError] = useState(null);
const [loading,setLoading] = useState(true);

useEffect(() => {
    const fetchData = async () =>{
        setLoading(true);

        try{
            const res = await fetch(url);
            
            const json = await res.json();
            
            setDataser(json);
            setLoading(false);
        }catch(error){
            setError(error);
            setLoading(false);
        }
    }
    fetchData();
},[url])

return {loading, error, dataser};
}

export default useFetch;