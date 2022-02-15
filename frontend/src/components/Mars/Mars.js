import React, { useState, useEffect } from 'react';
import Rover from './Rover';
import nasaService from '../../services/nasaService';
import data from './data';

const Mars = () => {
    const [pics, getPics] = useState([])
    useEffect(() => {
        // async function marsData() {
        //     const data = await nasaService.getRover()
        //     console.log(data.photos)
        // }

        // marsData()
        getPics(data)
    }, [])

    return (
        <>
            <h2>Mars Rover Pictures</h2>
            <Rover pictures={pics} />
        </>
    )
}

export default Mars