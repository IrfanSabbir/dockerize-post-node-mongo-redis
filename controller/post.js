const Post = require('../model/post')

exports.createPost = async(req, res)=>{
    try {
        const post = new Post({
            name:req.body.name
        }) 
        await post.save()
        res.status(200).json({
            message:"post Created.",
            body:post,
            error:false
        }) 
    } catch (error) {
        res.status(400).json({
            status:"try again please.",
            message:error.message,
            error:true
        })
    }
}


exports.getPosts = async(req, res)=>{
    try {
        const posts = await Post.find()
        res.status(200).json({
            message:"showing posts",
            body:posts,
            error:false
        }) 
    } catch (error) {
        res.status(400).json({
            status:"try again please.",
            message:error.message,
            error:true
        })
    }
}


exports.updatePost = async(req, res)=>{
    try {
        const post_id = req.params.post_id
        const post = await Post.findOne({_id:post_id})
        post.name = req.body.name || post.name
        await post.save()

        res.status(200).json({
            message:"post updated.",
            body:post,
            error:false
        }) 
    } catch (error) {
        res.status(400).json({
            status:"try again please.",
            message:error.message,
            error:true
        })
    }
}


exports.deletePost = async(req, res)=>{
    try {
        const post_id = req.params.post_id
        const post = await Post.deleteOne({_id:post_id})

        res.status(200).json({
            message:"post deleted.",
            body:post,
            error:false
        }) 
    } catch (error) {
        res.status(400).json({
            status:"try again please.",
            message:error.message,
            error:true
        })
    }
}


