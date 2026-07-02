import React, { useState, useEffect } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all posts
  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/posts");

      console.log(response.data.posts);

      setPosts(response.data.posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete post
  const deletePost = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);

      // Remove deleted post from UI
      setPosts((prevPosts) =>
        prevPosts.filter((post) => post._id !== id)
      );

      alert("Post deleted successfully!");
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete post.");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="feed-section">
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <section className="feed-section">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div className="post-card" key={post._id}>
            <img src={post.image} alt={post.caption} />

            <div className="post-content">
  <p>{post.caption}</p>

  <div className="post-actions">
   <button
  style={{
    background: "red",
    color: "white",
    padding: "10px",
    width: "100%",
    fontSize: "20px"
  }}
  onClick={() => deletePost(post._id)}
>
  DELETE
</button>
  </div>

          </div>

        </div>
        ))
      ) : (
        <h2>No Posts Available</h2>
      )}
    </section>
  );
};

export default Feed;