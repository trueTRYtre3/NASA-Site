import React, { useState, useEffect } from 'react';
import { Alert, Form, Button, FloatingLabel } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner } from 'react-bootstrap';
import nasaService from '../../services/nasaService';
import AsteroidCard from './AsteroidCard';
import '../Styles/Form.css';
import '../Styles/Scroller.css';

const Asteroid = ({ stroid }) => {
    const [info, changeInfo] = useState([])
    const [start, changeStart] = useState('')
    const [end, changeEnd] = useState('')
    const [alert, changeAlert] = useState(false)
    const [limit, changeLimit] = useState(12)

    const changeDataLength = () => {
        const newLength = limit+12 < info.length ? limit+12 : info.length  
        setTimeout(() => {
            changeLimit(newLength)
        }, 1000)
    }

    const pushIntoState = (data) => {
        changeInfo([])
        changeLimit(0)
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
        changeDataLength()
    }

    useEffect(() => {
        pushIntoState(stroid)
    }, [])

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
            <div className='grid-outer-container'>
                {info.length > 0 && 
                    <InfiniteScroll
                        dataLength={limit}
                        next={changeDataLength}
                        hasMore={limit < info.length}
                        loader={ 
                            <div>
                                <br />
                                <Spinner animation="grow" variant="light" className='spin' />
                            </div>
                        }
                        endMessage={<h1 style={{ color: 'white',  marginTop: '30px' }}>That's all folks</h1>}
                    >
                        <div className='grid-inner'>
                            {info.slice(0,limit).map(el => 
                                <AsteroidCard element={el} key={el.key}/>
                            )}
                        </div>
                    </InfiniteScroll>
                }
            </div>
        </>
    )
}

export default Asteroid
