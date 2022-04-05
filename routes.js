const express = require("express");
const Post = require("./models/Post");
const router = express.Router();

// get all posts
router.get("/posts", async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

// create a new post (by passing a post object in req body)
router.post("/posts", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  await post.save();
  res.send(post);
});

// get a specific post by its object id
router.get("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    res.send(post);
  } catch {
    res.status(404);
    res.send({ error: "That post doesn't exist!" });
  }
});

// update a specif post (according to the passed object id)
router.patch("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });

    if (req.body.title) {
      post.title = req.body.title;
    }

    if (req.body.content) {
      post.content = req.body.content;
    }

    await post.save();
    res.send(post);
  } catch {
    res.status(404);
    res.send({ error: "That post doesn't exist!" });
  }
});

// delete a specific post (the one with the passed object id)
router.delete("/posts/:id", async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "That post doesn't exist!" });
  }
});

module.exports = router;