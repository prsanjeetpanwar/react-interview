import React,{useState,useEffect} from 'react'


const Interview1 = () => {
const [count,setCount]=useState(0)
const onClick=()=>{
    setCount(count+1)
    setCount(count+1)
}

useEffect(()=>{
console.log("Hello this will print")
})
  return (
    <div>
      <button onClick={onClick} >Click here</button>
      <p>Count: {count}</p>
    </div>
  )
}

export default Interview1
