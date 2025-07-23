import { useEffect, useState } from 'react';

interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
}

function App() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    url: '',
  });

  // Fetch videos on mount
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = () => {
    fetch('http://localhost:3000/videos')
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((err) => console.error('Failed to fetch videos', err));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch('http://localhost:3000/videos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ video: formData }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(() => {
        fetchVideos(); // Refresh video list
        setFormData({ title: '', description: '', url: '' }); // Clear form
      })
      .catch((err) => console.error('Failed to create video', err));
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Edu Video Hub</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <h2>Add New Video</h2>
        <div>
          <input
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
          />
        </div>
        <div>
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
          />
        </div>
        <div>
          <input
            name="url"
            placeholder="Video URL"
            value={formData.url}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
          />
        </div>
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Create</button>
      </form>

      <ul>
        {videos.map((video) => (
          <li key={video.id} style={{ marginBottom: '1.5rem' }}>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <a href={video.url} target="_blank" rel="noopener noreferrer">Watch</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
