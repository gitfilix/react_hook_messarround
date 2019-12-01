import React,{ useState, useEffect } from 'react';
import Post from './post';
const App = ({initialCount}) => {

  // get inital value from props (index.js)
  let [count, setCount] = useState(initialCount);

  let [posts, setPosts] = useState([
    {
      name: 'hanky hooks',
      body: 'some people find hook fancy - I am not hooket by now'
    },
    {
      name: 'barbyr baynes',
      body: 'some people say we shall use it... so letz try out that shit...'
    }
  ])


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

  const addOnePost = () => {
    let anotherPost = {
      name: 'holly hicks',
      body: 'holy shit, we have another Post trolling here...'
    }
    setPosts([
      ...posts,
      anotherPost
    ])
  }



  const removePost = ()=> {
    setPosts([])
  }

  return (
    <>
      <h1>Fancy Counter hook</h1>
      <h3>Count: {count}</h3>
      <button onClick={addOne}>Add 1 +</button>
      <button onClick={reduceOne}>reduce 1 -</button>
      <button onClick={()=> setCount(initialCount)}>Reset</button>
      <hr />
      <h3>Posts</h3>
      { posts.map((item, i) => (
        <Post item={item} key={i}/>
      ))}
      <button onClick={addOnePost}>Add posts</button>
      <button onClick={removePost}>Remove posts</button>

    </>
  )
}


export default App;
