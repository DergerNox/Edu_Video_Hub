import { useEffect, useState } from 'react';

interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
}

function App() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/videos')
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((err) => console.error('Failed to fetch videos', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Edu Video Hub</h1>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <h2>{video.title}</h2>
            <p>{video.description}</p>
            <a href={video.url} target="_blank" rel="noopener noreferrer">Watch</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
