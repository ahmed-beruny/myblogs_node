const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const mongoose = require('mongoose');
const myblogs = require('./routes/myblogsRoutes');
const env = require('dotenv');

env.config();

app.use(BodyParser.json());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api', myblogs);


app.listen(8000, () => console.log('Server started at port : 8000'));

