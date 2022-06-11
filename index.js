require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose');
const redis = require('redis');
const session = require("express-session")
const cors = require('cors');
let RedisStore = require("connect-redis")(session)

const { MONGO_PROD_IP, MONGO_PROD_USER, MONGO_PROD_PASS, REDIS_URL, REDIS_PORT,
    REDIS_SECRET} = require('./config/confiig');

let redisClient = redis.createClient({
    host: REDIS_URL,
    port: REDIS_PORT
})

const app = express()
app.use(express.json())

app.use(cors());
app.enable('trust proxy');

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

// app.use(
//   session({
//     store: new RedisStore({ client: redisClient }),
//     saveUninitialized: false,
//     secret: REDIS_SECRET,
//     resave: false,
//   })
// )

// Redis has problem with Windows
// app.use(
//   session({
//     store: new RedisStore({ client: redisClient }),
//     secret: REDIS_SECRET,
//     cookie:{
//       resave: false,
//       saveUninitialized: false,
//       secure: false,
//       httpOnly: true, 
//       maxAge: 3000000
//     }
//   })

// );

const postRouter = require('./router/post');
const userRouter = require('./router/user');

app.use("/api/v1/post",postRouter);
app.use("/api/v1/auth",userRouter);

app.use('/api/v1', async (req, res, next)=>{
    res.send("Hi and hello")
    console.log("Hi and hello")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`running on ${PORT}`)
})
