import React, { useEffect, useState } from 'react';
import nasaService from '../../services/nasaService'

const Asteroid = ({ stroid }) => {
    const [info, changeInfo] = useState({})

    // useEffect(() => {
    //     async function asteroids() {
    //         const response = await nasaService.getAsteroid()
    //         changeInfo(response)
    //     }

    //     asteroids()
    // }, [])

    console.log('stroid', stroid)
    return (
        <p style={{color: 'purple'}}>Hello</p>
    )
}

export default Asteroid