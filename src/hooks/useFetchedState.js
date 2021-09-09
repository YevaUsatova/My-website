import { useState, useEffect } from 'react'

function useFetchedState(initialState, url) {
  const [state, setState] = useState(initialState)
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setState(data))
  }, [])

  return [state, setState]
}

export default useFetchedState