// src/components/BlogForm.js
import React, { useState, useEffect } from 'react';

const BlogForm = ({ currentBlog, onSave, onCancel }) => {
  const [formData, setFormData] = useState({ title: '', body: '' });

  useEffect(() => {
    if (currentBlog) {
      setFormData(currentBlog);
    }
  }, [currentBlog]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="body"
        placeholder="Body"
        value={formData.body}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default BlogForm;
