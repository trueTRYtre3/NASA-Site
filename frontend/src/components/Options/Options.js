import React, { useState } from 'react';
import './Options.css'

const Options = ({ categories, changeView }) => {

    const [show, changeShow] = useState(true)
    const style = { display: show ? '' : 'none' }
    const direction = show ? 'up' : 'down'


    return (
        <>
            <div className='optionBox' style={style}>
                {categories.map(cat => (
                    <p className='option' key={cat.index} onClick={() => changeView(cat.index)}>{cat.name}</p>
                ))}
            </div>
            <div className='arrowbox' onClick={() => changeShow(!show)}>
                <p className={`arrow ${direction}`}></p>
            </div>
        </>
    )
}

export default Options;