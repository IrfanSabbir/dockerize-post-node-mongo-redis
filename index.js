require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose');

const { MONGO_PROD_IP, MONGO_PROD_USER, MONGO_PROD_PASS } = require('./config/confiig');

const app = express()
app.use(express.json())

const environment = process.env.NODE_ENV;
const MONG_URL = environment === "development" 
    ? `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_IP}:${process.env.MONGO_PORT}/mydbs?authSource=admin`
    : `mongodb+srv://${MONGO_PROD_USER}:${MONGO_PROD_PASS}@${MONGO_PROD_IP}/mydbs?retryWrites=true&w=majority`

const mongooseConnectionAndRetry = () => {
    mongoose
        .connect(MONG_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log("mongoose connected"))
        .catch(() => {
            console.log("Failed to connect mongoose")
            setTimeout(mongooseConnectionAndRetry , 50000)
        });
}
mongooseConnectionAndRetry();

const postRouter = require('./router/post');
const userRouter = require('./router/user');

app.use("/api/post",postRouter);
app.use("/api/auth",userRouter);

app.use('/', async (req, res, next)=>{
    res.send("Hi and hello")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`running on ${PORT}`)
})
