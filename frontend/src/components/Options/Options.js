import React, { useState } from 'react';
import './Options.css'

const Options = ({ categories }) => {

    const [show, changeShow] = useState(true)
    const style = { display: show ? '' : 'none' }
    const direction = show ? 'up' : 'down'

    // const categories = [
    //     'Pic of Day',
    //     'Asteroids'
    // ]

    return (
        <>
            <div className='optionBox' style={style}>
                {categories.map(cat => (
                    <p key={cat}>{cat}</p>
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