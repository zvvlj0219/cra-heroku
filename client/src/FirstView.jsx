import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';

const url = process.env.NODE_ENV === 'production'
  ? 'https://cra-heroku-app.herokuapp.com'
  : 'http://localhost:5000'

const config = {
  headers:{  
    "Content-Type": "application/json",
    'Accept': 'application/json',
  }
}

const FirstView = () => {
  const [text, setText] = useState('')

  const fetchUser = async () => {
    try {
      const res = await axios.get(`${url}/app`, config)
      const { data } = res
      setText(data.username)
    } catch (error) {
      setText('fetch api failure')
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>{ text }</p>
      </header>
    </div>
  );
}

export default FirstView
