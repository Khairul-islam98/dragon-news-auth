import React from 'react';
import Header from '../share/Header/Header';
import Navbar from '../share/Navbar/Navbar';
import LeftsideNav from '../share/LeftsideNav/LeftsideNav';
import RightsideNav from '../share/RightsideNav/RightsideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const Home = () => {
    const newsData = useLoaderData()
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
                    {
                        newsData.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
                    }
                </div>
                <div>
                    <RightsideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;