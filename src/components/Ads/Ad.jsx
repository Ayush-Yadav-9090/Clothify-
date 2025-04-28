
import { Banner1 } from './Banner1';
import { Banner2 } from './Banner2';
import{Banner3}from './Banner3'
import React, { useEffect, useState } from 'react';

export const Ad = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const ad = [<Banner1 key="banner1" />, <Banner2 key="banner2" />,<Banner3 key="banner3" />];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((oldIndex) => (oldIndex + 1) % ad.length);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [ad.length]);

    return (
        <div>
            {ad[currentIndex]}

            
            {/* https://67fb676a3fceea9db18561e9--clothifyecommerce.netlify.app */}
            {/* npm run build */}

        </div>
    );
};
