const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const studentController = require( './controller/studentController')

const app = express();
require('dotenv').config();
app.use(express.json());
app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
},err =>{
    if(!err)
        console.log('mongodb succesfully connected')
    else    
        console.log('failed to connect mongodb')
})

const port = process.env.PORT || 5000;

app.use('/student', studentController)

app.listen(port, () =>{
    console.log('server is running on port : ' + port)
})