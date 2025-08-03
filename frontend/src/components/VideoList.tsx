import React, { useEffect, useState } from 'react';

type Video = {
  id: number;
  title: string;
  url: string;
};

const VideoList: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/videos')
      .then(res => res.json())
      .then(data => setVideos(data))
      .catch(err => console.error('Error fetching videos:', err));
  }, []);

  return (
    <div>
      <h1>Video Library</h1>
      {videos.map(video => (
        <div key={video.id}>
          <h3>{video.title}</h3>
          <video width="480" controls src={video.url}></video>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
