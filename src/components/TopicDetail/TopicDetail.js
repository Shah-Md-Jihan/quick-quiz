import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { toast, ToastContainer } from 'react-toastify';

// toast.configure()



const TopicDetail = () => {
    const topic = useLoaderData();
    // console.log(topic.data.questions);
    const { name, questions } = topic.data;
    let sl = 1;
    const qr_btn = {
        cursor: 'pointer'
    };

    const handleAnswer = (ans, corrAns) => {

        if (ans === corrAns) {
            toast.success('Your answer is correct !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

        } else {
            toast.error('Your answer is wrong !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }
    const notify = ans => toast.info(ans, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });;
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
                                    <Button variant='bg-none' onClick={() => notify(question.correctAnswer)}>
                                        <FontAwesomeIcon className='text-danger' icon={faEye}></FontAwesomeIcon>
                                    </Button>
                                </div>

                            </Card.Title>

                            <Card.Text>
                                <Row xs={1} md={2} className="g-4">
                                    {
                                        question.options.map(option =>
                                            <Col key={option}>
                                                <Card className='h-100'>
                                                    <Card.Body>
                                                        <Card.Text>
                                                            <input style={qr_btn} onClick={() => handleAnswer(option, question.correctAnswer)} className='me-2' type="radio" id={option} name={question.id} value={option}></input>
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
            <ToastContainer />
        </div>
    );
};


export default TopicDetail;