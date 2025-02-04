import React, { useState } from "react";

const BlogForm = ({ onBlogSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content || !image) {
      alert("All fields are required!");
      return;
    }

    const newBlog = { title, content, image };
    const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    localStorage.setItem("blogs", JSON.stringify([...existingBlogs, newBlog]));

    onBlogSubmit(); // Notify parent to update UI
    setTitle("");
    setContent("");
    setImage("");
  };

  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={handleSubmit} className="flex flex-col items-center border-2 w-300 rounded-lg shadow-lg p-8">
        <label className="font-bold">Title</label>
        <input className="border-1 border-gray-200 p-3 w-100" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter your blog title" />

        <label className="font-bold">Content</label>
        <textarea className="border-1 border-gray-200 p-3 w-100" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write your blog content" />

        <label className="font-bold">Image</label>
        <input className="border-1 border-gray-200 p-3 w-100 mb-3" type="file" accept="image/*" onChange={handleImageUpload} />

        <button type="submit" className="border bg-blue-100 rounded-lg p-3 mt-3">Post</button>
      </form>
    </div>
  );
};

export default BlogForm;
