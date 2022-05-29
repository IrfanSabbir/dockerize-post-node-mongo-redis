const Protect = (req, res, next)=>{
   const {user} = req.session
   console.log(user)
   if(!user){
    res.status(400).json({
        status:"unsuccessful, you must login.",
        error:true
    })
   }
   next();
};

module.exports = Protect;