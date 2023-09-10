const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const mongoose = require('mongoose');
const myblogs = require('./routes/myblogsRoutes');

app.use(BodyParser.json());

mongoose.connect('mongodb+srv://ahmedberuny:325698bB@beruny-cluster.gxwev3w.mongodb.net/MyBlogs', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api', myblogs);


app.listen(8000, () => console.log('Server started at port : 8000'));

