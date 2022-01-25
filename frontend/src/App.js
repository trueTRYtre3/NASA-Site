import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import nasaService from './services/nasaService'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  useEffect(() => {
    async function getPic() {
      console.log(process.env.APP_KEY)
      const data = await nasaService.getPicture()
      console.log(data)
    }

    getPic();
  }, [])

  return (
    <div className='App'>
      <Navigation />
      <p>stuff</p>
    </div>
  );
}

export default App;
