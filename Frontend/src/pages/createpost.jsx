import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await axios.post(
        "http://localhost:3000/create",
        formData
      );

      console.log(response.data);

      alert("Post created successfully!");

      e.target.reset();

      navigate("/feed");
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post.");
    }
  };

  return (
    <section className="create-post-section">
  <div className="create-post-card">
    <h2>Create a New Post</h2>

    <form onSubmit={handleSubmit}>
      <input
        type="file"
        name="image"
        accept="image/*"
        required
      />

      <textarea
        name="caption"
        placeholder="Write a caption..."
        required
      />

      <button type="submit">
        Upload Post
      </button>
    </form>
  </div>
</section>
  );
};

export default CreatePost;