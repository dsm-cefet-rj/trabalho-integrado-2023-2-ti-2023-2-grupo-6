const {Router} = require('express');
const router = Router();
const PostController = require("../controllers/PostController");
const auth = require("../middlewares/auth")

router
.get("/posts", PostController.getPosts)
.get("/posts/:postId", PostController.getPost)
.post("/posts", auth, PostController.createPost)
.delete("/posts/:postId", auth, PostController.deletePost)
.put("/posts/:postId", auth, PostController.updatePost)


module.exports = router;