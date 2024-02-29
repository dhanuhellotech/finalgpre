const Blog = require('../Models/blogModel');

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new blog
exports.createBlog = async (req, res) => {
  try {
    const { title,date, category, author, comments, content, link } = req.body;

    const newBlog = new Blog({
      title,
      category,
      author,
      comments,
      content,
      link,
      date,
      imageUrl: req.file.filename,
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.updateBlog = async (req, res) => {
  try {
    const blogId = req.params.id;

    // Check if required fields are provided
    const { title,  date, category, author, comments, content, link } = req.body;
    if (!title || !category|| !date  || !author || !comments || !content || !link) {
      return res.status(400).json({ message: 'All fields are required for updating a blog' });
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      {
        title,
        category,
        author,
        date,
        comments,
        content,
        link,
        imageUrl: req.file ? req.file.filename : undefined,
      },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json(updatedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.deleteBlog = async (req, res) => {
    try {
      const blogId = req.params.id;
      const deletedBlog = await Blog.findByIdAndDelete(blogId);
  
      if (!deletedBlog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
  
      res.json({ message: 'Blog deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
// ... (Other functions)

// Update a blog by ID

// ... (Other functions)
