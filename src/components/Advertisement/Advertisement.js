import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Advertisement.css';


const Advertisement = () => {
    return (
        <div className='mt-5'>
            <Container>
                <div className='add_container d-flex justify-content-around align-items-end'>
                    <div className='add_pic'>
                        <img className='w-100' src="./images/add.png" alt="" />
                    </div>
                    <div className='add_description text-start mt-5'>
                        <h3 className='pb-2'>
                            <span className='text-warning'>Why Choose Us</span> <br></br>For your learning platform?<br></br>
                        </h3>
                        <p className='fs-5 pb-5'>
                            We provide the best e-learning platform service that can help you your learning way to be so easier. We have the most skillful teachers who will help you as if your learning is easier by presenting every topic easier.
                        </p>
                        <Button variant='info text-white'>More About Us<FontAwesomeIcon className='ms-2' icon={faArrowRightLong}></FontAwesomeIcon></Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Advertisement;