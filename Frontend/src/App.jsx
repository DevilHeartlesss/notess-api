import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePost from './pages/createpost';
import Feed from './pages/feed';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/feed" element={<Feed />} />
     <Route path="/" element={<div><h1>Welcome to the App!</h1></div>} />
      </Routes>
    </Router>
  );
};


export default App;