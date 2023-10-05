import React from 'react';
import Header from '../share/Header/Header';
import RightsideNav from '../share/RightsideNav/RightsideNav';
import Navbar from '../share/Navbar/Navbar';
import { useParams } from 'react-router-dom';

const News = () => {
    const{id} = useParams()
    return (
        <div>
            <Header />
            <Navbar />
            <div className='grid md:grid-cols-4'>
                <div className='col-span-3'>
                    <h2 className="text-5xl">Dragon News</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightsideNav />
                </div>
            </div>
        </div>
    );
};

export default News;