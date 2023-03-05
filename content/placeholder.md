---
title: "Placeholder Markdown File"
date: "2022-07-02"
img: "/assets/test.jpg"
---

The **useRef** Hook allows you to persist values between renders.
It can be used to store a mutable value that does not cause a re-render when updated.
It can be used to access a DOM element directly.

~~~js
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
~~~

**useRef()** only returns one item. It returns an Object called **current**.
When we initialize useRef we set the initial value: **useRef(0)**.

We can access the count by using `count.current`.