import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Space from './components/Space/Space';
import Earth from './components/Earth/Earth';
import Mars from './components/Mars/Mars'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const path = useLocation().pathname
  const name = path.split('/')
  console.log(name[1])

  return (
    <div className={`App ${name[1]}`}>
      <Navigation />
      <Routes>
        <Route path='/' exact element={<Space />} />
        <Route path='/earth' element={<Earth />} />
        <Route path='/mars' element={<Mars />}  />
      </Routes>
    </div>
  );
}

export default App;
