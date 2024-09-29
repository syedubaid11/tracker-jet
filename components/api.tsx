import { useEffect,useState } from "react"
import axios from 'axios'

export const Api=()=>{
    const[interest,setInterest]=useState([ ])
    const[trending,setTrending]=useState([ ])
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get("http://127.0.0.1:5000/api/trend",{headers:{'Region':'india','Keywords':'mario'}})
                setInterest(response.data.interest_over_time);
                setTrending(response.data.trending_searches)
                console.log(interest);

            }
            catch(e){
                console.log("Error",e)
            }
            
        };

        fetchData();
    }, [])
    return (
        <>
        <div>{interest}</div>
        <div>{trending}</div>
        </>
    )

}