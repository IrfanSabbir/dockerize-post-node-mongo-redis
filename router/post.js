const express = require("express");
const router = express.Router();

const postController = require('../controller/post');

router.get("/", postController.getPosts);
router.post("/", postController.createPost);
router.put("/:post_id" , postController.updatePost);
router.delete("/:post_id", postController.deletePost);


module.exports = router;