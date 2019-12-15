import {useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [{}, setData] = useState({data:null, loading: false});


  useEffect( () => {
    fetch(url)
    // here instead of json just .text as the api delivers text
      .then(x => x.text())
      .then(y => {
        console.log(y);
      });
  }, [url])

}

export default useFetch
