import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import './Asteroid.css';

const Asteroid = ({ stroid }) => {
    const [info, changeInfo] = useState([])
    const [start, changeStart] = useState('')
    const [end, changeEnd] = useState('')

    useEffect(() => {
        for (const element in stroid) {
            stroid[element].forEach(el => {
                changeInfo((info) => [...info, {
                    'key': el.neo_reference_id,
                    'date': el.close_approach_data[0].close_approach_date_full,
                    'miss': el.close_approach_data[0].miss_distance.kilometers,
                    'velocity': el.close_approach_data[0].relative_velocity.kilometers_per_hour,
                    'minimum': el.estimated_diameter.kilometers.estimated_diameter_min,
                    'maximum': el.estimated_diameter.kilometers.estimated_diameter_max,
                    'hazardous': el.is_potentially_hazardous_asteroid
                }])
            })
        }
    }, [stroid])

    const submitForm = async e => {
        e.preventDefault()
        console.log('start', start)
        console.log('end', end)
        changeStart('')
        changeEnd('')
    }
    
    return (
        <>
            <h2>Near Earth Asteroids</h2>
            <form onSubmit={submitForm}>
                <label>
                    Start Date: 
                    <input 
                        className='input' 
                        type='date' 
                        value={start} 
                        onChange={({ target }) => changeStart(target.value)} 
                    />
                </label>
                <label>
                    End Date:
                    <input 
                        className='input' 
                        type='date' 
                        value={end} 
                        onChange={({ target }) => changeEnd(target.value)} 
                    />
                </label>
                <button className='button'>Submit</button>
            </form>
            {info.length > 0 && 
            <Table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Miss Distance</th>
                        <th>Velocity</th>
                        <th>Min. Diameter</th>
                        <th>Max Diameter</th>
                        <th>Hazardous</th>
                    </tr>
                </thead>
                <tbody>
                    {info.map(el => (
                        <tr key={el.key}>
                            <td>{el.date}</td>
                            <td>{el.miss} km</td>
                            <td>{el.velocity} km/hr</td>
                            <td>{el.minimum} km</td>
                            <td>{el.maximum} km</td>
                            <td>{el.hazardous}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>}
        </>
    )
}

export default Asteroid