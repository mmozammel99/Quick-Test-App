import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Statistics = () => {
    const itm = useLoaderData()
    const item = itm.data;
    return (
        <div className='mt-5 pt-5 d-flex justify-content-center '>
            <LineChart width={600} height={300} data={item} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="total" stroke="#198754" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Statistics;