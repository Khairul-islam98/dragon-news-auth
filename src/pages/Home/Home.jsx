import React from 'react';
import Header from '../share/Header/Header';
import Navbar from '../share/Navbar/Navbar';
import LeftsideNav from '../share/LeftsideNav/LeftsideNav';
import RightsideNav from '../share/RightsideNav/RightsideNav';
import BreakingNews from './BreakingNews';

const Home = () => {
    return (
        <div>
            <Header />
            <BreakingNews />
            <Navbar />
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div>
                    <LeftsideNav />
                </div>
                <div className='md:col-span-2'>
                    <h2 className="text-4xl">News coming soon...</h2>
                </div>
                <div>
                    <RightsideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;