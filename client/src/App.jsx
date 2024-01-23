import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  // console.log(import.meta.env.VITE_API_SERVER_URL);
  const [backendData, setBackendData] = useState({})
  useEffect(() => {
    fetch(import.meta.env.VITE_API_SERVER_URL)
      .then(res => res.json())
      .then(
        data => {
          setBackendData(data)
        })
  }, [])
  return (
    <>
      <div style={{ textAlign: 'center', width:'100%' }}>
        {(typeof backendData.message === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          <p>{backendData.message}</p>
        )}
      </div>
    </>
  )
}

export default App
