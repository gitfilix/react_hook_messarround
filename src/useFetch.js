import {useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [state, setState] = useState({data:null, loading: true});


  useEffect( () => {
    fetch(url)
    // here instead of json just .text as the api delivers text
      .then(x => x.text())
      .then(y => {
        setState({data: y, loading: false})
      });
  }, [url])

  return state
}

export default useFetch
