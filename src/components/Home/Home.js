import React from 'react';
import Advertisement from '../Advertisement/Advertisement';
import Banner from '../Banner/Banner';
import Teachers from '../Teachers/Teachers';
import Topics from '../Topics/Topics';


const Home = () => {
    return (
        <div className='mt-5 pt-2'>
            <Banner></Banner>
            <Advertisement></Advertisement>
            <Topics></Topics>
            <Teachers></Teachers>
        </div>
    );
};

export default Home;