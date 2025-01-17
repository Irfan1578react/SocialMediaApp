import React from 'react'
import axios from "axios"

const useAxiosFetch = (dataUrl) => {
    const [data,setData]=useState([]);
    const [fetchError,SetFetchError]=useState(null);
    const [isLoading,setisLoading]=useState(false);

    useEffect(() => {
        let isMounted=true;
        const source=axios.CancelToken.source();
        const fetchData= async(url) =>{
            setisLoading(true)
            try{
                const response =await axios.get(url,{
                    cancelToken:source.token
                });
                if(isMounted){
                    setData(response.data);
                    SetFetchError(null);
                }
            }
            catch(err){
                if(isMounted){
                    SetFetchError(err.message);
                    setData([]);
                }
            }
            finally{
                isMounted && setisLoading(false);
            }

        }
        fetchData(dataUrl)
        const cleanUp=() => {
            isMounted=false;
            source.cancel();

        }
        return cleanUp()
    },[dataUrl])


  return 
    {data,fetchError,isLoading}
  
}

export default useAxiosFetch
