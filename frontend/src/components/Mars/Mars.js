import React, { useState, useEffect } from 'react';
import Rover from './Rover';
import nasaService from '../../services/nasaService';

const Mars = () => {
    const [pics, getPics] = useState([])
    useEffect(() => {
        async function marsData() {
            const data = await nasaService.getRover()
            getPics(data)
        }
        marsData()
    }, [])

    return (
        <>
            <h2>Mars Rover Pictures</h2>
            <Rover pictures={pics} />
        </>
    )
}

export default Mars