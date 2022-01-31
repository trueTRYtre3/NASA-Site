import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Space from './components/Space/Space';
import nasaService from './services/nasaService'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [image, changeImage] = useState('')

  useEffect(() => {
    async function getPic() {
      console.log(process.env.APP_KEY )
      const response = await nasaService.getPicture()
      console.log(response.data)
    }

    getPic();
  }, [])

  return (
    <div className='App'>
      <Space>
        <Navigation />
      </Space>
    </div>
  );
}

export default App;
