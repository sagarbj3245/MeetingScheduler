const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const schedulerRouter = require('./routes/scheduler'); 
const authRouter = require('./routes/auth'); 

const app = express();
app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/', authRouter);
app.use('/api', schedulerRouter);


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
