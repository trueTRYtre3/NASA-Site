import React, { useState } from 'react';
import Options from '../Options/Options';

const Mars = () => {
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
        <>
            <Options categories={categories} changeView={changeCat} />
            <h1 style={{ color: 'green' }}>this is mars</h1>
        </>
    )
}

export default Mars