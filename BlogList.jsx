import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-10">
      {blogs.map((blog, index) => (
        <div key={index} className="w-100 h-90 flex bg-gray-200 text-black m-2 flex-col cursor-pointer" onClick={() => navigate(`/blog/${index}`)}>
          <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-bold">{blog.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
