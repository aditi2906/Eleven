import React, { useState } from 'react'

export default function Form(){
  const [phone, setphone] = useState(0)
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    // Send a POST request to your Node.js backend with the form data
    fetch('/submit-form', {
      method: 'POST',
      body: JSON.stringify({ phone, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  return (
    
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="number" value={phone} onChange={e => setphone(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form> 
  )
}


