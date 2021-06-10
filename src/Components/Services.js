import React from 'react';
import ServiceCard from './ServiceCard';
import web from "./Images/webdevelopment.jpg";
import android from "./Images/android.png";
import digital from "./Images/digitalMarketing.png";
import mobile from "./Images/mobile.png";
import software from "./Images/software.png";
import website from "./Images/website.jpg";

const Services = () => {
    return (
        <>
            <div>
                <h1 className="text-center m-3 text-danger">Our Services</h1>
            </div>
            <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4 mb-5">
                        <div className="col-md-4 col-10 mx-auto d-flex align-items-center flex-row ">
                            <ServiceCard 
                                imgsrc={web}
                                title="Web Development"
                                para="Now You can able to learn the Web Development easily."
                                btnname="Purchase Now"
                            />
                        </div>
                        <div className="col-md-4 col-10 mx-auto d-flex align-items-center flex-row ">
                            <ServiceCard 
                                imgsrc={android}
                                title="Andriod"
                                para="Now You can able to learn the Andriod Development easily."
                                btnname="Purchase Now"
                            />
                        </div>
                        <div className="col-md-4 col-10 mx-auto d-flex align-items-center flex-row ">
                            <ServiceCard 
                                imgsrc={digital}
                                title="Digital Marketing"
                                para="Now You can able to learn the Digital Marketing easily."
                                btnname="Purchase Now"
                            />
                        </div>
                        <div className="col-md-4 col-10 mx-auto d-flex align-items-center flex-row ">
                            <ServiceCard 
                                imgsrc={software}
                                title="Software Development"
                                para="Now You can able to learn the Software Development easily."
                                btnname="Purchase Now"
                            />
                        </div>
                        <div className="col-md-4 col-10 mx-auto d-flex align-items-center flex-row ">
                            <ServiceCard 
                                imgsrc={mobile}
                                title="Mobile App"
                                para="Now You can able to learn the Mobile App Development easily."
                                btnname="Purchase Now"
                            />
                        </div>
                        <div className="col-md-4 col-10 mx-auto d-flex align-items-center flex-row ">
                            <ServiceCard 
                                imgsrc={website}
                                title="Website Design"
                                para="Now You can able to learn the Website Design easily."
                                btnname="Purchase Now"
                            />
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </>
    );
};

export default Services;