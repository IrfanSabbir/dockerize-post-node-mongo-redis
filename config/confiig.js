module.exports ={
    MONGO_PROD_IP:process.env.MONGO_PROD_IP,
    MONGO_PROD_USER: process.env.MONGO_PROD_USER,
    MONGO_PROD_PASS: process.env.MONGO_PROD_PASS,
    REDIS_URL: process.env.REDIS_URL || "redis",
    REDIS_PORT: process.env.REDIS_PORT || 6379,
    REDIS_SECRET: process.env.REDIS_SECRET,
};