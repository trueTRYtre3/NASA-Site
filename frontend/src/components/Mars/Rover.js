import React from 'react';
import './Rover.css';

const Rover = ({ pictures }) => {
    return (
        <div className='mars-page'>
            <div className='pictures'>
                {pictures.map((pics, el) => (
                    <img key={el} src={pics} loading='lazy' alt='failed load' width='300' height='300' />
                ))}
            </div>
        </div>
    )
}

export default Rover;