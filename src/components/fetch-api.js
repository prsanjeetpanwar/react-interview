import React, { useEffect, useState } from 'react'
import {Loader, Loader2} from 'lucide-react'

const FatchApi = () => {
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(true)
    useEffect(()=>{

    async function fetchData(){
        const controller = new AbortController();
        // const response =await fetch('https://jsonplaceholder.typicode.com/todos')
        // // const res=await response.json()
        // // setData(res)
        try {

            const response =await fetch('https://jsonplaceholder.typicode.com/todos')
            const res=await response.json()
            setData(res.slice(0,4))
        }
        catch(err){
            console.log(`geting error on the featching the data  so the error is ${err} please follow for this`)

        }
        finally{
            setLoading(false)
        }

        return () => controller.abort();

    }
  

    fetchData()
    
    

},[])
  return (
    <div>
{loading ? ( 
    <div><Loader2/> Loading... </div>
): (
    data?.map((item)=>(
        <div
        style={{
            display:"flex",
            flexDirection: "column",  // Stack items vertically
            justifyContent: "center",
          
        }}
        >
            <h1>{item.title}</h1>
            <p>{item.id}</p>
        </div>
    ))
)
}

    </div>
  )
}

export default FatchApi
