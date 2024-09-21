// src/components/BlogList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogPost from './BlogPost';
import './BlogList.css'; // Import CSS file for BlogList styles

const BlogList = ({ onEdit, onDelete }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setBlogs(response.data.slice(0, 10)); // Limit to first 10 posts
  };

  return (
    <div>
      <h2>Blog Posts</h2>
      <div className="blog-list">
        {blogs.map((blog) => (
          <BlogPost key={blog.id} blog={blog} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
