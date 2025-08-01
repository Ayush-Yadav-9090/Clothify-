import React from 'react';
import { Ad } from '../Ads/Ad';
import { Latestcollection } from '../collections/Latestcollection';
import { Bestseller } from '../collections/Bestseller';
import { Video } from '../collections/Video';
import { Reviwes } from '../Collections/Reviews';
import { Link } from 'react-router-dom';
import { Condition } from '../../Components/Policy/TermsAndCondtion';


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
