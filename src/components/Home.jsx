import React from 'react';
import { Ad } from '../components/Ads/Ad';
import { Latestcollection } from '../components/collections/Latestcollection';
import { Bestseller } from '../components/collections/Bestseller';
import { Video } from '../components/collections/Video';
import { Reviwes } from '../components/collections/Reviwes';
import { Link } from 'react-router-dom';
import { Condition } from '../components/policy/condtion';

export const Home = () => {
    return (
        <>
            <Link to="/Home" style={{ textDecoration: 'none' }}>  </Link> {/* Remove underline effect */}
                <Ad />
                <Latestcollection />
                <Bestseller />
                <Video />
                <Reviwes />
                <Condition/>
            
        </>
    );
}

export default Home;
