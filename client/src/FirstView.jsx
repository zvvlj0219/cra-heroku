import { useEffect, useState } from 'react'
import logo from './logo.svg';
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
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
