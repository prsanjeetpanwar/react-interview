// import React, { useEffect, useRef, useState } from "react";

// const UseRefExample = () => {
    
//   const inputRef = useRef<HTMLInputElement | null>(null); // ✅ Wrap type in parentheses
//   const renderCount = useRef<number>(0); // ✅ Properly typed number ref
//   const [text, setText] = useState("");

//   useEffect(() => {
//     renderCount.current += 1; // ✅ Updates without triggering re-renders
//   });

//   useEffect(() => {
//     if (inputRef.current) {
//       inputRef.current.focus(); // ✅ Auto-focus input on mount
//     }
//   }, []);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Render Count: {renderCount.current}</h2>
//       <input
//         ref={inputRef} // ✅ Attach ref to input field
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Type something..."
//       />
//     </div>
//   );
// };

// export default UseRefExample;