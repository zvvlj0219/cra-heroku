import { useEffect, useState } from 'react'
import './App.css';

const url = process.env.NODE_ENV === 'production'
  ? 'https://cra-heroku-app.herokuapp.com'
  : 'http://localhost:5000'

const FirstView = () => {
  const [text, setText] = useState('')

  const fetchUser = async () => {
    const res = await fetch(`${url}/app`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    setText(data.username)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {
            text ?
              `github username is ${text}` : 'fetch api failure'
          }
        </p>
      </header>
    </div>
  );
}

export default FirstView
