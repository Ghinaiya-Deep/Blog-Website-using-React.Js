// src/components/BlogPost.js
import React from 'react';

const BlogPost = ({ blog, onEdit, onDelete }) => {
  return (
    <div className="blog-post">
      <h3>{blog.title}</h3>
      <p>{blog.body}</p>
      <button onClick={() => onEdit(blog)}>Edit</button>
      <button onClick={() => onDelete(blog.id)}>Delete</button>
    </div>
  );
};

export default BlogPost;
