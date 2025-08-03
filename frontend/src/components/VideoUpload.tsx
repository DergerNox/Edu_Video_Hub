import React, { useState } from 'react';

const VideoUpload: React.FC = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/api/videos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ video: { title, url } }),
    });

    if (response.ok) {
      setTitle('');
      setUrl('');
      alert('Video uploaded successfully!');
    } else {
      alert('Error uploading video');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Upload a Video</h2>
      <div>
        <label>Title: </label>
        <input value={title} onChange={e => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Video URL: </label>
        <input value={url} onChange={e => setUrl(e.target.value)} required />
      </div>
      <button type="submit">Upload</button>
    </form>
  );
};

export default VideoUpload;
