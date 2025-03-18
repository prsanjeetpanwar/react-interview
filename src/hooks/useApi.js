import { useEffect, useReducer,useState } from "react";

const useApi=(url)=>{

    const initialState={
          loading:false,
          data:null,
          error:null
    }


   const actions={
    FETCH_START:(state)=> ({...state, loading:true,error:null}),
    FETCH_SUCCESS:(state,action)=>({...state,loading:false, data:action.payload }),
    FETCH_ERROR:(state,action)=>({...state,loading:false, error:action.payload })
   }

   const reducer=(state, action)=>actions[action.type]?.(state,action) || state;


   const [state, dispatch]=useReducer(reducer,initialState);

   useEffect(()=>{
    const fetchData=async ()=>{
        dispatch({type:"FETCH_START"});

        try {
const response = await fetch(url);
   if(!response.ok) throw new Error('Network response was not ok')
    const json=await response.json();
dispatch({type:"FETCH_SUCCESS", payload:json})


        }
        catch(err){
            dispatch({type:"FETCH_ERROR",payload:err.message})

        }
    }
    fetchData()
   },[url])
   return state

}

export default useApi