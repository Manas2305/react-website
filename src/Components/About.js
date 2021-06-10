import React from 'react';
import {NavLink} from "react-router-dom";
import CommonPage from './CommonPage';
import about from "./Images/about.jpg";

const About = () => {
    return (
        <div>
            <CommonPage 
            name="Make your own webite with"
            imgsrc={about}
            visit="/contact"
            btname="Contact Now"
            />
        </div>
    );
};

export default About;