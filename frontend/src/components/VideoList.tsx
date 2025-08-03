import React, { useEffect, useState } from 'react';

type Video = {
  id: number;
  title: string;
  url: string;
};

const VideoList: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/videos')
      .then(res => res.json())
      .then(data => setVideos(data))
      .catch(err => console.error('Error fetching videos:', err));
  }, []);

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Video Library</h1>
      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ padding: '8px', width: '100%', maxWidth: '400px', marginBottom: '20px' }}
      />

      {filteredVideos.length === 0 ? (
        <p>No videos found.</p>
      ) : (
        filteredVideos.map(video => (
          <div key={video.id} style={{ marginBottom: '20px' }}>
            <h3>{video.title}</h3>
            <video width="480" controls src={video.url}></video>
          </div>
        ))
      )}
    </div>
  );
};

export default VideoList;
