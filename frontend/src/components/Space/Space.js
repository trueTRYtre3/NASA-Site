import React from 'react';
import Options from '../Options/Options';
import './Space.css';
import logo from '../../images/earth.jpg';
import Astronomy from './Astronomy';

const Space = ({ children }) => {
    const categories = [
        'Pic of Day',
        'Asteroids'
    ]

    return (
        <div className='main'>
            {children}
            <Options categories={categories} />
            <Astronomy />
        </div>
    )
}

export default Space;