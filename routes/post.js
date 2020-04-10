

const express = require("express");
const {getPosts, createPost} = require("../controllers/post");
const validator = require("../validators/post");

const router = express.Router();

router.get("/", getPosts);
router.post("/post", validator.createPostValidator, createPost);

module.exports = router;

// mongodb+srv://stan:123greatman@cluster0-ehpux.mongodb.net/test?retryWrites=true&w=majority




