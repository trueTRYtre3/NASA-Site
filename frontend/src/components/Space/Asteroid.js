import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Asteroid = ({ stroid }) => {
    const [info, changeInfo] = useState({})
    const [start, changeStart] = useState('')
    const [end, changeEnd] = useState('')

    const submitForm = async e => {
        e.preventDefault()
        console.log(typeof start)
    }

    // console.log('stroid', stroid)
    return (
        <>
            <Form onSubmit={submitForm}>
                <Form.Group>
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control type="date" onChange={({ target }) => changeStart(target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>End Date</Form.Label>
                    <Form.Control type="date" onChange={({ target }) => changeEnd(target.value)} />
                </Form.Group>
                <Button type='submit'>
                    Submit
                </Button>
            </Form>
            {/* <form onSubmit={submitForm}>
                <label>
                    Start Date:
                    <input type='date'  value={start} onChange={changeStart} />
                </label>
                <label>
                    End Date:
                    <input type='date' value={end} onChange={changeEnd} />
                </label>
                <input type='submit' value='Submit' />
            </form> */}
        </>
    )
}

export default Asteroid