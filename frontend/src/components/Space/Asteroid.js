import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import './Asteroid.css';

const Asteroid = ({ stroid }) => {
    const [info, changeInfo] = useState({})
    const [start, changeStart] = useState('')
    const [end, changeEnd] = useState('')

    const submitForm = async e => {
        e.preventDefault()
        console.log('start', start)
        console.log('end', end)
        changeStart('')
        changeEnd('')
    }

    console.log('stroid', stroid)
    // for (const key in stroid) {
    //     console.log(stroid[key])
    // }
    console.log(Object.values(stroid))
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
            {/* <Table>
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
                    {Object.values(stroid).map(el => (
                        <tr key={el.neo_reference_id}>
                            <td>{el.close_approach_data[0].close_approach_date_full}</td>
                            <td>{el.close_approach_data[0].miss_distance.kilometers} km</td>
                            <td>{el.close_approach_data[0].relative_velocity.kilometers_per_hour} km/hr</td>
                            <td>{el.estimated_diameter.kilometers.estimated_diameter_min} km</td>
                            <td>{el.estimated_diameter.kilometers.estimated_diameter_max} km</td>
                            <td>{el.is_potentially_hazardous_asteroid}</td>
                        </tr>
                    ))}
                </tbody>
            </Table> */}
        </>
    )
}

export default Asteroid