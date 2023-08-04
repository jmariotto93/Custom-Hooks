import React, { useState } from 'react'

const useFetch = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)


 async function request(url, options) {
  const response = await fetch(url, options);
  const json = await response.json();
  setData(json);
  }

  return {data, error, loading, request}
}

export default useFetch