import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlog(blogs[id]);
    setLikes(parseInt(localStorage.getItem(`likes-${id}`), 10) || 0);
    setComments(JSON.parse(localStorage.getItem(`comments-${id}`)) || []);
  }, [id]);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(`likes-${id}`, newLikes);
  };

  const handleComment = () => {
    if (!newComment.trim()) return;
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));
    setNewComment("");
  };

  const handleDelete = () => {
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    blogs.splice(id, 1);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    navigate("/");
  };

  if (!blog) return <h2 className="text-center text-xl">Blog Not Found</h2>;

  return (
    <div className="p-10">
      <img src={blog.image} alt={blog.title} className="w-full h-80 object-cover" />
      <h1 className="text-2xl font-bold mt-4">{blog.title}</h1>
      <p className="mt-2">{blog.content}</p>

      <div className="mt-4">
        <button onClick={handleLike} className="bg-blue-500 text-white p-2 rounded">Like ({likes})</button>
        <button onClick={handleDelete} className="bg-red-500 text-white p-2 ml-2 rounded">Delete</button>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold">Comments</h3>
        <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Add a comment..." className="border p-2 w-full" />
        <button onClick={handleComment} className="bg-green-500 text-white p-2 mt-2">Comment</button>
        <ul className="mt-2">
          {comments.map((comment, index) => (
            <li key={index} className="border p-2 mt-1">{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogDetail;
