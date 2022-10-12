import React from 'react';
import './Banner.css';
import Button from 'react-bootstrap/Button';

const Banner = () => {
    return (
        <div className='banner mt-2'>
            <div className="banner_content_container">
                <div className="d-flex justify-content-center align-items-center h-100 flex-column">
                    <div className='w-75'>
                        <h1>
                            Welcome to the site of Quick Quiz
                        </h1>
                        <p className='py-5 fs-6'>To sharpen your brain, you can join our quick quiz Examination. We provide the most important questions for each and every topic. That must help you for your future events of exams.</p>
                        <Button variant="outline-info" size="lg">Join Our Exams</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;