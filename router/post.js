const express = require("express");
const router = express.Router();

const postController = require('../controller/post');
const protect = require('../middleware/auth');

router.get("/", protect, postController.getPosts);
router.post("/", protect, postController.createPost);
router.put("/:post_id", protect, postController.updatePost);
router.delete("/:post_id", protect, postController.deletePost);

module.exports = router;