import React from 'react';
import VideoList from './components/VideoList';
import VideoUpload from './components/VideoUpload';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <VideoUpload />
      <hr />
      <VideoList />
    </div>
  );
};


export default App;
