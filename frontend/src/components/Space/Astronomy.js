import React, { useEffect } from 'react'
import earth from '../../images/earth.jpg'
import './Astronomy.css'
import { Container, Row, Col } from 'react-bootstrap';

const Astronomy = () => {
    return (
        <>
            <h2>Astronomy Pic of the Day</h2>
            <div className='astronomy'>
                <Container>
                    <Row>
                        <Col>
                            <p><strong>The Fornax Cluster of Galaxies</strong></p>
                            <p className='explanation'>
                                <strong>Explanation</strong>: Named for the southern constellation 
                                toward which most of its galaxies can be found, 
                                the Fornax Cluster is one of the closest clusters of galaxies. 
                                About 62 million light-years away, it is almost 20 times more
                                distant than our neighboring Andromeda Galaxy, and only about 10 percent 
                                farther than the better known and more populated Virgo Galaxy Cluster. 
                                Seen across this two degree wide field-of-view, almost every yellowish 
                                splotch on the image is an elliptical galaxy in the Fornax cluster. 
                                Elliptical galaxies NGC 1399 and NGC 1404 are the dominant, 
                                bright cluster members toward the upper left (but not the spiky foreground stars). 
                                A standout barred spiral galaxy NGC 1365 is visible on the lower right as a prominent 
                                Fornax cluster member.
                                <strong>Explanation</strong>: Named for the southern constellation 
                                toward which most of its galaxies can be found, 
                                the Fornax Cluster is one of the closest clusters of galaxies. 
                                About 62 million light-years away, it is almost 20 times more
                                distant than our neighboring Andromeda Galaxy, and only about 10 percent 
                                farther than the better known and more populated Virgo Galaxy Cluster. 
                                Seen across this two degree wide field-of-view, almost every yellowish 
                                splotch on the image is an elliptical galaxy in the Fornax cluster. 
                                Elliptical galaxies NGC 1399 and NGC 1404 are the dominant, 
                                bright cluster members toward the upper left (but not the spiky foreground stars). 
                                A standout barred spiral galaxy NGC 1365 is visible on the lower right as a prominent 
                                Fornax cluster member.
                            </p>
                        </Col>
                        <Col className='visual'>
                            {/* <img 
                                src={earth}
                                height='300'
                                alt="space"
                            /> */}
                            <iframe width="560" height="300" src="https://www.youtube.com/embed/je64UK6Bo8M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Astronomy