import React, { useEffect, useState } from 'react'
import Visual from './Visual';
import nasaService from '../../services/nasaService'
import './Astronomy.css'
import { Container, Row, Col } from 'react-bootstrap';

const Astronomy = () => {
    const [data, changeData] = useState({})

    useEffect(() => {
        async function getPic() {
            const response = await nasaService.getPicture()
            changeData(response)
        }   
    
        getPic();
    }, [])
    
    return (
        <>
            <h2>Astronomy Pic of the Day</h2>
            <div className='astronomy'>
                <Container>
                    <Row>
                        <Col>
                            <p><strong>{data.title}</strong></p>
                            <p className='explanation'>
                                {data.explanation}
                            </p>
                        </Col>
                        <Col className='visual'>
                            <Visual media={data}/>    
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Astronomy