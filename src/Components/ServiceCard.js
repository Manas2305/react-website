import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "./Images/webdevelopment.jpg";

const ServiceCard = (props) => {
    return (
        <div>
            <div className="card" >
            <img src={props.imgsrc} className="card-img-top" alt="Card Image" width="50px" height="220px" />
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.para}</p>
                <NavLink to="/" className="btn btn-primary">{props.btnname}</NavLink>
            </div>
            </div>
        </div>
    );
};

export default ServiceCard;