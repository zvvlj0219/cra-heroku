const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()
require('dotenv').config()

app.use(cors())
app.use(express.json())

app.get('/app', async (req, res) => {
  // const { data } = await axios.get('https://api.github.com/users/zvvlj0219')
  // const { login } = data
  // if (!login) return res.status(400).send()
  // return res.status(200).send({ username: login})
  return res.status(200).send({ username: 'zvvlj0219'})
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(process.env.NODE_ENV)
  console.log(`Example app listening at http://localhost:${port}`)
})