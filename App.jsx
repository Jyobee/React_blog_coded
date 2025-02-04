import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const handleBlogSubmit = () => {
    setRefresh(!refresh);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<>
          <BlogForm onBlogSubmit={handleBlogSubmit} />
          <BlogList key={refresh} />
        </>} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
