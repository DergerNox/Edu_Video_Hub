import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoList from './components/VideoList';
import VideoUpload from './components/VideoUpload';
import WatchPage from './components/WatchPage';

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <VideoUpload />
                <hr />
                <VideoList />
              </>
            }
          />
          <Route path="/watch/:id" element={<WatchPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
