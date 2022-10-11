import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const TopicDetail = () => {
    const topic = useLoaderData();
    const { logo, name, questions, total } = topic.data;
    let sl = 1;
    return (
        <div className='my-5'>
            <Container>
                <Card className="text-center">
                    <Card.Header>
                        <h4>Questions of {name}</h4>
                    </Card.Header>
                    {
                        questions.map(question => <Card.Body key={question.id}>

                            <Card.Title><h5 className='py-4'>{sl++}.{question.question}</h5></Card.Title>
                            <Card.Text>

                                <Row xs={1} md={2} className="g-4">
                                    {
                                        question.options.map(option =>
                                            <Col key={option}>
                                                <Card className='h-100'>
                                                    <Card.Body>
                                                        <Card.Text>
                                                            <input className='me-2' type="radio" id={option} name={question.id} value={option}></input>
                                                            {option}
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        )}
                                </Row>
                            </Card.Text>

                        </Card.Body>)
                    }

                </Card>
            </Container>
        </div>
    );
};

export default TopicDetail;