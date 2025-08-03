import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

type Video = {
  id: number;
  title: string;
  url: string;
};

const WatchPage: React.FC = () => {
  const { id } = useParams();
  const [video, setVideo] = useState<Video | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/videos/${id}`)
      .then(res => res.json())
      .then(data => setVideo(data))
      .catch(err => console.error('Error fetching video:', err));
  }, [id]);

  if (!video) return <p>Loading...</p>;

  return (
    <div>
      <Link to="/">← Back to Home</Link>
      <h1>{video.title}</h1>
      <video width="720" controls src={video.url}></video>
    </div>
  );
};

export default WatchPage;
