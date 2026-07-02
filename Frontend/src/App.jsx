import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePost from './pages/createpost';
import Feed from './pages/feed';
const App = () => {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Feed />} />
<Route path="/create-post" element={<CreatePost />} />
<Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
};


export default App;