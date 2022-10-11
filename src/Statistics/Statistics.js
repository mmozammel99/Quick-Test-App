import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Charts from '../Components/Charts/Charts';

const Statistics = () => {
    const itm = useLoaderData()
    const item = itm.data
    //    const name= item.map(it => it.name)
    //    const total= item.map(it => it.total)
    //    console.log(it);
    return (
        <div>

            <Charts item={item}>
            </Charts>


        </div>
    );
};

export default Statistics;