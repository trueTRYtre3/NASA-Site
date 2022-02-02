import React, { useState } from 'react';
import Options from '../Options/Options';
import './Space.css';
import Astronomy from './Astronomy';
import Asteroid from './Asteroid';

const Space = ({ children }) => {
    const [cat, changeCat] = useState('A')

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