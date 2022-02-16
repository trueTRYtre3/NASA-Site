import React, { useEffect, useState } from 'react'
import Visual from './Visual';
import './Astronomy.css';
import { Container, Row, Col } from 'react-bootstrap';

const Astronomy = ({ image }) => {
    const [data, changeData] = useState({})

    useEffect(() => {
        changeData(image)
    }, [image])

    return (
        <div className='astronomy-page'>
            <h2>Astronomy Pic of the Day</h2>
            <div className='astronomy'>
                <Container>
                    <Row>
                        <Col>
                            <p>
                                <strong>
                                    {data.title}
                                </strong>
                            </p>
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
        </div>
    )
}

export default Astronomy