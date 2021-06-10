import React from 'react';
import {NavLink} from "react-router-dom";


const CommonPage = (props) => {
    return (
        <>
            <div className="d-flex align-items-center">
                <div className="container-fluid ">
                        <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row text-center mx-auto mt-5">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h2>{props.name} <strong className="bname">Manas Ranjan</strong></h2>
                                    <p className="my-3">
                                        We create the awesome website for the client.
                                    </p>
                                    <div className="m-3">
                                        <NavLink to={props.visit} className="btn_get_started">{props.btname}</NavLink>
                                    </div>
                                </div>
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                                    <img src={props.imgsrc} className="header_img animated" alt="image" width="300rem" height="300rem" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
           </div>
        </>
    );
};

export default CommonPage;