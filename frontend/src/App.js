import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import nasaService from './services/nasaService'
import logo from './images/earth.JPG'
import Image from 'react-bootstrap/Image'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [image, changeImage] = useState('')

  // useEffect(() => {
  //   async function getPic() {
  //     console.log(process.env.APP_KEY )
  //     const response = await nasaService.getPicture()
  //     console.log(response.data)
  //   }

  //   getPic();
  // }, [])

  return (
    <div className='App'>
      <Navigation />
      <p>Astronomy Picture of the Day</p>
      <img 
        src={logo}
        height='100'
      />
    </div>
  );
}

export default App;
