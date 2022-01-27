import React, { useState } from 'react';
import './Options.css'

const list = [
    'Asteroids',
    'Pic of the Day',
    'euphoria'
]


const Options = () => {

    const [show, changeShow] = useState(true)
    const style = { display: show ? '' : 'none' }
    const direction = show ? 'up' : 'down'

    return (
        <>
            <div className='optionBox' style={style}>
                {list.map(li => (
                    <p>{li}</p>
                ))}
            </div>
            <div className='arrowbox' onClick={() => changeShow(!show)}>
                {/* <p className='arrow up'></p> */}
                <p className={`arrow ${direction}`}></p>
            </div>
        </>
    )
}

export default Options;