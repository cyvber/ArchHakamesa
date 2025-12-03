import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import './AddProjectPage.css'; // Import the CSS file

const AddProjectPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title || !description || !date) {
      setMessage('Please fill all required fields.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('date', date);

      images.forEach((image) => {
        formData.append('images', image);
      });

      await axios.post('http://localhost:5000/api/projects', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setMessage('Project created successfully!');
      setTitle('');
      setDescription('');
      setDate('');
      setImages([]);
    } catch (error: any) {
      console.error(error);
      setMessage(error.response?.data?.message || 'Error creating project.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-project-container">
      <h1>Add New Project</h1>

      {message && <p className={`message ${message.includes('success') ? 'success' : 'error'}`}>{message}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Images</label>
          <input type="file" multiple accept="image/*" onChange={handleImageChange} />
          {images.length > 0 && <p>{images.length} image(s) selected</p>}
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Add Project'}
        </button>
      </form>
    </div>
  );
};

export default AddProjectPage;
