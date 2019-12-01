import React,{ useState, useEffect } from 'react';

const App = () => {

  let [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count +1)
  }

  return (
    <>
      <h1>Fancy Counter hook</h1>
      <h3>Count: {count}</h3>
      <button onClick={addOne}>Add 1 +</button>
    </>
  )
}


export default App;
