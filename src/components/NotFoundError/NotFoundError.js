import React from 'react';

const NotFoundError = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className='pt-5 mt-5 shadow-lg w-75 pb-5'>
                <h1 className='text-info'>Oops!</h1>
                <p>Sorry, we couldn't find any route!</p>
                <h4 className='text-danger'>Not Found</h4>
            </div>
        </div>
    );
};

export default NotFoundError;