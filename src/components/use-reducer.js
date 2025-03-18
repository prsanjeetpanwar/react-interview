import { useReducer } from "react"


const reducer =(state,action)=>{
    switch(action.type){
        case "INCREMENT":
        return  {count:state.count+1};
        case "DECREMENT":
            return {count:state.count-1}
         case "RESET":
            return {count:0};
            default :
            return state
    }

}


const Counter=()=>{

    const [state,dispatch]=useReducer(reducer,{count:0})
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center", 
            height: "100vh", 
        }}>
            <div style={{
                display:"flex",
                justifyContent:"center",
                flexDirection:"column",
                gap:"20px"
            }}>
                
            <h1>count is : {state.count}</h1>

            <button onClick={()=>dispatch({type:"INCREMENT"})}> +</button>
            <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
            </div>
        </div>
    )

}

export default Counter


// useReducer Hook in React
// The useReducer hook is an alternative to useState for managing complex state logic in React.

// ✅ When to Use useReducer?
// When state logic is complex (multiple conditions).
// When the next state depends on the previous state.
// When managing state updates in a predictable way (like Redux).