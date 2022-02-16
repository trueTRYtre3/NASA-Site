import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner } from 'react-bootstrap';
import './Scroller.css';

const Scroller = ({ limit, changeFn, len, mappedObj }) => {
    return (
        <div className='grid-outer-container'>
            <div className='grid-inner'>
                <InfiniteScroll
                    dataLength={limit}
                    next={changeFn}
                    hasMore={limit < len}
                    loader={ 
                        <div>
                            <br />
                            <Spinner animation="grow" variant="light" className='spin' />
                        </div>
                    }
                    endMessage={<h1 style={{ color: 'white' }}>That's all folks</h1>}
                >
                    {mappedObj.slice(0, limit).map(obj => (
                        <img key={obj.id} src={obj.img_src} loading='lazy' alt='failed load' width='300' height='300' />
                    ))}
                </InfiniteScroll>
            </div>
        </div>
    )
}

export default Scroller;