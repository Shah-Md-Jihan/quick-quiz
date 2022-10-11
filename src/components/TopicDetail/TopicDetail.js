import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEye } from '@fortawesome/free-solid-svg-icons'


const TopicDetail = () => {
    const topic = useLoaderData();
    // console.log(topic.data.questions);
    const { logo, name, questions, total } = topic.data;
    let sl = 1;

    const handleAnswer = (ans, questionId, corrAns) => {

        if (ans === corrAns) {
            // console.log('uttor sothik');


        } else {
            console.log('utton vul');
        }
    }

    return (
        <div className='my-5'>
            <Container>
                <Card className="text-center">
                    <Card.Header>
                        <h4>Questions of {name}</h4>
                    </Card.Header>
                    {
                        questions.map(question => <Card.Body key={question.id}>

                            <Card.Title>
                                <div className='d-flex justify-content-between align-items-center px-5'>
                                    <h5 className='py-4'>{sl++}.{question.question}</h5>
                                    <Link>
                                        <FontAwesomeIcon className='text-danger' icon={faEye}></FontAwesomeIcon>
                                    </Link>
                                </div>
                                {/* <h5 className='py-4'>id:{question.id}</h5>
                                <h5 className='py-4'>Ans:{question.correctAnswer}</h5> */}
                            </Card.Title>

                            <Card.Text>
                                <Row xs={1} md={2} className="g-4">
                                    {
                                        question.options.map(option =>
                                            <Col key={option}>
                                                <Card className='h-100'>
                                                    <Card.Body>
                                                        <Card.Text>
                                                            <input onClick={() => handleAnswer(option, question.id, question.correctAnswer)} className='me-2' type="radio" id={option} name={question.id} value={option}></input>
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