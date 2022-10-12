import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Teachers.css';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('teachers.json')
            .then(response => response.json())
            .then(data => setTeachers(data))
    }, []);

    console.log(teachers);
    return (
        <div className='my-5'>
            <Container>
                <h3 className='py-5 text-info'>| Our Teachers:</h3>
                <Row xs={1} md={4} className="g-4">
                    {
                        teachers.map(teacher => <Col>
                            <Card className='h-100'>
                                <Card.Img variant="top" src={teacher.img} className="image_height" />
                                <Card.Body>
                                    <Card.Title>{teacher.name}</Card.Title>
                                    <Card.Text>
                                        <p>Topic: {teacher.topics}</p>
                                        <p>{teacher.degree}</p>
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

export default Teachers;