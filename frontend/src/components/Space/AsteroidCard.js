import React from 'react';
import './AsteroidCard.css';

const AsteroidCard = ({ element }) => {
    return (
        <div className='cards'>
            <p>
                <strong>{element.date}</strong>
            </p>
            <p>
                <strong>Miss Distance</strong> 
                <br />
                {element.miss} km
            </p>
            <p>
                <strong>Velocity</strong> 
                <br />
                {element.velocity} km/hr
            </p>
            <p style={{ marginBottom: 0 }}>
                <strong>Asteroid Diameter</strong>
            </p>
            <div className='diameter'>
                <p>Min. <br />{element.minimum} km</p>
                <p>Max. <br />{element.maximum} km</p>
            </div>
            <p>
                <strong>Potentially Hazardous</strong>
                <br />
                {element.hazardous === true ? 'Yes' : 'No'}
            </p>
        </div>
    )
}

export default AsteroidCard