import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    console.log(data.data);
    return (
        <div className='mt-5'>
            <Container>
                <h2 className='text-start py-5 text-info'>| Total Quiz Statistics</h2>
                <ResponsiveContainer width="95%" height={400}>
                    <LineChart className='text-danger' width={600} height={400} data={data.data}>
                        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>

            </Container>

        </div>
    );
};

export default Statistics;