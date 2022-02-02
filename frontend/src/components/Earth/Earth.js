import React, { useState } from 'react';
import Options from '../Options/Options';

const Earth = () => {
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
            <h1 style={{ color: 'green' }}>This is earth</h1>
        </>
    )
}

export default Earth;