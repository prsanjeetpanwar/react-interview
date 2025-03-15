import React, { useState, useEffect, useRef } from "react";

export default function FontSizeChanger() {
  const [size, setSize] = useState(16);
  const textRef = useRef(null);
    const boxRef = useRef(null);
  const [textWidth, setTextWidth] = useState(0);
    const [boxWidth, setBoxWidth] = useState(0);

  // 🔹 Runs AFTER the screen updates (causes flicker)
  useEffect(() => {
    setTextWidth(textRef.current.offsetWidth);
  }, [size]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 ref={textRef} style={{ fontSize: `${size}px`, transition: "0.2s" }}>
        Dynamic Text (Width: {textWidth}px)
      </h2>
      <button onClick={() => setSize(size + 5)}>Increase Font Size</button>
      <button onClick={() => setSize(size - 5)} style={{ marginLeft: "10px" }}>
        Decrease Font Size
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