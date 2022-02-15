import React, { useState, useEffect } from 'react';
import { Table, Alert, Card } from 'react-bootstrap';
import nasaService from '../../services/nasaService';
import './Asteroid.css';

const Asteroid = ({ stroid }) => {
    const [info, changeInfo] = useState([])
    const [start, changeStart] = useState('')
    const [end, changeEnd] = useState('')
    const [alert, changeAlert] = useState(false)

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
        // pushIntoState(stroid)
        let tempState = [
            {
                date: "2015-Sep-08 20:28",
                hazardous: true,
                key: "2465633",
                maximum: 0.5,
                minimum: 0.23,
                miss: 45290438.2,
                velocity: 65260.64
            },
            {
                date: "2015-Sep-08 14:31",
                hazardous: false,
                key: "3426410",
                maximum: 0.32,
                minimum: 0.14,
                miss: 38764558.55,
                velocity: 71099.33
            },
            {
                date: "2015-Sep-08 12:07",
                hazardous: false,
                key: "3553060",
                maximum: 0.03,
                minimum: 0.01,
                miss: 73563782.39,
                velocity: 68950.93,     
            },
            {
                date: "2015-Sep-08 20:28",
                hazardous: true,
                key: "2465633",
                maximum: 0.5,
                minimum: 0.23,
                miss: 45290438.2,
                velocity: 65260.64
            },
            {
                date: "2015-Sep-08 14:31",
                hazardous: false,
                key: "3426410",
                maximum: 0.32,
                minimum: 0.14,
                miss: 38764558.55,
                velocity: 71099.33
            },
            {
                date: "2015-Sep-08 12:07",
                hazardous: false,
                key: "3553060",
                maximum: 0.03,
                minimum: 0.01,
                miss: 73563782.39,
                velocity: 68950.93,     
            },
            {
                date: "2015-Sep-08 20:28",
                hazardous: true,
                key: "2465633",
                maximum: 0.5,
                minimum: 0.23,
                miss: 45290438.2,
                velocity: 65260.64
            },
            {
                date: "2015-Sep-08 14:31",
                hazardous: false,
                key: "3426410",
                maximum: 0.32,
                minimum: 0.14,
                miss: 38764558.55,
                velocity: 71099.33
            },
            {
                date: "2015-Sep-08 12:07",
                hazardous: false,
                key: "3553060",
                maximum: 0.03,
                minimum: 0.01,
                miss: 73563782.39,
                velocity: 68950.93,     
            },
            {
                date: "2015-Sep-08 20:28",
                hazardous: true,
                key: "2465633",
                maximum: 0.5,
                minimum: 0.23,
                miss: 45290438.2,
                velocity: 65260.64
            },
            {
                date: "2015-Sep-08 14:31",
                hazardous: false,
                key: "3426410",
                maximum: 0.32,
                minimum: 0.14,
                miss: 38764558.55,
                velocity: 71099.33
            },
            {
                date: "2015-Sep-08 12:07",
                hazardous: false,
                key: "3553060",
                maximum: 0.03,
                minimum: 0.01,
                miss: 73563782.39,
                velocity: 68950.93,     
            },
        ]
        changeInfo(tempState)
    }, [stroid])

    const submitForm = async e => {
        e.preventDefault()
        try {
            const data = await nasaService.getAsteroid(start, end)
            pushIntoState(data.near_earth_objects)
            changeAlert(false)
            changeStart('')
            changeEnd('')
        } catch (exception) {
            console.log(exception)
            changeAlert(true)
        }
    }



    return (
        <div className='layout'>
            <h2>Near Earth Asteroids</h2>
            {alert && <Alert className='alert' variant='danger'>Request Error</Alert>}
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
                <div className='gridlayout' style={{ display: 'grid' }}>
                    {info.map(el => (
                        <div className='cards' key={el.key}>
                            <p>
                                <strong>{el.date}</strong>
                            </p>
                            <p>
                                <strong>Miss Distance</strong> 
                                <br />
                                {el.miss} km
                            </p>
                            <p>
                                <strong>Velocity</strong> 
                                <br />
                                {el.velocity} km/hr
                            </p>
                            <p style={{ marginBottom: 0 }}>
                                <strong>Asteroid Diameter</strong>
                            </p>
                            <div className='diameter'>
                                <p>Min. <br />{el.minimum} km</p>
                                <p>Max. <br />{el.maximum} km</p>
                            </div>
                            <p>
                                <strong>Potentially Hazardous</strong>
                                <br />
                                {el.hazardous === true ? 'Yes' : 'No'}
                            </p>
                        </div>
                    ))}
                </div>
                }
            </div>
        </div>
    )
}

export default Asteroid
