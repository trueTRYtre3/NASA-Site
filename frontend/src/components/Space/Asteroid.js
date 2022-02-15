import React, { useState, useEffect } from 'react';
import { Alert, Form, Button, FloatingLabel } from 'react-bootstrap';
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
        pushIntoState(stroid)
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
        <>
            <h2>Near Earth Asteroids</h2>
            {alert && <Alert className='alert' variant='danger'>Request Error</Alert>}
            <Form onSubmit={submitForm}>
                <Form.Group className='input'>
                    <FloatingLabel label="Start Date">
                        <Form.Control 
                            type='date' 
                            value={start} 
                            onChange={({ target }) => changeStart(target.value)} 
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className='input'>
                    <FloatingLabel label="End Date">
                        <Form.Control 
                            type='date' 
                            value={end} 
                            onChange={({ target }) => changeEnd(target.value)} 
                        />
                    </FloatingLabel>
                </Form.Group>
                <Button className='button' variant="success" type='submit'>Submit</Button>
            </Form>
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
        </>
    )
}

export default Asteroid
