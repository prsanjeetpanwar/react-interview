import React, { useState, useLayoutEffect, useRef } from "react";

export default function ResizableBox() {
  const [size, setSize] = useState(100);
  const boxRef = useRef(null);
  const [boxWidth, setBoxWidth] = useState(0);

  // Measure width before painting
  useLayoutEffect(() => {
    setBoxWidth(boxRef.current.offsetWidth);
  }, [size]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Resizable Box</h2>
      <button onClick={() => setSize(size + 20)}>Increase Size</button>
      <button onClick={() => setSize(size - 20)} style={{ marginLeft: "10px" }}>
        Decrease Size
      </button>
      <div
        ref={boxRef}
        style={{
          width: `${size}px`,
          height: "100px",
          background: "lightblue",
          margin: "20px auto",
          transition: "width 0.3s ease-in-out",
        }}
      >
        Width: {boxWidth}px
      </div>
    </div>
  );
}
