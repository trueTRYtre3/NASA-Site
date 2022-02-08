import React, { useEffect, useState } from 'react'
import Visual from './Visual';
import nasaService from '../../services/nasaService'
import './Astronomy.css'
import { Container, Row, Col } from 'react-bootstrap';

const Astronomy = ({ image }) => {
    const [data, changeData] = useState({})

    // useEffect(() => {
    //     async function getPic() {
    //         const response = await nasaService.getPicture()
    //         changeData(response)
    //     }   
    
    //     getPic();
    // }, [])

    console.log('astronomy', image)
    return (
        <>
            <h2>Astronomy Pic of the Day</h2>
            <div className='astronomy'>
                <Container>
                    <Row>
                        <Col>
                            <p>
                                <strong>
                                    {/* {data.title} */}
                                    Carina Nebula North
                                </strong>
                            </p>
                            <p className='explanation'>
                                {/* {data.explanation} */}
                                The Great Carina Nebula is home to strange stars 
                                and iconic nebulas. Named for its home constellation, 
                                the huge star-forming region is larger and brighter than the 
                                Great Orion Nebula but less well known because it is so far 
                                south -- and because so much of humanity lives so far north. 
                                The featured image shows in great detail the northern-most part of 
                                the Carina Nebula. Visible nebulas include the semi-circular filaments 
                                surrounding the active star Wolf-Rayet 23 (WR23) on the far left. 
                                Just left of center is the Gabriela Mistral Nebula consisting of an 
                                emission nebula of glowing gas (IC 2599) surrounding the small open 
                                cluster of stars (NGC 3324). Above the image center is the larger star 
                                cluster NGC 3293, while to its
                            </p>
                        </Col>
                        <Col className='visual'>
                            {/* <Visual media={data}/>     */}
                            {/* <img 
                                src="https://apod.nasa.gov/apod/image/2201/CarinaNorth_Colombari_3000.jpg"
                                height='300'
                                width='500'
                                alt="Space"
                            /> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Astronomy