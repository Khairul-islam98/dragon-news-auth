import React from 'react';
import Marquee from "react-fast-marquee";
import NewsCard from './NewsCard';

const BreakingNews = ({ newsData }) => {
    const { details } = newsData
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