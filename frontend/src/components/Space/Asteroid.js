import React, { useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';

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

    // console.log('stroid', stroid)
    return (
        <div>
            <form onSubmit={submitForm}>
                <label>
                    Start Date: 
                    <input type='date' value={start} onChange={({ target }) => changeStart(target.value)} />
                </label>
                <label>
                    End Date:
                    <input type='date' value={end} onChange={({ target }) => changeEnd(target.value)} />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Asteroid