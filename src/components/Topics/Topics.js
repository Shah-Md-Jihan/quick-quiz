import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Link, useLoaderData } from 'react-router-dom';


const Topics = () => {
    const allTopics = useLoaderData();

    return (
        <div className='mt-5'>
            <h3 className='pb-5 text-info'>| Quiz Categories:</h3>
            <Container>
                <Row xs={1} md={4} className="g-4">
                    {
                        allTopics.data.map(topic =>
                            <Col key={topic.id}>
                                <Card>
                                    <Card.Img variant="top" src={topic.logo} />
                                    <Card.Body>
                                        <Card.Title>{topic.name}</Card.Title>
                                        <Card.Text>
                                            <div className='d-flex justify-content-between mt-4'>
                                                <p>Total Quiz: {topic.total}</p>
                                                <p>
                                                    <Link to={`topics/${topic.id}`}>
                                                        <Button variant='info' className='text-white'>Start Quiz</Button>
                                                    </Link>
                                                </p>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Topics;