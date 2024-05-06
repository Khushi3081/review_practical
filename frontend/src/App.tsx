import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import ReviewList from './pages/Review/reviewList.tsx';
import ReviewAdd from './pages/ReviewAdd/reviewAdd.tsx';
import ReviewEdit from './pages/ReviewEdit/reviewEdit.tsx';

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/" element={<ReviewList />} />
          <Route path='/new' element={<ReviewAdd />} />
          <Route path='/:id' element={<ReviewEdit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
