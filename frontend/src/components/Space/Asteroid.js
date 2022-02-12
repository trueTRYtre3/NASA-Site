import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import nasaService from '../../services/nasaService';
import './Asteroid.css';

const Asteroid = ({ stroid }) => {
    const [info, changeInfo] = useState([])
    const [start, changeStart] = useState('')
    const [end, changeEnd] = useState('')

    const pushIntoState = (data) => {
        changeInfo([])
        for (const element in data) {
            data[element].forEach(el => {
                changeInfo((info) => [...info, {
                    'key': el.neo_reference_id,
                    'date': el.close_approach_data[0].close_approach_date_full,
                    'miss': Math.round(el.close_approach_data[0].miss_distance.kilometers * 100) / 100,
                    'velocity': Math.round(el.close_approach_data[0].relative_velocity.kilometers_per_hour * 100) / 100,
                    'minimum': Math.round(el.estimated_diameter.kilometers.estimated_diameter_min * 100) / 100,
                    'maximum': Math.round(el.estimated_diameter.kilometers.estimated_diameter_max * 100) / 100,
                    'hazardous': el.is_potentially_hazardous_asteroid
                }])
            })
        }
    }

    useEffect(() => {
        pushIntoState(stroid)
    }, [stroid])

    const submitForm = async e => {
        e.preventDefault()
        try {
            const data = await nasaService.getAsteroid(start, end)
            pushIntoState(data.near_earth_objects)
            changeStart('')
            changeEnd('')
        } catch (exception) {
            console.log(exception)
        }
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
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', paddingBottom: '30px' }}>
                {info.length > 0 && 
                <Table striped bordered hover variant="dark" >
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
                                <td>{el.hazardous === true ? 'Yes' : 'No'}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>}
            </div>
        </>
    )
}

export default Asteroid