import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Space from './components/Space/Space';
import Mars from './components/Mars/Mars'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const path = useLocation().pathname
  const name = path.split('/')

  return (
    <div className={`App ${name[1]}`}>
      <Navigation />
      <Routes>
        <Route path='/' exact element={<Space />} />
        <Route path='/mars' element={<Mars />}  />
      </Routes>
    </div>
  );
}

export default App;
