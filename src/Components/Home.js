import React from 'react';
import { NavLink } from 'react-router-dom';
import CommonPage from './CommonPage';
import coding from "./Images/coding.png";

const Home = () => {
    return (
        <>
           <CommonPage 
           name="Grow your business with"
           imgsrc={coding}
           visit="/services"
           btname="Get Started"
            />
        </>
    );
};

export default Home;