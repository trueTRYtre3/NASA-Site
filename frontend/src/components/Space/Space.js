import React from 'react';
import Options from '../Options/Options';
import logo from '../../images/earth.jpg';

const Space = () => {
    const categories = [
        'Pic of Day',
        'Asteroids'
    ]

    return (
        <>
            <Options categories={categories} />
            <img 
                src={logo}
                height='100'
                alt="space"
            />
        </>
    )
}

export default Space;