import React from 'react';
import Banner from '../Banner/Banner';
import Teachers from '../Teachers/Teachers';
import Topics from '../Topics/Topics';


const Home = () => {
    return (
        <div className='mt-5 pt-2'>
            <Banner></Banner>
            <Topics></Topics>
            <Teachers></Teachers>
        </div>
    );
};

export default Home;