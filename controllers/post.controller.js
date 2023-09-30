const postModel = require("../model/post.model.js");
const mongoose = require("mongoose");


module.exports.allPosts = async (req, res) => {
  try {
    const posts = await postModel.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ error: "Error getting data", details: err });
  }
};


module.exports.onePost = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid ID", id: req.params.id });
    }
  
    try {
      const post = await postModel.findById(req.params.id);
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      res.status(200).json(post);
    } catch (err) {
      res.status(400).json({ error: "Error getting data", details: err });
    }
  };

// Rechercher des articles par titre
module.exports.searchPost = async (req, res) => {
  try {
    const query = req.params.query;
    const posts = await postModel.find({
      title: { $regex: query, $options: "i" },
    });
    res.status(200).json(posts);
  } catch (err) {
    res.status(404).json({ error: "No posts found", details: err });
  }
};

// Ajouter un nouvel article
module.exports.addPosts = async (req, res) => {
  const { title, author, category, content } = req.body;
  const newPost = new postModel({
    title,
    author,
    category,
    content,
  });

  try {
    const post = await newPost.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: "Error creating post", details: err });
  }
};