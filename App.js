// src/App.js
import React, { useState } from 'react';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import './App.css';

const App = () => {
  const [editingBlog, setEditingBlog] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    // Use API call to delete the post
    // For example: await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log(`Deleted blog with ID: ${id}`);
    // Refresh blog list here (not shown)
  };

  const handleSave = async (blog) => {
    if (editingBlog) {
      // Update the blog
      // Use API call to update the post
      console.log('Updated blog:', blog);
    } else {
      // Create new blog
      // Use API call to create the post
      console.log('Created blog:', blog);
    }
    setShowForm(false);
    setEditingBlog(null);
    // Refresh blog list here (not shown)
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingBlog(null);
  };

  return (
    <div className="App">
      <h1>My Blog</h1>
      {showForm ? (
        <BlogForm currentBlog={editingBlog} onSave={handleSave} onCancel={handleCancel} />
      ) : (
        <>
          <button onClick={() => setShowForm(true)}>Create New Blog</button>
          <BlogList onEdit={handleEdit} onDelete={handleDelete} />
        </>
      )}
    </div>
  );
};

export default App;
