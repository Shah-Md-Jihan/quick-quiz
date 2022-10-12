import React from 'react';
import Banner from '../Banner/Banner';
import Topics from '../Topics/Topics';


const Home = () => {
    return (
        <div className='mt-5 pt-2'>
            <Banner></Banner>
            <Topics></Topics>
        </div>
    );
};

export default Home;