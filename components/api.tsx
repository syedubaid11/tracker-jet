import { useEffect,useState } from "react"
import axios from 'axios'

export const Api=()=>{
    const[data,setData]=useState("")
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get("http://127.0.0.1:5000/api/trend",{headers:{'Region':'india'}})
                setData(response.data);
                console.log(data);

            }
            catch(e){
                console.log(e)
            }
            
        };

        fetchData();
    }, [])
    return null

}