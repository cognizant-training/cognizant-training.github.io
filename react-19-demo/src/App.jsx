import React, { useState, useEffect } from 'react'
import './App.css'

function PostViewer() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
   .then((res) => res.json())
   .then((data) => {
      setPost(data);
      setLoading(false);
   })
   .catch(()=> setLoading(false));
  }, []);

if(loading) return <p>Loading...</p>
if(!post) return <p>No Post Found...</p>

  return (
    <div style={{ border:'1px solid gray', padding:'1rem', marginTop:'1rem'}}>
      <h2> {post.title} </h2>
      <p> {post.body} </p>
    </div>
  )
}


function App() {
  const [show, setShow] = useState(false)

  return (
    <div style={{ padding: '2rem'}}>
      <h1>React 19 Hooks Demo</h1>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show' } Post
      </button>

      {show && <PostViewer />}
    </div>
  )
}

export default App
