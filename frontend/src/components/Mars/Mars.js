import React, { useState, useEffect } from 'react';
import { Form, Button, FloatingLabel, Alert } from 'react-bootstrap';
import Rover from './Rover';
import nasaService from '../../services/nasaService';

const Mars = () => {
    const [pics, getPics] = useState([])
    const [date, changeDate] = useState('')
    const [alert, changeAlert] = useState(false)

    useEffect(() => {
        async function marsData() {
            const data = await nasaService.getRover()
            getPics(data)
        }
        marsData()
    }, [])

    const submitForm = async e => {
        e.preventDefault()
        try {
            const data = await nasaService.getRoverDate(date)
            getPics(data)
            changeDate('')
            changeAlert(false)
        }
        catch(exception) {
            console.log(exception)
            changeAlert(true)
        }
    }

    return (
        <>
            <h2>Mars Rover Pictures</h2>
            {alert && <Alert className='alert' variant='danger'>Request Error</Alert>}
            <Form onSubmit={submitForm}>
                <Form.Group className='input'>
                    <FloatingLabel label="End Date">
                        <Form.Control 
                            type='date' 
                            value={date} 
                            onChange={({ target }) => changeDate(target.value)} 
                        />
                    </FloatingLabel>
                </Form.Group>
                <Button className='button' variant="success" type='submit'>Submit</Button>
            </Form>
            <Rover pictures={pics} />
        </>
    )
}

export default Mars