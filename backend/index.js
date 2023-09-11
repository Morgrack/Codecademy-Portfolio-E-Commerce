const express = require('express');
const app = express();
const queries = require('./queries')
const port = 3001;

//app.get
app.get('/', queries.getProductsAndPrices)

//app.post
app.post('/', (req, res, next) => {
  console.log('Post request received!');
  res.send('Post request received!');
});

//app.put
app.put('/', (req, res, next) => {
  console.log('Put request received!');
  res.send('Put request received!');
});

//app.delete
app.delete('/', (req, res, next) => {
  console.log('Delete request received!');
  res.send('Delete request received!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})