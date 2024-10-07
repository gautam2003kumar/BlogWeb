const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');


// Route to create a new blog
router.post('/create', async (req, res) => {
  try {
    const { title, content, images, headers } = req.body;
    const newBlog = new Blog({ title, content, images, headers });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    console.error('Error details:', err);  // Log detailed error
    res.status(500).json({ message: 'Error creating blog', error: err.message });
  }
});


// Route to get all blogs
router.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching blogs' });
  }
});

module.exports = router;
