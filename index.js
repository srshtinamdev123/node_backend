const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
// console.log({env:process.env});
const {PORT,DB_URL} = process.env;



app.post('/all',async (req,res)=>{
    try{
        const API_URL = `https://finnhub.io/api/v1/stock/symbol?exchange=US&token=cvvoqnpr01qi0bq6nq0gcvvoqnpr01qi0bq6nq10`;
        const response = await axios.get(API_URL);
        res.status(200).json({
            status:"success",
            message:"successfull",
            data:response.data
        });
    }catch(error){
        res.status(500).json({
            status:"failure",
            message:error.message
        });
    }
});




app.listen(PORT,()=>{
    console.log("Application has started to run!"+PORT);
});