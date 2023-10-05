import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import qzone1 from '../../../assets/1.png';
import qzone2 from '../../../assets/2.png';
import qzone3 from '../../../assets/3.png';

const LeftsideNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='space-y-6'>
            <div>
                <h2 className="text-2xl">All Categories</h2>
                {
                    categories.map((category, idx) => <NavLink key={idx} to={`/category/${category.id}`} className='block ml-10 text-xl py-2 text-gray-400 font-semibold'>{category.name}</NavLink>)
                }
            </div>
            <div className='p-4 space-y-3 mb-6'>
                <div className=''>
                    <img src={qzone1} alt="" />
                    <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                </div>
                <div>
                    <img src={qzone2} alt="" />
                    <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                </div>
                <div>
                    <img src={qzone3} alt="" />
                    <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                </div>
            </div>
        </div>
    );
};

export default LeftsideNav;