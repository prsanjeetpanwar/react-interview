import React from 'react'
import useApi from '../../hooks/useApi'

const DataFetch = () => {
    const {data,loading,error}=useApi(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
  return (
    <div>
       <div >
      <h2>API Data (Posts)</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <div >
        {data?.map((post) => (
          <div key={post.id} >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default DataFetch
