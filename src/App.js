
import './App.css';
import {useEffect, useRef, useState} from  'react'
import FatchApi from './components/fetch-api';
import ResizableBox from './components/use-layout';
import FontSizeChanger from './components/with-useeffect';
// import UseRefExample from './components/use-ref';
import Interview1 from './components/interview-question';
import ConcertSeats from './components/seating';

function App() {

  
  const [count,setCount]=useState(0)
  const [multi,setMutli]=useState(2)
  const persistValue = useRef(10);
  useEffect(() => {
    setTimeout(()=>{
      setCount(count+1)
      persistValue.current++;
    },3000)
console.log('Render on ecery each redering')
  })
  return (
    <div>
    {/* <h1 onClick={()=>setCount(count+1)}> the count is {count}</h1>

    <h2 onClick={()=>setMutli(multi*4)}>Multi update{multi}</h2>
    <h3> persist value {persistValue.current}</h3> */}
{/* <FatchApi/> */}
<ResizableBox/>
<FontSizeChanger/>
{/* <UseRefExample/> */}
<Interview1/>
<ConcertSeats/>
    </div>
   
  );
}

export default App;
