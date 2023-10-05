import React from 'react';
import Marquee from "react-fast-marquee";
import NewsCard from './NewsCard';
import { useLoaderData } from 'react-router-dom';

const BreakingNews = () => {
    const newsData = useLoaderData()
    return (
        <div className='flex'>
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={120}>
                {
                    newsData.map(news => <p>{news.title}</p>)
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;