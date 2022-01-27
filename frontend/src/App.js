import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Options from './components/Options/Options';
import nasaService from './services/nasaService'
import logo from './images/earth.jpg'
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
      <Options />
      {/* <img 
        src={logo}
        height='100'
        alt="space"
      /> */}
    </div>
  );
}

export default App;
