const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const mongoose = require('mongoose');
const myblogs = require('./routes/myblogsRoutes');
const mymessages = require('./routes/messagesRoutes');
const env = require('dotenv');
const cors = require('cors');

app.use(cors());

env.config();


//avoid payload too large error
app.use(BodyParser.json({limit: "50mb"}));
app.use(BodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));


mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api', myblogs);
app.use('/api', mymessages);


app.listen(8000, () => console.log('Server started at port : 8000'));

