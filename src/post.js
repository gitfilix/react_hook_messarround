import React,{ useEffect } from 'react';

const Post = ({item, i}) => {

  useEffect(()=> {
    console.log('post mounted/created');

    //clear effect
    return () => {
      console.log('component exit');
    }
  }, [])

  return(
      <div key={i}>
        <div>Name: {item.name}</div>
        <div>Body: {item.body}</div>
        <br />
      </div>
  )
}

export default Post;
