import React, {useEffect} from 'react'

export const Hello =  () => {
  React.useEffect(()=> {
    console.log('rendered hello');

    return () => {
      console.log('umounted');
    }
  }, []);

  return (
    <div >Hi There, hello</div>
  )
}

export default Hello;
