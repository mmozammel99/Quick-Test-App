import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Charts = ({item}) => {
    // const {name, total} = it
   
    // console.log(name);
    return (
        <div className='mt-5 pt-5 d-flex justify-content-center '>
            <LineChart width={600} height={300} data={item} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Charts;
