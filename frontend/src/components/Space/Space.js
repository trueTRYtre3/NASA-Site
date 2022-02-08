import React, { useState, useEffect } from 'react';
import Options from '../Options/Options';
import nasaService from '../../services/nasaService';
import './Space.css';
import Astronomy from './Astronomy';
import Asteroid from './Asteroid';

const Space = ({ children }) => {
    const [cat, changeCat] = useState('A')
    const [image, changeImage] = useState({})
    const [asteroid, changeAsteroid] = useState({})

    const categories = [
        {
            name: 'Pic of Day',
            index: 'A'
        },
        {
            name: 'Asteroids',
            index: 'B'
        }
    ]

    useEffect(() => {
        async function grabInfo() {
            const image = await nasaService.getPicture() 
            const stroid = await nasaService.getAsteroid()

            changeImage(image)
            changeAsteroid(stroid)
        }
    }, [])

    return (
        <div className='main'>
            {/* {children} */}
            <Options categories={categories} changeView={changeCat} />
            {cat === 'A' && <Astronomy />}
            {cat === 'B' && <Asteroid />}
        </div>
    )
}

export default Space;