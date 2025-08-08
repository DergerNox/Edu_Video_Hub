import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import VideoList from './components/VideoList';
import VideoUpload from './components/VideoUpload';
import WatchPage from './components/WatchPage';
import Login from './components/Login';
import Signup from './components/Signup';
import { AuthContext } from './context/AuthContext';

const App: React.FC = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <Router>
      <div style={{ padding: '20px' }}>
        {/* Navigation */}
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/">Home</Link> |{" "}
          <Link to="/upload">Upload</Link> |{" "}
          {isAuthenticated ? (
            <>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link> |{" "}
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<VideoList />} />
          <Route path="/upload" element={<VideoUpload />} />
          <Route path="/watch/:id" element={<WatchPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
