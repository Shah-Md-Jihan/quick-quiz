import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Blogs = () => {
    return (
        <div>
            <Container>
                <Card className='mt-5'>
                    <Card.Header>
                        <h3>Our Blogs</h3>
                    </Card.Header>
                    <Card.Body className='p-4'>
                        <Card className='mb-3'>
                            <Card.Body className='text-start'>
                                <Card.Title>1.What is the purpose of react router?</Card.Title>
                                <Card.Text>
                                    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='mb-3'>
                            <Card.Body className='text-start'>
                                <Card.Title>2.How does context API work?</Card.Title>
                                <Card.Text>
                                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='mb-3'>
                            <Card.Body className='text-start'>
                                <Card.Title>3.About useRef hook.</Card.Title>
                                <Card.Text>
                                    The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.

                                    <p className='py-3'>
                                        <strong>A.How does useRef works in React?<br></br></strong>
                                        useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
                                    </p>
                                    <p className='py-3'>
                                        <strong>B.What can we do with useRef?<br></br></strong>
                                        The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Blogs;