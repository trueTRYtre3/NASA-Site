import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import '../InfiniteScroll/Scroller.css';
import './Rover.css';

const Rover = ({ pictures }) => {
    const [photos, changePhotos] = useState([])
    const [limit, changeLimit] = useState(12)

    useEffect(() => {
        changePhotos(pictures.photos)
    }, [pictures])

    const changeDataLength = () => {
        const newLength = limit+12 < photos.length ? limit+12 : photos.length  
        setTimeout(() => {
            changeLimit(newLength)
        }, 1000)
    }

    return (
        <div className='grid-outer-container'>
            {photos && 
            <div className='grid-inner'>
                <InfiniteScroll
                    dataLength={limit}
                    next={changeDataLength}
                    hasMore={limit < photos.length}
                    loader={ 
                        <div>
                            <br />
                            <Spinner animation="grow" variant="light" className='spin' />
                        </div>
                    }
                    endMessage={<h1 style={{ color: 'white' }}>That's all folks</h1>}
                >
                    {photos.slice(0, limit).map(pics => (
                        <img key={pics.id} src={pics.img_src} loading='lazy' alt='failed load' width='300' height='300' />
                    ))}
                </InfiniteScroll>
            </div>
            }
        </div>
    )
}

export default Rover;