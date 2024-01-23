import React, { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [backendData, setBackendData] = useState({})
  useEffect(() => {
    fetch('https://nerm-portfolio-api.vercel.app/api')
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
