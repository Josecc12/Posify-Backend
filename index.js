require('dotenv').config();
const express = require('express');
const  { mongodb } = require('./db/config')
const app = express();
const port = process.env.PORT ; 
const cors = require('cors')
  
mongodb();
//CORS
app.use(cors());
app.use(express.json())


//app.use('/api/auth', require('./routes/auth'));

app.use('/api/employee', require('./routes/employee'));

app.use('/api/role', require('./routes/role'));

app.use('/api/category', require('./routes/category'));

app.use('/api/products', require('./routes/product'));

app.use('/api/auth', require('./routes/auth'));


app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});
