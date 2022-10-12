import { faArrowRight, faBasketball, faCode, faHandshake, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './About.css';

const About = () => {
    return (
        <div className='pt-5'>
            <h3 className='mt-5 text-info'>| About Us:</h3>
            <Container className='mt-5'>
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card>
                            <FontAwesomeIcon icon={faHandshake} className="py-5 icon_size"></FontAwesomeIcon>
                            <Card.Body className='text-start'>
                                <Card.Title>Communicative English</Card.Title>
                                <Card.Text>
                                    <p>for better communication, you have to know better English. We are ready to improve your English skill <span className='text-danger font-boldfont-weight-bold'>...</span></p>
                                    <Button variant='info text-white'>
                                        View More
                                        <FontAwesomeIcon className='ms-2' icon={faArrowRight}></FontAwesomeIcon>
                                    </Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <FontAwesomeIcon icon={faCode} className="py-5 icon_size"></FontAwesomeIcon>
                            <Card.Body className='text-start'>
                                <Card.Title>Web Development</Card.Title>
                                <Card.Text>
                                    <p>The modern world can not be possible without web site or application. Its importance grows up day by day <span className='text-danger font-boldfont-weight-bold'>...</span></p>
                                    <Button variant='info text-white'>
                                        View More
                                        <FontAwesomeIcon className='ms-2' icon={faArrowRight}></FontAwesomeIcon>
                                    </Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <FontAwesomeIcon icon={faLayerGroup} className="py-5 icon_size"></FontAwesomeIcon>
                            <Card.Body className='text-start'>
                                <Card.Title>App Development</Card.Title>
                                <Card.Text>
                                    <p>We are used to doing our daily work by using mobile or desktop software. So in the future app development is important for us. <span className='text-danger font-boldfont-weight-bold'>...</span></p>
                                    <Button variant='info text-white'>
                                        View More
                                        <FontAwesomeIcon className='ms-2' icon={faArrowRight}></FontAwesomeIcon>
                                    </Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <FontAwesomeIcon icon={faBasketball} className="py-5 icon_size"></FontAwesomeIcon>
                            <Card.Body className='text-start'>
                                <Card.Title>Game Development</Card.Title>
                                <Card.Text>
                                    <p>Modern-world child gains their entertainment from mobile or computer games. So its demand grows up day by day. <span className='text-danger font-boldfont-weight-bold'>...</span></p>
                                    <Button variant='info text-white'>
                                        View More
                                        <FontAwesomeIcon className='ms-2' icon={faArrowRight}></FontAwesomeIcon>
                                    </Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;