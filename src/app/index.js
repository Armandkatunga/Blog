import express from 'express';

const app = express()
 
app.get('/', function (req, res) {
  res.send('armand World')
})
 


export default app;