const User = require('../model/user')


exports.signUp = async (req, res, next)=>{
    try {
        const {name, password} = req.body
        const userExist = await User.findOne({name:name})
        if(userExist){
            throw new Error("Email already in use")
        }
        const user = new User({
            name:req.body.name,
            password:password,
        })
        req.session.user = user
        await user.save()
 
        res.status(200).json({
            message:"SignUp successful",
            user,
            error:false
        })
    } catch (error) {
        res.status(400).json({
            status:"unsuccessful SignUp, try again please.",
            message:error.message,
            error:true
        })
    }
}


exports.logIn = async (req, res, next)=>{
    try {
        const {name, password} = req.body
        const user = await User.findOne({name:name})
         if(!user){
             throw new Error("Invalid name, try again!")
         }

         
         if(password !== user.password){
            throw new Error("Invalid password, try again!")
         }
console.log(req.session)

         req.session.user = user
         res.status(200).json({
             message:"Successful Login",
             user,
             error:false
         })
    } catch (error) {
        res.status(400).json({
            status:"Unsuccessful Login",
            message:error.message,
            error:true
        })
    }
}
