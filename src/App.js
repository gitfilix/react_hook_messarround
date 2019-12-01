import React,{ useState, useEffect } from 'react';

const App = ({initialCount}) => {

  let [count, setCount] = useState(initialCount);

  const addOne = () => {
    setCount( prevCount => {
      return prevCount +1
    })
  }
  const reduceOne = () => {
    setCount( prevCount => {
      return prevCount -1
    })
  }



  return (
    <>
      <h1>Fancy Counter hook</h1>
      <h3>Count: {count}</h3>
      <button onClick={addOne}>Add 1 +</button>
      <button onClick={reduceOne}>reduce 1 -</button>
    </>
  )
}


export default App;
