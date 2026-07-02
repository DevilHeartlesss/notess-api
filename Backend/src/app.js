const express = require("express");
const multer = require("multer");
const Note = require("./models/note.model");
const uploadfile = require("./services/storage.service");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({
    storage: multer.memoryStorage(),
});

// Create Post
app.post("/create", upload.single("image"), async (req, res) => {
    try {
        // Check if file exists
        if (!req.file) {
            return res.status(400).json({
                message: "Please upload an image.",
            });
        }

        // Upload image to ImageKit
        const result = await uploadfile.uploadFile(
            req.file.buffer,
            req.file.originalname
        );

        // Save post in MongoDB
        const post = await Note.create({
            image: result.url,
            caption: req.body.caption,
        });

        return res.status(201).json({
            message: "Post created successfully",
            post,
        });

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            message: err.message,
        });
    }
});

// Get All Posts
app.get("/posts", async (req, res) => {
    try {
        const posts = await Note.find();

        return res.status(200).json({
            message: "Posts fetched successfully",
            posts,
        });

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            message: err.message,
        });
    }
});

// Delete Post
app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Note.findByIdAndDelete(id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    res.status(200).json({
      message: "Post deleted successfully",
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = app;